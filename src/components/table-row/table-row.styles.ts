import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: table-row;
    padding: 1px;
    position: relative;
    border-radius: 5px;
    background: var(--lynk-table-cell-background-color);
    --color: transparent;
    transition:
      var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) color,
      var(--lynk-transition-fast) border,
      var(--lynk-transition-fast) box-shadow;
  }

  :host([striped]:nth-of-type(odd)) {
    background: var(--lynk-table-striped-cell-background-color);
  }

  :host([pulse]) {
    animation: pulse 1.5s infinite;
  }

  :host([pulse][interactive]:hover) {
    animation: none;
  }

  :host([interactive]:hover) {
    cursor: pointer;
    box-shadow: 0 0 0 1px var(--lynk-color-primary);
  }

  :host([active]) {
    box-shadow: 0 0 0 1px var(--lynk-color-primary);
  }

  /* Primary States */

  :host([state='primary']) {
    --state-color: var(--lynk-color-primary);
  }

  :host([state='primary'][interactive]:hover),
  :host([state='primary'][active]) {
    box-shadow: 0 0 0 1px var(--lynk-color-primary);
  }

  :host([state='primary']) ::slotted(lynk-td) {
    border-color: var(--lynk-color-primary);
  }

  /* Danger States */

  :host([state='danger']) {
    --state-color: var(--lynk-color-danger);
  }

  :host([state='danger'][interactive]:hover),
  :host([state='danger'][active]) {
    box-shadow: 0 0 0 1px var(--lynk-color-danger);
  }

  :host([state='danger']) ::slotted(lynk-td) {
    border-color: var(--lynk-color-danger);
  }

  /* Warning States */

  :host([state='warning']) {
    --state-color: var(--lynk-color-warning);
  }

  :host([state='warning'][interactive]:hover),
  :host([state='warning'][active]) {
    box-shadow: 0 0 0 1px var(--lynk-color-warning);
  }

  :host([state='warning']) ::slotted(lynk-td) {
    border-color: var(--lynk-color-warning);
  }

  /* Success States */

  :host([state='success']) {
    --state-color: var(--lynk-color-success);
  }

  :host([state='success'][interactive]:hover),
  :host([state='success'][active]) {
    box-shadow: 0 0 0 1px var(--lynk-color-success);
  }

  :host([state='success']) ::slotted(lynk-td) {
    border-color: var(--lynk-color-success);
  }

  /* Neutral States */

  :host([state='neutral']) {
    --state-color: var(--lynk-color-neutral);
  }

  :host([state='neutral'][interactive]:hover),
  :host([state='neutral'][active]) {
    box-shadow: 0 0 0 1px var(--lynk-color-neutral);
  }

  :host([state='neutral']) ::slotted(lynk-td) {
    border-color: var(--lynk-color-neutral);
  }

  /* Custom States */

  :host([state='custom']) {
    --state-color: var(--color);
  }

  :host([state='custom'][interactive]:hover),
  :host([state='custom'][active]) {
    box-shadow: 0 0 0 1px var(--color);
  }

  :host([state='custom']) ::slotted(lynk-td) {
    border-color: var(--color);
  }

  /* Handling styles of slottend th and td elements */

  ::slotted(lynk-td:first-child),
  ::slotted(lynk-th:first-child) {
    border-radius: var(--lynk-table-border-radius) 0 0 var(--lynk-table-border-radius);
  }

  ::slotted(lynk-td:first-child) {
    border-left: 4px solid transparent;
  }

  ::slotted(lynk-th:first-child) {
    padding-left: calc(var(--lynk-spacing-base) + 4px);
  }

  ::slotted(lynk-td:last-child),
  ::slotted(lynk-th:last-child) {
    border-radius: 0 var(--lynk-table-border-radius) var(--lynk-table-border-radius) 0;
  }

  ::slotted(lynk-td:last-child) {
    border-right: 4px solid transparent;
  }

  ::slotted(lynk-th:last-child) {
    padding-right: calc(var(--lynk-spacing-base) + 4px);
  }

  ::slotted(lynk-td:only-child),
  ::slotted(lynk-th:only-child) {
    border-radius: var(--lynk-table-border-radius);
  }

  ::slotted(lynk-td:only-child) {
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  ::slotted(lynk-th:only-child) {
    padding-left: calc(var(--lynk-spacing-base) + 4px);
    padding-right: calc(var(--lynk-spacing-base) + 4px);
  }

  :host([state]) ::slotted(lynk-td:first-child)::before,
  :host([state]) ::slotted(lynk-td:only-child)::before {
    border-left-color: var(--state-color);
  }

  :host([state]) ::slotted(lynk-td:last-child)::after,
  :host([state]) ::slotted(lynk-td:only-child)::after {
    border-right-color: var(--state-color);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 transparent;
    }
    50% {
      box-shadow: 0 0 0 1px var(--state-color);
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
