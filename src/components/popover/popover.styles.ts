import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

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

  .lynk-popover::part(popup) {
    z-index: var(--lynk-z-index-dropdown);
    --arrow-size: var(--lynk-tooltip-arrow-size);
    --arrow-color: var(--lynk-panel-border-color);
  }

  .lynk-popover[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .lynk-popover[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .lynk-popover[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .lynk-popover[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .lynk-popover-target {
    display: contents;
  }

  .lynk-popover--open .lynk-popover__panel {
    pointer-events: all;
  }

  .lynk-popover__panel {
    display: flex;
    pointer-events: none;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: var(--max-width);
    max-height: var(--max-height);
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    box-shadow: var(--lynk-shadow-large);
    border-radius: var(--lynk-border-radius-medium);
    background-color: var(--lynk-panel-background-color);
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
  }

  .lynk-popover__panel:focus {
    outline: none;
  }

  .lynk-popover__body {
    flex: 1 1 auto;
    display: block;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
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
    margin: 0;
  }

  .lynk-popover__close {
    flex: 0 0 auto;
    align-self: end;
    font-size: var(--lynk-font-size-base);
    padding-left: var(--header-spacing);
    position: relative;
    top: -4px;
    right: -4px;
  }

  .lynk-popover__footer {
    flex: 0 0 auto;
    padding: var(--footer-spacing);
    padding-top: 0;
  }

  .lynk-popover__footer ::slotted(lynk-button:not(:first-of-type)) {
    margin-inline-end: var(--lynk-spacing-x-small);
  }
`;
