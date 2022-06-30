import {
  input_styles_default
} from "./chunk.LKFDI4QZ.js";
import {
  l as l2
} from "./chunk.6OV4IUTN.js";
import {
  FormSubmitController
} from "./chunk.QRRAQY34.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
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

// src/components/input/input.ts
var LynkInput = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.isPasswordVisible = false;
    this.type = "text";
    this.size = "medium";
    this.value = "";
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.helpText = "";
    this.clearable = false;
    this.togglePassword = false;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
  }
  get valueAsDate() {
    var _a, _b;
    return (_b = (_a = this.input) == null ? void 0 : _a.valueAsDate) != null ? _b : null;
  }
  set valueAsDate(newValue) {
    this.input.valueAsDate = newValue;
    this.value = this.input.value;
  }
  get valueAsNumber() {
    var _a, _b;
    return (_b = (_a = this.input) == null ? void 0 : _a.valueAsNumber) != null ? _b : parseFloat(this.value);
  }
  set valueAsNumber(newValue) {
    this.input.valueAsNumber = newValue;
    this.value = this.input.value;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
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
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  setRangeText(replacement, start, end, selectMode = "preserve") {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
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
    emit(this, "lynk-blur");
  }
  handleChange() {
    this.value = this.input.value;
    emit(this, "lynk-change");
  }
  handleClearClick(event) {
    this.value = "";
    emit(this, "lynk-clear");
    emit(this, "lynk-input");
    emit(this, "lynk-change");
    this.input.focus();
    event.stopPropagation();
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
    emit(this, "lynk-input");
  }
  handleInvalid() {
    this.invalid = true;
  }
  handleKeyDown(event) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      setTimeout(() => {
        if (!event.defaultPrevented) {
          this.formSubmitController.submit();
        }
      });
    }
  }
  handlePasswordToggle() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  handleValueChange() {
    this.invalid = !this.input.checkValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && !this.readonly && this.value.length > 0;
    return $`
      <div
        part="form-control"
        class=${o({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${o({
      "lynk-input": true,
      "lynk-input--small": this.size === "small",
      "lynk-input--medium": this.size === "medium",
      "lynk-input--large": this.size === "large",
      "lynk-input--pill": this.pill,
      "lynk-input--standard": !this.filled,
      "lynk-input--filled": this.filled,
      "lynk-input--disabled": this.disabled,
      "lynk-input--focused": this.hasFocus,
      "lynk-input--empty": !this.value,
      "lynk-input--invalid": this.invalid
    })}
          >
            <span part="prefix" class="lynk-input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="lynk-input__control"
              type=${this.type === "password" && this.isPasswordVisible ? "text" : this.type}
              name=${l(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l(this.placeholder)}
              minlength=${l(this.minlength)}
              maxlength=${l(this.maxlength)}
              min=${l(this.min)}
              max=${l(this.max)}
              step=${l(this.step)}
              .value=${l2(this.value)}
              autocapitalize=${l(this.autocapitalize)}
              autocomplete=${l(this.autocomplete)}
              autocorrect=${l(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l(this.spellcheck)}
              pattern=${l(this.pattern)}
              enterkeyhint=${l(this.enterkeyhint)}
              inputmode=${l(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid ? "true" : "false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? $`
                  <button
                    part="clear-button"
                    class="lynk-input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <lynk-icon name="x-circle-fill" library="system"></lynk-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.togglePassword && !this.disabled ? $`
                  <button
                    part="password-toggle-button"
                    class="lynk-input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible ? $`
                          <slot name="show-password-icon">
                            <lynk-icon name="eye-slash" library="system"></lynk-icon>
                          </slot>
                        ` : $`
                          <slot name="hide-password-icon">
                            <lynk-icon name="eye" library="system"></lynk-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="lynk-input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
LynkInput.styles = input_styles_default;
__decorateClass([
  i(".lynk-input__control")
], LynkInput.prototype, "input", 2);
__decorateClass([
  t()
], LynkInput.prototype, "hasFocus", 2);
__decorateClass([
  t()
], LynkInput.prototype, "isPasswordVisible", 2);
__decorateClass([
  e({ reflect: true })
], LynkInput.prototype, "type", 2);
__decorateClass([
  e({ reflect: true })
], LynkInput.prototype, "size", 2);
__decorateClass([
  e()
], LynkInput.prototype, "name", 2);
__decorateClass([
  e()
], LynkInput.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkInput.prototype, "filled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkInput.prototype, "pill", 2);
__decorateClass([
  e()
], LynkInput.prototype, "label", 2);
__decorateClass([
  e({ attribute: "help-text" })
], LynkInput.prototype, "helpText", 2);
__decorateClass([
  e({ type: Boolean })
], LynkInput.prototype, "clearable", 2);
__decorateClass([
  e({ attribute: "toggle-password", type: Boolean })
], LynkInput.prototype, "togglePassword", 2);
__decorateClass([
  e()
], LynkInput.prototype, "placeholder", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkInput.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkInput.prototype, "readonly", 2);
__decorateClass([
  e({ type: Number })
], LynkInput.prototype, "minlength", 2);
__decorateClass([
  e({ type: Number })
], LynkInput.prototype, "maxlength", 2);
__decorateClass([
  e()
], LynkInput.prototype, "min", 2);
__decorateClass([
  e()
], LynkInput.prototype, "max", 2);
__decorateClass([
  e({ type: Number })
], LynkInput.prototype, "step", 2);
__decorateClass([
  e()
], LynkInput.prototype, "pattern", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkInput.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkInput.prototype, "invalid", 2);
__decorateClass([
  e()
], LynkInput.prototype, "autocapitalize", 2);
__decorateClass([
  e()
], LynkInput.prototype, "autocorrect", 2);
__decorateClass([
  e()
], LynkInput.prototype, "autocomplete", 2);
__decorateClass([
  e({ type: Boolean })
], LynkInput.prototype, "autofocus", 2);
__decorateClass([
  e()
], LynkInput.prototype, "enterkeyhint", 2);
__decorateClass([
  e({ type: Boolean })
], LynkInput.prototype, "spellcheck", 2);
__decorateClass([
  e()
], LynkInput.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkInput.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], LynkInput.prototype, "handleValueChange", 1);
LynkInput = __decorateClass([
  n("lynk-input")
], LynkInput);

export {
  LynkInput
};