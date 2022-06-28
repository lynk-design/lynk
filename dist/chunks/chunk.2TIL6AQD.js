import {
  component_styles_default
} from "./chunk.EEAXDKRP.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/visually-hidden/visually-hidden.styles.ts
var visually_hidden_styles_default = r`
  ${component_styles_default}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;

export {
  visually_hidden_styles_default
};