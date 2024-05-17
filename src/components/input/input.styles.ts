import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
    --width: 100%;
    width: var(--width);
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    font-family: var(--lynk-input-font-family);
    font-weight: var(--lynk-input-font-weight);
    text-align: left;
    letter-spacing: var(--lynk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--lynk-transition-fast) color,
      var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow,
      var(--lynk-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--lynk-input-background-color);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--lynk-input-background-color-hover);
    border-color: var(--lynk-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--lynk-input-background-color-focus);
    border-color: var(--lynk-input-border-color-focus);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--lynk-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--lynk-input-background-color-disabled);
    border-color: var(--lynk-input-border-color-disabled);
    opacity: 0.9;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--lynk-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--lynk-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--lynk-input-filled-background-color);
    color: var(--lynk-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--lynk-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--lynk-input-filled-background-color-focus);
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--lynk-input-filled-background-color-disabled);
    opacity: 0.9;
    cursor: not-allowed;
  }

  /* Restricted Inputs */
  .input--restricted,
  .input--restricted:hover {
    border: none !important;
    background-color: transparent !important;
    cursor: default;
    color: var(--lynk-input-color);
  }

  .input--restricted .input__control {
    padding: 0 !important;
    cursor: text;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
  }


  /* Input Defaults */
  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--lynk-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--lynk-input-height-large) var(--lynk-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--lynk-input-color);
    caret-color: var(--lynk-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--lynk-input-height-large) var(--lynk-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--lynk-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--lynk-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(lynk-icon),
  .input__suffix::slotted(lynk-icon) {
    color: var(--lynk-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--lynk-input-border-radius-small);
    font-size: var(--lynk-input-font-size-small);
    height: var(--lynk-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--lynk-input-height-small) - var(--lynk-input-border-width) * 2);
    padding: 0 var(--lynk-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--lynk-input-spacing-small) *);
  }

  .input--small .input__prefix::slotted(*) {
    padding-inline-start: var(--lynk-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    padding-inline-end: var(--lynk-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--lynk-input-border-radius-medium);
    font-size: var(--lynk-input-font-size-medium);
    height: var(--lynk-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--lynk-input-height-medium) - var(--lynk-input-border-width) * 2);
    padding: 0 var(--lynk-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--lynk-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    padding-inline-start: var(--lynk-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    padding-inline-end: var(--lynk-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--lynk-input-border-radius-large);
    font-size: var(--lynk-input-font-size-large);
    height: var(--lynk-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--lynk-input-height-large) - var(--lynk-input-border-width) * 2);
    padding: 0 var(--lynk-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--lynk-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    padding-inline-start: var(--lynk-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    padding-inline-end: var(--lynk-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--lynk-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--lynk-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--lynk-input-height-large);
  }

  /*
   * Error & Warning States
   */

  .input--has-error,
  .input--has-error:hover:not(.input--disabled) {
    border-color: var(--lynk-color-danger-500);
  }

  .input--has-error.input--focused:not(.input--disabled) {
    border-color: var(--lynk-color-danger-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-danger-a50);
  }

  .input--has-warning,
  .input--has-warning:hover:not(.input--disabled) {
    border-color: var(--lynk-color-warning-500);
  }

  .input--has-warning.input--focused:not(.input--disabled) {
    border-color: var(--lynk-color-warning-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-warning-a50);
  }

  .input--has-success,
  .input--has-success:hover:not(.input--disabled) {
    border-color: var(--lynk-color-success-500);
  }

  .input--has-success.input--focused:not(.input--disabled) {
    border-color: var(--lynk-color-success-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-success-a50);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
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

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--lynk-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  /*
   * Date, Time, & DateTime-Local custom styling
  */

  .input__control::-webkit-calendar-picker-indicator { 
    cursor: pointer;
    opacity: 0.65;
    transition: var(--lynk-transition-fast) color;
  }

  .input__control::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
  }
`;
