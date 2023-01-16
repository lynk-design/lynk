import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .lynk-option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    line-height: var(--lynk-line-height-normal);
    letter-spacing: var(--lynk-letter-spacing-normal);
    color: var(--lynk-color-neutral-700);
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-medium) var(--lynk-spacing-x-small) var(--lynk-spacing-x-small);
    transition: var(--lynk-transition-fast) fill;
    cursor: pointer;
  }

  .lynk-option--hover:not(.lynk-option--current):not(.lynk-option--disabled) {
    background-color: var(--lynk-color-neutral-100);
    color: var(--lynk-color-neutral-1000);
  }

  .lynk-option--current,
  .lynk-option--current.lynk-option--disabled {
    background-color: var(--lynk-color-primary-600);
    color: var(--lynk-color-neutral-0);
    opacity: 1;
  }

  .lynk-option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lynk-option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--lynk-line-height-dense);
  }

  .lynk-option .lynk-option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--lynk-spacing-2x-small);
  }

  .lynk-option--selected .lynk-option__check {
    visibility: visible;
  }

  .lynk-option__prefix,
  .lynk-option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-option__prefix::slotted(*) {
    margin-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-option__suffix::slotted(*) {
    margin-inline-start: var(--lynk-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .lynk-option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
