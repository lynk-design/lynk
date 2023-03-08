import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .lynk-menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    line-height: var(--lynk-line-height-normal);
    letter-spacing: var(--lynk-letter-spacing-normal);
    color: var(--lynk-color-neutral-700);
    padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-2x-small);
    transition: var(--lynk-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .lynk-menu-item.lynk-menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-menu-item .lynk-menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .lynk-menu-item .lynk-menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-menu-item .lynk-menu-item__prefix::slotted(*) {
    margin-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-menu-item .lynk-menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-menu-item .lynk-menu-item__suffix::slotted(*) {
    margin-inline-start: var(--lynk-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .lynk-menu-item {
    background-color: var(--lynk-color-neutral-100);
    color: var(--lynk-color-neutral-1000);
  }

  :host(:focus-visible) .lynk-menu-item {
    outline: none;
    background-color: var(--lynk-color-primary-600);
    color: var(--lynk-color-neutral-0);
    opacity: 1;
  }

  .lynk-menu-item .lynk-menu-item__check,
  .lynk-menu-item .lynk-menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .lynk-menu-item--checked .lynk-menu-item__check,
  .lynk-menu-item--has-submenu .lynk-menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .lynk-menu-item,
    :host(:focus-visible) .lynk-menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
