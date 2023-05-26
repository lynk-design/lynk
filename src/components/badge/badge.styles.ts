import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
    --background-color: var(--lynk-color-primary-600);
    --color: var(--lynk-color-neutral-0);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--lynk-font-size-small);
    font-weight: var(--lynk-font-weight-semibold);
    letter-spacing: var(--lynk-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--lynk-border-radius-small);
    border: solid 1px var(--lynk-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    background-color: var(--background-color);
    color: var(--color);
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge.badge--primary {
    --background-color: var(--lynk-color-primary-600);
    --color: var(--lynk-color-neutral-0);
  }

  .badge.badge--success {
    --background-color: var(--lynk-color-success-600);
    --color: var(--lynk-color-neutral-0);
  }

  .badge.badge--neutral {
    --background-color: var(--lynk-color-neutral-600);
    --color: var(--lynk-color-neutral-0);
  }

  .badge.badge--warning {
    --background-color: var(--lynk-color-warning-600);
    --color: var(--lynk-color-neutral-0);
  }

  .badge.badge--danger {
    --background-color: var(--lynk-color-danger-600);
    --color: var(--lynk-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--lynk-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--background-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
