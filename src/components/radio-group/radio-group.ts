import '../button-group/button-group';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import {
  customErrorValidityState,
  FormControlController,
  validValidityState,
  valueMissingValidityState
} from '../../internal/form';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './radio-group.styles';
import type { CSSResultGroup } from 'lit';
import type { LynkFormControl } from '../../internal/lynk-element';
import type LynkRadio from '../radio/radio';
import type LynkRadioButton from '../radio-button/radio-button';

/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 * @documentation https://lynk.design/components/radio-group
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-button-group
 *
 * @slot - The default slot where `<lynk-radio>` or `<lynk-radio-button>` elements are placed.
 * @slot label - The radio group label. Required for proper accessibility. Alternatively, you can use the label attribute.
 *
 * @event on:change - Emitted when the radio group's selected value changes.
 * @event on:input - Emitted when the radio group receives user input.
 * @event on:invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help-text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart button-group - The button group that wraps radio buttons.
 * @csspart button-group__base - The button group's `base` part.
 */
@customElement('lynk-radio-group')
export default class LynkRadioGroup extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  protected readonly formControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private customValidityMessage = '';
  private validationTimeout: number;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.lynk-radio-group__validation-input') validationInput: HTMLInputElement;

  @state() private hasButtonGroup = false;
  @state() private errorMessage = '';
  @state() defaultValue = '';

  /**
   * The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
   * instead.
   */
  @property() label = '';

  /** The input's help text. If you need to display HTML, you can use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The name of the radio group, submitted as a name/value pair with form data. */
  @property() name = 'option';

  /** The current value of the radio group, submitted as a name/value pair with form data. */
  @property({ reflect: true }) value = '';

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The input's feedback status using manual validation. Alternatively, you can use the invalid attribute */
  @property({ reflect: true }) state: 'error' | 'warning' | 'success' | 'default' = 'default';

  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }

    return validValidityState;
  }

  /** Gets the validation message */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }

    return '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private getAllRadios() {
    return [...this.querySelectorAll<LynkRadio | LynkRadioButton>('lynk-radio, lynk-radio-button')];
  }

  private handleRadioClick(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest<LynkRadio | LynkRadioButton>('lynk-radio, lynk-radio-button')!;
    const radios = this.getAllRadios();
    const oldValue = this.value;

    if (target.disabled) {
      return;
    }

    this.value = target.value;
    radios.forEach(radio => (radio.checked = radio === target));

    if (this.value !== oldValue) {
      this.emit('on:change');
      this.emit('on:input');
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
      return;
    }

    const radios = this.getAllRadios().filter(radio => !radio.disabled);
    const checkedRadio = radios.find(radio => radio.checked) ?? radios[0];
    const incr = event.key === ' ' ? 0 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;

    if (index < 0) {
      index = radios.length - 1;
    }

    if (index > radios.length - 1) {
      index = 0;
    }

    this.getAllRadios().forEach(radio => {
      radio.checked = false;

      if (!this.hasButtonGroup) {
        radio.tabIndex = -1;
      }
    });

    this.value = radios[index].value;
    radios[index].checked = true;

    if (!this.hasButtonGroup) {
      radios[index].tabIndex = 0;
      radios[index].focus();
    } else {
      radios[index].shadowRoot!.querySelector('button')!.focus();
    }

    if (this.value !== oldValue) {
      this.emit('on:change');
      this.emit('on:input');
    }

    event.preventDefault();
  }

  private handleLabelClick() {
    const radios = this.getAllRadios();
    const checked = radios.find(radio => radio.checked);
    const radioToFocus = checked || radios[0];

    // Move focus to the checked radio (or the first one if none are checked) when clicking the label
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }

  private handleSlotChange() {
    const radios = this.getAllRadios();

    radios.forEach(radio => (radio.checked = radio.value === this.value));

    this.hasButtonGroup = radios.some(radio => radio.tagName.toLowerCase() === 'lynk-radio-button');

    if (!radios.some(radio => radio.checked)) {
      if (this.hasButtonGroup) {
        const buttonRadio = radios[0].shadowRoot!.querySelector('button')!;
        buttonRadio.tabIndex = 0;
      } else {
        radios[0].tabIndex = 0;
      }
    }

    if (this.hasButtonGroup) {
      const buttonGroup = this.shadowRoot?.querySelector('lynk-button-group');

      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach(radio => (radio.checked = radio.value === this.value));
    this.formControlController.setValidity(this.validity.valid);
  }

  @watch('value')
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }

    return true;
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = '') {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity(): boolean {
    const isValid = this.validity.valid;

    this.errorMessage = this.customValidityMessage || isValid ? '' : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);

    if (!isValid) {
      // Show the browser's constraint validation message
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => (this.validationInput.hidden = true), 10000) as unknown as number;
    }

    return isValid;
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    const defaultSlot = html`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;

    return html`
      <fieldset
        part="form-control"
        class=${classMap({
          'lynk-form-control': true,
          'lynk-form-control--medium': true,
          'lynk-form-control--radio-group': true,
          'lynk-form-control--has-label': hasLabel,
          'lynk-form-control--has-help-text': hasHelpText,
          'lynk-form-control--has-error': this.state === 'error' || this.hasAttribute('data-user-invalid'),
          'lynk-form-control--has-warning': this.state === 'warning',
          'lynk-form-control--has-success': this.state === 'success'
        })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="lynk-form-control__label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="lynk-form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="lynk-radio-group__validation">
              <input
                type="text"
                class="lynk-radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup
            ? html`
                <lynk-button-group part="button-group" exportparts="base:button-group__base">
                  ${defaultSlot}
                </lynk-button-group>
              `
            : defaultSlot}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="lynk-form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `;
    /* eslint-enable lit-a11y/click-events-have-key-events */
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-radio-group': LynkRadioGroup;
  }
}
