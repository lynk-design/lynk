import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    --padding: var(--lynk-spacing-base);

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .lynk-alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--lynk-panel-background-color);
    border: solid var(--lynk-panel-border-width) var(--lynk-panel-border-color);
    border-left-width: calc(var(--lynk-panel-border-width) * 4);
    border-right-width: calc(var(--lynk-panel-border-width) * 4);
    border-radius: var(--lynk-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-medium);
    font-weight: var(--lynk-font-weight-normal);
    line-height: 1.6;
    color: var(--lynk-color-neutral-900);
    margin: inherit;
  }

  .lynk-alert:not(.lynk-alert--has-icon) .lynk-alert__icon,
  .lynk-alert:not(.lynk-alert--closable) .lynk-alert__close-button {
    display: none;
  }

  .lynk-alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--lynk-font-size-x-large);
    padding-inline-start: var(--lynk-spacing-medium);
  }

  .lynk-alert--primary {
    border-left-color: var(--lynk-color-primary-600);
    border-right-color: var(--lynk-color-primary-600);
  }

  .lynk-alert--primary .lynk-alert__icon {
    color: var(--lynk-color-primary-600);
  }

  .lynk-alert--success {
    border-left-color: var(--lynk-color-success-600);
    border-right-color: var(--lynk-color-success-600);
  }

  .lynk-alert--success .lynk-alert__icon {
    color: var(--lynk-color-success-600);
  }

  .lynk-alert--neutral {
    border-left-color: var(--lynk-color-neutral-600);
    border-right-color: var(--lynk-color-neutral-600);
  }

  .lynk-alert--neutral .lynk-alert__icon {
    color: var(--lynk-color-neutral-600);
  }

  .lynk-alert--warning {
    border-left-color: var(--lynk-color-warning-600);
    border-right-color: var(--lynk-color-warning-600);
  }

  .lynk-alert--warning .lynk-alert__icon {
    color: var(--lynk-color-warning-600);
  }

  .lynk-alert--danger {
    border-left-color: var(--lynk-color-danger-600);
    border-right-color: var(--lynk-color-danger-600);
  }

  .lynk-alert--danger .lynk-alert__icon {
    color: var(--lynk-color-danger-600);
  }

  .lynk-alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--padding) var(--lynk-spacing-medium);
    overflow: hidden;
  }

  .lynk-alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--lynk-font-size-large);
    padding-inline-end: var(--lynk-spacing-base);
  }

  .lynk-alert__action {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding-inline-end: var(--lynk-spacing-base);
  }
`;
