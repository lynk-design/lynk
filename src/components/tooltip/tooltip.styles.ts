import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .lynk-tooltip {
    --arrow-size: var(--lynk-tooltip-arrow-size);
    --arrow-color: var(--lynk-tooltip-background-color);
  }

  .lynk-tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--lynk-z-index-tooltip);
  }

  .lynk-tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .lynk-tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .lynk-tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .lynk-tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .lynk-tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--lynk-tooltip-border-radius);
    background-color: var(--lynk-tooltip-background-color);
    font-family: var(--lynk-tooltip-font-family);
    font-size: var(--lynk-tooltip-font-size);
    font-weight: var(--lynk-tooltip-font-weight);
    line-height: var(--lynk-tooltip-line-height);
    color: var(--lynk-tooltip-color);
    padding: var(--lynk-tooltip-padding);
    pointer-events: none;
  }
`;
