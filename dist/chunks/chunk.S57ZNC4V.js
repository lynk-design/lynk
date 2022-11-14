import {
  switch_styles_default
} from "./chunk.OKTHWKPO.js";
import {
  l as l2
} from "./chunk.3PQQF7D3.js";
import {
  FormSubmitController
} from "./chunk.QRRAQY34.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
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
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/switch/switch.ts
var LynkSwitch = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value : void 0
    });
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
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
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.invalid = !this.input.checkValidity();
  }
  handleClick() {
    this.checked = !this.checked;
    emit(this, "on:change");
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "on:focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      emit(this, "on:change");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      emit(this, "on:change");
    }
  }
  render() {
    return $`
      <label
        part="base"
        class=${o({
      "lynk-switch": true,
      "lynk-switch--checked": this.checked,
      "lynk-switch--disabled": this.disabled,
      "lynk-switch--focused": this.hasFocus
    })}
      >
        <input
          class="lynk-switch__input"
          type="checkbox"
          name=${l(this.name)}
          value=${l(this.value)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="lynk-switch__control">
          <span part="thumb" class="lynk-switch__thumb"></span>
        </span>

        <span part="label" class="lynk-switch__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
LynkSwitch.styles = switch_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], LynkSwitch.prototype, "input", 2);
__decorateClass([
  t()
], LynkSwitch.prototype, "hasFocus", 2);
__decorateClass([
  e()
], LynkSwitch.prototype, "name", 2);
__decorateClass([
  e()
], LynkSwitch.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSwitch.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSwitch.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSwitch.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSwitch.prototype, "invalid", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], LynkSwitch.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkSwitch.prototype, "handleDisabledChange", 1);
LynkSwitch = __decorateClass([
  n("lynk-switch")
], LynkSwitch);

export {
  LynkSwitch
};
