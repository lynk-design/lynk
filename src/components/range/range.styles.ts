import { css } from 'lit';
import { focusVisibleSelector } from '../../internal/focus-visible';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--lynk-color-neutral-200);
    --track-color-inactive: var(--lynk-color-neutral-200);
    --track-height: 6px;

    display: block;
  }

  .lynk-range {
    position: relative;
  }

  .lynk-range__control {
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--lynk-input-height-medium);
    vertical-align: middle;
  }

  /* Webkit */
  .lynk-range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .lynk-range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--lynk-color-primary-600);
    border: solid var(--lynk-input-border-width) var(--lynk-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) color, var(--lynk-transition-fast) box-shadow, var(--lynk-transition-fast) transform;
    cursor: pointer;
  }

  .lynk-range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
  }

  .lynk-range__control:enabled${focusVisibleSelector}::-webkit-slider-thumb {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .lynk-range__control::-moz-focus-outer {
    border: 0;
  }

  .lynk-range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .lynk-range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .lynk-range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--lynk-color-primary-600);
    border-color: var(--lynk-color-primary-600);
    transition: var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) color, var(--lynk-transition-fast) box-shadow, var(--lynk-transition-fast) transform;
    cursor: pointer;
  }

  .lynk-range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
  }

  .lynk-range__control:enabled${focusVisibleSelector}::-moz-range-thumb {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-range__control:enabled::-moz-range-thumb:active {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .lynk-range__control${focusVisibleSelector} {
    outline: none;
  }

  .lynk-range__control:disabled {
    opacity: 0.5;
  }

  .lynk-range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .lynk-range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .lynk-range__tooltip {
    position: absolute;
    z-index: var(--lynk-z-index-tooltip);
    left: 1px;
    border-radius: var(--lynk-tooltip-border-radius);
    background-color: var(--lynk-tooltip-background-color);
    font-family: var(--lynk-tooltip-font-family);
    font-size: var(--lynk-tooltip-font-size);
    font-weight: var(--lynk-tooltip-font-weight);
    line-height: var(--lynk-tooltip-line-height);
    color: var(--lynk-tooltip-color);
    opacity: 0;
    padding: var(--lynk-tooltip-padding);
    transition: var(--lynk-transition-fast) opacity;
    pointer-events: none;
  }

  .lynk-range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translateX(calc(-1 * var(--lynk-tooltip-arrow-size)));
  }

  .lynk-range--tooltip-visible .lynk-range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .lynk-range--tooltip-top .lynk-range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .lynk-range--tooltip-top .lynk-range__tooltip:after {
    border-top: var(--lynk-tooltip-arrow-size) solid var(--lynk-tooltip-background-color);
    border-left: var(--lynk-tooltip-arrow-size) solid transparent;
    border-right: var(--lynk-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .lynk-range--tooltip-bottom .lynk-range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .lynk-range--tooltip-bottom .lynk-range__tooltip:after {
    border-bottom: var(--lynk-tooltip-arrow-size) solid var(--lynk-tooltip-background-color);
    border-left: var(--lynk-tooltip-arrow-size) solid transparent;
    border-right: var(--lynk-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`;
