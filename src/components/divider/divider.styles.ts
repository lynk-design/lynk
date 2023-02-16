import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --color: var(--lynk-divider-color, var(--lynk-color-neutral-200));
    --width: var(--lynk-panel-border-width, 1px);
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

  :host([vertical][auto]) {
      height: auto;
  }
`;
