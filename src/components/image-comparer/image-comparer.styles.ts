import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .lynk-image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .lynk-image-comparer__before,
  .lynk-image-comparer__after {
    pointer-events: none;
  }

  .lynk-image-comparer__before ::slotted(img),
  .lynk-image-comparer__after ::slotted(img),
  .lynk-image-comparer__before ::slotted(svg),
  .lynk-image-comparer__after ::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .lynk-image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .lynk-image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--lynk-color-neutral-0);
    transform: translateX(calc(var(--divider-width) / -2));
    cursor: ew-resize;
  }

  .lynk-image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--lynk-color-neutral-0);
    border-radius: var(--lynk-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--lynk-color-neutral-600);
    cursor: inherit;
    z-index: 10;
  }

  .lynk-image-comparer__handle${focusVisibleSelector} {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }
`;
