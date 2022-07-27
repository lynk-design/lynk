import {
  component_styles_default
} from "./chunk.BBN5BSZB.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/dialog/dialog.styles.ts
var dialog_styles_default = r`
  ${component_styles_default}

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
    transform: none;
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

  .lynk-dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--lynk-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .lynk-dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .lynk-dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .lynk-dialog__footer ::slotted(l-button:not(:first-of-type)) {
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
`;

export {
  dialog_styles_default
};
