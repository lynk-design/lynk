import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .lynk-tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .lynk-tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .lynk-tag--primary {
    background-color: var(--lynk-color-primary-50);
    border-color: var(--lynk-color-primary-200);
    color: var(--lynk-color-primary-800);
  }

  .lynk-tag--success {
    background-color: var(--lynk-color-success-50);
    border-color: var(--lynk-color-success-200);
    color: var(--lynk-color-success-800);
  }

  .lynk-tag--neutral {
    background-color: var(--lynk-color-neutral-50);
    border-color: var(--lynk-color-neutral-200);
    color: var(--lynk-color-neutral-800);
  }

  .lynk-tag--warning {
    background-color: var(--lynk-color-warning-50);
    border-color: var(--lynk-color-warning-200);
    color: var(--lynk-color-warning-800);
  }

  .lynk-tag--danger {
    background-color: var(--lynk-color-danger-50);
    border-color: var(--lynk-color-danger-200);
    color: var(--lynk-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .lynk-tag--small {
    font-size: var(--lynk-button-font-size-small);
    height: calc(var(--lynk-input-height-small) * 0.8);
    line-height: calc(var(--lynk-input-height-small) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-small);
    padding: 0 var(--lynk-spacing-x-small);
  }

  .lynk-tag--small .lynk-tag__remove {
    margin-inline-start: var(--lynk-spacing-2x-small);
    margin-right: calc(-1 * var(--lynk-spacing-tiny));
  }

  .lynk-tag--medium {
    font-size: var(--lynk-button-font-size-medium);
    height: calc(var(--lynk-input-height-medium) * 0.8);
    line-height: calc(var(--lynk-input-height-medium) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-medium);
    padding: 0 var(--lynk-spacing-small);
  }

  .lynk-tag--large {
    font-size: var(--lynk-button-font-size-large);
    height: calc(var(--lynk-input-height-large) * 0.8);
    line-height: calc(var(--lynk-input-height-large) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-large);
    padding: 0 var(--lynk-spacing-medium);
  }

  .lynk-tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--lynk-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--lynk-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .lynk-tag--pill {
    border-radius: var(--lynk-border-radius-pill);
  }
`;
