import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    isolation: isolate;
    --max-width: 100%;
    --background: transparent;
    --padding: var(--lynk-spacing-x-small) 0;
    --border: none;
    --border-radius: var(--lynk-border-radius-medium);
  }

  .lynk-nav {
    max-width: var(--max-width);
    background: var(--background);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: var(--padding);
  }

  ::slotted(lynk-nav-group:not(:first-of-type)) {
    margin-top: var(--lynk-spacing-medium);
  }

  :host([squished]) ::slotted(lynk-nav-group) {
    text-align: center;
  }
`;
