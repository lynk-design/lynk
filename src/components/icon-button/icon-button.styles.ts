import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .l-icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--l-border-radius-medium);
    font-size: inherit;
    color: var(--l-color-neutral-600);
    padding: var(--l-spacing-x-small);
    cursor: pointer;
    transition: var(--l-transition-medium) color;
    -webkit-appearance: none;
  }

  .l-icon-button:hover:not(.l-icon-button--disabled),
  .l-icon-button:focus:not(.l-icon-button--disabled) {
    color: var(--l-color-primary-600);
  }

  .l-icon-button:active:not(.l-icon-button--disabled) {
    color: var(--l-color-primary-700);
  }

  .l-icon-button:focus {
    outline: none;
  }

  .l-icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .l-icon-button${focusVisibleSelector} {
    outline: var(--l-focus-ring);
    outline-offset: var(--l-focus-ring-offset);
  }

  .l-icon-button__icon {
    pointer-events: none;
  }
`;
