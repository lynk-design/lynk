import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { watch } from '../../internal/watch';
import styles from './radio.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The radio's label.
 *
 * @event lynk-blur - Emitted when the control loses focus.
 * @event lynk-change - Emitted when the control's checked state changes.
 * @event lynk-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart control - The radio control.
 * @csspart checked-icon - The container the wraps the checked icon.
 * @csspart label - The radio label.
 */
@customElement('lynk-radio')
export default class LynkRadio extends LitElement {
  static styles = styles;

  @query('.lynk-radio__input') input: HTMLInputElement;

  protected readonly formSubmitController = new FormSubmitController(this, {
    value: (control: HTMLInputElement) => (control.checked ? control.value || 'on' : undefined)
  });

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
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'lynk-blur');
  }

  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'lynk-focus');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');

    if (this.hasUpdated) {
      emit(this, 'lynk-change');
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

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          'lynk-radio': true,
          'lynk-radio--checked': this.checked,
          'lynk-radio--disabled': this.disabled,
          'lynk-radio--focused': this.hasFocus
        })}
      >
        <input
          class="lynk-radio__input"
          type="radio"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part="control" class="lynk-radio__control">
          <span part="checked-icon" class="lynk-radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>
        </span>

        <span part="label" class="lynk-radio__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-radio': LynkRadio;
  }
}
