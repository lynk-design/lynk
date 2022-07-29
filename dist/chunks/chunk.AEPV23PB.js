import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/divider/divider.styles.ts
var divider_styles_default = r`
  ${component_styles_default}

  :host {
    --color: var(--lynk-panel-border-color);
    --width: var(--lynk-panel-border-width);
    --spacing: var(--lynk-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

export {
  divider_styles_default
};
