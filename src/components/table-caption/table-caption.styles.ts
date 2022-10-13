import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-caption;
    margin-bottom: var(--lynk-spacing-base);
    text-align: center;
  }
`;
