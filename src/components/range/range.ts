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
import styles from './range.styles';
import type { LynkFormControl } from '../../internal/lynk-element';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Ranges allow the user to select a single value within a given range using a slider.
 *
 * @since 1.0
 * @status stable
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Help text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event on:blur - Emitted when the control loses focus.
 * @event on:change - Emitted when an alteration to the control's value is committed by the user.
 * @event on:focus - Emitted when the control gains focus.
 * @event on:input - Emitted when the control receives input.
 *
 * @csspart form-control - The form control that wraps the label, input, and help-text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The range's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's internal wrapper.
 * @csspart input - The native range input.
 * @csspart tooltip - The range tooltip.
 *
 * @cssproperty --thumb-size - The size of the thumb.
 * @cssproperty --tooltip-offset - The vertical distance the tooltip is offset from the track.
 * @cssproperty --track-color-active - The color of the portion of the track that represents the current value.
 * @cssproperty --track-color-inactive - The of the portion of the track that represents the remaining value.
 * @cssproperty --track-height - The height of the track.
 * @cssproperty --track-active-offset - The point of origin of the active track.
 */
@customElement('lynk-range')
export default class LynkRange extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  @query('.lynk-range__control') input: HTMLInputElement;
  @query('.lynk-range__tooltip') output: HTMLOutputElement | null;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this);
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private readonly localize = new LocalizeController(this);
  private resizeObserver: ResizeObserver;

  @state() private hasFocus = false;
  @state() private hasTooltip = false;
  @state() invalid = false;
  @property() title = ''; // make reactive to pass through

  /** The name of the range, submitted as a name/value pair with form data. */
  @property() name = '';

  /** The current value of the range, submitted as a name/value pair with form data. */
  @property({ type: Number }) value = 0;

  /** The range's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /** The range's help text. If you need to display HTML, you can use the help-text slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** Disables the range. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The range's min attribute. */
  @property({ type: Number }) min = 0;

  /** The range's max attribute. */
  @property({ type: Number }) max = 100;

  /** The range's step attribute. */
  @property({ type: Number }) step = 1;

  /** The preferred placement of the tooltip. */
  @property() tooltip: 'top' | 'bottom' | 'none' = 'top';

  /**
   * A function used to format the tooltip's value. The range's value is passed as the first and only argument. The
   * function should return a string to display in the tooltip.
   */
  @property({ attribute: false }) tooltipFormatter: (value: number) => string = (value: number) => value.toString();

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue = 0;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.syncRange());

    if (this.value < this.min) {
      this.value = this.min;
    }
    if (this.value > this.max) {
      this.value = this.max;
    }

    this.updateComplete.then(() => {
      this.syncRange();
      this.resizeObserver.observe(this.input);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
  }

  /** Sets focus on the input. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }

  /** Increments the value of the input by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
    }
  }

  /** Decrements the value of the input by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
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

  handleChange() {
    this.emit('on:change');
  }

  handleInput() {
    this.value = parseFloat(this.input.value);
    this.emit('on:input');
    this.syncRange();
  }

  handleBlur() {
    this.hasFocus = false;
    this.hasTooltip = false;
    this.emit('on:blur');
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    this.invalid = !this.input.checkValidity();

    // The value may have constraints, so we set the native control's value and sync it back to ensure it adhere's to
    // min, max, and step properly
    this.input.value = this.value.toString();
    this.value = parseFloat(this.input.value);

    this.syncRange();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }

  handleFocus() {
    this.hasFocus = true;
    this.hasTooltip = true;
    this.emit('on:focus');
  }

  handleThumbDragStart() {
    this.hasTooltip = true;
  }

  handleThumbDragEnd() {
    this.hasTooltip = false;
  }

  @watch('hasTooltip', { waitUntilFirstUpdate: true })
  syncRange() {
    const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));

    this.syncProgress(percent);

    if (this.tooltip !== 'none') {
      this.syncTooltip(percent);
    }
  }

  syncProgress(percent: number) {
    this.input.style.setProperty('--percent', `${percent * 100}%`);
  }

  syncTooltip(percent: number) {
    if (this.output !== null) {
      const inputWidth = this.input.offsetWidth;
      const tooltipWidth = this.output.offsetWidth;
      const thumbSize = getComputedStyle(this.input).getPropertyValue('--thumb-size');
      const isRtl = this.localize.dir() === 'rtl';
      const percentAsWidth = inputWidth * percent;

      // The calculations are used to "guess" where the thumb is located. Since we're using the native range control
      // under the hood, we don't have access to the thumb's true coordinates. These measurements can be a pixel or two
      // off depending on the size of the control, thumb, and tooltip dimensions.
      if (isRtl) {
        const x = `${inputWidth - percentAsWidth}px + ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc((${x} - ${tooltipWidth / 2}px - ${thumbSize} / 2))`;
      } else {
        const x = `${percentAsWidth}px - ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc(${x} - ${tooltipWidth / 2}px + ${thumbSize} / 2)`;
      }
    }
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    // NOTE - always bind value after min/max, otherwise it will be clamped
    return html`
      <div
        part="form-control"
        class=${classMap({
          'lynk-form-control': true,
          'lynk-form-control--medium': true, // range only has one size
          'lynk-form-control--has-label': hasLabel,
          'lynk-form-control--has-help-text': hasHelpText
        })}
      >
        <label
          part="form-control-label"
          class="lynk-form-control__label"
          for="input"
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="lynk-form-control-input">
          <div
            part="base"
            class=${classMap({
              'lynk-range': true,
              'lynk-range--disabled': this.disabled,
              'lynk-range--focused': this.hasFocus,
              'lynk-range--rtl': this.localize.dir() === 'rtl',
              'lynk-range--tooltip-visible': this.hasTooltip,
              'lynk-range--tooltip-top': this.tooltip === 'top',
              'lynk-range--tooltip-bottom': this.tooltip === 'bottom'
            })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="lynk-range__control"
              title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
              type="range"
              name=${ifDefined(this.name)}
              ?disabled=${this.disabled}
              min=${ifDefined(this.min)}
              max=${ifDefined(this.max)}
              step=${ifDefined(this.step)}
              .value=${live(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip !== 'none' && !this.disabled
              ? html`
                  <output part="tooltip" class="lynk-range__tooltip">
                    ${typeof this.tooltipFormatter === 'function' ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                `
              : ''}
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
    'lynk-range': LynkRange;
  }
}
