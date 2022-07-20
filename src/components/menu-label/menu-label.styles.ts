import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .lynk-menu-label {
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-small);
    font-weight: var(--lynk-font-weight-semibold);
    line-height: var(--lynk-line-height-normal);
    letter-spacing: var(--lynk-letter-spacing-normal);
    color: var(--lynk-color-neutral-500);
    padding: var(--lynk-spacing-2x-small) var(--lynk-spacing-large);
    user-select: none;
  }
`;
