import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: var(--lynk-font-size-medium);
    margin-bottom: 0rem;
    width: 100%;
  }
`;
