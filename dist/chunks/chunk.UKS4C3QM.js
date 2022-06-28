import {
  radio_group_styles_default
} from "./chunk.WTZYR5WD.js";
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

// src/components/radio-group/radio-group.ts
var RADIO_CHILDREN = ["lynk-radio", "lynk-radio-button"];
var LynkRadioGroup = class extends s {
  constructor() {
    super(...arguments);
    this.hasButtonGroup = false;
    this.label = "";
    this.fieldset = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "radiogroup");
  }
  getAllRadios() {
    return [...this.querySelectorAll(RADIO_CHILDREN.join(","))].filter((el) => RADIO_CHILDREN.includes(el.tagName.toLowerCase()));
  }
  handleRadioClick(event) {
    const target = event.target;
    const checkedRadio = target.closest(RADIO_CHILDREN.map((selector) => `${selector}:not([disabled])`).join(","));
    if (checkedRadio) {
      const radios = this.getAllRadios();
      radios.forEach((radio) => {
        radio.checked = radio === checkedRadio;
        radio.input.tabIndex = radio === checkedRadio ? 0 : -1;
      });
    }
  }
  handleKeyDown(event) {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
      const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(checkedRadio) + incr;
      if (index < 0) {
        index = radios.length - 1;
      }
      if (index > radios.length - 1) {
        index = 0;
      }
      this.getAllRadios().forEach((radio) => {
        radio.checked = false;
        radio.input.tabIndex = -1;
      });
      radios[index].focus();
      radios[index].checked = true;
      radios[index].input.tabIndex = 0;
      event.preventDefault();
    }
  }
  handleSlotChange() {
    const radios = this.getAllRadios();
    const checkedRadio = radios.find((radio) => radio.checked);
    this.hasButtonGroup = !!radios.find((radio) => radio.tagName.toLowerCase() === "lynk-radio-button");
    radios.forEach((radio) => {
      radio.setAttribute("role", "radio");
      radio.input.tabIndex = -1;
    });
    if (checkedRadio) {
      checkedRadio.input.tabIndex = 0;
    } else if (radios.length > 0) {
      radios[0].input.tabIndex = 0;
    }
  }
  render() {
    const defaultSlot = $`
      <slot @click=${this.handleRadioClick} @keydown=${this.handleKeyDown} @slotchange=${this.handleSlotChange}></slot>
    `;
    return $`
      <fieldset
        part="base"
        class=${o({
      "lynk-radio-group": true,
      "lynk-radio-group--has-fieldset": this.fieldset
    })}
      >
        <legend part="label" class="lynk-radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        ${this.hasButtonGroup ? $`<lynk-button-group part="button-group">${defaultSlot}</lynk-button-group>` : defaultSlot}
      </fieldset>
    `;
  }
};
LynkRadioGroup.styles = radio_group_styles_default;
__decorateClass([
  i("slot:not([name])")
], LynkRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  t()
], LynkRadioGroup.prototype, "hasButtonGroup", 2);
__decorateClass([
  e()
], LynkRadioGroup.prototype, "label", 2);
__decorateClass([
  e({ type: Boolean, attribute: "fieldset" })
], LynkRadioGroup.prototype, "fieldset", 2);
LynkRadioGroup = __decorateClass([
  n("lynk-radio-group")
], LynkRadioGroup);

export {
  LynkRadioGroup
};