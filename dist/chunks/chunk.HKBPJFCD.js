import {
  component_styles_default
} from "./chunk.EEAXDKRP.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/grid/grid.styles.ts
var grid_styles_default = r`
  ${component_styles_default}

  :host {
    display: contents;
  }

  :host([container]) {
    width: var(--container-width, 100%);
  }

  .lynk-grid {
    display: flex;
    flex-flow: row wrap;
    margin: calc(var(--gutter, var(--lynk-spacing-base)) * 0.5);
  }

  .lynk-grid--row {
    flex-flow: row wrap;
  }

  .lynk-grid--row-reverse {
    flex-flow: row-reverse wrap;
  }

  .lynk-grid--column {
    flex-flow: column wrap;
  }

  .lynk-grid--column-reverse {
    flex-flow: column-reverse wrap;
  }

  .lynk-grid--justify-start {
    justify-content: flex-start;
  }

  .lynk-grid--justify-center {
    justify-content: center;
  }

  .lynk-grid--justify-end {
    justify-content: flex-end;
  }

  .lynk-grid--justify-between {
    justify-content: space-between;
  }

  .lynk-grid--justify-around {
    justify-content: space-around;
  }

  .lynk-grid--justify-evenly {
    justify-content: space-evenly;
  }

  .lynk-grid--align-start {
    align-items: flex-start;
  }

  .lynk-grid--align-center {
    align-items: center;
  }

  .lynk-grid--align-end {
    align-items: flex-end;
  }

  .lynk-grid--align-stretch {
    align-items: stretch;
  }

  .lynk-grid--align-baseline {
    align-items: baseline;
  }


  .lynk-grid__item {
    box-sizing: border-box;
    padding: calc(var(--gutter, var(--lynk-spacing-base))/2);
  }

  .lynk-grid__item--span-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .lynk-grid__item--span-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .lynk-grid__item--span-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .lynk-grid__item--span-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .lynk-grid__item--span-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .lynk-grid__item--span-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .lynk-grid__item--span-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .lynk-grid__item--span-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .lynk-grid__item--span-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .lynk-grid__item--span-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .lynk-grid__item--span-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .lynk-grid__item--span-12 {
    flex-basis: 100%;
    max-width: 100%;
  }

`;

export {
  grid_styles_default
};
