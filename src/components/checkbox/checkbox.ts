import '../icon/icon';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../../internal/default-value';
import { FormControlController } from '../../internal/form';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './checkbox.styles';
import type { CSSResultGroup } from 'lit';
import type { LynkFormControl } from '../../internal/lynk-element';

/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://lynk.design/components/checkbox
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
 * @event on:invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
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

  private readonly formControlController = new FormControlController(this, {
    value: (control: LynkCheckbox) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: LynkCheckbox) => control.defaultChecked,
    setValue: (control: LynkCheckbox, checked: boolean) => (control.checked = checked)
  });

  @query('slot') defaultSlot: HTMLSlotElement;
  @query('input[type="checkbox"]') input: HTMLInputElement;

  @state() private hasLabel = false;
  @state() private hasFocus = false;

  @property() title = ''; // make reactive to pass through

  /** Name of the HTML form control. Submitted with the form as part of a name/value pair. */
  @property() name = '';

  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  @property() value: string;

  /** The checkbox's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the checkbox. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue('checked') defaultChecked = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Used to override the default event bubbling. */
  @property({ attribute: 'no-bubble', type: Boolean, reflect: true }) noBubble = false;

  /** The input's validity state when using manual validation or set automatically to `error` or `success` when field uses Contraint Validation */
  @property({ reflect: true }) state: 'error' | 'warning' | 'success' | 'default' = 'default';

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleHostClick = this.handleHostClick.bind(this);
    this.addEventListener('click', this.handleHostClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleHostClick(event: MouseEvent) {
    // Prevent the click event from being emitted when the button is disabled
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    if (this.noBubble) {
      event.stopPropagation();
    }
  }

  private handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit('on:change', { bubbles: !this.noBubble });
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  private handleInput() {
    this.emit('on:input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  private handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedNodes({ flatten: true })] as HTMLElement[];

    if (slottedElements.length) {
      this.hasLabel = true;
    } else {
      this.hasLabel = false;
    }
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch(['checked', 'indeterminate'], { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.input.indeterminate = this.indeterminate; // force a sync update
    this.formControlController.updateValidity();
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

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows a validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
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
          'lynk-checkbox--has-label': this.hasLabel,
          'lynk-checkbox--indeterminate': this.indeterminate,
          'lynk-checkbox--small': this.size === 'small',
          'lynk-checkbox--medium': this.size === 'medium',
          'lynk-checkbox--large': this.size === 'large',
          'lynk-checkbox--has-error': this.state === 'error' || this.hasAttribute('data-user-invalid'),
          'lynk-checkbox--has-warning': this.state === 'warning',
          'lynk-checkbox--has-success': this.state === 'success'
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
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked ? ' control--checked' : ''}${this.indeterminate ? ' control--indeterminate' : ''}"
          class="lynk-checkbox__control"
        >
          ${this.checked
            ? html`
                <lynk-icon
                  part="checked-icon"
                  class="lynk-checkbox__checked-icon"
                  library="system"
                  name="check"
                ></lynk-icon>
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

        <slot part="label" class="lynk-checkbox__label" @slotchange=${this.handleSlotChange}></slot>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-checkbox': LynkCheckbox;
  }
}
