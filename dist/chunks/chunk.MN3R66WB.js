import {
  form_control_styles_default
} from "./chunk.4TJNL2SI.js";
import {
  component_styles_default
} from "./chunk.BBN5BSZB.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/select/select.styles.ts
var select_styles_default = r`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .lynk-select {
    display: block;
  }

  .lynk-select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--lynk-input-font-family);
    font-weight: var(--lynk-input-font-weight);
    letter-spacing: var(--lynk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--lynk-transition-fast) color, var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow;
    cursor: pointer;
  }

  .lynk-select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .lynk-select--standard .lynk-select__control {
    background-color: var(--lynk-input-background-color);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
    color: var(--lynk-input-color);
  }

  .lynk-select--standard:not(.lynk-select--disabled) .lynk-select__control:hover {
    background-color: var(--lynk-input-background-color-hover);
    border-color: var(--lynk-input-border-color-hover);
    color: var(--lynk-input-color-hover);
  }

  .lynk-select--standard.lynk-select--focused:not(.lynk-select--disabled) .lynk-select__control {
    background-color: var(--lynk-input-background-color-focus);
    border-color: var(--lynk-input-border-color-focus);
    color: var(--lynk-input-color-focus);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
    outline: none;
  }

  .lynk-select--standard.lynk-select--disabled .lynk-select__control {
    background-color: var(--lynk-input-background-color-disabled);
    border-color: var(--lynk-input-border-color-disabled);
    color: var(--lynk-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .lynk-select--filled .lynk-select__control {
    border: none;
    background-color: var(--lynk-input-filled-background-color);
    color: var(--lynk-input-color);
  }

  .lynk-select--filled:hover:not(.lynk-select--disabled) .lynk-select__control {
    background-color: var(--lynk-input-filled-background-color-hover);
  }

  .lynk-select--filled.lynk-select--focused:not(.lynk-select--disabled) .lynk-select__control {
    background-color: var(--lynk-input-filled-background-color-focus);
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-select--filled.lynk-select--disabled .lynk-select__control {
    background-color: var(--lynk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-select--disabled .lynk-select__tags,
  .lynk-select--disabled .lynk-select__clear {
    pointer-events: none;
  }

  .lynk-select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--lynk-input-placeholder-color);
  }

  .lynk-select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .lynk-select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .lynk-select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--lynk-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--lynk-transition-fast) color;
    cursor: pointer;
  }

  .lynk-select__clear:hover {
    color: var(--lynk-input-icon-color-hover);
  }

  .lynk-select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--lynk-input-placeholder-color);
  }

  .lynk-select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--lynk-transition-medium) transform ease;
  }

  .lynk-select--open .lynk-select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .lynk-select--placeholder-visible .lynk-select__label {
    color: var(--lynk-input-placeholder-color);
  }

  .lynk-select--disabled.lynk-select--placeholder-visible .lynk-select__label {
    color: var(--lynk-input-placeholder-color-disabled);
  }

  /* Tags */
  .lynk-select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--lynk-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .lynk-select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .lynk-select--small .lynk-select__control {
    border-radius: var(--lynk-input-border-radius-small);
    font-size: var(--lynk-input-font-size-small);
    min-height: var(--lynk-input-height-small);
  }

  .lynk-select--small .lynk-select__prefix ::slotted(*) {
    margin-inline-start: var(--lynk-input-spacing-small);
  }

  .lynk-select--small .lynk-select__label {
    margin: 0 var(--lynk-input-spacing-small);
  }

  .lynk-select--small .lynk-select__clear {
    margin-inline-end: var(--lynk-input-spacing-small);
  }

  .lynk-select--small .lynk-select__suffix ::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-small);
  }

  .lynk-select--small .lynk-select__icon {
    margin-inline-end: var(--lynk-input-spacing-small);
  }

  .lynk-select--small .lynk-select__tags {
    padding-bottom: 2px;
  }

  .lynk-select--small .lynk-select__tags l-tag {
    padding-top: 2px;
  }

  .lynk-select--small .lynk-select__tags l-tag:not(:last-of-type) {
    margin-inline-end: var(--lynk-spacing-2x-small);
  }

  .lynk-select--small.lynk-select--has-tags .lynk-select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .lynk-select--medium .lynk-select__control {
    border-radius: var(--lynk-input-border-radius-medium);
    font-size: var(--lynk-input-font-size-medium);
    min-height: var(--lynk-input-height-medium);
  }

  .lynk-select--medium .lynk-select__prefix ::slotted(*) {
    margin-inline-start: var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium .lynk-select__label {
    margin: 0 var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium .lynk-select__clear {
    margin-inline-end: var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium .lynk-select__suffix ::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium .lynk-select__icon {
    margin-inline-end: var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium .lynk-select__tags {
    padding-bottom: 3px;
  }

  .lynk-select--medium .lynk-select__tags l-tag {
    padding-top: 3px;
  }

  .lynk-select--medium .lynk-select__tags l-tag:not(:last-of-type) {
    margin-inline-end: var(--lynk-spacing-2x-small);
  }

  .lynk-select--medium.lynk-select--has-tags .lynk-select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .lynk-select--large .lynk-select__control {
    border-radius: var(--lynk-input-border-radius-large);
    font-size: var(--lynk-input-font-size-large);
    min-height: var(--lynk-input-height-large);
  }

  .lynk-select--large .lynk-select__prefix ::slotted(*) {
    margin-inline-start: var(--lynk-input-spacing-large);
  }

  .lynk-select--large .lynk-select__label {
    margin: 0 var(--lynk-input-spacing-large);
  }

  .lynk-select--large .lynk-select__clear {
    margin-inline-end: var(--lynk-input-spacing-large);
  }

  .lynk-select--large .lynk-select__suffix ::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-large);
  }

  .lynk-select--large .lynk-select__icon {
    margin-inline-end: var(--lynk-input-spacing-large);
  }

  .lynk-select--large .lynk-select__tags {
    padding-bottom: 4px;
  }
  .lynk-select--large .lynk-select__tags l-tag {
    padding-top: 4px;
  }

  .lynk-select--large .lynk-select__tags l-tag:not(:last-of-type) {
    margin-inline-end: var(--lynk-spacing-2x-small);
  }

  .lynk-select--large.lynk-select--has-tags .lynk-select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .lynk-select--pill.lynk-select--small .lynk-select__control {
    border-radius: var(--lynk-input-height-small);
  }

  .lynk-select--pill.lynk-select--medium .lynk-select__control {
    border-radius: var(--lynk-input-height-medium);
  }

  .lynk-select--pill.lynk-select--large .lynk-select__control {
    border-radius: var(--lynk-input-height-large);
  }
`;

export {
  select_styles_default
};
