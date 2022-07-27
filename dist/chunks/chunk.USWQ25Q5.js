import {
  component_styles_default
} from "./chunk.BBN5BSZB.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/box/box.styles.ts
var box_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
    width: var(--width, 100%);
  }

  .lynk-box {
    background-color: var(--background, transparent);
    border-radius: var(--border-radius, 0);
    border: var(--border, none);
    color: var(--color, inherit);
    margin: var(--margin, 0px);
    padding: var(--padding, 0px);
    text-align: var(--text-align, left);
    box-shadow: var(--shadow, none);
    height: var(--height, auto);
  }

  .lynk-box--overflow {
    overflow-y: auto;
  }
`;

export {
  box_styles_default
};
