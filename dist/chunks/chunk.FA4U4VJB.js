import {
  table_row_group_styles_default
} from "./chunk.BV2BIVO7.js";
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

// src/components/table-row-group/table-row-group.ts
var LynkTableRowGroup = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
LynkTableRowGroup.styles = table_row_group_styles_default;
LynkTableRowGroup = __decorateClass([
  n("lynk-tbody")
], LynkTableRowGroup);

export {
  LynkTableRowGroup
};
