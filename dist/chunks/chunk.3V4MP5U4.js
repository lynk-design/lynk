import {
  table_column_styles_default
} from "./chunk.X5PT5FGN.js";
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

// src/components/table-column/table-column.ts
var LynkTableColumn = class extends s {
  render() {
    return $` <slot></slot> `;
  }
};
LynkTableColumn.styles = table_column_styles_default;
LynkTableColumn = __decorateClass([
  n("lynk-col")
], LynkTableColumn);

export {
  LynkTableColumn
};
