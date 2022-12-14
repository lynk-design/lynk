import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormSubmitController } from '../../internal/form';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
import '../button-group/button-group';
import styles from './radio-group.styles';
import type { LynkFormControl } from '../../internal/lynk-element';
import type LynkRadioButton from '../radio-button/radio-button';
import type LynkRadio from '../radio/radio';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
 *
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

  protected readonly formSubmitController = new FormSubmitController(this, {
    defaultValue: control => control.defaultValue
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.lynk-radio-group__validation-input') input: HTMLInputElement;

  @state() private hasButtonGroup = false;
  @state() private errorMessage = '';
  @state() private customErrorMessage = '';
  @state() defaultValue = '';
  @state() invalid = false;

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

  /** Ensures a child radio is checked before allowing the containing form to submit. */
  @property({ type: Boolean, reflect: true }) required = false;

  @watch('value')
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }

  firstUpdated() {
    this.invalid = !this.validity.valid;
  }

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.validity.valid;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message = '') {
    this.customErrorMessage = message;
    this.errorMessage = message;

    if (!message) {
      this.invalid = false;
    } else {
      this.invalid = true;
      this.input.setCustomValidity(message);
    }
  }

  get validity(): ValidityState {
    const hasMissingData = !((this.value && this.required) || !this.required);
    const hasCustomError = this.customErrorMessage !== '';

    return {
      badInput: false,
      customError: hasCustomError,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: hasMissingData || hasCustomError ? false : true,
      valueMissing: !hasMissingData
    };
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity(): boolean {
    const validity = this.validity;

    this.errorMessage = this.customErrorMessage || validity.valid ? '' : this.input.validationMessage;
    this.invalid = !validity.valid;

    if (!validity.valid) {
      this.showNativeErrorMessage();
    }

    return !this.invalid;
  }

  getAllRadios() {
    return [...this.querySelectorAll<LynkRadio | LynkRadioButton>('lynk-radio, lynk-radio-button')];
  }

  handleRadioClick(event: MouseEvent) {
    const target = event.target as LynkRadio | LynkRadioButton;
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

  handleKeyDown(event: KeyboardEvent) {
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

  handleLabelClick() {
    const radios = this.getAllRadios();
    const checked = radios.find(radio => radio.checked);
    const radioToFocus = checked || radios[0];

    // Move focus to the checked radio (or the first one if none are checked) when clicking the label
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }

  handleSlotChange() {
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

  showNativeErrorMessage() {
    this.input.hidden = false;
    this.input.reportValidity();
    setTimeout(() => (this.input.hidden = true), 10000);
  }

  updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach(radio => (radio.checked = radio.value === this.value));
    this.invalid = !this.validity.valid;
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
          'lynk-form-control--has-help-text': hasHelpText
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
