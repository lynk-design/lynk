import {
  radio_button_styles_default
} from "./chunk.NDJBTODZ.js";
import {
  FormSubmitController
} from "./chunk.QRRAQY34.js";
import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  n as n2
} from "./chunk.K6X3Y6UE.js";
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
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/radio-button/radio-button.ts
var LynkRadioButton = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value : void 0
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.hasFocus = false;
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
    this.size = "medium";
    this.pill = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "radio");
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.hiddenInput.reportValidity();
  }
  setCustomValidity(message) {
    this.hiddenInput.setCustomValidity(message);
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "on:blur");
  }
  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "lynk-focus");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    if (this.hasUpdated) {
      emit(this, "on:change");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.hasUpdated) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  render() {
    return n2`
      <div part="base">
        <input class="hidden-input" type="radio" aria-hidden="true" tabindex="-1" />
        <button
          part="button"
          class=${o({
      "lynk-button": true,
      "lynk-button--default": true,
      "lynk-button--small": this.size === "small",
      "lynk-button--medium": this.size === "medium",
      "lynk-button--large": this.size === "large",
      "lynk-button--checked": this.checked,
      "lynk-button--disabled": this.disabled,
      "lynk-button--focused": this.hasFocus,
      "lynk-button--outline": true,
      "lynk-button--pill": this.pill,
      "lynk-button--has-label": this.hasSlotController.test("[default]"),
      "lynk-button--has-prefix": this.hasSlotController.test("prefix"),
      "lynk-button--has-suffix": this.hasSlotController.test("suffix")
    })}
          ?disabled=${this.disabled}
          type="button"
          name=${l(this.name)}
          value=${l(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <span part="prefix" class="lynk-button__prefix">
            <slot name="prefix"></slot>
          </span>
          <span part="label" class="lynk-button__label">
            <slot></slot>
          </span>
          <span part="suffix" class="lynk-button__suffix">
            <slot name="suffix"></slot>
          </span>
        </button>
      </div>
    `;
  }
};
LynkRadioButton.styles = radio_button_styles_default;
__decorateClass([
  i(".lynk-button")
], LynkRadioButton.prototype, "input", 2);
__decorateClass([
  i(".hidden-input")
], LynkRadioButton.prototype, "hiddenInput", 2);
__decorateClass([
  t()
], LynkRadioButton.prototype, "hasFocus", 2);
__decorateClass([
  e()
], LynkRadioButton.prototype, "name", 2);
__decorateClass([
  e()
], LynkRadioButton.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkRadioButton.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkRadioButton.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkRadioButton.prototype, "invalid", 2);
__decorateClass([
  watch("checked")
], LynkRadioButton.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkRadioButton.prototype, "handleDisabledChange", 1);
__decorateClass([
  e({ reflect: true })
], LynkRadioButton.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkRadioButton.prototype, "pill", 2);
LynkRadioButton = __decorateClass([
  n("lynk-radio-button")
], LynkRadioButton);

export {
  LynkRadioButton
};
