import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --color: var(--lynk-divider-color);
    --width: var(--lynk-panel-border-width);
    --spacing: var(--lynk-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    width: 100%;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;
