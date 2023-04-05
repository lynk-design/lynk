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
  .lynk-combobox {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .lynk-combobox::part(popup) {
    z-index: var(--lynk-z-index-dropdown);
  }

  .lynk-combobox[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .lynk-combobox[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .lynk-combobox__control {
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

  .lynk-combobox__display-input {
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

  .lynk-combobox:not(.lynk-combobox--disabled):hover .lynk-combobox__display-input {
    color: var(--lynk-input-color-hover);
  }

  .lynk-combobox__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .lynk-combobox--multiple:not(.lynk-combobox--placeholder-visible) .lynk-combobox__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .lynk-combobox__value-input {
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

  .lynk-combobox__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--lynk-spacing-2x-small);
  }

  .lynk-combobox__tags::slotted(lynk-tag) {
    cursor: pointer !important;
  }

  .lynk-combobox--disabled .lynk-combobox__tags,
  .lynk-combobox--disabled .lynk-combobox__tags::slotted(lynk-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .lynk-combobox--standard .lynk-combobox__control {
    background-color: var(--lynk-input-background-color);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
  }

  .lynk-combobox--standard.lynk-combobox--disabled .lynk-combobox__control {
    background-color: var(--lynk-input-background-color-disabled);
    border-color: var(--lynk-input-border-color-disabled);
    color: var(--lynk-input-color-disabled);
    opacity: 0.75;
    cursor: not-allowed;
    outline: none;
  }

  .lynk-combobox--standard:not(.lynk-combobox--disabled).lynk-combobox--open .lynk-combobox__control,
  .lynk-combobox--standard:not(.lynk-combobox--disabled).lynk-combobox--focused .lynk-combobox__control {
    background-color: var(--lynk-input-background-color-focus);
    border-color: var(--lynk-input-border-color-focus);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  /* Filled selects */
  .lynk-combobox--filled .lynk-combobox__control {
    border: none;
    background-color: var(--lynk-input-filled-background-color);
    color: var(--lynk-input-color);
  }

  .lynk-combobox--filled:hover:not(.lynk-combobox--disabled) .lynk-combobox__control {
    background-color: var(--lynk-input-filled-background-color-hover);
  }

  .lynk-combobox--filled.lynk-combobox--disabled .lynk-combobox__control {
    background-color: var(--lynk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-combobox--filled:not(.lynk-combobox--disabled).lynk-combobox--open .lynk-combobox__control,
  .lynk-combobox--filled:not(.lynk-combobox--disabled).lynk-combobox--focused .lynk-combobox__control {
    background-color: var(--lynk-input-filled-background-color-focus);
    outline: var(--lynk-focus-ring);
  }

  /* Sizes */
  .lynk-combobox--small .lynk-combobox__control {
    border-radius: var(--lynk-input-border-radius-small);
    font-size: var(--lynk-input-font-size-small);
    min-height: var(--lynk-input-height-small);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-small);
  }

  .lynk-combobox--small .lynk-combobox__clear-btn,
  .lynk-combobox--small .lynk-combobox__expand-btn, {
    margin-inline-start: var(--lynk-input-spacing-small);
  }

  .lynk-combobox--small .lynk-combobox__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-small);
  }

  .lynk-combobox--small.lynk-combobox--multiple:not(.lynk-combobox--placeholder-visible) .lynk-combobox__control {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .lynk-combobox--small .lynk-combobox__tags {
    gap: 2px;
  }

  .lynk-combobox--medium .lynk-combobox__control {
    border-radius: var(--lynk-input-border-radius-medium);
    font-size: var(--lynk-input-font-size-medium);
    min-height: var(--lynk-input-height-medium);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-medium);
  }

  .lynk-combobox--medium .lynk-combobox__clear-btn,
  .lynk-combobox--medium .lynk-combobox__expand-btn {
    margin-inline-start: var(--lynk-input-spacing-medium);
  }

  .lynk-combobox--medium .lynk-combobox__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-medium);
  }

  .lynk-combobox--medium.lynk-combobox--multiple:not(.lynk-combobox--placeholder-visible) .lynk-combobox__control {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .lynk-combobox--medium .lynk-combobox__tags {
    gap: 3px;
  }

  .lynk-combobox--large .lynk-combobox__control {
    border-radius: var(--lynk-input-border-radius-large);
    font-size: var(--lynk-input-font-size-large);
    min-height: var(--lynk-input-height-large);
    padding-block: 0;
    padding-inline: var(--lynk-input-spacing-large);
  }

  .lynk-combobox--large .lynk-combobox__clear-btn,
  .lynk-combobox--large .lynk-combobox__expand-btn, {
    margin-inline-start: var(--lynk-input-spacing-large);
  }

  .lynk-combobox--large .lynk-combobox__prefix::slotted(*) {
    margin-inline-end: var(--lynk-input-spacing-large);
  }

  .lynk-combobox--large.lynk-combobox--multiple:not(.lynk-combobox--placeholder-visible) .lynk-combobox__control {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .lynk-combobox--large .lynk-combobox__tags {
    gap: 4px;
  }

  /* Pills */
  .lynk-combobox--pill.lynk-combobox--small .lynk-combobox__control {
    border-radius: var(--lynk-input-height-small);
  }

  .lynk-combobox--pill.lynk-combobox--medium .lynk-combobox__control {
    border-radius: var(--lynk-input-height-medium);
  }

  .lynk-combobox--pill.lynk-combobox--large .lynk-combobox__control {
    border-radius: var(--lynk-input-height-large);
  }

  /*
   * Error & Warning States
   */

  .lynk-combobox--has-error .lynk-combobox__control,
  .lynk-combobox--has-error:hover:not(.lynk-combobox--disabled) .lynk-combobox__control {
    border-color: var(--lynk-color-danger-500);
  }

  .lynk-combobox--has-error:not(.lynk-combobox--disabled).lynk-combobox--open .lynk-combobox__control,
  .lynk-combobox--has-error:not(.lynk-combobox--disabled).lynk-combobox--focused .lynk-combobox__control {
    border-color: var(--lynk-color-danger-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-danger-a50);
  }

  .lynk-combobox--has-warning .lynk-combobox__control,
  .lynk-combobox--has-warning:hover:not(.lynk-combobox--disabled) .lynk-combobox__control {
    border-color: var(--lynk-color-warning-500);
  }

  .lynk-combobox--has-warning:not(.lynk-combobox--disabled).lynk-combobox--open .lynk-combobox__control,
  .lynk-combobox--has-warning:not(.lynk-combobox--disabled).lynk-combobox--focused .lynk-combobox__control {
    border-color: var(--lynk-color-warning-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-warning-a50);
  }

  .lynk-combobox--has-success .lynk-combobox__control,
  .lynk-combobox--has-success:hover:not(.lynk-combobox--disabled) .lynk-combobox__control {
    border-color: var(--lynk-color-success-500);
  }

  .lynk-combobox--has-success:not(.lynk-combobox--disabled).lynk-combobox--open .lynk-combobox__control,
  .lynk-combobox--has-success:not(.lynk-combobox--disabled).lynk-combobox--focused .lynk-combobox__control {
    border-color: var(--lynk-color-success-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-success-a50);
  }

  /* Prefix */
  .lynk-combobox__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--lynk-input-placeholder-color);
  }

  /* Clear/Expand button */
  .lynk-combobox__clear-btn,
  .lynk-combobox__expand-btn {
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

  .lynk-combobox__clear-btn:hover,
  .lynk-combobox__expand-btn:hover {
    color: var(--lynk-input-icon-color-hover);
  }

  .lynk-combobox__clear-btn:focus,
  .lynk-combobox__expand-btn:focus {
    outline: none;
  }

  /* Expand icon */
  .lynk-combobox__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--lynk-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--lynk-spacing-small);
  }

  .lynk-combobox--open .lynk-combobox__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .lynk-combobox__listbox {
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

  .lynk-combobox__listbox::slotted(lynk-divider) {
    --spacing: var(--lynk-spacing-x-small);
  }

  .lynk-combobox__listbox::slotted(small) {
    font-size: var(--lynk-font-size-small);
    font-weight: var(--lynk-font-weight-semibold);
    color: var(--lynk-color-neutral-500);
    padding-block: var(--lynk-spacing-x-small);
    padding-inline: var(--lynk-spacing-x-large);
  }

  .lynk-combobox__listbox-empty {
    display: block;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    color: var(--lynk-color-neutral-500);
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-medium);
  }

  /*
   * Restricted
   */
  .lynk-combobox--restricted {
    opacity: 1 !important;
  }

  .lynk-combobox--restricted .lynk-combobox__control {
    border-color: transparent;
    cursor: initial;
    gap: 0;
  }

  .lynk-combobox--restricted .lynk-combobox__control,
  .lynk-combobox--restricted .lynk-combobox__tags {
    padding: 0;
    margin-inline-start: 0;
    user-select: text;
  }

  .lynk-combobox--restricted .lynk-combobox__clear-btn,
  .lynk-combobox--restricted .lynk-combobox__expand-btn, {
    display: none;
  }

  .lynk-combobox--restricted lynk-tag::part(base) {
    cursor: text;
    user-select: text;
  }
`;
