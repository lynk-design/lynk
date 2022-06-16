import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --border-color: var(--lynk-color-neutral-200);
    --border-radius: var(--lynk-border-radius-medium);
    --border-width: 1px;
    --padding: var(--lynk-spacing-large);

    display: inline-block;
  }

  .lynk-card {
    display: flex;
    flex-direction: column;
    background-color: var(--lynk-panel-background-color);
    box-shadow: var(--lynk-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .lynk-card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .lynk-card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .lynk-card:not(.lynk-card--has-image) .lynk-card__image {
    display: none;
  }

  .lynk-card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .lynk-card:not(.lynk-card--has-header) .lynk-card__header {
    display: none;
  }

  .lynk-card__body {
    padding: var(--padding);
  }

  .lynk-card--has-footer .lynk-card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .lynk-card:not(.lynk-card--has-footer) .lynk-card__footer {
    display: none;
  }
`;
