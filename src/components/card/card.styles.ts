import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --border-color: var(--lynk-color-neutral-200);
    --border-radius: var(--lynk-border-radius-medium);
    --border-width: 1px;
    --padding: var(--lynk-spacing-base);
    --state-color: var(--lynk-color-primary);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--lynk-panel-background-color);
    box-shadow: var(--lynk-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
    line-height: var(--lynk-line-height-dense);
    transition: var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow,
      var(--lynk-transition-fast) scale;
  }

  .card--pulse {
    animation: pulse 1.5s infinite;
  }

  .card--pulse.card--interactive:hover {
    animation: none;
  }

  .card--interactive:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px var(--state-color);
  }
  .card--interactive:active {
    scale: 1.05;
  }

  .card--active {
    box-shadow: 0 0 0 1px var(--state-color);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }

  /* Primary State */

  .card--primary {
    --state-color: var(--lynk-color-primary);
  }

  .card--primary.card--interactive:hover,
  .card--primary.card--active {
    box-shadow: 0 0 0 1px var(--lynk-color-primary);
  }

  /* Danger State */

  .card--danger {
    --state-color: var(--lynk-color-danger);
  }

  .card--danger.card--interactive:hover,
  .card--danger.card--active {
    box-shadow: 0 0 0 1px var(--lynk-color-danger);
  }

  /* Warning State */

  .card--warning {
    --state-color: var(--lynk-color-warning);
  }

  .card--warning.card--interactive:hover,
  .card--warning.card--active {
    box-shadow: 0 0 0 1px var(--lynk-color-warning);
  }

  /* Success State */

  .card--success {
    --state-color: var(--lynk-color-success);
  }

  .card--success.card--interactive:hover,
  .card--success.card--active {
    box-shadow: 0 0 0 1px var(--lynk-color-success);
  }

  /* Neutral State */

  .card--neutral {
    --state-color: var(--lynk-color-neutral);
  }

  .card--neutral.card--interactive:hover,
  .card--neutral.card--active {
    box-shadow: 0 0 0 1px var(--lynk-color-neutral);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 transparent;
    }
    50% {
      box-shadow: 0 0 0 1px var(--state-color);
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
