import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/timeline/timeline.styles.ts
var timeline_styles_default = r`
  ${component_styles_default}

  :host > div {
    display: flex;
    overflow: auto hidden;
  }

  .lynk-timeline__header {
    display: flex;
  }

  .lynk-timeline__sidebar,
  .lynk-timeline__left-spacer {
    min-width: 80px;
    flex: 0;
  }

  .lynk-timeline__content-sidebar {
    flex-direction: column;
    flex-grow: 0;
  }

  .lynk-timeline__time {
    /* width: 40px; */
    position: relative;
    height: 48px;
    padding-right: 8px;
    text-align: right;
  }

  .lynk-timeline__content {
    max-height: 500px;
    overflow: hidden auto;
  }

  .lynk-timeline__content > div {
    display: flex;
    line-height: 48px;
  }

  .lynk-timeline__weekdays,
  .lynk-timeline__row {
    display: flex;
    /* justify-content: space-between;
    align-items: baseline; */
    flex: 1;
  }

  .lynk-timeline__row {
    background-image:linear-gradient(#ccc 1px, transparent 1px);
    background-size: 20px 48px;
    background-position: 0 24px;
  }

  .lynk-timeline__weekdays {
    border-bottom: 1px solid white;
  }

  .lynk-timeline__weekday,
  .lynk-timeline__column {
    display: flex;
    flex-shrink: 0;
    /* flex-basis: 80px; */
    min-width: 80px;
    /* border-right: white 1px solid; */
    position: relative;
    padding-right: 12px;
    box-sizing: border-box;
    flex: 1 1 auto;
    flex-basis: 0;
  }

  .lynk-timeline__weekday {
    flex-direction: column;
    align-items: center;
  }

  .lynk-timeline__column {
    border-right: white 1px solid;
    position: relative;
  }

  .lynk-timeline__column:last-child {
    border: none;
  }

  .horizontal-lines {
    width: 500px;
    margin: 50px auto;
    height: 100%;
    padding-top: 6px;
    line-height: 30px;
    padding-left:5px;

    background-image:linear-gradient(#ccc 1px, transparent 1px);
    background-size: 20px 30px;
  }
`;

export {
  timeline_styles_default
};
