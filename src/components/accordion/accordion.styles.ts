import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .lynk-accordion {
    border: solid 1px var(--lynk-color-neutral-200);
    border-radius: var(--lynk-border-radius-medium);
    background-color: var(--lynk-color-neutral-0);
    overflow-anchor: none;
  }

  .lynk-accordion--disabled {
    opacity: 0.5;
  }

  .lynk-accordion__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--lynk-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .lynk-accordion__header:focus {
    outline: none;
  }

  .lynk-accordion__header:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: calc(1px + var(--lynk-focus-ring-offset));
  }

  .lynk-accordion--disabled .lynk-accordion__header {
    cursor: not-allowed;
  }

  .lynk-accordion--disabled .lynk-accordion__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .lynk-accordion__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .lynk-accordion__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--lynk-transition-medium) rotate ease;
  }

  .lynk-accordion--open .lynk-accordion__summary-icon {
    rotate: 90deg;
  }

  .lynk-accordion--open.lynk-accordion--rtl .lynk-accordion__summary-icon {
    rotate: -90deg;
  }

  .lynk-accordion--open slot[name='expand-icon'],
  .lynk-accordion:not(.lynk-accordion--open) slot[name='collapse-icon'] {
    display: none;
  }

  .lynk-accordion__body {
    overflow: hidden;
  }

  .lynk-accordion__content {
    display: block;
    padding: var(--lynk-spacing-medium);
  }
`;
