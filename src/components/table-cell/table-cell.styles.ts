import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-cell;
    --state-color: transparent;
    --state-color-b: transparent;
    background: transparent;
    vertical-align: middle;
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-base);
  }

  :host([state='danger']) {
    --state-color: var(--lynk-color-danger-50);
    --state-color-b: var(--lynk-color-danger-a10);
  }

  :host([state='primary']) {
    --state-color: var(--lynk-color-primary-50);
    --state-color-b: var(--lynk-color-primary-a10);
  }

  :host([state='success']) {
    --state-color: var(--lynk-color-success-50);
    --state-color-b: var(--lynk-color-success-a10);
  }

  :host([state='warning']) {
    --state-color: var(--lynk-color-warning-a25);
    --state-color-b: var(--lynk-color-warning-a10);
  }

  :host([state='neutral']) {
    --state-color: var(--lynk-color-neutral-50);
    --state-color-b: var(--lynk-color-neutral-100);
  }

  :host([state]) {
    background: var(--state-color);
  }

  :host([barberpole]) {
    background: linear-gradient(
        -45deg,
        var(--state-color) 25%,
        var(--state-color-b) 25%,
        var(--state-color-b) 50%,
        var(--state-color) 50%,
        var(--state-color) 75%,
        var(--state-color-b) 75%,
        var(--state-color-b)
      )
      var(--state-color);
    background-size: 40px 40px;
    animation: barberpole 1.5s linear infinite;
  }

  ::slotted(lynk-checkbox) {
    top: -1px;
    position: relative;
  }

  @keyframes barberpole {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 40px 40px;
    }
  }
`;
