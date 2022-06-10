import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --height: var(--l-toggle-size);
    --thumb-size: calc(var(--l-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .l-switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--l-input-font-family);
    font-size: var(--l-input-font-size-medium);
    font-weight: var(--l-input-font-weight);
    color: var(--l-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .l-switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--l-color-neutral-400);
    border: solid var(--l-input-border-width) var(--l-color-neutral-400);
    border-radius: var(--height);
    transition: var(--l-transition-fast) border-color, var(--l-transition-fast) background-color;
  }

  .l-switch__control .l-switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--l-color-neutral-0);
    border-radius: 50%;
    border: solid var(--l-input-border-width) var(--l-color-neutral-400);
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--l-transition-fast) transform ease, var(--l-transition-fast) background-color,
      var(--l-transition-fast) border-color, var(--l-transition-fast) box-shadow;
  }

  .l-switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .l-switch:not(.l-switch--checked):not(.l-switch--disabled) .l-switch__control:hover {
    background-color: var(--l-color-neutral-400);
    border-color: var(--l-color-neutral-400);
  }

  .l-switch:not(.l-switch--checked):not(.l-switch--disabled) .l-switch__control:hover .l-switch__thumb {
    background-color: var(--l-color-neutral-0);
    border-color: var(--l-color-neutral-400);
  }

  /* Focus */
  .l-switch:not(.l-switch--checked):not(.l-switch--disabled) .l-switch__input${focusVisibleSelector} ~ .l-switch__control {
    background-color: var(--l-color-neutral-400);
    border-color: var(--l-color-neutral-400);
  }

  .l-switch:not(.l-switch--checked):not(.l-switch--disabled)
    .l-switch__input${focusVisibleSelector}
    ~ .l-switch__control
    .l-switch__thumb {
    background-color: var(--l-color-neutral-0);
    border-color: var(--l-color-primary-600);
    outline: var(--l-focus-ring);
    outline-offset: var(--l-focus-ring-offset);
  }

  /* Checked */
  .l-switch--checked .l-switch__control {
    background-color: var(--l-color-primary-600);
    border-color: var(--l-color-primary-600);
  }

  .l-switch--checked .l-switch__control .l-switch__thumb {
    background-color: var(--l-color-neutral-0);
    border-color: var(--l-color-primary-600);
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .l-switch.l-switch--checked:not(.l-switch--disabled) .l-switch__control:hover {
    background-color: var(--l-color-primary-600);
    border-color: var(--l-color-primary-600);
  }

  .l-switch.l-switch--checked:not(.l-switch--disabled) .l-switch__control:hover .l-switch__thumb {
    background-color: var(--l-color-neutral-0);
    border-color: var(--l-color-primary-600);
  }

  /* Checked + focus */
  .l-switch.l-switch--checked:not(.l-switch--disabled) .l-switch__input${focusVisibleSelector} ~ .l-switch__control {
    background-color: var(--l-color-primary-600);
    border-color: var(--l-color-primary-600);
  }

  .l-switch.l-switch--checked:not(.l-switch--disabled)
    .l-switch__input${focusVisibleSelector}
    ~ .l-switch__control
    .l-switch__thumb {
    background-color: var(--l-color-neutral-0);
    border-color: var(--l-color-primary-600);
    outline: var(--l-focus-ring);
    outline-offset: var(--l-focus-ring-offset);
  }

  /* Disabled */
  .l-switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .l-switch__label {
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;
