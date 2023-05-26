import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--lynk-panel-background-color);
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
    border-radius: var(--lynk-border-radius-medium);
    padding: var(--lynk-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(lynk-divider) {
    --spacing: var(--lynk-spacing-x-small);
  }

  ::slotted(lynk-input) {
    padding: 0 var(--lynk-spacing-x-small);
    margin-bottom: var(--lynk-spacing-x-small);
  }

  ::slotted(lynk-spinner) {
    display: block;
    margin: var(--lynk-spacing-x-small) auto;
  }
`;
