import {
  focusVisibleSelector
} from "./chunk.5OSOZA74.js";
import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/menu-item/menu-item.styles.ts
var menu_item_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
    --color: var(--lynk-color-neutral-700);
    --hover-color: var(--lynk-color-primary-600);
  }

  .lynk-menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    line-height: var(--lynk-line-height-normal);
    letter-spacing: var(--lynk-letter-spacing-normal);
    color: var(--color);
    padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-2x-small);
    transition: var(--lynk-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .lynk-menu-item.lynk-menu-item--disabled {
    outline: none;
    color: var(--lynk-color-neutral-400);
    cursor: not-allowed;
  }

  .lynk-menu-item .lynk-menu-item__label {
    flex: 1 1 auto;
  }

  .lynk-menu-item .lynk-menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-menu-item .lynk-menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-menu-item .lynk-menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-menu-item .lynk-menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--lynk-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .lynk-menu-item,
  :host(${focusVisibleSelector}:not(.lynk-focus-invisible):not([aria-disabled='true'])) .lynk-menu-item {
    outline: none;
    background-color: var(--hover-color);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-menu-item .lynk-menu-item__check,
  .lynk-menu-item .lynk-menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .lynk-menu-item--checked .lynk-menu-item__check,
  .lynk-menu-item--has-submenu .lynk-menu-item__chevron {
    visibility: visible;
  }
`;

export {
  menu_item_styles_default
};
