import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .lynk-nav__heading {
    display: block;
    font-weight: var(--lynk-font-weight-bold);
    padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-base);
    margin: var(--lynk-spacing-large) 0 var(--lynk-spacing-x-small) 0;
  }
`;
