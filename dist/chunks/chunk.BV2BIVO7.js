import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/table-row-group/table-row-group.styles.ts
var table_row_group_styles_default = r`
  ${component_styles_default}

  :host {
    display: table-row-group;
  }

  ::slotted(lynk-tr) {
    background: var(--lynk-color-neutral-50);
  }

  ::slotted(lynk-tr:nth-child(even)) {
    background: var(--lynk-color-neutral-200);
  }

  /* States */

  ::slotted(lynk-tr[state='danger']) {
    background: var(--lynk-color-danger-50);
  }

  ::slotted(lynk-tr[state='danger']:nth-child(even)) {
    background: var(--lynk-color-danger-200);
  }

  ::slotted(lynk-tr[state='primary']) {
    background: var(--lynk-color-primary-50);
  }

  ::slotted(lynk-tr[state='primary']:nth-child(even)) {
    background: var(--lynk-color-primary-200);
  }

  ::slotted(lynk-tr[state='success']) {
    background: var(--lynk-color-success-50);
  }

  ::slotted(lynk-tr[state='success']:nth-child(even)) {
    background: var(--lynk-color-success-200);
  }

  ::slotted(lynk-tr[state='warning']) {
    background: var(--lynk-color-warning-50);
  }

  ::slotted(lynk-tr[state='warning']:nth-child(even)) {
    background: var(--lynk-color-warning-200);
  }
`;

export {
  table_row_group_styles_default
};
