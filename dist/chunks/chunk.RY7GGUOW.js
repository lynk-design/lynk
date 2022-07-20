import {
  textarea_styles_default
} from "./chunk.FME73JGJ.js";
import {
  l as l2
} from "./chunk.6OV4IUTN.js";
import {
  FormSubmitController
} from "./chunk.QRRAQY34.js";
import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/textarea/textarea.ts
var LynkTextarea = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.hasFocus = false;
    this.size = "medium";
    this.value = "";
    this.filled = false;
    this.label = "";
    this.helpText = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
  }
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
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  select() {
    this.input.select();
  }
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number")
        this.input.scrollTop = position.top;
      if (typeof position.left === "number")
        this.input.scrollLeft = position.left;
      return;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  setRangeText(replacement, start, end, selectMode = "preserve") {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      emit(this, "lynk-input");
    }
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
      emit(this, "lynk-input");
      emit(this, "lynk-change");
    }
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "on:blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.setTextareaHeight();
    emit(this, "lynk-change");
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "lynk-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.setTextareaHeight();
    emit(this, "lynk-input");
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  handleValueChange() {
    this.invalid = !this.input.checkValidity();
  }
  setTextareaHeight() {
    if (this.resize === "auto") {
      this.input.style.height = "auto";
      this.input.style.height = `${this.input.scrollHeight}px`;
    } else {
      this.input.style.height = void 0;
    }
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return $`
      <div
        part="form-control"
        class=${o({
      "lynk-form-control": true,
      "lynk-form-control--small": this.size === "small",
      "lynk-form-control--medium": this.size === "medium",
      "lynk-form-control--large": this.size === "large",
      "lynk-form-control--has-label": hasLabel,
      "lynk-form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="lynk-form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="lynk-form-control-input">
          <div
            part="base"
            class=${o({
      "lynk-textarea": true,
      "lynk-textarea--small": this.size === "small",
      "lynk-textarea--medium": this.size === "medium",
      "lynk-textarea--large": this.size === "large",
      "lynk-textarea--standard": !this.filled,
      "lynk-textarea--filled": this.filled,
      "lynk-textarea--disabled": this.disabled,
      "lynk-textarea--focused": this.hasFocus,
      "lynk-textarea--empty": !this.value,
      "lynk-textarea--invalid": this.invalid,
      "lynk-textarea--resize-none": this.resize === "none",
      "lynk-textarea--resize-vertical": this.resize === "vertical",
      "lynk-textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="lynk-textarea__control"
              name=${l(this.name)}
              .value=${l2(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l(this.placeholder)}
              rows=${l(this.rows)}
              minlength=${l(this.minlength)}
              maxlength=${l(this.maxlength)}
              autocapitalize=${l(this.autocapitalize)}
              autocorrect=${l(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l(this.spellcheck)}
              enterkeyhint=${l(this.enterkeyhint)}
              inputmode=${l(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="lynk-form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
LynkTextarea.styles = textarea_styles_default;
__decorateClass([
  i(".lynk-textarea__control")
], LynkTextarea.prototype, "input", 2);
__decorateClass([
  t()
], LynkTextarea.prototype, "hasFocus", 2);
__decorateClass([
  e({ reflect: true })
], LynkTextarea.prototype, "size", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "name", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTextarea.prototype, "filled", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "label", 2);
__decorateClass([
  e({ attribute: "help-text" })
], LynkTextarea.prototype, "helpText", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "placeholder", 2);
__decorateClass([
  e({ type: Number })
], LynkTextarea.prototype, "rows", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "resize", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTextarea.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTextarea.prototype, "readonly", 2);
__decorateClass([
  e({ type: Number })
], LynkTextarea.prototype, "minlength", 2);
__decorateClass([
  e({ type: Number })
], LynkTextarea.prototype, "maxlength", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTextarea.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTextarea.prototype, "invalid", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "autocapitalize", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "autocorrect", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "autocomplete", 2);
__decorateClass([
  e({ type: Boolean })
], LynkTextarea.prototype, "autofocus", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "enterkeyhint", 2);
__decorateClass([
  e({ type: Boolean })
], LynkTextarea.prototype, "spellcheck", 2);
__decorateClass([
  e()
], LynkTextarea.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkTextarea.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("rows", { waitUntilFirstUpdate: true })
], LynkTextarea.prototype, "handleRowsChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], LynkTextarea.prototype, "handleValueChange", 1);
LynkTextarea = __decorateClass([
  n("lynk-textarea")
], LynkTextarea);

export {
  LynkTextarea
};
