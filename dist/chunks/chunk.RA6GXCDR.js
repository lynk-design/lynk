import {
  radio_styles_default
} from "./chunk.T774ZJ3N.js";
import {
  l as l2
} from "./chunk.6OV4IUTN.js";
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
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/radio/radio.ts
var LynkRadio = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0
    });
    this.hasFocus = false;
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
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
      emit(this, "lynk-change");
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
    return $`
      <label
        part="base"
        class=${o({
      "lynk-radio": true,
      "lynk-radio--checked": this.checked,
      "lynk-radio--disabled": this.disabled,
      "lynk-radio--focused": this.hasFocus
    })}
      >
        <input
          class="lynk-radio__input"
          type="radio"
          name=${l(this.name)}
          value=${l(this.value)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part="control" class="lynk-radio__control">
          <span part="checked-icon" class="lynk-radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>
        </span>

        <span part="label" class="lynk-radio__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
LynkRadio.styles = radio_styles_default;
__decorateClass([
  i(".lynk-radio__input")
], LynkRadio.prototype, "input", 2);
__decorateClass([
  t()
], LynkRadio.prototype, "hasFocus", 2);
__decorateClass([
  e()
], LynkRadio.prototype, "name", 2);
__decorateClass([
  e()
], LynkRadio.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkRadio.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkRadio.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkRadio.prototype, "invalid", 2);
__decorateClass([
  watch("checked")
], LynkRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkRadio.prototype, "handleDisabledChange", 1);
LynkRadio = __decorateClass([
  n("lynk-radio")
], LynkRadio);

export {
  LynkRadio
};
