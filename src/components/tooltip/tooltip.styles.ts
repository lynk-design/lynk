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

  .lynk-tooltip-target {
    display: contents;
  }

  .lynk-tooltip-positioner {
    position: absolute;
    z-index: var(--lynk-z-index-tooltip);
    pointer-events: none;
  }

  .lynk-tooltip-positioner[data-placement^='top'] .lynk-tooltip {
    transform-origin: bottom;
  }

  .lynk-tooltip-positioner[data-placement^='bottom'] .lynk-tooltip {
    transform-origin: top;
  }

  .lynk-tooltip-positioner[data-placement^='left'] .lynk-tooltip {
    transform-origin: right;
  }

  .lynk-tooltip-positioner[data-placement^='right'] .lynk-tooltip {
    transform-origin: left;
  }

  .lynk-tooltip__content {
    max-width: var(--max-width);
    border-radius: var(--lynk-tooltip-border-radius);
    background-color: var(--lynk-tooltip-background-color);
    font-family: var(--lynk-tooltip-font-family);
    font-size: var(--lynk-tooltip-font-size);
    font-weight: var(--lynk-tooltip-font-weight);
    line-height: var(--lynk-tooltip-line-height);
    color: var(--lynk-tooltip-color);
    padding: var(--lynk-tooltip-padding);
  }

  .lynk-tooltip__arrow {
    position: absolute;
    background: var(--lynk-tooltip-background-color);
    width: calc(var(--lynk-tooltip-arrow-size) * 2);
    height: calc(var(--lynk-tooltip-arrow-size) * 2);
    transform: rotate(45deg);
    z-index: -1;
  }
`;
