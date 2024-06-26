import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .lynk-textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--lynk-input-font-family);
    font-weight: var(--lynk-input-font-weight);
    line-height: var(--lynk-line-height-normal);
    letter-spacing: var(--lynk-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--lynk-transition-fast) color,
      var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow,
      var(--lynk-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .lynk-textarea--standard {
    background-color: var(--lynk-input-background-color);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
  }

  .lynk-textarea--standard:hover:not(.lynk-textarea--disabled) {
    background-color: var(--lynk-input-background-color-hover);
    border-color: var(--lynk-input-border-color-hover);
  }
  .lynk-textarea--standard:hover:not(.lynk-textarea--disabled) .lynk-textarea__control {
    color: var(--lynk-input-color-hover);
  }

  .lynk-textarea--standard.lynk-textarea--focused:not(.lynk-textarea--disabled) {
    background-color: var(--lynk-input-background-color-focus);
    border-color: var(--lynk-input-border-color-focus);
    color: var(--lynk-input-color-focus);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  .lynk-textarea--standard.lynk-textarea--focused:not(.lynk-textarea--disabled) .lynk-textarea__control {
    color: var(--lynk-input-color-focus);
  }

  .lynk-textarea--standard.lynk-textarea--disabled {
    background-color: var(--lynk-input-background-color-disabled);
    border-color: var(--lynk-input-border-color-disabled);
    opacity: 0.9;
    cursor: not-allowed;
  }

  .lynk-textarea--standard.lynk-textarea--disabled .lynk-textarea__control {
    color: var(--lynk-input-color-disabled);
  }

  .lynk-textarea--standard.lynk-textarea--disabled .lynk-textarea__control::placeholder {
    color: var(--lynk-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .lynk-textarea--filled {
    border: none;
    background-color: var(--lynk-input-filled-background-color);
    color: var(--lynk-input-color);
  }

  .lynk-textarea--filled:hover:not(.lynk-textarea--disabled) {
    background-color: var(--lynk-input-filled-background-color-hover);
  }

  .lynk-textarea--filled.lynk-textarea--focused:not(.lynk-textarea--disabled) {
    background-color: var(--lynk-input-filled-background-color-focus);
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-textarea--filled.lynk-textarea--disabled {
    background-color: var(--lynk-input-filled-background-color-disabled);
    opacity: 0.9;
    cursor: not-allowed;
  }

  .lynk-textarea.lynk-textarea--restricted {
    border: none;
    background-color: none;
    color: var(--lynk-input-color);
  }

  .lynk-textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--lynk-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .lynk-textarea__control--restricted {
    white-space: pre-line;
    padding: 0 !important;
  }

  .lynk-textarea__control::-webkit-search-decoration,
  .lynk-textarea__control::-webkit-search-cancel-button,
  .lynk-textarea__control::-webkit-search-results-button,
  .lynk-textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .lynk-textarea__control::placeholder {
    color: var(--lynk-input-placeholder-color);
    user-select: none;
  }

  .lynk-textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .lynk-textarea--small {
    border-radius: var(--lynk-input-border-radius-small);
    font-size: var(--lynk-input-font-size-small);
  }

  .lynk-textarea--small .lynk-textarea__control {
    padding: 0.5em var(--lynk-input-spacing-small);
  }

  .lynk-textarea--medium {
    border-radius: var(--lynk-input-border-radius-medium);
    font-size: var(--lynk-input-font-size-medium);
  }

  .lynk-textarea--medium .lynk-textarea__control {
    padding: 0.5em var(--lynk-input-spacing-medium);
  }

  .lynk-textarea--large {
    border-radius: var(--lynk-input-border-radius-large);
    font-size: var(--lynk-input-font-size-large);
  }

  .lynk-textarea--large .lynk-textarea__control {
    padding: 0.5em var(--lynk-input-spacing-large);
  }

  /*
   * Resize types
   */

  .lynk-textarea--resize-none .lynk-textarea__control {
    resize: none;
  }

  .lynk-textarea--resize-vertical .lynk-textarea__control {
    resize: vertical;
  }

  .lynk-textarea--resize-auto .lynk-textarea__control {
    height: auto;
    resize: none;
  }

  /*
   * Error & Warning States
   */

  .lynk-textarea--has-error,
  .lynk-textarea--has-error:hover:not(.lynk-textarea--disabled) {
    border-color: var(--lynk-color-danger-500);
  }

  .lynk-textarea--has-error.lynk-textarea--focused:not(.lynk-textarea--disabled) {
    border-color: var(--lynk-color-danger-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-danger-a50);
  }

  .lynk-textarea--has-warning,
  .lynk-textarea--has-warning:hover:not(.lynk-textarea--disabled) {
    border-color: var(--lynk-color-warning-500);
  }

  .lynk-textarea--has-warning.lynk-textarea--focused:not(.lynk-textarea--disabled) {
    border-color: var(--lynk-color-warning-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-warning-a50);
  }

  .lynk-textarea--has-success,
  .lynk-textarea--has-success:hover:not(.lynk-textarea--disabled) {
    border-color: var(--lynk-color-success-500);
  }

  .lynk-textarea--has-success.lynk-textarea--focused:not(.lynk-textarea--disabled) {
    border-color: var(--lynk-color-success-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-success-a50);
  }
`;
