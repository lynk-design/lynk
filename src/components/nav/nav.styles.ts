import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --max-width: 100%;
    --background: transparent;
    --padding: var(--lynk-spacing-x-small) 0;
    --border-color: transparent;
    --border-top: none;
    --border-right: none;
    --border-bottom: none;
    --border-left: none;
    --border-radius: 0;
  }

  .lynk-nav {
    max-width: var(--max-width);
    background: var(--background);
    border-top: var(--border-top);
    border-right: var(--border-right);
    border-bottom: var(--border-bottom);
    border-left: var(--border-left);
    border-radius: var(--border-radius);
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(--lynk-spacing-2x-small);
  }

  ::slotted(lynk-nav-group) {
    margin-top: var(--lynk-spacing-base);
  }

  .lynk-nav--squished ::slotted(lynk-nav-group) {
    text-align: center;
  }
`;
