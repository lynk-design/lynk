import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu {
    background: var(--l-panel-background-color);
    border: solid var(--l-panel-border-width) var(--l-panel-border-color);
    border-radius: var(--l-border-radius-medium);
    background: var(--l-panel-background-color);
    padding: var(--l-spacing-x-small) 0;
  }

  ::slotted(l-divider) {
    --spacing: var(--l-spacing-x-small);
  }
`;
