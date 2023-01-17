import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    text-align: unset;
    --margin: 0;
    --width: auto;
    --height: auto;
    --gap: var(--lynk-spacing-small);
    height: var(--height);
    width: var(--width);
  }

  :host([no-wrap]) .lynk-stack {
    flex-wrap: nowrap;
  }

  .lynk-stack {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: var(--width);
    height: var(--height);
    margin: var(--margin);
  }

  .lynk-stack--reverse {
    flex-direction: column-reverse;
  }

  .lynk-stack--horizontal {
    flex-direction: row;
  }

  .lynk-stack--horizontal.lynk-stack--reverse {
    flex-direction: row-reverse;
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
