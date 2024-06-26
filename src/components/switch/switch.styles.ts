import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--lynk-toggle-size-small);
    --thumb-size: calc(var(--lynk-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--lynk-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--lynk-toggle-size-medium);
    --thumb-size: calc(var(--lynk-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--lynk-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--lynk-toggle-size-large);
    --thumb-size: calc(var(--lynk-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--lynk-input-font-size-large);
  }

  .lynk-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--lynk-input-font-family);
    font-size: inherit;
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
    transition:
      var(--lynk-transition-fast) border-color,
      var(--lynk-transition-fast) background-color;
  }

  .lynk-switch__control .lynk-switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--lynk-color-neutral-0);
    border-radius: 50%;
    border: solid var(--lynk-input-border-width) var(--lynk-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--lynk-transition-fast) translate ease,
      var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) border-color,
      var(--lynk-transition-fast) box-shadow;
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
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control {
    background-color: var(--lynk-color-neutral-400);
    border-color: var(--lynk-color-neutral-400);
  }

  .lynk-switch:not(.lynk-switch--checked):not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control
    .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  /* Checked  */
  .lynk-switch--checked .lynk-switch__control {
    background-color: var(--lynk-color-primary-600);
    border-color: var(--lynk-color-primary-600);
  }

  .lynk-switch--checked .lynk-switch__control .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
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
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control {
    background-color: var(--lynk-color-primary-600);
    border-color: var(--lynk-color-primary-600);
  }

  .lynk-switch.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control
    .lynk-switch__thumb {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-primary-600);
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
  }

  /* Success + Checked */
  .lynk-switch--checked.lynk-switch--success .lynk-switch__control {
    background-color: var(--lynk-color-success);
    border-color: var(--lynk-color-success);
  }

  .lynk-switch--checked.lynk-switch--success .lynk-switch__control .lynk-switch__thumb {
    border-color: var(--lynk-color-success);
  }

  /* Success + Checked + hover */
  .lynk-switch.lynk-switch--success.lynk-switch--checked:not(.lynk-switch--disabled) .lynk-switch__control:hover {
    background-color: var(--lynk-color-success);
    border-color: var(--lynk-color-success);
  }

  .lynk-switch.lynk-switch--success.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__control:hover
    .lynk-switch__thumb {
    border-color: var(--lynk-color-success);
  }

  /* Success + Checked + focus */
  .lynk-switch.lynk-switch--success.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control {
    background-color: var(--lynk-color-success);
    border-color: var(--lynk-color-success);
  }

  .lynk-switch.lynk-switch--success.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control
    .lynk-switch__thumb {
    border-color: var(--lynk-color-success);
  }

  /* Warning + Checked */
  .lynk-switch--checked.lynk-switch--warning .lynk-switch__control {
    background-color: var(--lynk-color-warning);
    border-color: var(--lynk-color-warning);
  }

  .lynk-switch--checked.lynk-switch--warning .lynk-switch__control .lynk-switch__thumb {
    border-color: var(--lynk-color-warning);
  }

  /* Warning + Checked + hover */
  .lynk-switch.lynk-switch--warning.lynk-switch--checked:not(.lynk-switch--disabled) .lynk-switch__control:hover {
    background-color: var(--lynk-color-warning);
    border-color: var(--lynk-color-warning);
  }

  .lynk-switch.lynk-switch--warning.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__control:hover
    .lynk-switch__thumb {
    border-color: var(--lynk-color-warning);
  }

  /* Warning + Checked + focus */
  .lynk-switch.lynk-switch--warning.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control {
    background-color: var(--lynk-color-warning);
    border-color: var(--lynk-color-warning);
  }

  .lynk-switch.lynk-switch--warning.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control
    .lynk-switch__thumb {
    border-color: var(--lynk-color-warning);
  }

  /* Danger + Checked */
  .lynk-switch--checked.lynk-switch--danger .lynk-switch__control {
    background-color: var(--lynk-color-danger);
    border-color: var(--lynk-color-danger);
  }

  .lynk-switch--checked.lynk-switch--danger .lynk-switch__control .lynk-switch__thumb {
    border-color: var(--lynk-color-danger);
  }

  /* Danger + Checked + hover */
  .lynk-switch.lynk-switch--danger.lynk-switch--checked:not(.lynk-switch--disabled) .lynk-switch__control:hover {
    background-color: var(--lynk-color-danger);
    border-color: var(--lynk-color-danger);
  }

  .lynk-switch.lynk-switch--danger.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__control:hover
    .lynk-switch__thumb {
    border-color: var(--lynk-color-danger);
  }

  /* Danger + Checked + focus */
  .lynk-switch.lynk-switch--danger.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control {
    background-color: var(--lynk-color-danger);
    border-color: var(--lynk-color-danger);
  }

  .lynk-switch.lynk-switch--danger.lynk-switch--checked:not(.lynk-switch--disabled)
    .lynk-switch__input:focus-visible
    ~ .lynk-switch__control
    .lynk-switch__thumb {
    border-color: var(--lynk-color-danger);
  }

  /* Disabled */
  .lynk-switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .lynk-switch__label::after {
    content: var(--lynk-input-required-content);
    margin-inline-start: var(--lynk-input-required-content-offset);
  }
`;
