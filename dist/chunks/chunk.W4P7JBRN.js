import {
  table_cell_styles_default
} from "./chunk.5MW5UWXF.js";
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

// src/components/table-cell/table-cell.ts
var LynkTableCell = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
LynkTableCell.styles = table_cell_styles_default;
__decorateClass([
  e({ reflect: true })
], LynkTableCell.prototype, "state", 2);
LynkTableCell = __decorateClass([
  n("lynk-td")
], LynkTableCell);

export {
  LynkTableCell
};
