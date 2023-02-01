import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --max-width: 240px;
    --header-spacing: var(--lynk-spacing-large);
    --body-spacing: var(--lynk-spacing-large);
    --footer-spacing: var(--lynk-spacing-large);
    --background-color: var(--lynk-color-neutral-0);
  }

  .lynk-page-sidebar {
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 2;
      min-width: 36px;
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      background-color: var(--background-color);
      transition: width var(--lynk-transition-medium);
  }

  .lynk-page-sidebar.lynk-page-sidebar--open {
      width: var(--max-width);
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
      margin: var(--lynk-spacing-large) auto;
      height: calc(100% - 48px);
  }

  .lynk-page-sidebar.lynk-page-sidebar--left-inset {
      margin-left: var(--lynk-spacing-large);
      margin-right: 0;
  }

  .lynk-page-sidebar.lynk-page-sidebar--right-inset {
      margin-right: var(--lynk-spacing-large);
      margin-left: 0;
  }

  @media only screen and (min-width: 1024px) {
      .lynk-page-sidebar.lynk-page-sidebar--left-inset {
          margin-left: var(--lynk-spacing-x-large);
      }

      .lynk-page-sidebar.lynk-page-sidebar--right-inset {
          margin-right: var(--lynk-spacing-x-large);
      }
  }

  @media only screen and (min-width: 1440px) {
      .lynk-page-sidebar.lynk-page-sidebar--left-inset {
          margin-left: var(--lynk-spacing-2x-large);
      }

      .lynk-page-sidebar.lynk-page-sidebar--right-inset {
          margin-right: var(--lynk-spacing-2x-large);
      }
  }

  .lynk-page-sidebar__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--lynk-font-size-base);
    font-weight: var(--lynk-font-weight-semibold);
    line-height: var(--lynk-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .lynk-page-sidebar__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--lynk-spacing-2x-small);
    padding: 0 var(--lynk-spacing-2x-small);
  }

  .lynk-page-sidebar__header-actions lynk-button,
  .lynk-page-sidebar__header-actions ::slotted(lynk-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin: 24px 0;
    font-size: var(--lynk-font-size-medium);
  }

  .lynk-page-sidebar__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    display: block;
    max-width: var(--max-width);
    -webkit-overflow-scrolling: touch;
  }

  .lynk-page-sidebar--left .lynk-page-sidebar__toggle {
      position: absolute;
      bottom: var(--footer-spacing);
      right: -12px;
      z-index: 1;
  }

  .lynk-page-sidebar--right .lynk-page-sidebar__toggle {
      position: absolute;
      bottom: var(--footer-spacing);
      left: -12px;
      rotate: 180deg;
  }

  .lynk-page-sidebar--right-inset .lynk-page-sidebar__toggle,
  .lynk-page-sidebar--left-inset .lynk-page-sidebar__toggle {
      position: absolute;
      top: var(--header-spacing);
      right: 5px;
  }

  .lynk-page-sidebar--right-inset.lynk-page-sidebar--open .lynk-page-sidebar__toggle,
  .lynk-page-sidebar--left-inset.lynk-page-sidebar--open .lynk-page-sidebar__toggle {
      right: var(--header-spacing);
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
