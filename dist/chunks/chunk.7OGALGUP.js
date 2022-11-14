import {
  table_header_group_styles_default
} from "./chunk.W5CJOXIS.js";
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

// src/components/table-header-group/table-header-group.ts
var LynkTableHeaderGroup = class extends s {
  constructor() {
    super(...arguments);
    this.sticky = false;
  }
  render() {
    return $` <slot></slot> `;
  }
};
LynkTableHeaderGroup.styles = table_header_group_styles_default;
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTableHeaderGroup.prototype, "sticky", 2);
LynkTableHeaderGroup = __decorateClass([
  n("lynk-thead")
], LynkTableHeaderGroup);

export {
  LynkTableHeaderGroup
};
