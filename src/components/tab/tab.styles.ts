import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .lynk-tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-small);
    font-weight: var(--lynk-font-weight-semibold);
    border-radius: var(--lynk-border-radius-medium);
    color: var(--lynk-color-neutral-600);
    padding: var(--lynk-spacing-medium) var(--lynk-spacing-large);
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

  .lynk-tab${focusVisibleSelector}:not(.lynk-tab--disabled) {
    color: var(--lynk-color-primary-600);
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
    font-size: var(--lynk-font-size-large);
    margin-inline-start: var(--lynk-spacing-2x-small);
  }

  .lynk-tab__close-button::part(base) {
    padding: var(--lynk-spacing-tiny);
  }
`;
