import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/box/box.styles.ts
var box_styles_default = r`
  ${component_styles_default}

  :host {
    display: contents;
    --width: auto;
    --height: auto;
  }

  .lynk-box {
    display: block;
    background-color: var(--background, transparent);
    border-radius: var(--border-radius, 0);
    border: var(--border, none);
    color: var(--color, inherit);
    margin: var(--margin, 0px);
    padding: var(--padding, 0px);
    text-align: var(--text-align, left);
    box-shadow: var(--shadow, none);
    height: var(--height);
    width: var(--width);
  }

  .lynk-box--overflow {
    overflow-y: auto;
  }
`;

export {
  box_styles_default
};
