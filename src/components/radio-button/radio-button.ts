import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './radio-button.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Radios buttons allow the user to select a single option from a group using a button-like control.
 *
 * @since 1.0
 * @status stable
 *
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @event on:blur - Emitted when the button loses focus.
 * @event on:focus - Emitted when the button gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart button - The internal button element.
 * @csspart button--checked - The internal button element if checked
 * @csspart prefix - The prefix slot's container.
 * @csspart label - The button's label.
 * @csspart suffix - The suffix slot's container.
 */
@customElement('lynk-radio-button')
export default class LynkRadioButton extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  @query('.lynk-button') input: HTMLInputElement;
  @query('.hidden-input') hiddenInput: HTMLInputElement;

  @state() protected hasFocus = false;

  /**
   * @internal The radio button's checked state. This is exposed as an "internal" attribute so we can reflect it, making
   * it easier to style in button groups.
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** The radio's value. When selected, the radio group will receive this value. */
  @property() value: string;

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The button's size. */
  @property({ reflect: true }) size: 'tiny' | 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style button with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'presentation');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  private handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.checked = true;
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  /** Sets focus on the radio button. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the button. */
  blur() {
    this.input.blur();
  }

  render() {
    return html`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? ' button--checked' : ''}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${classMap({
            'lynk-button': true,
            'lynk-button--standard': true,
            'lynk-button--default': true,
            'lynk-button--tiny': this.size === 'tiny',
            'lynk-button--small': this.size === 'small',
            'lynk-button--medium': this.size === 'medium',
            'lynk-button--large': this.size === 'large',
            'lynk-button--checked': this.checked,
            'lynk-button--disabled': this.disabled,
            'lynk-button--focused': this.hasFocus,
            'lynk-button--pill': this.pill,
            'lynk-button--has-label': this.hasSlotController.test('[default]'),
            'lynk-button--has-prefix': this.hasSlotController.test('prefix'),
            'lynk-button--has-suffix': this.hasSlotController.test('suffix')
          })}
          aria-disabled=${this.disabled}
          type="button"
          value=${ifDefined(this.value)}
          tabindex="${this.checked ? '0' : '-1'}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="lynk-button__prefix"></slot>
          <slot part="label" class="lynk-button__label"></slot>
          <slot name="suffix" part="suffix" class="lynk-button__suffix"></slot>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-radio-button': LynkRadioButton;
  }
}
