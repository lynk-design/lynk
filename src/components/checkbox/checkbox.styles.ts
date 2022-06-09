import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--l-input-font-family);
    font-size: var(--l-input-font-size-medium);
    font-weight: var(--l-input-font-weight);
    color: var(--l-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--l-toggle-size);
    height: var(--l-toggle-size);
    border: solid var(--l-input-border-width) var(--l-input-border-color);
    border-radius: 2px;
    background-color: var(--l-input-background-color);
    color: var(--l-color-neutral-0);
    transition: var(--l-transition-fast) border-color, var(--l-transition-fast) background-color,
      var(--l-transition-fast) color, var(--l-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--l-toggle-size);
    height: var(--l-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--l-input-border-color-hover);
    background-color: var(--l-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    outline: var(--l-focus-ring);
    outline-offset: var(--l-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--l-color-primary-600);
    background-color: var(--l-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--l-color-primary-500);
    background-color: var(--l-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input${focusVisibleSelector} ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled)
    .checkbox__input${focusVisibleSelector}
    ~ .checkbox__control {
    outline: var(--l-focus-ring);
    outline-offset: var(--l-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--l-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
