import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--l-color-primary-50);
    border-color: var(--l-color-primary-200);
    color: var(--l-color-primary-800);
  }

  .tag--success {
    background-color: var(--l-color-success-50);
    border-color: var(--l-color-success-200);
    color: var(--l-color-success-800);
  }

  .tag--neutral {
    background-color: var(--l-color-neutral-50);
    border-color: var(--l-color-neutral-200);
    color: var(--l-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--l-color-warning-50);
    border-color: var(--l-color-warning-200);
    color: var(--l-color-warning-800);
  }

  .tag--danger {
    background-color: var(--l-color-danger-50);
    border-color: var(--l-color-danger-200);
    color: var(--l-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--l-button-font-size-small);
    height: calc(var(--l-input-height-small) * 0.8);
    line-height: calc(var(--l-input-height-small) - var(--l-input-border-width) * 2);
    border-radius: var(--l-input-border-radius-small);
    padding: 0 var(--l-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--l-spacing-2x-small);
    margin-right: calc(-1 * var(--l-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--l-button-font-size-medium);
    height: calc(var(--l-input-height-medium) * 0.8);
    line-height: calc(var(--l-input-height-medium) - var(--l-input-border-width) * 2);
    border-radius: var(--l-input-border-radius-medium);
    padding: 0 var(--l-spacing-small);
  }

  .tag--large {
    font-size: var(--l-button-font-size-large);
    height: calc(var(--l-input-height-large) * 0.8);
    line-height: calc(var(--l-input-height-large) - var(--l-input-border-width) * 2);
    border-radius: var(--l-input-border-radius-large);
    padding: 0 var(--l-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--l-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--l-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--l-border-radius-pill);
  }
`;
