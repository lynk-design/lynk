import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, literal } from 'lit/static-html.js';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import '../icon/icon';
import styles from './icon-button.styles';
import type { CSSResultGroup } from 'lit';


/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 *
 * @event on:blur - Emitted when the icon button loses focus.
 * @event on:click - Emitted when the button is clicked.
 * @event on:focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('lynk-icon-button')
export default class LynkIconButton extends LynkElement {
  static styles: CSSResultGroup = styles;

  @state() private hasFocus = false;

  @query('.lynk-icon-button') button: HTMLButtonElement | HTMLLinkElement;

  private readonly hasSlotController = new HasSlotController(this, 'prefix', 'suffix');

  /** The button's color. */
  @property({ reflect: true }) color: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'default';

  /** The name of the icon to draw. */
  @property() name?: string;

  /** The name of a registered custom icon library. */
  @property() library?: string;

  /** An external URL of an SVG file. */
  @property() src?: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property() download?: string;

  /**
   * A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should
   * always include a label that describes what the icon button does.
   */
  @property() label = '';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }

  /** Sets focus on the icon button. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }

  handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.emit('on:click');
  }

  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          'lynk-icon-button': true,
          'lynk-icon-button--default': this.color === 'default',
          'lynk-icon-button--primary': this.color === 'primary',
          'lynk-icon-button--success': this.color === 'success',
          'lynk-icon-button--neutral': this.color === 'neutral',
          'lynk-icon-button--warning': this.color === 'warning',
          'lynk-icon-button--danger': this.color === 'danger',
          'lynk-icon-button--disabled': !isLink && this.disabled,
          'lynk-icon-button--focused': this.hasFocus,
          'lynk-icon-button--has-prefix': this.hasSlotController.test('prefix'),
          'lynk-icon-button--has-suffix': this.hasSlotController.test('suffix')
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : 'button')}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label="${this.label}"
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="lynk-icon-button__prefix">
          <slot name="prefix"></slot>
        </span>
        <lynk-icon
          class="lynk-icon-button__icon"
          name=${ifDefined(this.name)}
          library=${ifDefined(this.library)}
          src=${ifDefined(this.src)}
          aria-hidden="true"
        ></lynk-icon>
        <span part="suffix" class="lynk-icon-button__suffix">
          <slot name="suffix"></slot>
        </span>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-icon-button': LynkIconButton;
  }
}
