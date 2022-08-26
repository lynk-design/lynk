import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/popover/popover.styles.ts
var popover_styles_default = r`
  ${component_styles_default}

  :host {
    --max-width: 30rem;
    --width: 20rem;
    --header-spacing: var(--lynk-spacing-base);
    --body-spacing: var(--lynk-spacing-base);
    --footer-spacing: var(--lynk-spacing-base);
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  :host([no-arrow]) .lynk-popover__arrow {
    visibility: hidden;
  }

  .lynk-popover {
    position: relative;
  }

  .lynk-popover-target {
    display: contents;
  }

  .lynk-popover__positioner {
    position: absolute;
    z-index: var(--lynk-z-index-dropdown);
  }

  .lynk-popover--open .lynk-popover__panel {
    display: flex;
  }

  .lynk-popover__panel {
    display: none;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: var(--max-width);
    max-height: var(--max-height);
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    color: var(--color);
    box-shadow: var(--lynk-shadow-large);
    border-radius: var(--lynk-border-radius-medium);
    background-color: var(--lynk-panel-background-color);
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
  }

  .lynk-popover__panel:focus {
    outline: none;
  }

  .lynk-popover__positioner[data-placement^='top'] .lynk-popover {
    transform-origin: bottom;
  }
  .lynk-popover__positioner[data-placement^='top'] .lynk-popover__arrow {
    border-width: 0 1px 1px 0;
  }

  .lynk-popover__positioner[data-placement^='bottom'] .lynk-popover {
    transform-origin: top;
  }
  .lynk-popover__positioner[data-placement^='bottom'] .lynk-popover__arrow {
    border-width: 1px 0 0 1px;
  }

  .lynk-popover__positioner[data-placement^='left'] .lynk-popover {
    transform-origin: right;
  }
  .lynk-popover__positioner[data-placement^='left'] .lynk-popover__arrow {
    border-width: 1px 1px 0 0;
  }

  .lynk-popover__positioner[data-placement^='right'] .lynk-popover {
    transform-origin: left;
  }
  .lynk-popover__positioner[data-placement^='right'] .lynk-popover__arrow {
    border-width: 0 0 1px 1px;
  }

  .lynk-popover__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
  }

  .lynk-popover__header {
    flex: 0 0 auto;
    display: flex;
    padding: var(--header-spacing);
    padding-bottom: 0;
  }

  .lynk-popover__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--lynk-font-size-base);
    line-height: var(--lynk-line-height-dense);
    margin: 0
  }

  .lynk-popover__close {
    flex: 0 0 auto;
    align-self: end;
    font-size: var(--lynk-font-size-large);
    padding-left: var(--header-spacing);
  }

  .lynk-popover__footer {
    flex: 0 0 auto;
    padding: var(--footer-spacing);
    padding-top: 0;
  }

  .lynk-popover__footer ::slotted(lynk-button:not(:first-of-type)) {
    margin-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-popover__arrow {
    position: absolute;
    border: 1px solid var(--lynk-panel-border-color);
    background: var(--lynk-panel-background-color);
    width: calc(var(--lynk-tooltip-arrow-size) * 2);
    height: calc(var(--lynk-tooltip-arrow-size) * 2);
    transform: rotate(45deg);
    z-index: 1;
  }
`;

export {
  popover_styles_default
};
