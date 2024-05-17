import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --gap: var(--lynk-spacing-base);
    --min-size: 20rem;
  }

  .auto-grid {
    display: grid;
    grid-gap: var(--gap);
  }

  .auto-grid--fit {
    grid-template-columns: repeat(auto-fit, minmax(min(var(--min-size), 100%), 1fr));
  }

  .auto-grid--fill {
    grid-template-columns: repeat(auto-fill, minmax(min(var(--min-size), 100%), 1fr));
  }
`;
