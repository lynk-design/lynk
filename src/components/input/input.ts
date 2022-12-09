import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { defaultValue } from '../../internal/default-value';
import { FormSubmitController } from '../../internal/form';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import '../../components/icon/icon';
import '../../components/stack/stack';
import '../../components/tooltip/tooltip';
import styles from './input.styles';
import type { LynkFormControl } from '../../internal/lynk-element';
import type { CSSResultGroup } from 'lit';

// It's currently impossible to hide Firefox's built-in clear icon when using <input type="date|time">, so we need this
// check to apply a clip-path to hide it. I know, I know...user agent sniffing is nasty but, if it fails, we only see a
// redundant clear icon so nothing important is breaking. The benefits outweigh the costs for this one. See the
// discussion at: https://github.com/shoelace-style/shoelace/pull/794
//
// Also note that we do the Chromium check first to prevent Chrome from logging a console notice as described here:
// https://github.com/shoelace-style/shoelace/issues/855
//
const isChromium = navigator.userAgentData?.brands.some(b => b.brand.includes('Chromium'));
const isFirefox = isChromium ? false : navigator.userAgent.includes('Firefox');
/**
 * @summary Inputs collect data from the user.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-icon
 * @dependency lynk-tooltip
 *
 * @slot action - append a custom button to the input.
 * @slot label - The input's label. Alternatively, you can use the label prop.
 * @slot prefix - Used to prepend an icon or similar element to the input.
 * @slot suffix - Used to append an icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Help text that describes how to use the input. Alternatively, you can use the help-text prop.
 * @slot help-tip - Help tooltip next to the label that can be used in place of help-text to give additional information about how to use the input. Alternatively, you can use the help-tip prop.
 *
 * @event on:change - Emitted when an alteration to the control's value is committed by the user.
 * @event on:clear - Emitted when the clear button is activated.
 * @event on:input - Emitted when the control receives input and its value changes.
 * @event on:focus - Emitted when the control gains focus.
 * @event on:blur - Emitted when the control loses focus.
 * @event on:enter - Emitted when the return key is pressed while the input has focus.
 *
 * @csspart form-control - The form control that wraps the label, input, and help-text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's internal wrapper.
 * @csspart input - The input control.
 * @csspart prefix - The input prefix container.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart suffix - The input suffix container.
 */
