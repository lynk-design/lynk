import {
  focusVisibleSelector
} from "./chunk.5OSOZA74.js";
import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/radio/radio.styles.ts
var radio_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .lynk-radio {
    display: inline-flex;
    align-items: center;
    font-family: var(--lynk-input-font-family);
    font-size: var(--lynk-input-font-size-medium);
    font-weight: var(--lynk-input-font-weight);
    color: var(--lynk-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .lynk-radio__icon {
    display: inline-flex;
    width: var(--lynk-toggle-size);
    height: var(--lynk-toggle-size);
  }

  .lynk-radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .lynk-radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--lynk-toggle-size);
    height: var(--lynk-toggle-size);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
    border-radius: 50%;
    background-color: var(--lynk-input-background-color);
    color: transparent;
    transition: var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) color, var(--lynk-transition-fast) box-shadow;
  }

  .lynk-radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .lynk-radio:not(.lynk-radio--checked):not(.lynk-radio--disabled) .lynk-radio__control:hover {
    border-color: var(--lynk-input-border-color-hover);
    background-color: var(--lynk-input-background-color-hover);
  }

  /* Focus */
  .lynk-radio:not(.lynk-radio--checked):not(.lynk-radio--disabled)
    .lynk-radio__input${focusVisibleSelector}
    ~ .lynk-radio__control {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Checked */
  .lynk-radio--checked .lynk-radio__control {
    color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    background-color: var(--lynk-color-primary-600);
  }

  /* Checked + hover */
  .lynk-radio.lynk-radio--checked:not(.lynk-radio--disabled) .lynk-radio__control:hover {
    border-color: var(--lynk-color-primary-500);
    background-color: var(--lynk-color-primary-500);
  }

  /* Checked + focus */
  .lynk-radio.lynk-radio--checked:not(.lynk-radio--disabled)
    .lynk-radio__input${focusVisibleSelector}
    ~ .lynk-radio__control {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Disabled */
  .lynk-radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .lynk-radio:not(.lynk-radio--checked) svg circle {
    opacity: 0;
  }

  .lynk-radio__label {
    line-height: var(--lynk-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;

export {
  radio_styles_default
};
