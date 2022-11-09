import {
  stack_styles_default
} from "./chunk.QGWWZ2VU.js";
import {
  e,
  n
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/stack/stack.ts
var LynkStack = class extends s {
  constructor() {
    super(...arguments);
    this.horizontal = false;
    this.reverse = false;
    this.gap = "var(--lynk-spacing-small)";
  }
  render() {
    const horizontalClass = this.horizontal ? "lynk-stack--horizontal" : null;
    const reverseClass = this.reverse ? "lynk-stack--reverse" : null;
    const justifyClass = this.justify ? "lynk-stack--justify-" + this.justify : null;
    const alignClass = this.align ? "lynk-stack--align-" + this.align : null;
    const classList = [horizontalClass, reverseClass, justifyClass, alignClass];
    return $`
      <div part="base" class="lynk-stack ${classList.join(" ")}" style="--gap: ${this.gap};">
        <slot></slot>
      </div>
    `;
  }
};
LynkStack.styles = stack_styles_default;
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkStack.prototype, "horizontal", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkStack.prototype, "reverse", 2);
__decorateClass([
  e({ reflect: true })
], LynkStack.prototype, "justify", 2);
__decorateClass([
  e({ reflect: true })
], LynkStack.prototype, "align", 2);
__decorateClass([
  e({ type: String, reflect: true })
], LynkStack.prototype, "gap", 2);
LynkStack = __decorateClass([
  n("lynk-stack")
], LynkStack);

export {
  LynkStack
};
