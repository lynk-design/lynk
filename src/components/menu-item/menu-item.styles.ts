import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .l-menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--l-font-sans);
    font-size: var(--l-font-size-medium);
    font-weight: var(--l-font-weight-normal);
    line-height: var(--l-line-height-normal);
    letter-spacing: var(--l-letter-spacing-normal);
    color: var(--l-color-neutral-700);
    padding: var(--l-spacing-2x-small) var(--l-spacing-2x-small);
    transition: var(--l-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .l-menu-item.l-menu-item--disabled {
    outline: none;
    color: var(--l-color-neutral-400);
    cursor: not-allowed;
  }

  .l-menu-item .l-menu-item__label {
    flex: 1 1 auto;
  }

  .l-menu-item .l-menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .l-menu-item .l-menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--l-spacing-x-small);
  }

  .l-menu-item .l-menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .l-menu-item .l-menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--l-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .l-menu-item,
  :host(${focusVisibleSelector}:not(.l-focus-invisible):not([aria-disabled='true'])) .l-menu-item {
    outline: none;
    background-color: var(--l-color-primary-600);
    color: var(--l-color-neutral-0);
  }

  .l-menu-item .l-menu-item__check,
  .l-menu-item .l-menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .l-menu-item--checked .l-menu-item__check,
  .l-menu-item--has-submenu .l-menu-item__chevron {
    visibility: visible;
  }
`;
