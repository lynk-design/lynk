import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/drawer/drawer.styles.ts
var drawer_styles_default = r`
  ${component_styles_default}

  :host {
    --size: 25rem;
    --header-spacing: var(--lynk-spacing-large);
    --body-spacing: var(--lynk-spacing-large);
    --footer-spacing: var(--lynk-spacing-large);

    display: contents;
  }

  .lynk-drawer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    text-align: left;
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
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .lynk-drawer--end .lynk-drawer__panel {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: var(--size);
    height: 100%;
  }

  .lynk-drawer--bottom .lynk-drawer__panel {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .lynk-drawer--start .lynk-drawer__panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
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
  }

  .lynk-drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--lynk-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .lynk-drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .lynk-drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .lynk-drawer__footer ::slotted(l-button:not(:last-of-type)) {
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
`;

export {
  drawer_styles_default
};
