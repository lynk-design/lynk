import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --symbol-color: var(--lynk-color-neutral-300);
    --symbol-color-active: var(--lynk-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--lynk-spacing-tiny);

    display: inline-flex;
  }

  .lynk-rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--lynk-border-radius-medium);
    vertical-align: middle;
  }

  .lynk-rating:focus {
    outline: none;
  }

  .lynk-rating${focusVisibleSelector} {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .lynk-rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .lynk-rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .lynk-rating__symbol {
    transition: var(--lynk-transition-fast) transform;
  }

  .lynk-rating__symbol--hover {
    transform: scale(1.2);
  }

  .lynk-rating--disabled .lynk-rating__symbols,
  .lynk-rating--readonly .lynk-rating__symbols {
    cursor: default;
  }

  .lynk-rating--disabled .lynk-rating__symbol--hover,
  .lynk-rating--readonly .lynk-rating__symbol--hover {
    transform: none;
  }

  .lynk-rating--disabled {
    opacity: 0.5;
  }

  .lynk-rating--disabled .lynk-rating__symbols {
    cursor: not-allowed;
  }
`;
