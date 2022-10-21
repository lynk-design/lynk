import {
  menu_label_styles_default
} from "./chunk.QCNPIUD7.js";
import {
  n
} from "./chunk.DC3HFRI2.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.SEZCJCPZ.js";

// src/components/menu-label/menu-label.ts
var LynkMenuLabel = class extends s {
  render() {
    return $`
      <div part="base" class="lynk-menu-label">
        <slot></slot>
      </div>
    `;
  }
};
LynkMenuLabel.styles = menu_label_styles_default;
LynkMenuLabel = __decorateClass([
  n("lynk-menu-label")
], LynkMenuLabel);

export {
  LynkMenuLabel
};
