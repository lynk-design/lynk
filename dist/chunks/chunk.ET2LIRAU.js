import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  e,
  n
} from "./chunk.X6SWQQ2B.js";
import {
  badge_styles_default
} from "./chunk.BHACNR7A.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/badge/badge.ts
var LynkBadge = class extends s {
  constructor() {
    super(...arguments);
    this.type = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return $`
      <span
        part="base"
        class=${o({
      "lynk-badge": true,
      "lynk-badge--primary": this.type === "primary",
      "lynk-badge--success": this.type === "success",
      "lynk-badge--neutral": this.type === "neutral",
      "lynk-badge--warning": this.type === "warning",
      "lynk-badge--danger": this.type === "danger",
      "lynk-badge--pill": this.pill,
      "lynk-badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
LynkBadge.styles = badge_styles_default;
__decorateClass([
  e({ reflect: true })
], LynkBadge.prototype, "type", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkBadge.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkBadge.prototype, "pulse", 2);
LynkBadge = __decorateClass([
  n("lynk-badge")
], LynkBadge);

export {
  LynkBadge
};
