import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/table-header/table-header.styles.ts
var table_header_styles_default = r`
  ${component_styles_default}

  :host {
    display: table-cell;
    border-bottom: solid 1px var(--lynk-color-neutral-300);
    border-right: solid 1px var(--lynk-color-neutral-300);
    border-top: solid 1px var(--lynk-color-neutral-300);
    color: var(--lynk-color-neutral-900);
    font-family: var(--lynk-button-font-family);
    font-weight: var(--lynk-font-weight-bold);
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-small);
    user-select: none;
    vertical-align: middle;
  }

  :host([sort-enabled]) {
    cursor: pointer;
  }

  :host([sort-enabled]:hover) {
    color: var(--lynk-color-white);
    background-color: var(--lynk-color-neutral-50);
  }

  lynk-icon {
    padding-inline-start: var(--lynk-spacing-2x-small);
    vertical-align: -2px;
  }
`;

export {
  table_header_styles_default
};
