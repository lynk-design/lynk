import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
      display: contents;
      --padding: var(--lynk-spacing-large) 0;
  }

  .lynk-page-container {
        margin: 0 var(--lynk-spacing-large);
        padding: var(--padding);
  }

  @media only screen and (min-width: 1024px) {
      .lynk-page-container {
          margin: 0 var(--lynk-spacing-x-large);
      }
  }

  @media only screen and (min-width: 1440px) {
      .lynk-page-container {
          margin: 0 var(--lynk-spacing-2x-large);
      }
  }
`;
