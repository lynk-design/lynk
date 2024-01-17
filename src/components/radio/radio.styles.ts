import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .lynk-radio {
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--lynk-input-font-family);
    font-weight: var(--lynk-input-font-weight);
    color: var(--lynk-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .lynk-radio--small {
    --toggle-size: var(--lynk-toggle-size-small);
    font-size: var(--lynk-input-label-font-size-small);
  }

  .lynk-radio--medium {
    --toggle-size: var(--lynk-toggle-size-medium);
    font-size: var(--lynk-input-label-font-size-medium);
  }

  .lynk-radio--large {
    --toggle-size: var(--lynk-toggle-size-large);
    font-size: var(--lynk-input-label-font-size-large);
  }

  .lynk-radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .lynk-radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--lynk-input-border-width) var(--lynk-input-border-color);
    border-radius: 50%;
    background-color: var(--lynk-input-background-color);
    color: transparent;
    transition: var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) color, var(--lynk-transition-fast) box-shadow;
  }

  .lynk-radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .lynk-radio:not(.lynk-radio--checked):not(.lynk-radio--disabled) .lynk-radio__control:hover {
    border-color: var(--lynk-input-border-color-hover);
    background-color: var(--lynk-input-background-color-hover);
  }

  /* Checked */
  .lynk-radio--checked .lynk-radio__control {
    color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    background-color: var(--lynk-color-primary-600);
  }

  /* Checked + hover */
  .lynk-radio.lynk-radio--checked:not(.lynk-radio--disabled) .lynk-radio__control:hover {
    border-color: var(--lynk-color-primary-500);
    background-color: var(--lynk-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Disabled */
  .lynk-radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .lynk-radio:not(.lynk-radio--checked) svg circle {
    opacity: 0;
  }

  .lynk-radio__label {
    display: inline-block;
    color: var(--lynk-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
