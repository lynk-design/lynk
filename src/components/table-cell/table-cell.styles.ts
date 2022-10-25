import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-cell;
    border: solid 1px var(--lynk-color-neutral-300);
    padding: var(--lynk-spacing-x-small) var(--lynk-spacing-small);
  }

  :host([state='danger']) {
    background: var(--lynk-color-danger-50);
  }

  :host([state='primary']) {
    background: var(--lynk-color-primary-50);
  }

  :host([state='success']) {
    background: var(--lynk-color-success-50);
  }

  :host([state='warning']) {
    background: var(--lynk-color-warning-50);
  }
`;
