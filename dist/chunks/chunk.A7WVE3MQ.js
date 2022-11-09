import {
  table_row_styles_default
} from "./chunk.BMO5MUFX.js";
import {
  e,
  n
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/table-row/table-row.ts
var LynkTableRow = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
LynkTableRow.styles = table_row_styles_default;
__decorateClass([
  e({ reflect: true })
], LynkTableRow.prototype, "state", 2);
LynkTableRow = __decorateClass([
  n("lynk-tr")
], LynkTableRow);

export {
  LynkTableRow
};
