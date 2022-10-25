import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-row-group;
  }

  ::slotted(lynk-tr) {
    background: var(--lynk-color-neutral-50);
  }

  ::slotted(lynk-tr:nth-child(even)) {
    background: var(--lynk-color-neutral-200);
  }

  /* States */

  ::slotted(lynk-tr[state='danger']) {
    background: var(--lynk-color-danger-50);
  }

  ::slotted(lynk-tr[state='danger']:nth-child(even)) {
    background: var(--lynk-color-danger-200);
  }

  ::slotted(lynk-tr[state='primary']) {
    background: var(--lynk-color-primary-50);
  }

  ::slotted(lynk-tr[state='primary']:nth-child(even)) {
    background: var(--lynk-color-primary-200);
  }

  ::slotted(lynk-tr[state='success']) {
    background: var(--lynk-color-success-50);
  }

  ::slotted(lynk-tr[state='success']:nth-child(even)) {
    background: var(--lynk-color-success-200);
  }

  ::slotted(lynk-tr[state='warning']) {
    background: var(--lynk-color-warning-50);
  }

  ::slotted(lynk-tr[state='warning']:nth-child(even)) {
    background: var(--lynk-color-warning-200);
  }
`;
