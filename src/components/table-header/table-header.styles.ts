import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-cell;
    border-bottom: solid 1px var(--lynk-color-neutral-300);
    border-right: solid 1px var(--lynk-color-neutral-300);
    border-top: solid 1px var(--lynk-color-neutral-300);
    color: var(--lynk-color-neutral-900);
    font-family: var(--lynk-button-font-family);
    font-weight: var(--lynk-font-weight-bold);
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-small);
    user-select: none;
    vertical-align: middle;
    position: relative;
  }

  :host([sort-enabled]) {
    cursor: pointer;
  }

  :host([sort-enabled]:hover) {
    color: var(--lynk-color-white);
    background-color: var(--lynk-color-neutral-50);
  }

  lynk-icon {
    padding-inline-start: var(--lynk-spacing-2x-small);
    vertical-align: -2px;
  }

  .resizeHandle {
    cursor: col-resize;
    display: block;
    font-size: 20px;
    top: 0;
    height: 100%;
    padding: 0;
    position: absolute;
    right: 0;
    z-index: 100;
  } 
`;
