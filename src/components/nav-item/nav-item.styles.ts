import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --hover-bg-color: var(--lynk-color-gray-a25);
    --selected-color: var(--lynk-color-neutral-1000);
    --selected-indicator-color: var(--lynk-color-primary);
    --selected-bg-color: var(--lynk-color-gray-a25);
    --border-radius: var(--lynk-border-radius-medium);
    --padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-small);
    margin: var(--lynk-spacing-2x-small) 0;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host(:focus) {
    outline: none;
  }

  .lynk-nav-item {
    align-items: stretch;
    justify-content: start;
    color: var(--lynk-nav-item-color);
    cursor: pointer;
    border-radius: var(--border-radius);
    display: flex;
    hyphens: auto;
    padding: var(--padding);
    position: relative;
    text-decoration: none;
    border: none;
    background: none;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    text-align: unset;
    width: 100%;
    word-break: break-word;
    line-height: var(--lynk-line-height-dense);
    transition: var(--lynk-transition-fast) fill;
  }

  .lynk-nav-item::before {
    position: absolute;
    width: 4px;
    bottom: -2px;
    top: -2px;
    left: -8px;
    content: "";
    pointer-events: none;
    border-radius: var(--border-radius);
  }

  :host(:focus-visible) .lynk-nav-item {
    box-shadow: 0 0 0 var(--lynk-focus-ring-width) var(--lynk-input-focus-ring-color);
    background-color: var(--hover-bg-color);
    outline: 1px solid var(--lynk-color-primary);
    z-index: 2;
  }

  .lynk-nav-item:hover {
    background-color: var(--hover-bg-color);
  }

  .lynk-nav-item.lynk-nav-item--disabled {
    outline: none;
    opacity: 0.5;
  }

  .lynk-nav-item.lynk-nav-item--selected {
    color: var(--selected-color);
    background-color: var(--selected-bg-color);
  }

  .lynk-nav-item.lynk-nav-item--selected::before {
    background-color: var(--selected-indicator-color);
    display: block;
  }

  .lynk-nav-item .lynk-nav-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .lynk-nav-item .lynk-nav-item__prefix,
  .lynk-nav-item .lynk-nav-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: 1.25em;
  }

  .lynk-nav-item .lynk-nav-item__prefix::slotted(*) {
    margin-inline-end: var(--lynk-spacing-small);
  }

  .lynk-nav-item .lynk-nav-item__suffix::slotted(*) {
    margin-inline-start: var(--lynk-spacing-small);
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

  .lynk-nav-item__children {
    display: block;
  }

  :host(:focus) {
    outline: none;
  }

  .lynk-nav-item[data-level='1'] {
    margin-inline-start: calc(var(--lynk-spacing-x-large) + 2px);
  }

  .lynk-nav-item[data-level='2'] {
    margin-inline-start: var(--lynk-spacing-2x-large);
  }

  .lynk-nav-item.lynk-nav-item--rtl[data-level='1'] {
    margin-inline-end: calc(var(--lynk-spacing-x-large) + 2px);
  }

  .lynk-nav-item.lynk-nav-item--rtl[data-level='2'] {
    margin-inline-end: var(--lynk-spacing-2x-large);
  }

  :host([squished]) .lynk-nav-item {
    text-align: center;
    flex-direction: column;
    align-items: center;
    font-size: var(--lynk-font-size-small);
    line-height: var(--lynk-line-height-dense);
    border-radius: var(--border-radius);
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-2x-small);
  }

  :host([squished]) .lynk-nav-item.lynk-nav-item--selected {
    color: var(--selected-color);
    background-color: var(--selected-bg-color);
  }

  :host([squished]) .lynk-nav-item::before,
  :host([squished]) .lynk-nav-item .lynk-nav-item__chevron {
    display: none;
  }

  :host([squished]) .lynk-nav-item.lynk-nav-item--selected::before {
    border-color: var(--selected-color);
  }

  :host([squished]) .lynk-nav-item .lynk-nav-item__prefix::slotted(*) {
    margin-inline-end: 0;
    margin-block-end: var(--lynk-spacing-2x-small);
  }

  :host([squished]) .lynk-nav-item .lynk-nav-item__suffix::slotted(*) {
    margin-inline-start: 0;
    margin-block-start: var(--lynk-spacing-2x-small);
  }

  :host([squished]) .lynk-nav-item .lynk-nav-item__prefix,
  :host([squished]) .lynk-nav-item .lynk-nav-item__suffix {
    font-size: 20px;
  }

  :host([squished]) .lynk-nav-item__children {
    margin: var(--lynk-spacing-2x-small) 0;
    padding: var(--lynk-spacing-2x-small) 0;
    border-top: 1px solid var(--selected-bg-color);
    border-bottom: 1px solid var(--selected-bg-color);
  }

  :host([no-label]) .lynk-nav-item__label {
    display: none;
  }

  :host([no-label]) .lynk-nav-item .lynk-nav-item__prefix::slotted(*) {
    margin-inline-end: 0;
    margin-block-end: 0;
  }

  :host([no-label]) .lynk-nav-item .lynk-nav-item__suffix::slotted(*) {
    margin-inline-start: 0;
    margin-block-start: 0;
  }
`;
