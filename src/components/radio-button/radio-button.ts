import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit/static-html.js';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
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
 * @event on:change - Emitted when the button's checked state changes.
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

  @query('.lynk-button') input: HTMLInputElement;
  @query('.hidden-input') hiddenInput: HTMLInputElement;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  @state() protected hasFocus = false;
  @state() checked = false;

  /** The radio's name attribute. */
  @property() name: string;

  /** The radio's value attribute. */
  @property() value: string;

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The button's size. */
  @property({ reflect: true }) size: 'tiny' | 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style button with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
  }

  /** Sets focus on the button. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the button. */
  blur() {
    this.input.blur();
  }

  handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.checked = true;
  }

  handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.emit('on:change');
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
          name=${ifDefined(this.name)}
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
