import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --width: 31rem;
    --header-spacing: var(--l-spacing-large);
    --body-spacing: var(--l-spacing-large);
    --footer-spacing: var(--l-spacing-large);

    display: contents;
  }

  .l-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--l-z-index-dialog);
  }

  .l-dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--l-spacing-2x-large));
    max-height: calc(100% - var(--l-spacing-2x-large));
    background-color: var(--l-panel-background-color);
    border-radius: var(--l-border-radius-medium);
    box-shadow: var(--l-shadow-x-large);
  }

  .l-dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .l-dialog__panel {
      max-height: 80vh;
    }
  }

  .l-dialog--open .l-dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .l-dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .l-dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--l-font-size-large);
    line-height: var(--l-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .l-dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--l-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .l-dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .l-dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .l-dialog__footer ::slotted(l-button:not(:first-of-type)) {
    margin-inline-start: var(--l-spacing-x-small);
  }

  .l-dialog:not(.l-dialog--has-footer) .l-dialog__footer {
    display: none;
  }

  .l-dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--l-overlay-background-color);
  }
`;
