import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --dot-size: 3px;
    --color: var(--lynk-color-primary);

    display: inline-flex;
    width: 2em;
    height: 1em;
    flex: none;
  }

  .dot-loader {
    color: var(--color);
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    display: flex;
  }

  .dot-loader__group {
    height: 100%;
    width: 100%;
  }

  .dot-loader__circle {
    fill: currentColor;
    animation: dot-loader 1.5s ease infinite;
  }
  .dot-loader__circle--b {
    animation-delay: -1s;
  }
  .dot-loader__circle--c {
    animation-delay: -0.5s;
  }
  @keyframes dot-loader {
    90%,
    100% {
      r: var(--dot-size);
    }
    35% {
      r: 0.2px;
    }
  }
`;
