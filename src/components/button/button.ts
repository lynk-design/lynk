import '../icon/icon';
import '../spinner/spinner';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { FormSubmitController } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import styles from './button.styles';
import type { CSSResultGroup } from 'lit';
import type { LynkFormControl } from '../../internal/lynk-element';

/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://lynk.design/components/button
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 * @dependency lynk-spinner
 *
 * @event on:blur - Emitted when the button loses focus.
 * @event on:click - Emitted when the button is clicked.
 * @event on:focus - Emitted when the button gains focus.
 *
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart prefix - The prefix slot's container.
 * @csspart label - The button's label.
 * @csspart suffix - The suffix slot's container.
 * @csspart caret - The button's caret.
 */
@customElement('lynk-button')
export default class LynkButton extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formSubmitController = new FormSubmitController(this, {
    form: input => {
      // Buttons support a form attribute that points to an arbitrary form, so if this attribute it set we need to query
      // the form from the same root using its id
      if (input.hasAttribute('form')) {
        const doc = input.getRootNode() as Document | ShadowRoot;
        const formId = input.getAttribute('form')!;
        return doc.getElementById(formId) as HTMLFormElement;
      }

      // Fall back to the closest containing form
      return input.closest('form');
    }
  });
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');
  private readonly localize = new LocalizeController(this);

  @query('.lynk-button') button: HTMLButtonElement | HTMLLinkElement;

  @state() private hasFocus = false;
  @state() invalid = false;
  @property() title = ''; // make reactive to pass through

  /** The button's color. */
  @property({ reflect: true }) color: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' =
    'default';

  /** The button's size. */
  @property({ reflect: true }) size: 'tiny' | 'small' | 'medium' | 'large' = 'medium';

  /** Display the button component as a block instead of inline-block. */
  @property({ type: Boolean, reflect: true }) block = false;

  /** Draws the button with a caret for use with dropdowns, popovers, etc. */
  @property({ type: Boolean, reflect: true }) caret = false;

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the button in a thinking state. */
  @property({ type: Boolean, reflect: true }) thinking = false;

  /** Draws an outlined button. */
  @property({ type: Boolean, reflect: true }) outline = false;

  /** Draws an button without borders and background. */
  @property({ type: Boolean, reflect: true }) stealth = false;

  /** Draws a pill-style button with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /**
   * Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the
   * default slot.
   */
  @property({ type: Boolean, reflect: true }) circle = false;

  /**
   * Draws a square icon button. When this attribute is present, the button expects a single `<sl-icon>` in the
   * default slot.
   */
  @property({ type: Boolean, reflect: true }) square = false;

  /**
   * The type of button. When the type is `submit`, the button will submit the surrounding form. Note that the default
   * value is `button` instead of `submit`, which is opposite of how native `<button>` elements behave.
   */
  @property() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
   * This attribute is ignored when `href` is present.
   */
  @property() name = '';

  /**
   * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
   * button is the submitter. This attribute is ignored when `href` is present.
   */
  @property() value = '';

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property() download?: string;

  /**
   * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
   * value of this attribute must be an id of a form in the same document or shadow root as the button.
   */
  @property() form: string;

  /** Used to override the form owner's `action` attribute. */
  @property({ attribute: 'formaction' }) formAction: string;

  /** Used to override the form owner's `enctype` attribute.  */
  @property({ attribute: 'formenctype' })
  formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

  /** Used to override the form owner's `method` attribute.  */
  @property({ attribute: 'formmethod' }) formMethod: 'post' | 'get';

  /** Used to override the form owner's `novalidate` attribute. */
  @property({ attribute: 'formnovalidate', type: Boolean }) formNoValidate: boolean;

  /** Used to override the form owner's `target` attribute. */
  @property({ attribute: 'formtarget' }) formTarget: '_self' | '_blank' | '_parent' | '_top' | string;

  /** Used to override the default event bubbling. */
  @property({ attribute: 'no-bubble', type: Boolean, reflect: true }) noBubble = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleHostClick = this.handleHostClick.bind(this);
    this.addEventListener('click', this.handleHostClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
  }

  firstUpdated() {
    if (this.isButton()) {
      this.invalid = !(this.button as HTMLButtonElement).checkValidity();
    }
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  private handleClick() {
    if (this.type === 'submit') {
      this.formSubmitController.submit(this);
    }

    if (this.type === 'reset') {
      this.formSubmitController.reset(this);
    }

    this.emit('on:click', {
        bubbles: !this.noBubble
    });
  }

  private handleHostClick(event: MouseEvent) {
    // Prevent the native click event and the custom on:click event from being emitted when the button is disabled or loading
    if (this.disabled || this.thinking) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    if (this.noBubble) {
        event.stopPropagation();
    }
  }

  private isButton() {
    return this.href ? false : true;
  }

  private isLink() {
    return this.href ? true : false;
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    if (this.isButton()) {
      this.button.disabled = this.disabled;
      this.invalid = !(this.button as HTMLButtonElement).checkValidity();
    }
  }

  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }

  /** Sets focus on the button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).checkValidity();
    }

    return true;
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).reportValidity();
    }

    return true;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    if (this.isButton()) {
      (this.button as HTMLButtonElement).setCustomValidity(message);
      this.invalid = !(this.button as HTMLButtonElement).checkValidity();
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          'lynk-button': true,
          'lynk-button--default': this.color === 'default',
          'lynk-button--primary': this.color === 'primary',
          'lynk-button--success': this.color === 'success',
          'lynk-button--neutral': this.color === 'neutral',
          'lynk-button--warning': this.color === 'warning',
          'lynk-button--danger': this.color === 'danger',
          'lynk-button--tiny': this.size === 'tiny',
          'lynk-button--small': this.size === 'small',
          'lynk-button--medium': this.size === 'medium',
          'lynk-button--large': this.size === 'large',
          'lynk-button--caret': this.caret,
          'lynk-button--circle': this.circle,
          'lynk-button--square': this.square,
          'lynk-button--disabled': this.disabled,
          'lynk-button--focused': this.hasFocus,
          'lynk-button--thinking': this.thinking,
          'lynk-button--standard': !this.outline && !this.stealth,
          'lynk-button--outline': this.outline,
          'lynk-button--stealth': this.stealth,
          'lynk-button--pill': this.pill,
          'lynk-button--rtl': this.localize.dir() === 'rtl',
          'lynk-button--has-label': this.hasSlotController.test('[default]'),
          'lynk-button--has-prefix': this.hasSlotController.test('prefix'),
          'lynk-button--has-suffix': this.hasSlotController.test('suffix')
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : this.type)}
        title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
      <slot name="prefix" part="prefix" class="lynk-button__prefix"></slot>
      <slot part="label" class="lynk-button__label"></slot>
      <slot name="suffix" part="suffix" class="lynk-button__suffix"></slot>
      ${
        this.caret ? html` <lynk-icon part="caret" class="lynk-button__caret" library="system" name="caret"></lynk-icon> ` : ''
      }
        ${this.thinking ? html`<lynk-spinner></lynk-spinner>` : ''}
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-button': LynkButton;
  }
}
