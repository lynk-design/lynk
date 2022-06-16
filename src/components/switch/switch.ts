import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event';
import { FormSubmitController } from '../../internal/form';
import { watch } from '../../internal/watch';
import styles from './switch.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The switch's label.
 *
 * @event lynk-blur - Emitted when the control loses focus.
 * @event lynk-change - Emitted when the control's checked state changes.
 * @event lynk-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart control - The switch control.
 * @csspart thumb - The switch position indicator.
 * @csspart label - The switch label.
 *
 * @cssproperty --width - The width of the switch.
 * @cssproperty --height - The height of the switch.
 * @cssproperty --thumb-size - The size of the thumb.
 */
@customElement('lynk-switch')
export default class LynkSwitch extends LitElement {
  static styles = styles;

  @query('input[type="checkbox"]') input: HTMLInputElement;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this, {
    value: (control: LynkSwitch) => (control.checked ? control.value : undefined)
  });

  @state() private hasFocus = false;

  /** The switch's name attribute. */
  @property() name: string;

  /** The switch's value attribute. */
  @property() value: string;

  /** Disables the switch. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the switch a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the switch in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  @property({ type: Boolean, reflect: true }) invalid = false;

  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }

  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }

  /** Sets focus on the switch. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the switch. */
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

  @watch('checked', { waitUntilFirstUpdate: true })
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.invalid = !this.input.checkValidity();
  }

  handleClick() {
    this.checked = !this.checked;
    emit(this, 'lynk-change');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  handleFocus() {
    this.hasFocus = true;
    emit(this, 'lynk-focus');
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.checked = false;
      emit(this, 'lynk-change');
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.checked = true;
      emit(this, 'lynk-change');
    }
  }

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          'lynk-switch': true,
          'lynk-switch--checked': this.checked,
          'lynk-switch--disabled': this.disabled,
          'lynk-switch--focused': this.hasFocus
        })}
      >
        <input
          class="lynk-switch__input"
          type="checkbox"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="lynk-switch__control">
          <span part="thumb" class="lynk-switch__thumb"></span>
        </span>

        <span part="label" class="lynk-switch__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-switch': LynkSwitch;
  }
}
