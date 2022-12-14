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
import '../../components/icon/icon';
import '../../components/tooltip/tooltip';
import styles from './textarea.styles';
import type { LynkFormControl } from '../../internal/lynk-element';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Textareas collect data from the user and allow multiple lines of text.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 * @dependency lynk-tooltip
 *
 * @slot label - The textarea's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the input.
 * @slot help-tip - A help tooltip next to the label that can be used in place of help-text to give additional information about how to use the input. Alternatively, you can use the help-tip prop.
 *
 * @event on:change - Emitted when an alteration to the control's value is committed by the user.
 * @event on:input - Emitted when the control receives input and its value changes.
 * @event on:focus - Emitted when the control gains focus.
 * @event on:blur - Emitted when the control loses focus.
 *
 * @csspart form-control - The form control that wraps the label, input, and help-text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's internal wrapper.
 * @csspart textarea - The textarea control.
 */
@customElement('lynk-textarea')
export default class LynkTextarea extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  @query('.lynk-textarea__control') input: HTMLTextAreaElement;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this);
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'help-tip', 'label');
  private resizeObserver: ResizeObserver;

  @state() private hasFocus = false;
  @state() invalid = false;
  @property() title = ''; // make reactive to pass through

  /** The textareas feedback status using manual validation. Alternatively, you can use the invalid attribute */
  @property({ reflect: true }) state: 'error' | 'warning' | 'success';

  /** The textarea's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The textarea's name attribute. */
  @property() name = '';

  /** The textarea's value attribute. */
  @property() value = '';

  /** Draws a filled textarea. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** The textarea's label. Alternatively, you can use the label slot. */
  @property() label = '';

  /** The textarea's help text. Alternatively, you can use the help-text slot. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The help tip accompanying the label. Alternatively, you can use the help-tip slot. */
  @property({ attribute: 'help-tip' }) helpTip = '';

  /** Placeholder text to show as a hint when the input is empty. */
  @property() placeholder = '';

  /** The number of rows to display by default. */
  @property({ type: Number }) rows = 4;

  /** Controls how the textarea can be resized. */
  @property() resize: 'none' | 'vertical' | 'auto' = 'vertical';

  /** Disables the textarea. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the textarea readonly. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Replaces the textarea with a plain text string. */
  @property({ type: Boolean, reflect: true }) restricted = false;

  /** The minimum length of input that will be considered valid. */
  @property({ type: Number }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @property({ type: Number }) maxlength: number;

  /** Makes the textarea a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The textarea's autocapitalize attribute. */
  @property() autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  /** The textarea's autocorrect attribute. */
  @property() autocorrect: string;

  /**
   * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   */
  @property() autocomplete: string;

  /** Indicates that the input should receive focus on page load. */
  @property({ type: Boolean }) autofocus: boolean;

  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  @property() enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /** Enables spell checking on the textarea. */
  @property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: value => (!value || value === 'false' ? false : true),
      toAttribute: value => (value ? 'true' : 'false')
    }
  })
  spellcheck = true;

  /**
   * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
   * keyboard on supportive devices.
   */
  @property() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
  @defaultValue() defaultValue = '';

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());

    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.input);
    });
  }

  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
  }

  /** Sets focus on the textarea. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }

  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }

  /** Gets or sets the textarea's scroll position. */
  scrollPosition(position?: { top?: number; left?: number }): { top: number; left: number } | undefined {
    if (position) {
      if (typeof position.top === 'number') this.input.scrollTop = position.top;
      if (typeof position.left === 'number') this.input.scrollLeft = position.left;
      return undefined;
    }

    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
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
    start?: number,
    end?: number,
    selectMode?: 'select' | 'start' | 'end' | 'preserve'
  ) {
    // @ts-expect-error - start, end, and selectMode are optional
    this.input.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }

    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
    }
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

  handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  handleChange() {
    this.value = this.input.value;
    this.setTextareaHeight();
    this.emit('on:change');
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

  handleInput() {
    this.value = this.input.value;
    this.emit('on:input');
  }

  @watch('rows', { waitUntilFirstUpdate: true })
  handleRowsChange() {
    this.setTextareaHeight();
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    this.input.value = this.value; // force a sync update
    this.invalid = !this.input.checkValidity();
    this.updateComplete.then(() => this.setTextareaHeight());
  }

  setTextareaHeight() {
    if (this.resize === 'auto') {
      this.input.style.height = 'auto';
      this.input.style.height = `${this.input.scrollHeight}px`;
    } else {
      (this.input.style.height as string | undefined) = undefined;
    }
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpTipSlot = this.hasSlotController.test('help-tip');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasHelpTip = this.helpTip ? true : !!hasHelpTipSlot;

    return html`
      <div
        part="form-control"
        class=${classMap({
          'lynk-form-control': true,
          'lynk-form-control--small': this.size === 'small',
          'lynk-form-control--medium': this.size === 'medium',
          'lynk-form-control--large': this.size === 'large',
          'lynk-form-control--has-label': hasLabel,
          'lynk-form-control--has-help-text': hasHelpText
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

        <div part="form-control-input" class="lynk-form-control-input">
          <div
            part="base"
            class=${classMap({
              'lynk-textarea': true,
              'lynk-textarea--small': this.size === 'small',
              'lynk-textarea--medium': this.size === 'medium',
              'lynk-textarea--large': this.size === 'large',
              'lynk-textarea--standard': !this.filled,
              'lynk-textarea--filled': this.filled,
              'lynk-textarea--disabled': this.disabled,
              'lynk-textarea--restricted': this.restricted,
              'lynk-textarea--focused': this.hasFocus,
              'lynk-textarea--empty': !this.value,
              'lynk-textarea--invalid': this.invalid,
              'lynk-textarea--resize-none': this.resize === 'none',
              'lynk-textarea--resize-vertical': this.resize === 'vertical',
              'lynk-textarea--resize-auto': this.resize === 'auto',
              'lynk-textarea--has-error': this.state === 'error',
              'lynk-textarea--has-warning': this.state === 'warning',
              'lynk-textarea--has-success': this.state === 'success',
            })}
          >

          ${this.restricted
            ? html`
              <div
                part="textarea"
                aria-describedby="help-text"
                class="lynk-textarea__control lynk-textarea__control--restricted"
              >
                ${this.value || "None"}
              </div>
            `
            : html`
              <textarea
                part="textarea"
                id="input"
                class="lynk-textarea__control"
                title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
                name=${ifDefined(this.name)}
                .value=${live(this.value)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?required=${this.required}
                placeholder=${ifDefined(this.placeholder)}
                rows=${ifDefined(this.rows)}
                minlength=${ifDefined(this.minlength)}
                maxlength=${ifDefined(this.maxlength)}
                autocapitalize=${ifDefined(this.autocapitalize)}
                autocorrect=${ifDefined(this.autocorrect)}
                ?autofocus=${this.autofocus}
                spellcheck=${ifDefined(this.spellcheck)}
                enterkeyhint=${ifDefined(this.enterkeyhint)}
                inputmode=${ifDefined(this.inputmode)}
                aria-describedby="help-text"
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              ></textarea>
          `}
          </div>
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
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-textarea': LynkTextarea;
  }
}
