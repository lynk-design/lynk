import {
  component_styles_default
} from "./chunk.BBN5BSZB.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/progress-bar/progress-bar.styles.ts
var progress_bar_styles_default = r`
  ${component_styles_default}

  :host {
    --height: 1rem;
    --track-color: var(--lynk-color-neutral-200);
    --indicator-color: var(--lynk-color-primary-600);
    --label-color: var(--lynk-color-neutral-0);

    display: block;
  }

  .lynk-progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--lynk-border-radius-pill);
    box-shadow: inset var(--lynk-shadow-small);
    overflow: hidden;
  }

  .lynk-progress-bar__indicator {
    height: 100%;
    font-family: var(--lynk-font-sans);
    font-size: 12px;
    font-weight: var(--lynk-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .lynk-progress-bar--indeterminate .lynk-progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      inset-inline-start: -50%;
      width: 50%;
    }
    75%,
    100% {
      inset-inline-start: 100%;
      width: 50%;
    }
  }
`;

export {
  progress_bar_styles_default
};
