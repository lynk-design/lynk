import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--l-font-sans);
    font-size: var(--l-font-size-small);
    font-weight: var(--l-font-weight-semibold);
    line-height: var(--l-line-height-normal);
    letter-spacing: var(--l-letter-spacing-normal);
    color: var(--l-color-neutral-500);
    padding: var(--l-spacing-2x-small) var(--l-spacing-x-large);
    user-select: none;
  }
`;
