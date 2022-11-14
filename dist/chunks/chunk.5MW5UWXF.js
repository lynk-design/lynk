import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/table-cell/table-cell.styles.ts
var table_cell_styles_default = r`
  ${component_styles_default}

  :host {
    display: table-cell;
    border-bottom: solid 1px var(--lynk-color-neutral-300);
    border-right: solid 1px var(--lynk-color-neutral-300);
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-small);
  }

  :host([state='danger']) {
    background: var(--lynk-color-danger-50);
  }

  :host([state='primary']) {
    background: var(--lynk-color-primary-50);
  }

  :host([state='success']) {
    background: var(--lynk-color-success-50);
  }

  :host([state='warning']) {
    background: var(--lynk-color-warning-50);
  }
`;

export {
  table_cell_styles_default
};
