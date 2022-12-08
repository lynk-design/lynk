import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { defaultValue } from '../../internal/default-value';
import { FormSubmitController } from '../../internal/form';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import '../icon/icon';
import styles from './checkbox.styles';
import type { LynkFormControl } from '../../internal/lynk-element';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @slot - The checkbox's label.
 *
 * @event on:blur - Emitted when the control loses focus.
 * @event on:change - Emitted when the control's checked state changes.
 * @event on:focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart control - The checkbox control.
 * @csspart checked-icon - The container the wraps the checked icon.
 * @csspart indeterminate-icon - The container that wraps the indeterminate icon.
 * @csspart label - The checkbox label.
 */
@customElement('lynk-checkbox')
export default class LynkCheckbox extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  @query('input[type="checkbox"]') input: HTMLInputElement;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this, {
    value: (control: LynkCheckbox) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: LynkCheckbox) => control.defaultChecked,
    setValue: (control: LynkCheckbox, checked: boolean) => (control.checked = checked)
  });

  @state() private hasFocus = false;
  @state() invalid = false;
  @property() title = ''; // make reactive to pass through

  /** Name of the HTML form control. Submitted with the form as part of a name/value pair. */
  @property() name = '';

  /** Value of the HTML form control. Primarily used to differentiate a list of related checkboxes that have the same name. */
  @property() value: string;

  /** Disables the checkbox (so the user can't check / uncheck it). */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Draws the checkbox in an indeterminate state. Usually applies to a checkbox that represents "select all" or "select none" when the items to which it applies are a mix of selected and unselected. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
  @defaultValue('checked') defaultChecked = false;

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

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.input.checkValidity();
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
    this.emit('on:change');
  }

  handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  @watch('indeterminate', { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.input.indeterminate = this.indeterminate; // force a sync update
    this.invalid = !this.input.checkValidity();
  }

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          'lynk-checkbox': true,
          'lynk-checkbox--checked': this.checked,
          'lynk-checkbox--disabled': this.disabled,
          'lynk-checkbox--focused': this.hasFocus,
          'lynk-checkbox--indeterminate': this.indeterminate
        })}
      >
        <input
          class="lynk-checkbox__input"
          type="checkbox"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
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

        <span part="control" class="lynk-checkbox__control">
          ${this.checked ? html` <lynk-icon part="checked-icon" library="system" name="check"></lynk-icon> ` : ''}
          ${!this.checked && this.indeterminate
            ? html` <lynk-icon part="indeterminate-icon" library="system" name="indeterminate"></lynk-icon> `
            : ''}
        </span>

        <slot part="label" class="lynk-checkbox__label"></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-checkbox': LynkCheckbox;
  }
}
