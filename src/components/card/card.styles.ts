import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --border-color: var(--lynk-color-neutral-200);
    --border-radius: var(--lynk-border-radius-medium);
    --border-width: 1px;
    --padding: var(--lynk-spacing-base);
    --pulse-speed: 1.5s;
    --state-color: var(--lynk-color-primary);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    font-size: var(--lynk-font-size-medium);
    line-height: var(--lynk-line-height-dense);
    background-color: var(--lynk-panel-background-color);
    box-shadow: var(--lynk-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
    line-height: var(--lynk-line-height-dense);
    transition:
      var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow,
      var(--lynk-transition-fast) transform;
  }

  /* Primary State */
  .card--primary {
    --state-color: var(--lynk-color-primary);
    border: solid var(--border-width) var(--state-color);
  }

  /* Danger State */
  .card--danger {
    --state-color: var(--lynk-color-danger);
    border: solid var(--border-width) var(--state-color);
  }

  /* Warning State */
  .card--warning {
    --state-color: var(--lynk-color-warning);
    border: solid var(--border-width) var(--state-color);
  }

  /* Success State */
  .card--success {
    --state-color: var(--lynk-color-success);
    border: solid var(--border-width) var(--state-color);
  }

  /* Neutral State */
  .card--neutral {
    --state-color: var(--lynk-color-neutral);
    border: solid var(--border-width) var(--state-color);
  }

  .card--pulse {
    animation: pulse var(--pulse-speed) infinite;
  }

  .card--pulse.card--interactive:hover {
    animation: none;
  }

  .card--interactive:hover {
    cursor: pointer;
    border: solid var(--border-width) var(--state-color);
    box-shadow: var(--lynk-shadow-medium);
  }
  .card--interactive:active {
    transform: translateY(-4px);
    box-shadow: var(--lynk-shadow-large);
  }

  .card--active {
    border: solid var(--border-width) var(--state-color);
    box-shadow: var(--lynk-shadow-large);
  }

  .card__image {
    display: flex;
    border: 1px solid transparent;
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

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--state-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
