import {
  component_styles_default
} from "./chunk.EEAXDKRP.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/tag/tag.styles.ts
var tag_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--lynk-color-primary-50);
    border-color: var(--lynk-color-primary-200);
    color: var(--lynk-color-primary-800);
  }

  .tag--success {
    background-color: var(--lynk-color-success-50);
    border-color: var(--lynk-color-success-200);
    color: var(--lynk-color-success-800);
  }

  .tag--neutral {
    background-color: var(--lynk-color-neutral-50);
    border-color: var(--lynk-color-neutral-200);
    color: var(--lynk-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--lynk-color-warning-50);
    border-color: var(--lynk-color-warning-200);
    color: var(--lynk-color-warning-800);
  }

  .tag--danger {
    background-color: var(--lynk-color-danger-50);
    border-color: var(--lynk-color-danger-200);
    color: var(--lynk-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--lynk-button-font-size-small);
    height: calc(var(--lynk-input-height-small) * 0.8);
    line-height: calc(var(--lynk-input-height-small) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-small);
    padding: 0 var(--lynk-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--lynk-spacing-2x-small);
    margin-right: calc(-1 * var(--lynk-spacing-tiny));
  }

  .tag--medium {
    font-size: var(--lynk-button-font-size-medium);
    height: calc(var(--lynk-input-height-medium) * 0.8);
    line-height: calc(var(--lynk-input-height-medium) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-medium);
    padding: 0 var(--lynk-spacing-small);
  }

  .tag--large {
    font-size: var(--lynk-button-font-size-large);
    height: calc(var(--lynk-input-height-large) * 0.8);
    line-height: calc(var(--lynk-input-height-large) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-large);
    padding: 0 var(--lynk-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--lynk-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--lynk-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--lynk-border-radius-pill);
  }
`;

export {
  tag_styles_default
};