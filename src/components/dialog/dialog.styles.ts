import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --width: 30rem;
    --header-spacing: var(--lynk-spacing-large);
    --body-spacing: var(--lynk-spacing-large);
    --footer-spacing: var(--lynk-spacing-large);

    display: contents;
  }

  .lynk-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--lynk-z-index-dialog);
  }

  .lynk-dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--lynk-spacing-2x-large));
    max-height: calc(100% - var(--lynk-spacing-2x-large));
    background-color: var(--lynk-panel-background-color);
    border-radius: var(--lynk-border-radius-medium);
    box-shadow: var(--lynk-shadow-x-large);
  }

  .lynk-dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .lynk-dialog__panel {
      max-height: 80vh;
    }
  }

  .lynk-dialog--open .lynk-dialog__panel {
    display: flex;
    opacity: 1;
  }

  .lynk-dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .lynk-dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--lynk-font-size-large);
    line-height: var(--lynk-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .lynk-dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--lynk-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .lynk-dialog__header-actions lynk-icon-button,
  .lynk-dialog__header-actions ::slotted(lynk-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--lynk-font-size-medium);
  }

  .lynk-dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .lynk-dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .lynk-dialog__footer ::slotted(lynk-button:not(:first-of-type)) {
    margin-inline-start: var(--lynk-spacing-x-small);
  }

  .lynk-dialog:not(.lynk-dialog--has-footer) .lynk-dialog__footer {
    display: none;
  }

  .lynk-dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--lynk-overlay-background-color);
  }

  @media (forced-colors: active) {
    .lynk-dialog__panel {
      border: solid 1px var(--lynk-color-neutral-0);
    }
  }


  /*
  * Size modifiers
  */

  .lynk-dialog--fitted .lynk-dialog__panel {
    width: 80vw;
    height: 80vh;
  }

  .lynk-dialog--full .lynk-dialog__panel {
    width: 100vw;
    height: 100vh;
  }
`;
