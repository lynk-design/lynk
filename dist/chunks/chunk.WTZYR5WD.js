import {
  component_styles_default
} from "./chunk.EEAXDKRP.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/radio-group/radio-group.styles.ts
var radio_group_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .lynk-radio-group {
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
    border-radius: var(--lynk-border-radius-medium);
    padding: var(--lynk-spacing-large);
    padding-top: var(--lynk-spacing-x-small);
  }

  .lynk-radio-group .lynk-radio-group__label {
    font-family: var(--lynk-input-font-family);
    font-size: var(--lynk-input-font-size-medium);
    font-weight: var(--lynk-input-font-weight);
    color: var(--lynk-input-color);
    padding: 0 var(--lynk-spacing-2x-small);
  }

  ::slotted(lynk-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--lynk-spacing-2x-small);
  }

  .lynk-radio-group:not(.lynk-radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .lynk-radio-group:not(.lynk-radio-group--has-fieldset) .lynk-radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

export {
  radio_group_styles_default
};
