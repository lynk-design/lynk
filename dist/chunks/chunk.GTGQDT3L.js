import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  e,
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/format-date/format-date.ts
var LynkFormatDate = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.date = new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return $`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  e()
], LynkFormatDate.prototype, "date", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "lang", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "weekday", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "era", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "year", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "month", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "day", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "hour", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "minute", 2);
__decorateClass([
  e()
], LynkFormatDate.prototype, "second", 2);
__decorateClass([
  e({ attribute: "time-zone-name" })
], LynkFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  e({ attribute: "time-zone" })
], LynkFormatDate.prototype, "timeZone", 2);
__decorateClass([
  e({ attribute: "hour-format" })
], LynkFormatDate.prototype, "hourFormat", 2);
LynkFormatDate = __decorateClass([
  n("lynk-format-date")
], LynkFormatDate);

export {
  LynkFormatDate
};
