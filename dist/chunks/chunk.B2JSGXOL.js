import {
  visually_hidden_styles_default
} from "./chunk.OQEMRNWZ.js";
import {
  n
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/visually-hidden/visually-hidden.ts
var LynkVisuallyHidden = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
LynkVisuallyHidden.styles = visually_hidden_styles_default;
LynkVisuallyHidden = __decorateClass([
  n("lynk-visually-hidden")
], LynkVisuallyHidden);

export {
  LynkVisuallyHidden
};
