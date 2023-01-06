import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --color: var(--lynk-color-neutral-700);
    --hover-bg-color: var(--lynk-color-gray-a10);
    --selected-bg-color: var(--lynk-color-gray-a10);
    margin: var(--lynk-spacing-2x-small) 0;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  .lynk-nav-item {
    align-items: stretch;
    justify-content: start;
    color: var(--lynk-nav-item-color);
    cursor: pointer;
    border-radius: var(--lynk-border-radius-small);
    display: flex;
    hyphens: auto;
    padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-base);
    position: relative;
    text-decoration: none;
    width: 100%;
    word-break: break-word;
    line-height: var(--lynk-line-height-dense);
    transition: var(--lynk-transition-fast) fill;
  }

  .lynk-nav-item::before {
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    left: 0;
    content: "";
  }

  .lynk-nav-item:hover {
    background-color: var(--hover-bg-color);
  }

  .lynk-nav-item.lynk-nav-item--disabled {
    outline: none;
    opacity: 0.5;
  }

  .lynk-nav-item.lynk-nav-item--selected {
    color: var(--lynk-color-primary);
    background-color: var(--selected-bg-color);
  }

  .lynk-nav-item.lynk-nav-item--selected::before {
    background-color: var(--lynk-color-primary);
    display: block;
  }

  .lynk-nav-item .lynk-nav-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .lynk-nav-item .lynk-nav-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-nav-item .lynk-nav-item__prefix::slotted(*) {
    margin-inline-end: var(--lynk-spacing-base);
  }

  .lynk-nav-item .lynk-nav-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-nav-item .lynk-nav-item__suffix::slotted(*) {
    margin-inline-start: var(--lynk-spacing-base);
  }

  .lynk-nav-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--lynk-transition-medium) rotate ease;
  }

  .lynk-nav-item--expanded .lynk-nav-item__chevron {
    rotate: 90deg;
  }

  :host(:focus) {
    outline: none;
  }

  .lynk-nav-item[data-level='1'] {
    padding-left: var(--lynk-spacing-3x-large);
  }

  .lynk-nav-item[data-level='2'] {
    padding-left: var(--lynk-spacing-4x-large);
  }

  .lynk-nav-item.lynk-nav-item--rtl[data-level='1'] {
    padding-left: var(--lynk-spacing-base);
    padding-right: var(--lynk-spacing-3x-large);
  }

  .lynk-nav-item.lynk-nav-item--rtl[data-level='2'] {
    padding-left: var(--lynk-spacing-base);
    padding-right: var(--lynk-spacing-4x-large);
  }

`;
