import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table;
    border-collapse: separate;
    border-spacing: 0 4px;
    font-size: var(--lynk-font-size-medium);
    line-height: var(--lynk-line-height-dense);
    margin-bottom: 0rem;
    width: 100%;
  }
`;
