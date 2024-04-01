import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    --background-color: var(--lynk-color-neutral-50);
    --border-color: var(--lynk-color-neutral-300);
    --color: var(--lynk-color-neutral-900);
    --pulse-speed: 1.5s;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px var(--border-color);
    line-height: 1;
    white-space: nowrap;
    user-select: text;
    cursor: default;
    color: var(--color);
    background-color: var(--background-color);
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    --background-color: var(--lynk-color-primary-50);
    --border-color: var(--lynk-color-primary-300);
    --color: var(--lynk-color-primary-900);
  }

  .tag--success {
    --background-color: var(--lynk-color-success-50);
    --border-color: var(--lynk-color-success-300);
    --color: var(--lynk-color-success-900);
  }

  .tag--neutral {
    --background-color: var(--lynk-color-neutral-50);
    --border-color: var(--lynk-color-neutral-300);
    --color: var(--lynk-color-neutral-900);
  }

  .tag--warning {
    --background-color: var(--lynk-color-warning-50);
    --border-color: var(--lynk-color-warning-300);
    --color: var(--lynk-color-warning-900);
  }

  .tag--danger {
    --background-color: var(--lynk-color-danger-50);
    --border-color: var(--lynk-color-danger-300);
    --color: var(--lynk-color-danger-900);
  }

  .tag.tag--text {
    --background-color: var(--lynk-color-neutral-0);
    --border-color: var(--lynk-color-neutral-200);
    --color: var(--lynk-color-neutral-900);
    cursor: text;
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--lynk-button-font-size-small);
    height: calc(var(--lynk-input-height-small) * 0.8);
    line-height: calc(var(--lynk-input-height-small) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-small);
    padding: 0 var(--lynk-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--lynk-spacing-2x-small);
    margin-right: calc(-1 * var(--lynk-spacing-tiny));
  }

  .tag--medium {
    font-size: var(--lynk-button-font-size-medium);
    height: calc(var(--lynk-input-height-medium) * 0.8);
    line-height: calc(var(--lynk-input-height-medium) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-medium);
    padding: 0 var(--lynk-spacing-small);
  }

  .tag--large {
    font-size: var(--lynk-button-font-size-large);
    height: calc(var(--lynk-input-height-large) * 0.8);
    line-height: calc(var(--lynk-input-height-large) - var(--lynk-input-border-width) * 2);
    border-radius: var(--lynk-input-border-radius-large);
    padding: 0 var(--lynk-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--lynk-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--lynk-spacing-x-small));
  }

  /* Pill modifier */
  .tag--pill {
    border-radius: var(--lynk-border-radius-pill);
  }

  /* Badge modifier - draws it in a solid state like a badge */
  .tag--badge {
    --background-color: var(--border-color);
    border: solid 1px var(--lynk-color-neutral-0);
  }

  /* Pulse modifier */
  .tag--pulse {
    animation: pulse var(--pulse-speed) infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--border-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
