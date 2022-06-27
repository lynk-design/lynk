import {
  l as l2
} from "./chunk.6OV4IUTN.js";
import {
  checkbox_styles_default
} from "./chunk.HWQ4IKHC.js";
import {
  FormSubmitController
} from "./chunk.QRRAQY34.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
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

// src/components/checkbox/checkbox.ts
var LynkCheckbox = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0
    });
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
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
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    emit(this, "lynk-change");
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "lynk-blur");
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "lynk-focus");
  }
  handleStateChange() {
    this.invalid = !this.input.checkValidity();
  }
  render() {
    return $`
      <label
        part="base"
        class=${o({
      "lynk-checkbox": true,
      "lynk-checkbox--checked": this.checked,
      "lynk-checkbox--disabled": this.disabled,
      "lynk-checkbox--focused": this.hasFocus,
      "lynk-checkbox--indeterminate": this.indeterminate
    })}
      >
        <input
          class="lynk-checkbox__input"
          type="checkbox"
          name=${l(this.name)}
          value=${l(this.value)}
          .indeterminate=${l2(this.indeterminate)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="lynk-checkbox__control">
          ${this.checked ? $`
                <span part="checked-icon" class="lynk-checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
          ${!this.checked && this.indeterminate ? $`
                <span part="indeterminate-icon" class="lynk-checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
        </span>

        <span part="label" class="lynk-checkbox__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
LynkCheckbox.styles = checkbox_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], LynkCheckbox.prototype, "input", 2);
__decorateClass([
  t()
], LynkCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  e()
], LynkCheckbox.prototype, "name", 2);
__decorateClass([
  e()
], LynkCheckbox.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkCheckbox.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkCheckbox.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkCheckbox.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkCheckbox.prototype, "invalid", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true }),
  watch("indeterminate", { waitUntilFirstUpdate: true })
], LynkCheckbox.prototype, "handleStateChange", 1);
LynkCheckbox = __decorateClass([
  n("lynk-checkbox")
], LynkCheckbox);

export {
  LynkCheckbox
};
