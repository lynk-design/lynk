import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .lynk-menu {
    background: var(--lynk-panel-background-color);
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
    border-radius: var(--lynk-border-radius-medium);
    background: var(--lynk-panel-background-color);
    padding: var(--lynk-spacing-x-small) 0;
  }

  ::slotted(l-divider) {
    --spacing: var(--lynk-spacing-x-small);
  }
`;
