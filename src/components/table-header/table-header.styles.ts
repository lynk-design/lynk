import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-cell;
    border: solid 1px var(--lynk-color-neutral-200);
  }
`;
