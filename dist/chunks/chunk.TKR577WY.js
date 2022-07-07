import {
  component_styles_default
} from "./chunk.BBN5BSZB.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/menu/menu.styles.ts
var menu_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .lynk-menu {
    background: var(--lynk-panel-background-color);
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
    border-radius: var(--lynk-border-radius-medium);
    background: var(--lynk-panel-background-color);
    padding: var(--lynk-spacing-x-small) 0;
  }

  ::slotted(l-divider) {
    --spacing: var(--lynk-spacing-x-small);
  }
`;

export {
  menu_styles_default
};
