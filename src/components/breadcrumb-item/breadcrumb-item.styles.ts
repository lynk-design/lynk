import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .lynk-breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--lynk-font-sans);
    font-size: var(--lynk-font-size-small);
    font-weight: var(--lynk-font-weight-semibold);
    color: var(--lynk-color-neutral-600);
    line-height: var(--lynk-line-height-normal);
    white-space: nowrap;
  }

  .lynk-breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--lynk-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--lynk-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .lynk-breadcrumb-item__label {
    color: var(--lynk-color-primary-600);
  }

  :host(:not(:last-of-type)) .lynk-breadcrumb-item__label:hover {
    color: var(--lynk-color-primary-500);
  }

  :host(:not(:last-of-type)) .lynk-breadcrumb-item__label:active {
    color: var(--lynk-color-primary-600);
  }

  .lynk-breadcrumb-item__label:focus {
    outline: none;
  }

  .lynk-breadcrumb-item__label:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-breadcrumb-item__prefix,
  .lynk-breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .lynk-breadcrumb-item--has-prefix .lynk-breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-breadcrumb-item--has-suffix .lynk-breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--lynk-spacing-x-small);
  }

  :host(:last-of-type) .lynk-breadcrumb-item__separator {
    display: none;
  }

  .lynk-breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--lynk-spacing-x-small);
    user-select: none;
  }
`;
