import {
  tooltip_styles_default
} from "./chunk.A752NRTO.js";
import {
  D,
  N,
  T,
  b,
  m,
  z
} from "./chunk.TRXKCZM4.js";
import {
  animateTo,
  parseDuration,
  stopAnimations
} from "./chunk.LYIRHJ4T.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.5FIVCLSV.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  emit,
  waitForEvent
} from "./chunk.TOL7LDIN.js";
import {
  e,
  i,
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/tooltip/tooltip.ts
var LynkTooltip = class extends s {
  constructor() {
    super(...arguments);
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 10;
    this.open = false;
    this.skidding = 0;
    this.trigger = "hover focus";
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.updateComplete.then(() => {
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
      this.target = this.getTarget();
    });
  }
  async firstUpdated() {
    this.tooltip.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.updatePositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("blur", this.handleBlur, true);
    this.removeEventListener("focus", this.handleFocus, true);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
    this.removeEventListener("mouseover", this.handleMouseOver);
    this.removeEventListener("mouseout", this.handleMouseOut);
    this.stopPositioner();
  }
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "after:show");
  }
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "after:hide");
  }
  getTarget() {
    const target = [...this.children].find((el) => el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content");
    if (!target) {
      throw new Error("Invalid tooltip target: no child element was found.");
    }
    return target;
  }
  handleBlur() {
    if (this.hasTrigger("focus")) {
      this.hide();
    }
  }
  handleClick() {
    if (this.hasTrigger("click")) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
  handleFocus() {
    if (this.hasTrigger("focus")) {
      this.show();
    }
  }
  handleKeyDown(event) {
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
    }
  }
  handleMouseOver() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => void this.show(), delay);
    }
  }
  handleMouseOut() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => void this.hide(), delay);
    }
  }
  async handleOpenChange() {
    if (this.open) {
      if (this.disabled) {
        return;
      }
      emit(this, "on:show");
      await stopAnimations(this.tooltip);
      this.startPositioner();
      this.tooltip.hidden = false;
      const { keyframes, options } = getAnimation(this, "tooltip.show");
      await animateTo(this.tooltip, keyframes, options);
      emit(this, "after:show");
    } else {
      emit(this, "on:hide");
      await stopAnimations(this.tooltip);
      const { keyframes, options } = getAnimation(this, "tooltip.hide");
      await animateTo(this.tooltip, keyframes, options);
      this.tooltip.hidden = true;
      this.stopPositioner();
      emit(this, "after:hide");
    }
  }
  handleOptionsChange() {
    this.updatePositioner();
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = N(this.target, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this.target || !this.positioner) {
      return;
    }
    z(this.target, this.positioner, {
      placement: this.placement,
      middleware: [
        T({ mainAxis: this.distance, crossAxis: this.skidding }),
        b(),
        D(),
        m({
          element: this.arrow,
          padding: 10
        })
      ],
      strategy: this.hoist ? "fixed" : "absolute"
    }).then(({ x, y, middlewareData, placement }) => {
      const arrowX = middlewareData.arrow.x;
      const arrowY = middlewareData.arrow.y;
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.positioner.setAttribute("data-placement", placement);
      Object.assign(this.positioner.style, {
        position: this.hoist ? "fixed" : "absolute",
        left: `${x}px`,
        top: `${y}px`
      });
      Object.assign(this.arrow.style, {
        left: typeof arrowX === "number" ? `${arrowX}px` : "",
        top: typeof arrowY === "number" ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        [staticSide]: "calc(var(--lynk-tooltip-arrow-size) * -1)"
      });
    });
  }
  stopPositioner() {
    if (this.positionerCleanup) {
      this.positionerCleanup();
      this.positionerCleanup = void 0;
      this.positioner.removeAttribute("data-placement");
    }
  }
  render() {
    return $`
      <div class="lynk-tooltip-target" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div class="lynk-tooltip-positioner">
        <div
          part="base"
          id="tooltip"
          class=${o({
      "lynk-tooltip": true,
      "lynk-tooltip--open": this.open
    })}
          role="tooltip"
          aria-hidden=${this.open ? "false" : "true"}
        >
          <div class="lynk-tooltip__arrow"></div>
          <div class="lynk-tooltip__content" aria-live=${this.open ? "polite" : "off"}>
            <slot name="content"> ${this.content} </slot>
          </div>
        </div>
      </div>
    `;
  }
};
LynkTooltip.styles = tooltip_styles_default;
__decorateClass([
  i(".lynk-tooltip-positioner")
], LynkTooltip.prototype, "positioner", 2);
__decorateClass([
  i(".lynk-tooltip")
], LynkTooltip.prototype, "tooltip", 2);
__decorateClass([
  i(".lynk-tooltip__arrow")
], LynkTooltip.prototype, "arrow", 2);
__decorateClass([
  e()
], LynkTooltip.prototype, "content", 2);
__decorateClass([
  e()
], LynkTooltip.prototype, "placement", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTooltip.prototype, "disabled", 2);
__decorateClass([
  e({ type: Number })
], LynkTooltip.prototype, "distance", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTooltip.prototype, "open", 2);
__decorateClass([
  e({ type: Number })
], LynkTooltip.prototype, "skidding", 2);
__decorateClass([
  e()
], LynkTooltip.prototype, "trigger", 2);
__decorateClass([
  e({ type: Boolean })
], LynkTooltip.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], LynkTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("content"),
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], LynkTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], LynkTooltip.prototype, "handleDisabledChange", 1);
LynkTooltip = __decorateClass([
  n("lynk-tooltip")
], LynkTooltip);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 150, easing: "ease" }
});

export {
  LynkTooltip
};
