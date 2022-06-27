import {
  divider_styles_default
} from "./chunk.KQ6GSZIJ.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  e,
  n
} from "./chunk.ML4GKG4X.js";
import {
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/divider/divider.ts
var LynkDivider = class extends s {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  firstUpdated() {
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
LynkDivider.styles = divider_styles_default;
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkDivider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], LynkDivider.prototype, "handleVerticalChange", 1);
LynkDivider = __decorateClass([
  n("lynk-divider")
], LynkDivider);

export {
  LynkDivider
};
