import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/calendar/calendar.styles.ts
var calendar_styles_default = r`
  ${component_styles_default}

  .lynk-calendar__header {
    display: flex;
  }

  .lynk-calendar__sidebar,
  .lynk-calendar__left-spacer {
    min-width: 80px;
    flex: 0;
  }

  .lynk-calendar__content-sidebar {
    flex-direction: column;
    flex-grow: 0;
  }

  .lynk-calendar__time {
    /* width: 40px; */
    position: relative;
    height: 48px;
    padding-right: 8px;
    text-align: right;
  }

  .lynk-calendar__content {
    display: flex;
  }

  .lynk-calendar__weekdays,
  .lynk-calendar__row {
    display: flex;
    /* justify-content: space-between;
    align-items: baseline; */
    flex: 1;
  }

  .lynk-calendar__weekday,
  .lynk-calendar__row-item {
    display: flex;
    flex-shrink: 0;
    flex-basis: 80px;
    min-width: 80px;
    border-right: white 1px solid;
    position: relative;
    padding-right: 12px;
    box-sizing: border-box;
    flex: 1 1 auto;
  }

  .lynk-calendar__weekday {
    flex-direction: column;
    align-items: center;
  }

  .lynk-calendar__weekday:last-child,
  .lynk-calendar__row-item:last-child {
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
  calendar_styles_default
};
