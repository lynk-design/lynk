import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css /* syntax: css */`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
    --width: 100%;
    width: var(--width);
  }

  .lynk-input {
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
    transition: var(--lynk-transition-fast) color, var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow, var(--lynk-transition-fast) background-color;
  }

  /* Standard inputs */
  .lynk-input--standard {
    background-color: var(--lynk-input-background-color);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
  }

  .lynk-input--standard:hover:not(.lynk-input--disabled) {
    background-color: var(--lynk-input-background-color-hover);
    border-color: var(--lynk-input-border-color-hover);
  }

  .lynk-input--standard.lynk-input--focused:not(.lynk-input--disabled) {
    background-color: var(--lynk-input-background-color-focus);
    border-color: var(--lynk-input-border-color-focus);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  .lynk-input--standard.lynk-input--focused:not(.lynk-input--disabled) .lynk-input__control {
    color: var(--lynk-input-color-focus);
  }

  .lynk-input--standard.lynk-input--disabled {
    background-color: var(--lynk-input-background-color-disabled);
    border-color: var(--lynk-input-border-color-disabled);
    opacity: 0.9;
    cursor: not-allowed;
  }

  .lynk-input--standard.lynk-input--disabled .lynk-input__control {
    color: var(--lynk-input-color-disabled);
  }

  .lynk-input--standard.lynk-input--disabled .lynk-input__control::placeholder {
    color: var(--lynk-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .lynk-input--filled {
    border: none;
    background-color: var(--lynk-input-filled-background-color);
    color: var(--lynk-input-color);
  }

  .lynk-input--filled:hover:not(.lynk-input--disabled) {
    background-color: var(--lynk-input-filled-background-color-hover);
  }

  .lynk-input--filled.lynk-input--focused:not(.lynk-input--disabled) {
    background-color: var(--lynk-input-filled-background-color-focus);
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-input--filled.lynk-input--disabled {
    background-color: var(--lynk-input-filled-background-color-disabled);
    opacity: 0.9;
    cursor: not-allowed;
  }

  /* Restricted Inputs */
  .lynk-input--restricted,
  .lynk-input--restricted:hover {
    border: none !important;
    background-color: transparent !important;
    cursor: default;
    color: var(--lynk-input-color);
  }

  .lynk-input--restricted .lynk-input__control {
    padding: 0 !important;
    cursor: text;
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
  }

  .lynk-input__control {
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

  .lynk-input__control::-webkit-search-decoration,
  .lynk-input__control::-webkit-search-cancel-button,
  .lynk-input__control::-webkit-search-results-button,
  .lynk-input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .lynk-input__control:-webkit-autofill,
  .lynk-input__control:-webkit-autofill:hover,
  .lynk-input__control:-webkit-autofill:focus,
  .lynk-input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--lynk-input-height-large) var(--lynk-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--lynk-input-color);
    caret-color: var(--lynk-input-color);
  }

  .lynk-input--filled .lynk-input__control:-webkit-autofill,
  .lynk-input--filled .lynk-input__control:-webkit-autofill:hover,
  .lynk-input--filled .lynk-input__control:-webkit-autofill:focus,
  .lynk-input--filled .lynk-input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--lynk-input-height-large) var(--lynk-input-filled-background-color) inset !important;
  }

  .lynk-input__control::placeholder {
    color: var(--lynk-input-placeholder-color);
    user-select: none;
  }

  .lynk-input:hover:not(.lynk-input--disabled) .lynk-input__control {
    color: var(--lynk-input-color-hover);
  }

  .lynk-input__control:focus {
    outline: none;
  }

  .lynk-input__prefix,
  .lynk-input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .lynk-input__prefix::slotted(lynk-icon),
  .lynk-input__suffix::slotted(lynk-icon) {
    color: var(--lynk-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .lynk-input--small {
    border-radius: var(--lynk-input-border-radius-small);
    font-size: var(--lynk-input-font-size-small);
    height: var(--lynk-input-height-small);
  }

  .lynk-input--small .lynk-input__control {
    height: calc(var(--lynk-input-height-small) - var(--lynk-input-border-width) * 2);
    padding: 0 var(--lynk-input-spacing-small);
  }

  .lynk-input--small .lynk-input__clear,
  .lynk-input--small .lynk-input__password-toggle {
    width: calc(1em + var(--lynk-input-spacing-small) * 2);
  }

  .lynk-input--small .lynk-input__prefix::slotted(*) {
    padding-inline-start: var(--lynk-input-spacing-small);
  }

  .lynk-input--small .lynk-input__suffix::slotted(*) {
    padding-inline-end: var(--lynk-input-spacing-small);
  }

  .lynk-input--medium {
    border-radius: var(--lynk-input-border-radius-medium);
    font-size: var(--lynk-input-font-size-medium);
    height: var(--lynk-input-height-medium);
  }

  .lynk-input--medium .lynk-input__control {
    height: calc(var(--lynk-input-height-medium) - var(--lynk-input-border-width) * 2);
    padding: 0 var(--lynk-input-spacing-medium);
  }

  .lynk-input--medium .lynk-input__clear,
  .lynk-input--medium .lynk-input__password-toggle {
    width: calc(1em + var(--lynk-input-spacing-medium) * 2);
  }

  .lynk-input--medium .lynk-input__prefix::slotted(*) {
    padding-inline-start: var(--lynk-input-spacing-medium);
  }

  .lynk-input--medium .lynk-input__suffix::slotted(*) {
    padding-inline-end: var(--lynk-input-spacing-medium);
  }

  .lynk-input--large {
    border-radius: var(--lynk-input-border-radius-large);
    font-size: var(--lynk-input-font-size-large);
    height: var(--lynk-input-height-large);
  }

  .lynk-input--large .lynk-input__control {
    height: calc(var(--lynk-input-height-large) - var(--lynk-input-border-width) * 2);
    padding: 0 var(--lynk-input-spacing-large);
  }

  .lynk-input--large .lynk-input__clear,
  .lynk-input--large .lynk-input__password-toggle {
    width: calc(1em + var(--lynk-input-spacing-large) * 2);
  }

  .lynk-input--large .lynk-input__prefix::slotted(*) {
    padding-inline-start: var(--lynk-input-spacing-large);
  }

  .lynk-input--large .lynk-input__suffix::slotted(*) {
    padding-inline-end: var(--lynk-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .lynk-input--pill.lynk-input--small {
    border-radius: var(--lynk-input-height-small);
  }

  .lynk-input--pill.lynk-input--medium {
    border-radius: var(--lynk-input-height-medium);
  }

  .lynk-input--pill.lynk-input--large {
    border-radius: var(--lynk-input-height-large);
  }

  /*
   * Error & Warning States
   */

  .lynk-input--has-error,
  .lynk-input--has-error:hover:not(.lynk-input--disabled) {
    border-color: var(--lynk-color-danger-500);
  }

  .lynk-input--has-error.lynk-input--focused:not(.lynk-input--disabled) {
    border-color: var(--lynk-color-danger-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-danger-a50);
  }

  .lynk-input--has-warning,
  .lynk-input--has-warning:hover:not(.lynk-input--disabled) {
    border-color: var(--lynk-color-warning-500);
  }

  .lynk-input--has-warning.lynk-input--focused:not(.lynk-input--disabled) {
    border-color: var(--lynk-color-warning-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-warning-a50);
  }

  .lynk-input--has-success,
  .lynk-input--has-success:hover:not(.lynk-input--disabled) {
    border-color: var(--lynk-color-success-500);
  }

  .lynk-input--has-success.lynk-input--focused:not(.lynk-input--disabled) {
    border-color: var(--lynk-color-success-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-success-a50);
  }

  /*
   * Clearable + Password Toggle
   */

  .lynk-input__clear,
  .lynk-input__password-toggle {
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

  .lynk-input__clear:hover,
  .lynk-input__password-toggle:hover {
    color: var(--lynk-input-icon-color-hover);
  }

  .lynk-input__clear:focus,
  .lynk-input__password-toggle:focus {
    outline: none;
  }

  .lynk-input--empty .lynk-input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .lynk-input--is-firefox input[type='date'],
  .lynk-input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .lynk-input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .lynk-input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .lynk-input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;
