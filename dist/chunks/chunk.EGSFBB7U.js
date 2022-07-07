import {
  component_styles_default
} from "./chunk.BBN5BSZB.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/tab-group/tab-group.styles.ts
var tab_group_styles_default = r`
  ${component_styles_default}

  :host {
    --indicator-color: var(--lynk-color-primary-600);
    --track-color: var(--lynk-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .lynk-tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .lynk-tab-group .lynk-tab-group__tabs {
    display: flex;
    position: relative;
  }

  .lynk-tab-group .lynk-tab-group__indicator {
    position: absolute;
    transition: var(--lynk-transition-fast) transform ease, var(--lynk-transition-fast) width ease;
  }

  .lynk-tab-group--has-scroll-controls .lynk-tab-group__nav-container {
    position: relative;
    padding: 0 var(--lynk-spacing-x-large);
  }

  .lynk-tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--lynk-spacing-x-large);
  }

  .lynk-tab-group__scroll-button--start {
    left: 0;
  }

  .lynk-tab-group__scroll-button--end {
    right: 0;
  }

  /*
   * Top
   */

  .lynk-tab-group--top {
    flex-direction: column;
  }

  .lynk-tab-group--top .lynk-tab-group__nav-container {
    order: 1;
  }

  .lynk-tab-group--top .lynk-tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .lynk-tab-group--top .lynk-tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .lynk-tab-group--top .lynk-tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .lynk-tab-group--top .lynk-tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .lynk-tab-group--top .lynk-tab-group__body {
    order: 2;
  }

  .lynk-tab-group--top ::slotted(lynk-tab-panel) {
    --padding: var(--lynk-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .lynk-tab-group--bottom {
    flex-direction: column;
  }

  .lynk-tab-group--bottom .lynk-tab-group__nav-container {
    order: 2;
  }

  .lynk-tab-group--bottom .lynk-tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .lynk-tab-group--bottom .lynk-tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .lynk-tab-group--bottom .lynk-tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .lynk-tab-group--bottom .lynk-tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .lynk-tab-group--bottom .lynk-tab-group__body {
    order: 1;
  }

  .lynk-tab-group--bottom ::slotted(lynk-tab-panel) {
    --padding: var(--lynk-spacing-medium) 0;
  }

  /*
   * Start
   */

  .lynk-tab-group--start {
    flex-direction: row;
  }

  .lynk-tab-group--start .lynk-tab-group__nav-container {
    order: 1;
  }

  .lynk-tab-group--start .lynk-tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .lynk-tab-group--start .lynk-tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .lynk-tab-group--start.lynk-tab-group--rtl .lynk-tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .lynk-tab-group--start .lynk-tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .lynk-tab-group--start ::slotted(lynk-tab-panel) {
    --padding: 0 var(--lynk-spacing-medium);
  }

  /*
   * End
   */

  .lynk-tab-group--end {
    flex-direction: row;
  }

  .lynk-tab-group--end .lynk-tab-group__nav-container {
    order: 2;
  }

  .lynk-tab-group--end .lynk-tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-right: solid var(--track-width) var(--track-color);
  }

  .lynk-tab-group--end .lynk-tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .lynk-tab-group--end.lynk-tab-group--rtl .lynk-tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .lynk-tab-group--end .lynk-tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .lynk-tab-group--end ::slotted(lynk-tab-panel) {
    --padding: 0 var(--lynk-spacing-medium);
  }
`;

export {
  tab_group_styles_default
};
