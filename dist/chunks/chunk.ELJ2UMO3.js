import {
  component_styles_default
} from "./chunk.EEAXDKRP.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/progress-ring/progress-ring.styles.ts
var progress_ring_styles_default = r`
  ${component_styles_default}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--lynk-color-neutral-200);
    --indicator-color: var(--lynk-color-primary-600);

    display: inline-flex;
  }

  .lynk-progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .lynk-progress-ring__image {
    width: var(--size);
    height: var(--size);
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .lynk-progress-ring__track,
  .lynk-progress-ring__indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    stroke-width: var(--track-width);
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .lynk-progress-ring__track {
    stroke: var(--track-color);
  }

  .lynk-progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transition: 0.35s stroke-dashoffset;
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .lynk-progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`;

export {
  progress_ring_styles_default
};
