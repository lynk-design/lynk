import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    width: 1.125em;
    height: 1.125em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .lynk-icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
