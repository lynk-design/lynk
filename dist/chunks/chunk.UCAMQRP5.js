import {
  grid_styles_default
} from "./chunk.KC2UW7BG.js";
import {
  e,
  n
} from "./chunk.DC3HFRI2.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.SEZCJCPZ.js";

// src/components/grid/grid.ts
var LynkGrid = class extends s {
  constructor() {
    super(...arguments);
    this.container = false;
    this.item = false;
    this.gap = "base";
  }
  getBreakpointClasses() {
    return this.span ? this.span.split(",").map((key) => `span--${key.trim()}`).join(" ") : "";
  }
  render() {
    const containerClass = this.container ? "lynk-grid" : null;
    const directionClass = this.direction && this.container ? "lynk-grid--" + this.direction : null;
    const justifyClass = this.justify && this.container ? "lynk-grid--justify-" + this.justify : null;
    const alignClass = this.align && this.container ? "lynk-grid--align-" + this.align : null;
    const itemClass = this.item ? "lynk-grid__item" : null;
    const spanClass = this.span && this.item ? this.getBreakpointClasses() : null;
    const classList = [containerClass, directionClass, justifyClass, alignClass, itemClass, spanClass];
    return $`
      <div part="base" class="${classList.join(" ")}" style="--gap: var(--lynk-spacing-${this.gap})">
        <slot></slot>
      </div>
    `;
  }
};
LynkGrid.styles = grid_styles_default;
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkGrid.prototype, "container", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkGrid.prototype, "item", 2);
__decorateClass([
  e({ reflect: true })
], LynkGrid.prototype, "direction", 2);
__decorateClass([
  e({ reflect: true })
], LynkGrid.prototype, "justify", 2);
__decorateClass([
  e({ reflect: true })
], LynkGrid.prototype, "align", 2);
__decorateClass([
  e({ reflect: true })
], LynkGrid.prototype, "span", 2);
__decorateClass([
  e({ reflect: true })
], LynkGrid.prototype, "gap", 2);
LynkGrid = __decorateClass([
  n("lynk-grid")
], LynkGrid);

export {
  LynkGrid
};
