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
 * @dependency lynk-icon
 *
 * @slot - The checkbox's label.
 *
 * @event on:blur - Emitted when the control loses focus.
 * @event on:change - Emitted when the control's checked state changes.
 * @event on:focus - Emitted when the control gains focus.
 * @event on:input - Emitted when the checkbox receives input.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an `<lynk-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, an `<lynk-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
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

  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  @property() value: string;

  /** The checkbox's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Draws the checkbox in an indeterminate state. Usually applies to a checkbox that represents "select all" or "select none" when the items to which it applies are a mix of selected and unselected. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
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

  /** Checks for validity but does not show a validation message. Returns true when valid and false when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }


  /** Checks for validity and shows a validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear the custom validation message, call this method with an empty string.
   */
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

  handleInput() {
    this.emit('on:input');
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
          'lynk-checkbox--indeterminate': this.indeterminate,
          'lynk-checkbox--small': this.size === 'small',
          'lynk-checkbox--medium': this.size === 'medium',
          'lynk-checkbox--large': this.size === 'large'
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
          @input=${this.handleInput}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="lynk-checkbox__control">
        ${this.checked
          ? html`
              <lynk-icon part="checked-icon" class="lynk-checkbox__checked-icon" library="system" name="check"></lynk-icon>
            `
          : ''}
        ${!this.checked && this.indeterminate
          ? html`
              <lynk-icon
                part="indeterminate-icon"
                class="lynk-checkbox__indeterminate-icon"
                library="system"
                name="indeterminate"
              ></lynk-icon>
            `
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
