import {
  spinner_styles_default
} from "./chunk.BYYD27CT.js";
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

// src/components/spinner/spinner.ts
var LynkSpinner = class extends s {
  render() {
    return $`
      <svg part="base" class="lynk-spinner" role="status">
        <circle class="lynk-spinner__track"></circle>
        <circle class="lynk-spinner__indicator"></circle>
      </svg>
    `;
  }
};
LynkSpinner.styles = spinner_styles_default;
LynkSpinner = __decorateClass([
  n("lynk-spinner")
], LynkSpinner);

export {
  LynkSpinner
};
