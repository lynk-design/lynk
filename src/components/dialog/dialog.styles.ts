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

  .dialog {
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

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--lynk-spacing-2x-large));
    max-height: calc(100% - var(--lynk-spacing-2x-large));
    background-color: var(--lynk-panel-background-color);
    border-radius: var(--lynk-border-radius-medium);
    box-shadow: var(--lynk-shadow-x-large);
    transition:
      var(--lynk-transition-fast) width,
      var(--lynk-transition-fast) height;
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--lynk-font-size-large);
    line-height: var(--lynk-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--lynk-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions lynk-icon-button,
  .dialog__header-actions ::slotted(lynk-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--lynk-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(lynk-button:not(:first-of-type)) {
    margin-inline-start: var(--lynk-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--lynk-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--lynk-color-neutral-0);
    }
  }

  /*
  * Size modifiers
  */

  .dialog--fitted .dialog__panel {
    width: 80vw;
    min-height: 80vh;
  }

  .dialog--full .dialog__panel {
    width: calc(100% - var(--lynk-spacing-2x-large));
    height: calc(100% - var(--lynk-spacing-2x-large));
  }
`;
