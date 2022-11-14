import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-row;
  }

  ::slotted(lynk-td:first-child),
  ::slotted(lynk-th:first-child) {
    border-left: solid 1px var(--lynk-color-neutral-300);
  }
`;
