import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/table-header-group/table-header-group.styles.ts
var table_header_group_styles_default = r`
  ${component_styles_default}

  :host {
    display: table-header-group;
  }

  :host([sticky]) {
    position: sticky;
    top: 0;
    z-index: var(--lynk-z-index-sticky);
  }

  ::slotted(lynk-tr) {
    background: var(--lynk-color-black);
  }
`;

export {
  table_header_group_styles_default
};
