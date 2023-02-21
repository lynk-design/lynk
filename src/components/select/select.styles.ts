import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  /** The popup */
  .lynk-select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .lynk-select::part(popup) {
    z-index: var(--lynk-z-index-dropdown);
  }

  .lynk-select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .lynk-select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .lynk-select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--lynk-input-font-family);
    font-weight: var(--lynk-input-font-weight);
    letter-spacing: var(--lynk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--lynk-transition-fast) color, var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow, var(--lynk-transition-fast) background-color;
  }

  .lynk-select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--lynk-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .lynk-select:not(.lynk-select--disabled):hover .lynk-select__display-input {
    color: var(--lynk-input-color-hover);
  }

  .lynk-select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .lynk-select--multiple:not(.lynk-select--placeholder-visible) .lynk-select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .lynk-select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .lynk-select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--lynk-spacing-2x-small);
  }

  .lynk-select__tags::slotted(lynk-tag) {
    cursor: pointer !important;
  }

  .lynk-select--disabled .lynk-select__tags,
  .lynk-select--disabled .lynk-select__tags::slotted(lynk-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .lynk-select--standard .lynk-select__combobox {
    background-color: var(--lynk-input-background-color);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
  }

  .lynk-select--standard.lynk-select--disabled .lynk-select__combobox {
    background-color: var(--lynk-input-background-color-disabled);
    border-color: var(--lynk-input-border-color-disabled);
    color: var(--lynk-input-color-disabled);
    opacity: 0.75;
    cursor: not-allowed;
    outline: none;
  }

  .lynk-select--standard:not(.lynk-select--disabled).lynk-select--open .lynk-select__combobox,
  .lynk-select--standard:not(.lynk-select--disabled).lynk-select--focused .lynk-select__combobox {
    background-color: var(--lynk-input-background-color-focus);
    border-color: var(--lynk-input-border-color-focus);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  /* Filled selects */
  .lynk-select--filled .lynk-select__combobox {
    border: none;
    background-color: var(--lynk-input-filled-background-color);
    color: var(--lynk-input-color);
  }

  .lynk-select--filled:hover:not(.lynk-select--disabled) .lynk-select__combobox {
    background-color: var(--lynk-input-filled-background-color-hover);
  }

  .lynk-select--filled.lynk-select--disabled .lynk-select__combobox {
    background-color: var(--lynk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-select--filled:not(.lynk-select--disabled).lynk-select--open .lynk-select__combobox,
  .lynk-select--filled:not(.lynk-select--disabled).lynk-select--focused .lynk-select__combobox {
    background-color: var(--lynk-input-filled-background-color-focus);
    outline: var(--lynk-focus-ring);
  }

  /* Sizes */
  .lynk-select--small .lynk-select__combobox {
    border-radius: var(--lynk-input-border-radius-small);
    font-size: var(--lynk-input-font-size-small);
    min-height: var(--lynk-input-height-small);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-small);
  }

  .lynk-select--small .lynk-select__clear {
    margin-inline-start: var(--lynk-input-spacing-small);
  }

  .lynk-select--small .lynk-select__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-small);
  }

  .lynk-select--small.lynk-select--multiple:not(.lynk-select--placeholder-visible) .lynk-select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .lynk-select--small .lynk-select__tags {
    gap: 2px;
  }

  .lynk-select--medium .lynk-select__combobox {
    border-radius: var(--lynk-input-border-radius-medium);
    font-size: var(--lynk-input-font-size-medium);
    min-height: var(--lynk-input-height-medium);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium .lynk-select__clear {
    margin-inline-start: var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium .lynk-select__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-medium);
  }

  .lynk-select--medium.lynk-select--multiple:not(.lynk-select--placeholder-visible) .lynk-select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .lynk-select--medium .lynk-select__tags {
    gap: 3px;
  }

  .lynk-select--large .lynk-select__combobox {
    border-radius: var(--lynk-input-border-radius-large);
    font-size: var(--lynk-input-font-size-large);
    min-height: var(--lynk-input-height-large);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-large);
  }

  .lynk-select--large .lynk-select__clear {
    margin-inline-start: var(--lynk-input-spacing-large);
  }

  .lynk-select--large .lynk-select__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-large);
  }

  .lynk-select--large.lynk-select--multiple:not(.lynk-select--placeholder-visible) .lynk-select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .lynk-select--large .lynk-select__tags {
    gap: 4px;
  }

  /* Pills */
  .lynk-select--pill.lynk-select--small .lynk-select__combobox {
    border-radius: var(--lynk-input-height-small);
  }

  .lynk-select--pill.lynk-select--medium .lynk-select__combobox {
    border-radius: var(--lynk-input-height-medium);
  }

  .lynk-select--pill.lynk-select--large .lynk-select__combobox {
    border-radius: var(--lynk-input-height-large);
  }

  /*
   * Error & Warning States
   */

  .lynk-select--has-error .lynk-select__combobox,
  .lynk-select--has-error:hover:not(.lynk-select--disabled) .lynk-select__combobox {
    border-color: var(--lynk-color-danger-500);
  }

  .lynk-select--has-error:not(.lynk-select--disabled).lynk-select--open .lynk-select__combobox,
  .lynk-select--has-error:not(.lynk-select--disabled).lynk-select--focused .lynk-select__combobox {
    border-color: var(--lynk-color-danger-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-danger-a50);
  }

  .lynk-select--has-warning .lynk-select__combobox,
  .lynk-select--has-warning:hover:not(.lynk-select--disabled) .lynk-select__combobox {
    border-color: var(--lynk-color-warning-500);
  }

  .lynk-select--has-warning:not(.lynk-select--disabled).lynk-select--open .lynk-select__combobox,
  .lynk-select--has-warning:not(.lynk-select--disabled).lynk-select--focused .lynk-select__combobox {
    border-color: var(--lynk-color-warning-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-warning-a50);
  }

  .lynk-select--has-success .lynk-select__combobox,
  .lynk-select--has-success:hover:not(.lynk-select--disabled) .lynk-select__combobox {
    border-color: var(--lynk-color-success-500);
  }

  .lynk-select--has-success:not(.lynk-select--disabled).lynk-select--open .lynk-select__combobox,
  .lynk-select--has-success:not(.lynk-select--disabled).lynk-select--focused .lynk-select__combobox {
    border-color: var(--lynk-color-success-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-success-a50);
  }

  /* Prefix */
  .lynk-select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--lynk-input-placeholder-color);
  }

  /* Clear button */
  .lynk-select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
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

  .lynk-select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .lynk-select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--lynk-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--lynk-spacing-small);
  }

  .lynk-select--open .lynk-select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .lynk-select__listbox {
    display: block;
    position: relative;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    box-shadow: var(--lynk-shadow-large);
    background: var(--lynk-panel-background-color);
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
    border-radius: var(--lynk-border-radius-medium);
    padding-block: var(--lynk-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .lynk-select__listbox::slotted(lynk-divider) {
    --spacing: var(--lynk-spacing-x-small);
  }

  .lynk-select__listbox::slotted(small) {
    font-size: var(--lynk-font-size-small);
    font-weight: var(--lynk-font-weight-semibold);
    color: var(--lynk-color-neutral-500);
    padding-block: var(--lynk-spacing-x-small);
    padding-inline: var(--lynk-spacing-x-large);
  }

  /*
   * Restricted
   */
  .lynk-select--restricted {
    opacity: 1 !important;
  }

  .lynk-select--restricted .lynk-select__combobox {
    border-color: transparent;
    cursor: initial;
    gap: 0;
  }

  .lynk-select--restricted .lynk-select__combobox,
  .lynk-select--restricted .lynk-select__tags {
    padding: 0;
    margin-inline-start: 0;
    user-select: text;
  }

  .lynk-select--restricted .lynk-select__expand-icon {
    display: none;
  }

  .lynk-select--restricted .lynk-select__expand-icon {
    display: none;
  }

  .lynk-select--restricted lynk-tag::part(base) {
    cursor: text;
    user-select: text;
  }
`;
