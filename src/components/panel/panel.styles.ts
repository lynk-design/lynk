import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --spacing: var(--lynk-spacing-medium);
    --border-radius: var(--lynk-border-radius-medium);
    --border-color: transparent;
    --background-color: var(--lynk-color-neutral-50);
  }

  .panel {
    border: solid 1px var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    overflow-anchor: none;
  }

  .panel--accordion.panel--disabled {
    opacity: 0.5;
  }

  .panel__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--spacing);
    gap: var(--lynk-spacing-x-small);
  }

  .panel--accordion .panel__header--trigger {
    cursor: pointer;
  }

  .panel__header:focus {
    outline: none;
  }

  .panel__header:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: calc(1px + var(--lynk-focus-ring-offset));
  }

  .panel--accordion.panel--disabled .panel__header {
    cursor: not-allowed;
  }

  .panel--accordion.panel--disabled .panel__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .panel__heading {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    font: inherit;
    font-size: var(--lynk-font-size-large);
    line-height: var(--lynk-line-height-dense);
  }

  .panel--accordion .panel__heading--trigger,
  .panel--accordion .panel__toggle-icon--trigger {
    cursor: pointer;
    opacity: 0.75;
  }

  .panel--accordion .panel__heading--trigger:hover,
  .panel--accordion .panel__toggle-icon--trigger:hover {
    opacity: 1;
  }

  .panel__toggle-icon {
    flex: 0 0 auto;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: var(--lynk-transition-medium) rotate ease;
  }

  .panel__toggle-icon--start {
    order: -1;
  }

  .panel__toggle-icon--hidden {
    display: none;
  }

  .panel--expanded .panel__toggle-icon {
    rotate: 90deg;
  }

  .panel--expanded.panel--rtl .panel__toggle-icon {
    rotate: -90deg;
  }

  .panel--expanded slot[name='expand-icon'],
  .panel:not(.panel--expanded) slot[name='collapse-icon'],
  .panel.panel--toggle-suffix:not(.panel--expanded) .panel__suffix {
    display: none;
  }

  .panel__prefix {
    order: -2;
  }

  .panel__suffix {
    order: 1;
  }

  .panel__body {
    overflow: hidden;
  }

  .panel__content {
    display: block;
    padding: var(--spacing);
  }

  .panel:not(.panel--no-header) .panel__content {
    padding-top: 0;
  }

  .panel__footer {
    display: flex;
    padding: var(--spacing);
    padding-top: 0;
    gap: var(--lynk-spacing-2x-small);
  }

  .panel:not(.panel--has-footer) .panel__footer {
    display: none;
  }
`;
