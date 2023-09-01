import { css } from 'lit';
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
    --track-active-offset: 0%;
    --track-height: 6px;
    --marker-color: var(--lynk-color-white);
    --marker-size: 4px;
    --marker-selected-color: var(--lynk-color-primary);

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 3px;
    width: 100%;
    cursor: pointer;
    outline: none;
    height: var(--track-height);
    background: transparent;
    line-height: var(--lynk-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }


  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--thumb-size);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    border: none;
    /* custom design */
    position: relative;
    z-index: 2;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--lynk-color-primary-600);
    border: solid var(--lynk-input-border-width) var(--lynk-color-primary-600);
    
/*    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;*/

    transition: var(--lynk-transition-fast);
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
    box-shadow: 0 0 0 8px var(--lynk-color-primary-a25);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    box-shadow: 0 0 0 8px var(--lynk-color-primary-a50);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
    box-shadow: 0 0 0 8px var(--lynk-color-primary-a50);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--lynk-color-primary-600);
    border-color: var(--lynk-color-primary-600);
    transition: var(--lynk-transition-fast) border-color, var(--lynk-transition-fast) background-color,
      var(--lynk-transition-fast) color, var(--lynk-transition-fast) box-shadow;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
    box-shadow: 0 0 0 8px var(--lynk-color-primary-a25);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
    box-shadow: 0 0 0 8px var(--lynk-color-primary-a50);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
    box-shadow: 0 0 0 8px var(--lynk-color-primary-a50);
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .range__control:enabled:active {
    cursor: grabbing;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--lynk-z-index-tooltip);
    left: 0;
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

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--lynk-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--lynk-tooltip-arrow-size) solid var(--lynk-tooltip-background-color);
    border-left: var(--lynk-tooltip-arrow-size) solid transparent;
    border-right: var(--lynk-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--lynk-tooltip-arrow-size) solid var(--lynk-tooltip-background-color);
    border-left: var(--lynk-tooltip-arrow-size) solid transparent;
    border-right: var(--lynk-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  /* Slider Ticks & Markers */

  .range--has-markers {
    margin-bottom: var(--lynk-spacing-base);
  }
  .range__markers {
    display: flex;
    position: absolute;
    left: calc(var(--thumb-size) / 2);
    right: calc(var(--thumb-size) / 2);
    z-index: 1;
    top: calc((var(--thumb-size) / 2) + var(--marker-size));
    pointer-events: none;
/*    top: calc(var(--thumb-size) * -1);*/
  }



  .range__mark {
    position: absolute;
    left: var(--offset);
    transform: translateX(-50%);
  }

  .range--rtl .range__mark {
    left: initial;
    right: var(--offset);
  }

  .range__mark::before {
    width: var(--marker-size);
    height: var(--marker-size);
    border-radius: 50%;
    background-color: var(--marker-color);
    content: "";
    position: relative;
    left: 50%;
/*    top: calc((var(--thumb-size) - var(--track-height)) / 2);*/
    transform: translateX(-50%) translateY(-50%);
    display: block;
  }

  .range__mark-label {
    display: inline-block;
    margin-top: var(--lynk-spacing-2x-small);
    pointer-events: auto;
    cursor: pointer;
  }

  .range__mark--selected.range__mark::before {
    background-color: var(--marker-selected-color);
  }

  .range__mark--selected .range__mark-label {
    color: var(--marker-selected-color);
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;
