import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --margin: 0;
    --width: 100%;
    --height: auto;
    --gap: var(--lynk-spacing-small)
  }

  .lynk-stack {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--gap);
    width: var(--width);
    height: var(--height);
    margin: var(--margin);
  }

  .lynk-stack--reverse {
    flex-flow: column-reverse nowrap;
  }

  .lynk-stack--horizontal {
    flex-flow: row wrap;
  }

  .lynk-stack--horizontal.lynk-stack--reverse {
    flex-flow: row-reverse wrap;
  }

  .lynk-stack--justify-start {
    justify-content: flex-start;
  }

  .lynk-stack--justify-center {
    justify-content: center;
  }

  .lynk-stack--justify-end {
    justify-content: flex-end;
  }

  .lynk-stack--justify-between {
    justify-content: space-between;
  }

  .lynk-stack--justify-around {
    justify-content: space-around;
  }

  .lynk-stack--justify-evenly {
    justify-content: space-evenly;
  }

  .lynk-stack--align-start {
    align-items: flex-start;
  }

  .lynk-stack--align-center {
    align-items: center;
  }

  .lynk-stack--align-end {
    align-items: flex-end;
  }

  .lynk-stack--align-stretch {
    align-items: stretch;
  }

  .lynk-stack--align-baseline {
    align-items: baseline;
  }
`;
