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

  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: var(--width);
    height: var(--height);
    margin: var(--margin);
  }

  .stack--reverse {
    flex-direction: column-reverse;
  }

  .stack--horizontal {
    flex-direction: row;
  }

  .stack--horizontal.stack--reverse {
    flex-direction: row-reverse;
  }

  .stack--justify-start {
    justify-content: flex-start;
  }

  .stack--justify-center {
    justify-content: center;
  }

  .stack--justify-end {
    justify-content: flex-end;
  }

  .stack--justify-between {
    justify-content: space-between;
  }

  .stack--justify-around {
    justify-content: space-around;
  }

  .stack--justify-evenly {
    justify-content: space-evenly;
  }

  .stack--align-start {
    align-items: flex-start;
  }

  .stack--align-center {
    align-items: center;
  }

  .stack--align-end {
    align-items: flex-end;
  }

  .stack--align-stretch {
    align-items: stretch;
  }

  .stack--align-baseline {
    align-items: baseline;
  }

  .stack::slotted(lynk-icon) {
    flex-shrink: 0;
  }

  .stack--wrap {
    flex-wrap: wrap;
  }

  .stack--no-wrap {
    flex-wrap: nowrap;
  }

  .stack--wrap-reverse {
    flex-wrap: wrap-reverse;
  }
`;
