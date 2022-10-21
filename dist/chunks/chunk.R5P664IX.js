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
    /* justify-content: space-between;
    align-items: baseline; */
  }

  .lynk-calendar__left-spacer {
    min-width: 40px;
    flex: 0;
  }

  .lynk-calendar__content-sidebar {
    display: flex;
  }

  .lynk-calendar__weekdays {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex: 1;
  }

  .lynk-calendar__weekday,
  .lynk-calendar__content-body__item {
    flex-shrink: 0;
    flex-basis: 80px;
    min-width: 80px;
  }

  .lynk-calendar__weekday {
    display: flex;
    flex-direction: column;
    align-items: center;
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
