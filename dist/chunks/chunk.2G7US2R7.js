import {
  button_group_styles_default
} from "./chunk.3WOH3D2G.js";
import {
  e,
  i,
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/button-group/button-group.ts
var BUTTON_CHILDREN = ["lynk-button", "lynk-radio-button"];
var LynkButtonGroup = class extends s {
  constructor() {
    super(...arguments);
    this.label = "";
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("lynk-button-group__button--focus");
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("lynk-button-group__button--focus");
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("lynk-button-group__button--hover");
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("lynk-button-group__button--hover");
  }
  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button !== null) {
        button.classList.add("lynk-button-group__button");
        button.classList.toggle("lynk-button-group__button--first", index === 0);
        button.classList.toggle("lynk-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle("lynk-button-group__button--last", index === slottedElements.length - 1);
      }
    });
  }
  render() {
    return $`
      <div
        part="base"
        class="lynk-button-group"
        role="group"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
LynkButtonGroup.styles = button_group_styles_default;
__decorateClass([
  i("slot")
], LynkButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  e()
], LynkButtonGroup.prototype, "label", 2);
LynkButtonGroup = __decorateClass([
  n("lynk-button-group")
], LynkButtonGroup);
function findButton(el) {
  return BUTTON_CHILDREN.includes(el.tagName.toLowerCase()) ? el : el.querySelector(BUTTON_CHILDREN.join(","));
}

export {
  LynkButtonGroup
};
