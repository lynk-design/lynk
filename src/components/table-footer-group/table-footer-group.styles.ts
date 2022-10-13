import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-footer-group;
    font-weight: var(--lynk-font-weight-semibold);
  }
`;
