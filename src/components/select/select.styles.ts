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
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--lynk-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  ::slotted(lynk-input) {
    padding: 0 var(--lynk-spacing-x-small);
    margin-bottom: var(--lynk-spacing-x-small);
  }

  ::slotted(lynk-spinner) {
    display: block;
    margin: var(--lynk-spacing-x-small) auto;
  }

  /* Combobox */
  .select__combobox {
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
    transition:
      var(--lynk-transition-fast) color,
      var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow,
      var(--lynk-transition-fast) background-color;
  }

  .select__display-input {
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

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--lynk-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
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

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--lynk-spacing-2x-small);
  }

  .select__tags::slotted(lynk-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(lynk-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--lynk-input-background-color);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--lynk-input-background-color-disabled);
    border-color: var(--lynk-input-border-color-disabled);
    color: var(--lynk-input-color-disabled);
    opacity: 0.75;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--lynk-input-background-color-focus);
    border-color: var(--lynk-input-border-color-focus);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--lynk-input-filled-background-color);
    color: var(--lynk-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--lynk-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--lynk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--lynk-input-filled-background-color-focus);
    outline: var(--lynk-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--lynk-input-border-radius-small);
    font-size: var(--lynk-input-font-size-small);
    min-height: var(--lynk-input-height-small);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--lynk-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--lynk-input-border-radius-medium);
    font-size: var(--lynk-input-font-size-medium);
    min-height: var(--lynk-input-height-medium);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--lynk-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--lynk-input-border-radius-large);
    font-size: var(--lynk-input-font-size-large);
    min-height: var(--lynk-input-height-large);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--lynk-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--lynk-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--lynk-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--lynk-input-height-large);
  }

  /*
   * Error & Warning States
   */

  .select--has-error .select__combobox,
  .select--has-error:hover:not(.select--disabled) .select__combobox {
    border-color: var(--lynk-color-danger-500);
  }

  .select--has-error:not(.select--disabled).select--open .select__combobox,
  .select--has-error:not(.select--disabled).select--focused .select__combobox {
    border-color: var(--lynk-color-danger-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-danger-a50);
  }

  .select--has-warning .select__combobox,
  .select--has-warning:hover:not(.select--disabled) .select__combobox {
    border-color: var(--lynk-color-warning-500);
  }

  .select--has-warning:not(.select--disabled).select--open .select__combobox,
  .select--has-warning:not(.select--disabled).select--focused .select__combobox {
    border-color: var(--lynk-color-warning-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-warning-a50);
  }

  .select--has-success .select__combobox,
  .select--has-success:hover:not(.select--disabled) .select__combobox {
    border-color: var(--lynk-color-success-500);
  }

  .select--has-success:not(.select--disabled).select--open .select__combobox,
  .select--has-success:not(.select--disabled).select--focused .select__combobox {
    border-color: var(--lynk-color-success-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-success-a50);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--lynk-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
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

  .select__clear:hover {
    color: var(--lynk-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--lynk-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--lynk-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
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

  .select__listbox ::slotted(lynk-divider) {
    --spacing: var(--lynk-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--lynk-font-size-small);
    font-weight: var(--lynk-font-weight-semibold);
    color: var(--lynk-color-neutral-500);
    padding-block: var(--lynk-spacing-x-small);
    padding-inline: var(--lynk-spacing-x-large);
  }

  /*
   * Restricted
   */
  .select--restricted {
    opacity: 1 !important;
  }

  .select--restricted .select__combobox {
    border-color: transparent;
    cursor: initial;
    gap: 0;
  }

  .select--restricted .select__combobox,
  .select--restricted .select__tags {
    padding: 0;
    margin-inline-start: 0;
    user-select: text;
  }

  .select--restricted .select__expand-icon {
    display: none;
  }

  .select--restricted .select__expand-icon {
    display: none;
  }

  .select--restricted lynk-tag::part(base) {
    cursor: text;
    user-select: text;
  }
`;
