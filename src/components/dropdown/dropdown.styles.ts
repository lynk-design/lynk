import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  :host([block]) {
    display: block;
  }

  .lynk-dropdown::part(popup) {
    z-index: var(--lynk-z-index-dropdown);
  }

  .lynk-dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .lynk-dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .lynk-dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .lynk-dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .lynk-dropdown__trigger {
    display: block;
  }

  .lynk-dropdown__panel {
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    color: var(--color);
    box-shadow: var(--lynk-shadow-large);
    pointer-events: none;
  }

  .lynk-dropdown--open .lynk-dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(lynk-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;
