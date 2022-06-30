import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --height: var(--lynk-toggle-size);
    --thumb-size: calc(var(--lynk-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .lynk-switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--lynk-input-font-family);
    font-size: var(--lynk-input-font-size-medium);
    font-weight: var(--lynk-input-font-weight);
    color: var(--lynk-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .lynk-switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--lynk-color-neutral-400);
    border: solid var(--lynk-input-border-width) var(--lynk-color-neutral-400);
    border-radius: var(--height);
    transition: var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) background-color;
  }

  .lynk-switch__control .lynk-switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--lynk-color-neutral-0);
    border-radius: 50%;
    border: solid var(--lynk-input-border-width) var(--lynk-color-neutral-400);
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--lynk-transition-fast) transform ease, var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) box-shadow;
  }

  .lynk-switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .lynk-switch:not(.lynk-switch--checked):not(.lynk-switch--disabled) .lynk-switch__control:hover {
    background-color: var(--lynk-color-neutral-400);
    border-color: var(--lynk-color-neutral-400);
  }

  .lynk-switch:not(.lynk-switch--checked):not(.lynk-switch--disabled) .lynk-switch__control:hover .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-neutral-400);
  }

  /* Focus */
  .lynk-switch:not(.lynk-switch--checked):not(.lynk-switch--disabled)
    .lynk-switch__input${focusVisibleSelector}
    ~ .lynk-switch__control {
    background-color: var(--lynk-color-neutral-400);
    border-color: var(--lynk-color-neutral-400);
  }

  .lynk-switch:not(.lynk-switch--checked):not(.lynk-switch--disabled)
    .lynk-switch__input${focusVisibleSelector}
    ~ .lynk-switch__control
    .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Checked */
  .lynk-switch--checked .lynk-switch__control {
    background-color: var(--lynk-color-primary-600);
    border-color: var(--lynk-color-primary-600);
  }

  .lynk-switch--checked .lynk-switch__control .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .lynk-switch.lynk-switch--checked:not(.lynk-switch--disabled) .lynk-switch__control:hover {
    background-color: var(--lynk-color-primary-600);
    border-color: var(--lynk-color-primary-600);
  }

  .lynk-switch.lynk-switch--checked:not(.lynk-switch--disabled) .lynk-switch__control:hover .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
  }

  /* Checked + focus */
  .lynk-switch.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input${focusVisibleSelector}
    ~ .lynk-switch__control {
    background-color: var(--lynk-color-primary-600);
    border-color: var(--lynk-color-primary-600);
  }

  .lynk-switch.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input${focusVisibleSelector}
    ~ .lynk-switch__control
    .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  /* Disabled */
  .lynk-switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-switch__label {
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
