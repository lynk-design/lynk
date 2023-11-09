import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --width: 240px;
    --collapsed-width: 24px;
    --header-spacing: var(--lynk-spacing-large);
    --body-spacing: var(--lynk-spacing-large);
    --footer-spacing: var(--lynk-spacing-large);
    --background-color: var(--lynk-color-neutral-0);
  }

  .lynk-page-sidebar {
    position: relative;
    display: flex;
    min-width: var(--collapsed-width);
    max-width: 0;
    width: var(--width);
    max-height: 100%;
    height: 100%;
    background-color: var(--background-color);
    transition: max-width var(--lynk-transition-medium);
  }

  .lynk-page-sidebar.lynk-page-sidebar--open {
    max-width: var(--width);
  }

  .lynk-page-sidebar__container {
    width: var(--width);
    height: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--lynk-transition-medium);
  }

  .lynk-page-sidebar--open .lynk-page-sidebar__container {
    opacity: 1;
    pointer-events: auto;
    transition-delay: var(--lynk-transition-fast);
  }

  .lynk-page-sidebar__nav {
    display: inline-block;
  }

  .lynk-page-sidebar--open .lynk-page-sidebar__nav {
    border-right: 1px solid var(--lynk-color-neutral-100);
  }

  .lynk-page-sidebar.lynk-page-sidebar--left {
    border-inline-end: 1px solid var(--lynk-color-neutral-200);
    height: 100%;
  }

  .lynk-page-sidebar.lynk-page-sidebar--right {
    border-inline-start: 1px solid var(--lynk-color-neutral-200);
    height: 100%;
  }

  .lynk-page-sidebar.lynk-page-sidebar--right-inset,
  .lynk-page-sidebar.lynk-page-sidebar--left-inset {
    border-radius: 8px;
    border: 1px solid var(--lynk-color-neutral-200);
    margin: var(--lynk-spacing-base) auto;
    height: calc(100% - 32px);
  }

  .lynk-page-sidebar.lynk-page-sidebar--left-inset {
    margin-left: var(--lynk-page-layout-margin);
    margin-right: 0;
  }

  .lynk-page-sidebar.lynk-page-sidebar--right-inset {
    margin-right: var(--lynk-page-layout-margin);
    margin-left: 0;
  }

  .lynk-page-sidebar__header {
    display: none;
  }

  .lynk-page-sidebar--has-header .lynk-page-sidebar__header {
    display: flex;
    padding: var(--header-spacing);
    gap: var(--header-spacing);
    align-items: center;
  }

  .lynk-page-sidebar__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--lynk-font-size-base);
    font-weight: var(--lynk-font-weight-semibold);
    line-height: var(--lynk-line-height-dense);
    margin: 0;
  }

  .lynk-page-sidebar__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--lynk-spacing-2x-small);
  }

  .lynk-page-sidebar__header-actions lynk-button,
  .lynk-page-sidebar__header-actions ::slotted(lynk-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin: 0;
    font-size: var(--lynk-font-size-medium);
  }

  .lynk-page-sidebar__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: hidden auto;
    display: block;
    -webkit-overflow-scrolling: touch;
  }

  .lynk-page-sidebar__toggle {
    position: absolute;
    top: var(--header-spacing);
    z-index: 1;
  }

  .lynk-page-sidebar__toggle.lynk-page-sidebar__toggle--center {
    top: 50%;
  }

  .lynk-page-sidebar__toggle.lynk-page-sidebar__toggle--bottom {
    top: unset;
    bottom: var(--footer-spacing);
  }

  .lynk-page-sidebar__toggle.lynk-page-sidebar__toggle--hidden {
    display: none;
  }

  .lynk-page-sidebar--left .lynk-page-sidebar__toggle,
  .lynk-page-sidebar--left-inset .lynk-page-sidebar__toggle {
    right: -13px;
  }

  .lynk-page-sidebar--right .lynk-page-sidebar__toggle,
  .lynk-page-sidebar--right-inset .lynk-page-sidebar__toggle {
    left: -13px;
    rotate: 180deg;
  }

  .lynk-page-sidebar__footer {
    padding: var(--footer-spacing);
  }

  .lynk-page-sidebar__footer ::slotted(lynk-button:not(:last-of-type)) {
    margin-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-page-sidebar:not(.lynk-page-sidebar--has-footer) .lynk-page-sidebar__footer {
    display: none;
  }
`;
