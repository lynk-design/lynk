import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-header-group;
  }

  :host([sticky]) {
    position: sticky;
    top: 0;
    z-index: var(--lynk-z-index-sticky);
    box-shadow: var(--lynk-shadow-small);
  }

  ::slotted(lynk-tr) {
    // background: var(--lynk-color-black);
  }
`;
