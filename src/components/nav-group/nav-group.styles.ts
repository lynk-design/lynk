import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --margin: var(--lynk-spacing-medium) 0 0 0;
    --color: var(--lynk-color-neutral-600);
    display: flex;
    flex-direction: column;
    gap: var(--lynk-spacing-2x-small);
  }

  .lynk-nav-group__heading {
    display: block;
    text-align: inherit;
    font-weight: var(--lynk-font-weight-semibold);
    color: var(--color);
    font-size: var(--lynk-font-size-small);
    padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-small);
  }

  :host([squished]) .lynk-nav-group__heading {
    padding: var(--lynk-spacing-2x-small);
  }
`;