@customElement('lynk-input')
export default class LynkInput extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  @query('.lynk-input__control') input: HTMLInputElement;

  private readonly formSubmitController = new FormSubmitController(this);
  private readonly hasSlotController = new HasSlotController(this, 'action', 'help-text', 'help-tip', 'label');
  private readonly localize = new LocalizeController(this);

  @state() private hasFocus = false;
  @state() invalid = false;
  @property() title = ''; // make reactive to pass through

  /** The input's type. */
  @property({ reflect: true }) type:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url' = 'text';

  /** The input's feedback status using manual validation. Alternatively, you can use the invalid attribute */
  @property({ reflect: true }) state: 'error' | 'warning' | 'success';

  /** The input's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The input's name attribute. */
  @property() name = '';

  /** The input's value attribute. */
  @property() value = '';

  /** Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
  @defaultValue() defaultValue = '';

  /** Draws a filled input. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a pill-style input with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The input's label. Alternatively, you can use the label slot. */
  @property() label = '';

  /** The help text below the input. Alternatively, you can use the help-text slot. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The help tooltip appended to the label. Alternatively, you can use the help-tip slot. */
  @property({ attribute: 'help-tip' }) helpTip = '';

  /** Adds a clear button when the input is populated. */
  @property({ type: Boolean }) clearable = false;

  /** Adds a password toggle button to password inputs. */
  @property({ attribute: 'toggle-password', type: Boolean }) togglePassword = false;

  /** Determines whether or not the password is currently visible. Only applies to password inputs. */
  @property({ attribute: 'password-visible', type: Boolean }) passwordVisible = false;

  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  @property({ attribute: 'no-spin-buttons', type: Boolean }) noSpinButtons = false;

  /** The input's placeholder text. */
  @property() placeholder = '';

  /** Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the input readonly. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Replaces the input with a plain text string. */
  @property({ type: Boolean, reflect: true }) restricted = false;

  /** The minimum length of input that will be considered valid. */
  @property({ type: Number }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @property({ type: Number }) maxlength: number;

  /** The input's minimum value. */
  @property() min: number;

  /** The input's maximum value. */
  @property() max: number;

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value.
   */
  @property() step: number | 'any';

  /** A pattern to validate input against. */
  @property() pattern: string;

  /** Makes the input a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The input's autocapitalize attribute. */
  @property() autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  /** Use the browsers built constraint validation API in tandem with `required`, `pattern`, `minlength` and `maxlength` values */
  @property({ type: Boolean, reflect: true }) autovalidate = false;

  /** The input's autocorrect attribute. */
  @property() autocorrect: string;

  /** The input's autocomplete attribute. */
  @property() autocomplete: string;

  /** The input's autofocus attribute. */
  @property({ type: Boolean }) autofocus: boolean;

  /**
   * The input's enterkeyhint attribute. This can be used to customize the label or icon of the Enter key on virtual
   * keyboards.
   */
  @property() enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /** Enables spell checking on the input. */
  @property({ type: Boolean }) spellcheck: boolean;

  /** The input's inputmode attribute. */
  @property() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Gets or sets the current value as a `Date` object. Only valid when `type` is `date`. */
  get valueAsDate() {
    return this.input?.valueAsDate ?? null;
  }

  set valueAsDate(newValue: Date | null) {
    // We use an in-memory input instead of the one in the template because the property can be set before render
    const input = document.createElement('input');
    input.type = 'date';
    input.valueAsDate = newValue;
    this.value = input.value;
  }

  /** Gets or sets the current value as a number. */
  get valueAsNumber() {
    return this.input?.valueAsNumber ?? parseFloat(this.value);
  }

  set valueAsNumber(newValue: number) {
    // We use an in-memory input instead of the one in the template because the property can be set before render
    const input = document.createElement('input');
    input.type = 'number';
    input.valueAsNumber = newValue;
    this.value = input.value;
  }

  firstUpdated() {
    if (this.autovalidate) {
      this.invalid = !this.input.checkValidity();
    }
  }

  /** Sets focus on the input. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }

  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }

  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Replaces a range of text with a new string. */
  setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve'
  ) {
    this.input.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.emit('on:input');
      this.emit('on:change');
    }
  }

  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ('showPicker' in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }

  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.emit('on:input');
      this.emit('on:change');
    }
  }

  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.emit('on:input');
      this.emit('on:change');
    }
  }

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.autovalidate ? this.input.reportValidity() : false;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  handleChange() {
    this.value = this.input.value;
    this.emit('on:change');
  }

  handleClearClick(event: MouseEvent) {
    this.value = '';
    this.emit('on:clear');
    this.emit('on:input');
    this.emit('on:change');
    this.input.focus();

    event.stopPropagation();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;

    if (this.autovalidate) {
      this.invalid = !this.input.checkValidity();
    }
  }

  @watch('step', { waitUntilFirstUpdate: true })
  handleStepChange() {
    // If step changes, the value may become invalid so we need to recheck after the update. We set the new step
    // imperatively so we don't have to wait for the next render to report the updated validity.
    this.input.step = String(this.step);

    if (this.autovalidate) {
      this.invalid = !this.input.checkValidity();
    }  }

  handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  handleInput() {
    this.value = this.input.value;
    this.emit('on:input');
  }

  handleInvalid() {
    if (this.autovalidate) {
      this.invalid = true;
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    // Pressing enter when focused on an input should submit the form like a native input, but we wait a tick before
    // submitting to allow users to cancel the keydown event if they need to
    if (event.key === 'Enter' && !hasModifier) {
      setTimeout(() => {
        //
        // When using an Input Method Editor (IME), pressing enter will cause the form to submit unexpectedly. One way
        // to check for this is to look at event.isComposing, which will be true when the IME is open.
        //
        // See https://github.com/shoelace-style/shoelace/pull/988
        //
        if (!event.defaultPrevented && !event.isComposing) {
          this.formSubmitController.submit();
          this.emit('on:enter');
        }
      });
    }
  }

  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    this.input.value = this.value; // force a sync update
    if (this.autovalidate) {
      this.invalid = !this.input.checkValidity();
    }
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpTipSlot = this.hasSlotController.test('help-tip');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasHelpTip = this.helpTip ? true : !!hasHelpTipSlot;
    const hasClearIcon =
      this.clearable && !this.disabled && !this.readonly && (typeof this.value === 'number' || this.value.length > 0);

    return html`
      <div
        part="form-control"
        class=${classMap({
          'lynk-form-control': true,
          'lynk-form-control--small': this.size === 'small',
          'lynk-form-control--medium': this.size === 'medium',
          'lynk-form-control--large': this.size === 'large',
          'lynk-form-control--has-label': hasLabel,
          'lynk-form-control--has-help-text': hasHelpText,
          'lynk-form-control--has-error': this.state === 'error',
          'lynk-form-control--has-warning': this.state === 'warning',
          'lynk-form-control--has-success': this.state === 'success'
        })}
      >
        <label
          part="form-control-label"
          class=${classMap({
            'lynk-form-control__label': true,
            'lynk-form-control--focused': this.hasFocus,
          })}
          for="input"
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot name="label">${this.label}</slot>

          ${this.required
            ? html`
                <lynk-tooltip content="Required" hoist>
                  <lynk-icon style="font-size: 9px;" name="asterisk" library="system"></lynk-icon>
                </lynk-tooltip>
              `
            : ''}

          ${hasHelpTip
            ? html`
                <lynk-tooltip hoist>
                  <div slot="content">
                    <slot name="help-tip">${this.helpTip}</slot>
                  </div>
                  <lynk-icon style="font-size: 11px;" name="question-fill" library="system"></lynk-icon>
                </lynk-tooltip>
              `
            : ''}

        </label>

        <lynk-stack
          part="form-control-input"
          class="lynk-form-control-input"
          horizontal
          gap="var(--lynk-spacing-2x-small)"
        >
          <div
            part="base"
            class=${classMap({
              'lynk-input': true,

              // Sizes
              'lynk-input--small': this.size === 'small',
              'lynk-input--medium': this.size === 'medium',
              'lynk-input--large': this.size === 'large',

              // States
              'lynk-input--pill': this.pill,
              'lynk-input--standard': !this.filled,
              'lynk-input--filled': this.filled,
              'lynk-input--disabled': this.disabled,
              'lynk-input--restricted': this.restricted,
              'lynk-input--focused': this.hasFocus,
              'lynk-input--empty': !this.value,
              'lynk-input--invalid': this.invalid,
              'lynk-input--has-error': this.state === 'error',
              'lynk-input--has-warning': this.state === 'warning',
              'lynk-input--has-success': this.state === 'success',
              'lynk-input--no-spin-buttons': this.noSpinButtons,
              'lynk-input--is-firefox': isFirefox
            })}
          >
            <slot name="prefix" part="prefix" class="lynk-input__prefix"></slot>

            ${this.restricted
              ? html`
                <div
                  part="input"
                  aria-describedby="help-text"
                  class="lynk-input__control lynk-input__control--restricted"
                >
                  ${this.value || 'None'}
                </div>
              `
              : html`
                <input
                  part="input"
                  id="input"
                  class="lynk-input__control"
                  type=${this.type === 'password' && this.passwordVisible ? 'text' : this.type}
                  title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
                  name=${ifDefined(this.name)}
                  ?disabled=${this.disabled}
                  ?readonly=${this.readonly}
                  ?required=${this.required}
                  placeholder=${ifDefined(this.placeholder)}
                  minlength=${ifDefined(this.minlength)}
                  maxlength=${ifDefined(this.maxlength)}
                  min=${ifDefined(this.min)}
                  max=${ifDefined(this.max)}
                  step=${ifDefined(this.step as number)}
                  .value=${live(this.value)}
                  autocapitalize=${ifDefined(this.type === 'password' ? 'off' : this.autocapitalize)}
                  autocomplete=${ifDefined(this.type === 'password' ? 'off' : this.autocomplete)}
                  autocorrect=${ifDefined(this.type === 'password' ? 'off' : this.autocorrect)}
                  ?autofocus=${this.autofocus}
                  spellcheck=${ifDefined(this.spellcheck)}
                  pattern=${ifDefined(this.pattern)}
                  enterkeyhint=${ifDefined(this.enterkeyhint)}
                  inputmode=${ifDefined(this.inputmode)}
                  aria-describedby="help-text"
                  aria-invalid=${this.invalid ? 'true' : 'false'}
                  @change=${this.handleChange}
                  @input=${this.handleInput}
                  @invalid=${this.handleInvalid}
                  @keydown=${this.handleKeyDown}
                  @focus=${this.handleFocus}
                  @blur=${this.handleBlur}
                />
            `}

            ${hasClearIcon
              ? html`
                  <button
                    part="clear-button"
                    class="lynk-input__clear"
                    type="button"
                    aria-label=${this.localize.term('clearEntry')}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <lynk-icon name="x-circle-fill" library="system"></lynk-icon>
                    </slot>
                  </button>
                `
              : ''}
            ${this.togglePassword && !this.disabled
              ? html`
                  <button
                    part="password-toggle-button"
                    class="lynk-input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? 'hidePassword' : 'showPassword')}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible
                      ? html`
                          <slot name="show-password-icon">
                            <lynk-icon name="eye-slash" library="system"></lynk-icon>
                          </slot>
                        `
                      : html`
                          <slot name="hide-password-icon">
                            <lynk-icon name="eye" library="system"></lynk-icon>
                          </slot>
                        `}
                  </button>
                `
              : ''}

            <slot name="suffix" part="suffix" class="lynk-input__suffix"></slot>
          </div>
          <slot name="action"></slot>
        </lynk-stack>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="lynk-form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          ${this.helpText}
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-input': LynkInput;
  }
}
