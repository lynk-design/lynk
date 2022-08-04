import { LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit/static-html.js';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
import styles from './radio-button.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The radio's label.
 *
 * @event on:blur - Emitted when the button loses focus.
 * @event on:change - Emitted when the button's checked state changes.
 * @event on:focus - Emitted when the button gains focus.
 *
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart button - The internal button element.
 * @csspart prefix - The prefix slot's container.
 * @csspart label - The button's label.
 * @csspart suffix - The suffix slot's container.
 */
@customElement('lynk-radio-button')
export default class LynkRadioButton extends LitElement {
  static styles = styles;

  @query('.lynk-button') input: HTMLInputElement;
  @query('.hidden-input') hiddenInput: HTMLInputElement;

  protected readonly formSubmitController = new FormSubmitController(this, {
    value: (control: LynkRadioButton) => (control.checked ? control.value : undefined)
  });
  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  @state() protected hasFocus = false;

  /** The radio's name attribute. */
  @property() name: string;

  /** The radio's value attribute. */
  @property() value: string;

  /** Disables the radio. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the radio in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * This will be true when the control is in an invalid state. Validity in radios is determined by the message provided
   * by the `setCustomValidity` method.
   */
  @property({ type: Boolean, reflect: true }) invalid = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
  }

  /** Simulates a click on the radio. */
  click() {
    this.input.click();
  }

  /** Sets focus on the radio. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the radio. */
  blur() {
    this.input.blur();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.hiddenInput.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.hiddenInput.setCustomValidity(message);
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'on:blur');
  }

  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'on:focus');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');

    if (this.hasUpdated) {
      emit(this, 'on:change');
    }
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');

    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    if (this.hasUpdated) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }

  /** The button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style button with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  render() {
    return html`
      <div part="base">
        <input class="hidden-input" type="radio" aria-hidden="true" tabindex="-1" />
        <button
          part="button"
          class=${classMap({
            'lynk-button': true,
            'lynk-button--standard': true,
            'lynk-button--default': true,
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
          ?disabled=${this.disabled}
          type="button"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <span part="prefix" class="lynk-button__prefix">
            <slot name="prefix"></slot>
          </span>
          <span part="label" class="lynk-button__label">
            <slot></slot>
          </span>
          <span part="suffix" class="lynk-button__suffix">
            <slot name="suffix"></slot>
          </span>
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
