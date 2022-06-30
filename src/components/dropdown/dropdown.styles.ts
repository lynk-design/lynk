import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .lynk-dropdown {
    position: relative;
  }

  .lynk-dropdown__trigger {
    display: block;
  }

  .lynk-dropdown__positioner {
    position: absolute;
    z-index: var(--lynk-z-index-dropdown);
  }

  .lynk-dropdown__panel {
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    color: var(--color);
    box-shadow: var(--lynk-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .lynk-dropdown--open .lynk-dropdown__panel {
    pointer-events: all;
  }

  .lynk-dropdown__positioner[data-placement^='top'] .lynk-dropdown__panel {
    transform-origin: bottom;
  }

  .lynk-dropdown__positioner[data-placement^='bottom'] .lynk-dropdown__panel {
    transform-origin: top;
  }

  .lynk-dropdown__positioner[data-placement^='left'] .lynk-dropdown__panel {
    transform-origin: right;
  }

  .lynk-dropdown__positioner[data-placement^='right'] .lynk-dropdown__panel {
    transform-origin: left;
  }
`;
