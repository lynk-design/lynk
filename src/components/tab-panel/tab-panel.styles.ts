import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --padding: 0;

    display: block;
  }

  .lynk-tab-panel {
    display: block;
    padding: var(--padding);
  }

  .lynk-tab-panel:not(.lynk-tab-panel--active) {
    display: none;
  }
`;
