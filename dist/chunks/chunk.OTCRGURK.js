import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  e,
  n
} from "./chunk.ML4GKG4X.js";
import {
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/format-number/format-number.ts
var LynkFormatNumber = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
__decorateClass([
  e({ type: Number })
], LynkFormatNumber.prototype, "value", 2);
__decorateClass([
  e()
], LynkFormatNumber.prototype, "lang", 2);
__decorateClass([
  e()
], LynkFormatNumber.prototype, "type", 2);
__decorateClass([
  e({ attribute: "no-grouping", type: Boolean })
], LynkFormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  e()
], LynkFormatNumber.prototype, "currency", 2);
__decorateClass([
  e({ attribute: "currency-display" })
], LynkFormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  e({ attribute: "minimum-integer-digits", type: Number })
], LynkFormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  e({ attribute: "minimum-fraction-digits", type: Number })
], LynkFormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  e({ attribute: "maximum-fraction-digits", type: Number })
], LynkFormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  e({ attribute: "minimum-significant-digits", type: Number })
], LynkFormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  e({ attribute: "maximum-significant-digits", type: Number })
], LynkFormatNumber.prototype, "maximumSignificantDigits", 2);
LynkFormatNumber = __decorateClass([
  n("lynk-format-number")
], LynkFormatNumber);

export {
  LynkFormatNumber
};
