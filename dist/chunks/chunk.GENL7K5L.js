import {
  box_styles_default
} from "./chunk.NHQANY2L.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/box/box.ts
var LynkBox = class extends s {
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-box": true
    })}
      >
        <slot></slot>
      </div>
    `;
  }
};
LynkBox.styles = box_styles_default;
LynkBox = __decorateClass([
  n("lynk-box")
], LynkBox);

export {
  LynkBox
};
