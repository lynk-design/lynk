import {
  table_column_group_styles_default
} from "./chunk.MQRDJNBW.js";
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

// src/components/table-column-group/table-column-group.ts
var LynkTableColumnGroup = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
LynkTableColumnGroup.styles = table_column_group_styles_default;
LynkTableColumnGroup = __decorateClass([
  n("lynk-colgroup")
], LynkTableColumnGroup);

export {
  LynkTableColumnGroup
};
