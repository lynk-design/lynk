import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--l-font-sans);
    font-size: var(--l-font-size-small);
    font-weight: var(--l-font-weight-semibold);
    border-radius: var(--l-border-radius-medium);
    color: var(--l-color-neutral-600);
    padding: var(--l-spacing-medium) var(--l-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--l-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab${focusVisibleSelector}:not(.tab--disabled) {
    color: var(--l-color-primary-600);
    outline: var(--l-focus-ring);
    outline-offset: calc(-1 * var(--l-focus-ring-width) - var(--l-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--l-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--l-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--l-font-size-large);
    margin-inline-start: var(--l-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--l-spacing-3x-small);
  }
`;
