import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .lynk-checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--lynk-input-font-family);
    font-weight: var(--lynk-input-font-weight);
    color: var(--lynk-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .lynk-checkbox--small {
    --toggle-size: var(--lynk-toggle-size-small);
    font-size: var(--lynk-input-label-font-size-small);
  }

  .lynk-checkbox--medium {
    --toggle-size: var(--lynk-toggle-size-medium);
    font-size: var(--lynk-input-label-font-size-medium);
  }

  .lynk-checkbox--large {
    --toggle-size: var(--lynk-toggle-size-large);
    font-size: var(--lynk-input-label-font-size-large);
  }

  .lynk-checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
    border-radius: 2px;
    background-color: var(--lynk-input-background-color);
    color: var(--lynk-color-neutral-0);
    transition: var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) color, var(--lynk-transition-fast) box-shadow;
  }

  .lynk-checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .lynk-checkbox__checked-icon,
  .lynk-checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .lynk-checkbox:not(.lynk-checkbox--checked):not(.lynk-checkbox--disabled) .lynk-checkbox__control:hover {
    border-color: var(--lynk-input-border-color-hover);
    background-color: var(--lynk-input-background-color-hover);
  }

  /* Focus */
  .lynk-checkbox:not(.lynk-checkbox--checked):not(.lynk-checkbox--disabled)
    .lynk-checkbox__input:focus-visible
    ~ .lynk-checkbox__control {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .lynk-checkbox--checked .lynk-checkbox__control,
  .lynk-checkbox--indeterminate .lynk-checkbox__control {
    border-color: var(--lynk-color-primary-600);
    background-color: var(--lynk-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .lynk-checkbox.lynk-checkbox--checked:not(.lynk-checkbox--disabled) .lynk-checkbox__control:hover,
  .lynk-checkbox.lynk-checkbox--indeterminate:not(.lynk-checkbox--disabled) .lynk-checkbox__control:hover {
    border-color: var(--lynk-color-primary-500);
    background-color: var(--lynk-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .lynk-checkbox.lynk-checkbox--checked:not(.lynk-checkbox--disabled)
    .lynk-checkbox__input:focus-visible
    ~ .lynk-checkbox__control,
  .lynk-checkbox.lynk-checkbox--indeterminate:not(.lynk-checkbox--disabled)
    .lynk-checkbox__input:focus-visible
    ~ .lynk-checkbox__control {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Disabled */
  .lynk-checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-checkbox--has-label .lynk-checkbox__label {
    margin-inline-start: 0.5em;
  }

  .lynk-checkbox__label {
    display: inline-block;
    color: var(--lynk-input-label-color);
    font-size: inherit;
    line-height: var(--toggle-size);
    user-select: none;
  }

  :host([required]) .lynk-checkbox__label::after {
    content: var(--lynk-input-required-content);
    margin-inline-start: var(--lynk-input-required-content-offset);
  }

    /*
   * Error & Warning States
   */

  .lynk-checkbox--has-error .lynk-checkbox__control,
  .lynk-checkbox--has-error:not(.lynk-checkbox--checked):not(.lynk-checkbox--disabled) .lynk-checkbox__control:hover {
    border-color: var(--lynk-color-danger-500);
  }

  .lynk-checkbox--has-error.lynk-checkbox--focused:not(.lynk-checkbox--disabled) .lynk-checkbox__control {
    border-color: var(--lynk-color-danger-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-danger-a50);
  }

  .lynk-checkbox--has-error .lynk-checkbox__label {
    color: var(--lynk-color-danger-500);
  }

  .lynk-checkbox--has-error.lynk-checkbox--checked .lynk-checkbox__control {
    background-color: var(--lynk-color-success-500);
    outline: none;
  }

  .lynk-checkbox--has-warning .lynk-checkbox__control,
  .lynk-checkbox--has-warning:not(.lynk-checkbox--checked):not(.lynk-checkbox--disabled) .lynk-checkbox__control:hover {
    border-color: var(--lynk-color-warning-500);
  }

  .lynk-checkbox--has-warning.lynk-checkbox--focused:not(.lynk-checkbox--disabled) .lynk-checkbox__control {
    border-color: var(--lynk-color-warning-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-warning-a50);
  }

  .lynk-checkbox--has-warning .lynk-checkbox__label {
    color: var(--lynk-color-warning-500);
  }

  .lynk-checkbox--has-warning.lynk-checkbox--checked .lynk-checkbox__control {
    background-color: var(--lynk-color-warning-500);
    outline: none;
  }

  .lynk-checkbox--has-success .lynk-checkbox__control,
  .lynk-checkbox--has-success:not(.lynk-checkbox--checked):not(.lynk-checkbox--disabled) .lynk-checkbox__control:hover {
    border-color: var(--lynk-color-success-500);
  }

  .lynk-checkbox--has-success.lynk-checkbox--focused:not(.lynk-checkbox--disabled) .lynk-checkbox__control {
    border-color: var(--lynk-color-success-500);
    box-shadow: 0 0 2px var(--lynk-focus-ring-width) var(--lynk-color-success-a50);
  }

  .lynk-checkbox--has-success .lynk-checkbox__label {
    color: var(--lynk-color-success-500);
  }

  .lynk-checkbox--has-success.lynk-checkbox--checked .lynk-checkbox__control {
    background-color: var(--lynk-color-success-500);
    outline: none;
  }
`;
