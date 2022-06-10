import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { watch } from '../../internal/watch';
import styles from './checkbox.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The checkbox's label.
 *
 * @event le-blur - Emitted when the control loses focus.
 * @event le-change - Emitted when the control's checked state changes.
 * @event le-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart control - The checkbox control.
 * @csspart checked-icon - The container the wraps the checked icon.
 * @csspart indeterminate-icon - The container that wraps the indeterminate icon.
 * @csspart label - The checkbox label.
 */
@customElement('l-checkbox')
export default class LynkCheckbox extends LitElement {
  static styles = styles;

  @query('input[type="checkbox"]') input: HTMLInputElement;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this, {
    value: (control: LynkCheckbox) => (control.checked ? control.value || 'on' : undefined)
  });

  @state() private hasFocus = false;

  /** The checkbox's name attribute. */
  @property() name: string;

  /** The checkbox's value attribute. */
  @property() value: string;

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Draws the checkbox in an indeterminate state. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  @property({ type: Boolean, reflect: true }) invalid = false;

  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }

  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }

  /** Sets focus on the checkbox. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
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

  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    emit(this, 'le-change');
  }

  handleBlur() {
    this.hasFocus = false;
    emit(this, 'le-blur');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'le-focus');
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  @watch('indeterminate', { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.invalid = !this.input.checkValidity();
  }

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          'l-checkbox': true,
          'l-checkbox--checked': this.checked,
          'l-checkbox--disabled': this.disabled,
          'l-checkbox--focused': this.hasFocus,
          'l-checkbox--indeterminate': this.indeterminate
        })}
      >
        <input
          class="l-checkbox__input"
          type="checkbox"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          .indeterminate=${live(this.indeterminate)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="l-checkbox__control">
          ${this.checked
            ? html`
                <span part="checked-icon" class="l-checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              `
            : ''}
          ${!this.checked && this.indeterminate
            ? html`
                <span part="indeterminate-icon" class="l-checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              `
            : ''}
        </span>

        <span part="label" class="l-checkbox__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-checkbox': LynkCheckbox;
  }
}
