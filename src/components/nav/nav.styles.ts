import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --max-width: 288px;
    --background: transparent;
    --border: none;
  }

  .lynk-nav {
    max-width: var(--max-width);
    background: var(--background);
    border: var(--border);
    border-radius: var(--lynk-border-radius-medium);
    padding: var(--lynk-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }
`;
