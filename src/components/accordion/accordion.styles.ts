import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --header-spacing: var(--lynk-spacing-medium);
    --body-spacing: var(--lynk-spacing-medium);
    --footer-spacing: var(--lynk-spacing-medium);
    --background-color: var(--lynk-color-neutral-50);
  }

  .accordion {
    border: solid 1px var(--lynk-color-neutral-200);
    border-radius: var(--lynk-border-radius-medium);
    background-color: var(--background-color);
    overflow-anchor: none;
  }

  .accordion--disabled {
    opacity: 0.5;
  }

  .accordion__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--header-spacing);
    user-select: none;
    cursor: pointer;
    gap: var(--lynk-spacing-x-small);
  }

  .accordion__header:focus {
    outline: none;
  }

  .accordion__header:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: calc(1px + var(--lynk-focus-ring-offset));
  }

  .accordion--disabled .accordion__header {
    cursor: not-allowed;
  }

  .accordion--disabled .accordion__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .accordion__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .accordion__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--lynk-transition-medium) rotate ease;
  }

  .accordion--open .accordion__summary-icon {
    rotate: 90deg;
  }

  .accordion--open.accordion--rtl .accordion__summary-icon {
    rotate: -90deg;
  }

  .accordion--open slot[name='expand-icon'],
  .accordion:not(.accordion--open) slot[name='collapse-icon'] {
    display: none;
  }

  .accordion__body {
    overflow: hidden;
  }

  .accordion__content {
    display: block;
    padding: var(--body-spacing);
  }

  .accordion__footer {
    display: flex;
    padding: var(--footer-spacing);
    gap: var(--lynk-spacing-2x-small);
  }

  .accordion:not(.accordion--has-footer) .accordion__footer {
    display: none;
  }
`;
