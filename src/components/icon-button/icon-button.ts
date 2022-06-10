import { LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, literal } from 'lit/static-html.js';
import '../../components/icon/icon';
import { emit } from '../../internal/event';
import styles from './icon-button.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @dependency l-icon
 *
 * @event le-blur - Emitted when the icon button loses focus.
 * @event le-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('l-icon-button')
export default class LynkIconButton extends LitElement {
  static styles = styles;

  @state() private hasFocus = false;

  @query('.l-icon-button') button: HTMLButtonElement | HTMLLinkElement;

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
    this.l-button.click();
  }

  /** Sets focus on the icon button. */
  focus(options?: FocusOptions) {
    this.l-button.focus(options);
  }

  /** Removes focus from the icon button. */
  blur() {
    this.l-button.blur();
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'le-blur');
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'le-focus');
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          'l-icon-button': true,
          'l-icon-button--disabled': !isLink && this.disabled,
          'l-icon-button--focused': this.hasFocus
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
        <l-icon
          class="l-icon-button__icon"
          name=${ifDefined(this.name)}
          library=${ifDefined(this.library)}
          src=${ifDefined(this.src)}
          aria-hidden="true"
        ></l-icon>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-icon-button': LynkIconButton;
  }
}
