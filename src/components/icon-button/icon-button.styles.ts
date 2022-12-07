import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    --max-width: fit-content(20em);
    --padding: var(--lynk-spacing-x-small);
  }

  .lynk-icon-button {
    flex: 0 0 auto;
    display: flex;
    max-width: var(--max-width);
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--lynk-border-radius-medium);
    font-size: inherit;
    color: var(--lynk-color-neutral-600);
    padding: var(--padding);
    cursor: pointer;
    transition: var(--lynk-transition-medium) color;
    -webkit-appearance: none;
  }

  .lynk-icon-button:hover:not(.lynk-icon-button--disabled),
  .lynk-icon-button:focus:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-primary-600);
  }

  .lynk-icon-button:active:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-primary-700);
  }

  .lynk-icon-button:focus {
    outline: none;
  }

  .lynk-icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-icon-button__icon {
    pointer-events: none;
  }

  /* Primary */
    .lynk-icon-button.lynk-icon-button--primary {
    color: var(--lynk-color-primary-600);
  }

  .lynk-icon-button.lynk-icon-button--primary:hover:not(.lynk-icon-button--disabled),
  .lynk-icon-button.lynk-icon-button--primary:focus:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-primary-500);
  }

  .lynk-icon-button.lynk-icon-button--primary:active:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-primary-700);
  }

  /* Success */
    .lynk-icon-button.lynk-icon-button--success {
    color: var(--lynk-color-success-600);
  }

  .lynk-icon-button.lynk-icon-button--success:hover:not(.lynk-icon-button--disabled),
  .lynk-icon-button.lynk-icon-button--success:focus:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-success-500);
  }

  .lynk-icon-button.lynk-icon-button--success:active:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-success-700);
  }

  /* Neutral */
    .lynk-icon-button.lynk-icon-button--neutral {
    color: var(--lynk-color-neutral-600);
  }

  .lynk-icon-button.lynk-icon-button--neutral:hover:not(.lynk-icon-button--disabled),
  .lynk-icon-button.lynk-icon-button--neutral:focus:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-neutral-500);
  }

  .lynk-icon-button.lynk-icon-button--neutral:active:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-neutral-700);
  }

  /* Warning */
    .lynk-icon-button.lynk-icon-button--warning {
    color: var(--lynk-color-warning-600);
  }

  .lynk-icon-button.lynk-icon-button--warning:hover:not(.lynk-icon-button--disabled),
  .lynk-icon-button.lynk-icon-button--warning:focus:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-warning-500);
  }

  .lynk-icon-button.lynk-icon-button--warning:active:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-warning-700);
  }

  /* Danger */
    .lynk-icon-button.lynk-icon-button--danger {
    color: var(--lynk-color-danger-600);
  }

  .lynk-icon-button.lynk-icon-button--danger:hover:not(.lynk-icon-button--disabled),
  .lynk-icon-button.lynk-icon-button--danger:focus:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-danger-500);
  }

  .lynk-icon-button.lynk-icon-button--danger:active:not(.lynk-icon-button--disabled) {
    color: var(--lynk-color-danger-700);
  }


  .lynk-icon-button--has-prefix .lynk-icon-button__prefix {
    display: inline;
  }

  .lynk-icon-button--has-suffix .lynk-icon-button__suffix {
    display: inline;
  }

  .lynk-icon-button__prefix,
  .lynk-icon-button__suffix {
    padding: var(--padding);
    min-width: 0;
    flex: 1;
    display: none;
    align-items: center;
    pointer-events: none;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }

`;
