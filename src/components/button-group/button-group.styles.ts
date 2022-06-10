import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .l-button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;
