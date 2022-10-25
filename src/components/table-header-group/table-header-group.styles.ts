import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-header-group;
  }

  ::slotted(lynk-tr) {
    background: var(--lynk-color-black);
  }
`;
