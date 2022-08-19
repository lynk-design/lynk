import {
  focusVisibleSelector
} from "./chunk.5OSOZA74.js";
import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/icon-button/icon-button.styles.ts
var icon_button_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
    --padding: var(--lynk-spacing-x-small);
  }

  .lynk-icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--lynk-border-radius-medium);
    font-size: inherit;
    color: var(--lynk-color-neutral-600);
    padding: var(--padding);
    cursor: pointer;
    transition: var(--lynk-transition-medium) color;
    -webkit-appearance: none;
  }

  .lynk-icon-button:hover:not(.lynk-icon-button--disabled),
  .lynk-icon-button:focus:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-primary-600);
  }

  .lynk-icon-button:active:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-primary-700);
  }

  .lynk-icon-button:focus {
    outline: none;
  }

  .lynk-icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-icon-button${focusVisibleSelector} {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-icon-button__icon {
    pointer-events: none;
  }
`;

export {
  icon_button_styles_default
};
