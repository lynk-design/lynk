import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/table-row/table-row.styles.ts
var table_row_styles_default = r`
  ${component_styles_default}

  :host {
    display: table-row;
  }

  ::slotted(lynk-td:first-child),
  ::slotted(lynk-th:first-child) {
    border-left: solid 1px var(--lynk-color-neutral-300);
  }
`;

export {
  table_row_styles_default
};
