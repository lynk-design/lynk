import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  e,
  n
} from "./chunk.X6SWQQ2B.js";
import {
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/format-bytes/format-bytes.ts
var LynkFormatBytes = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.unit = "byte";
    this.display = "short";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const bitPrefixes = ["", "kilo", "mega", "giga", "tera"];
    const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"];
    const prefix = this.unit === "bit" ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
    return this.localize.number(valueToFormat, {
      style: "unit",
      unit,
      unitDisplay: this.display
    });
  }
};
__decorateClass([
  e({ type: Number })
], LynkFormatBytes.prototype, "value", 2);
__decorateClass([
  e()
], LynkFormatBytes.prototype, "unit", 2);
__decorateClass([
  e()
], LynkFormatBytes.prototype, "display", 2);
__decorateClass([
  e()
], LynkFormatBytes.prototype, "lang", 2);
LynkFormatBytes = __decorateClass([
  n("lynk-format-bytes")
], LynkFormatBytes);

export {
  LynkFormatBytes
};
