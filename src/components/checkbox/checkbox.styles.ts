import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .lynk-checkbox {
    display: inline-flex;
    align-items: top;
    font-family: var(--lynk-input-font-family);
    font-size: var(--lynk-input-font-size-medium);
    font-weight: var(--lynk-input-font-weight);
    color: var(--lynk-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .lynk-checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--lynk-toggle-size);
    height: var(--lynk-toggle-size);
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

  .lynk-checkbox__control .lynk-checkbox__icon {
    display: inline-flex;
    width: var(--lynk-toggle-size);
    height: var(--lynk-toggle-size);
  }

  /* Hover */
  .lynk-checkbox:not(.lynk-checkbox--checked):not(.lynk-checkbox--disabled) .lynk-checkbox__control:hover {
    border-color: var(--lynk-input-border-color-hover);
    background-color: var(--lynk-input-background-color-hover);
  }

  /* Focus */
  .lynk-checkbox:not(.lynk-checkbox--checked):not(.lynk-checkbox--disabled) .lynk-checkbox__input:focus-visible ~ .lynk-checkbox__control {
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
  .lynk-checkbox.lynk-checkbox--checked:not(.lynk-checkbox--disabled) .lynk-checkbox__input:focus-visible ~ .lynk-checkbox__control,
  .lynk-checkbox.lynk-checkbox--indeterminate:not(.lynk-checkbox--disabled) .lynk-checkbox__input:focus-visible ~ .lynk-checkbox__control {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Disabled */
  .lynk-checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-checkbox__label {
    display: inline-block;
    color: var(--lynk-input-label-color);
    line-height: var(--lynk-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .lynk-checkbox__label::after {
    content: var(--lynk-input-required-content);
    margin-inline-start: var(--lynk-input-required-content-offset);
  }
`;
