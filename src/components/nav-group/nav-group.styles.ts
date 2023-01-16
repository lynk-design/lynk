import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --margin: var(--lynk-spacing-medium) 0 0 0;
    margin: var(--margin);
  }

  .lynk-nav-group__heading {
    display: block;
    text-align: inherit;
    font-weight: var(--lynk-font-weight-bold);
    font-size: var(--lynk-font-size-small);
    padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-base);
    margin: 0 0 var(--lynk-spacing-x-small) 0;
  }

  :host([squished]) .lynk-nav-group__heading {
    padding: var(--lynk-spacing-2x-small);
  }
`;
