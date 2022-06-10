import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .l-radio {
    display: inline-flex;
    align-items: center;
    font-family: var(--l-input-font-family);
    font-size: var(--l-input-font-size-medium);
    font-weight: var(--l-input-font-weight);
    color: var(--l-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .l-radio__icon {
    display: inline-flex;
    width: var(--l-toggle-size);
    height: var(--l-toggle-size);
  }

  .l-radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .l-radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--l-toggle-size);
    height: var(--l-toggle-size);
    border: solid var(--l-input-border-width) var(--l-input-border-color);
    border-radius: 50%;
    background-color: var(--l-input-background-color);
    color: transparent;
    transition: var(--l-transition-fast) border-color, var(--l-transition-fast) background-color,
      var(--l-transition-fast) color, var(--l-transition-fast) box-shadow;
  }

  .l-radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .l-radio:not(.l-radio--checked):not(.l-radio--disabled) .l-radio__control:hover {
    border-color: var(--l-input-border-color-hover);
    background-color: var(--l-input-background-color-hover);
  }

  /* Focus */
  .l-radio:not(.l-radio--checked):not(.l-radio--disabled) .l-radio__input${focusVisibleSelector} ~ .l-radio__control {
    outline: var(--l-focus-ring);
    outline-offset: var(--l-focus-ring-offset);
  }

  /* Checked */
  .l-radio--checked .l-radio__control {
    color: var(--l-color-neutral-0);
    border-color: var(--l-color-primary-600);
    background-color: var(--l-color-primary-600);
  }

  /* Checked + hover */
  .l-radio.l-radio--checked:not(.l-radio--disabled) .l-radio__control:hover {
    border-color: var(--l-color-primary-500);
    background-color: var(--l-color-primary-500);
  }

  /* Checked + focus */
  .l-radio.l-radio--checked:not(.l-radio--disabled) .l-radio__input${focusVisibleSelector} ~ .l-radio__control {
    outline: var(--l-focus-ring);
    outline-offset: var(--l-focus-ring-offset);
  }

  /* Disabled */
  .l-radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .l-radio:not(.l-radio--checked) svg circle {
    opacity: 0;
  }

  .l-radio__label {
    line-height: var(--l-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
