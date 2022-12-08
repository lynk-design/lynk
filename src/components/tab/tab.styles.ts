import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    --padding: var(--lynk-spacing-small) var(--lynk-spacing-medium);
  }

  .lynk-tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-semibold);
    border-radius: var(--lynk-border-radius-medium);
    color: var(--lynk-color-neutral-600);
    padding: var(--padding);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .lynk-tab:hover:not(.lynk-tab--disabled) {
    color: var(--lynk-color-primary-600);
  }

  .lynk-tab:focus {
    outline: none;
  }

  .lynk-tab:focus-visible:not(.lynk-tab--disabled) {
    color: var(--lynk-color-primary-600);
  }

  .lynk-tab:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: calc(-1 * var(--lynk-focus-ring-width) - var(--lynk-focus-ring-offset));
  }

  .lynk-tab.lynk-tab--active:not(.lynk-tab--disabled) {
    color: var(--lynk-color-primary-600);
  }

  .lynk-tab.lynk-tab--closable {
    padding-inline-end: var(--lynk-spacing-small);
  }

  .lynk-tab.lynk-tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-tab__close-button {
    font-size: var(--lynk-font-size-small);
    margin-inline-start: var(--lynk-spacing-small);
  }

  .lynk-tab__close-button::part(base) {
    padding: var(--lynk-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .lynk-tab.lynk-tab--active:not(.lynk-tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
