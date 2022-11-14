import {
  progress_ring_styles_default
} from "./chunk.GAFOHA6C.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/progress-ring/progress-ring.ts
var LynkProgressRing = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("percentage")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return $`
      <div
        part="base"
        class="lynk-progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="lynk-progress-ring__image">
          <circle class="lynk-progress-ring__track"></circle>
          <circle class="lynk-progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <span part="label" class="lynk-progress-ring__label">
          <slot></slot>
        </span>
      </div>
    `;
  }
};
LynkProgressRing.styles = progress_ring_styles_default;
__decorateClass([
  i(".lynk-progress-ring__indicator")
], LynkProgressRing.prototype, "indicator", 2);
__decorateClass([
  t()
], LynkProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], LynkProgressRing.prototype, "value", 2);
__decorateClass([
  e()
], LynkProgressRing.prototype, "label", 2);
__decorateClass([
  e()
], LynkProgressRing.prototype, "lang", 2);
LynkProgressRing = __decorateClass([
  n("lynk-progress-ring")
], LynkProgressRing);

export {
  LynkProgressRing
};
