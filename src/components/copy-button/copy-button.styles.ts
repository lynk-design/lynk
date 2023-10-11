import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --error-color: var(--lynk-color-danger);
    --success-color: var(--lynk-color-success);

    display: inline-flex;
    vertical-align: middle;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--lynk-border-radius-medium);
    font-size: var(--lynk-font-size-base);
    line-height: 1;
    color: inherit;
    padding: var(--lynk-spacing-2x-small);
    cursor: pointer;
    transition: var(--lynk-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;