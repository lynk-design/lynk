import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --size: 25rem;
    --header-spacing: var(--lynk-spacing-base);
    --body-spacing: var(--lynk-spacing-base);
    --footer-spacing: var(--lynk-spacing-base);

    display: contents;
  }

  .lynk-drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .lynk-drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .lynk-drawer--fixed {
    position: fixed;
    z-index: var(--lynk-z-index-drawer);
  }

  .lynk-drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--lynk-panel-background-color);
    box-shadow: var(--lynk-shadow-x-large);
    transition: var(--lynk-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .lynk-drawer__panel:focus {
    outline: none;
  }

  .lynk-drawer--top .lynk-drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .lynk-drawer--end .lynk-drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .lynk-drawer--bottom .lynk-drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .lynk-drawer--start .lynk-drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .lynk-drawer__header {
    display: flex;
  }

  .lynk-drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--lynk-font-size-large);
    line-height: var(--lynk-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .lynk-drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--lynk-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .lynk-drawer__header-actions lynk-icon-button,
  .lynk-drawer__header-actions ::slotted(lynk-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--lynk-font-size-medium);
  }

  .lynk-drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .lynk-drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .lynk-drawer__footer ::slotted(lynk-button:not(:last-of-type)) {
    margin-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-drawer:not(.lynk-drawer--has-footer) .lynk-drawer__footer {
    display: none;
  }

  .lynk-drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--lynk-overlay-background-color);
    pointer-events: all;
  }

  .lynk-drawer--contained .lynk-drawer__overlay {
    position: absolute;
  }

  @media (forced-colors: active) {
    .lynk-drawer__panel {
      border: solid 1px var(--lynk-color-neutral-0);
    }
  }
`;
