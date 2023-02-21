import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-cell;
    background-color: var(--lynk-table-header-background-color);
    color: var(--lynk-table-header-color);
    border: 1px solid transparent;
    font-weight: var(--lynk-font-weight-bold);
    font-size: var(--lynk-font-size-small);
    padding: var(--lynk-spacing-small) var(--lynk-spacing-base);
    user-select: none;
    vertical-align: middle;
    transition: var(--lynk-transition-fast) box-shadow, var(--lynk-transition-fast) color;
  }

  :host([sortable]) {
    cursor: pointer;
  }

  :host([sort-direction='1']),
  :host([sort-direction='-1']) {
    color: var(--lynk-color-primary);
  }

  :host([sort-direction='1']) lynk-icon,
  :host([sort-direction='-1']) lynk-icon {
    opacity: 1;
  }

  :host([sortable]:hover) {
    color: var(--lynk-color-primary-600);
    background-color: var(--lynk-color-primary-50);
    border: 1px solid var(--lynk-color-primary);
    /* box-shadow: inset 0 0 0 1px var(--lynk-color-primary); */
  }

  lynk-icon {
    padding-inline-start: var(--lynk-spacing-2x-small);
    font-size: 18px;
    vertical-align: middle;
    margin-top: -2px;
    opacity: 0.5;
  }
`;
