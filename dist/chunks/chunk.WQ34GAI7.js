import {
  popover_styles_default
} from "./chunk.OCUKBZTE.js";
import {
  D,
  N,
  T,
  b,
  k,
  m,
  z
} from "./chunk.FJ4ZYVPP.js";
import {
  getTabbableBoundary
} from "./chunk.SCUNOITN.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.EAKGFEGB.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.AJ35XH5Z.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  watch
} from "./chunk.ELARI7L4.js";
import {
  emit,
  waitForEvent
} from "./chunk.J4WLXQZ7.js";
import {
  e,
  i,
  n
} from "./chunk.DC3HFRI2.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.SEZCJCPZ.js";

// src/components/popover/popover.ts
var LynkPopover = class extends s {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer");
    this.localize = new LocalizeController(this);
    this.open = false;
    this.label = "";
    this.noHeader = false;
    this.noArrow = false;
    this.clickToHide = false;
    this.placement = "right";
    this.disabled = false;
    this.distance = 10;
    this.skidding = 0;
    this.block = false;
    this.hoist = true;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  async firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.addOpenListeners();
      this.startPositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
    this.stopPositioner();
  }
  focusOnTrigger() {
    const slot = this.trigger.querySelector("slot");
    const trigger = slot.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  handleDocumentKeyDown(event) {
    if (event.key === "Escape") {
      this.hide();
      this.focusOnTrigger();
      return;
    }
  }
  handleDocumentMouseDown(event) {
    const path = event.composedPath();
    if (this.clickToHide && this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }
  handlePopoverOptionsChange() {
    this.updatePositioner();
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }
  handleTriggerKeyDown(event) {
    if (event.key === "Escape") {
      this.focusOnTrigger();
      this.hide();
      return;
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  updateAccessibleTrigger() {
    const slot = this.trigger.querySelector("slot");
    const assignedElements = slot.assignedElements({ flatten: true });
    const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
    let target;
    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        case "lynk-button":
        case "lynk-icon-button":
          target = accessibleTrigger.button;
          break;
        default:
          target = accessibleTrigger;
      }
      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
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
  reposition() {
    this.updatePositioner();
  }
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      emit(this, "on:show");
      this.addOpenListeners();
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await stopAnimations(this);
      this.startPositioner();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, "popover.show");
      await animateTo(this.panel, keyframes, options);
      if (autoFocusTarget) {
        autoFocusTarget.focus({ preventScroll: true });
        autoFocusTarget.setAttribute("autofocus", "");
      }
      emit(this, "after:show");
    } else {
      emit(this, "on:hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "popover.hide");
      await animateTo(this.panel, keyframes, options);
      this.panel.hidden = true;
      this.stopPositioner();
      emit(this, "after:hide");
    }
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = N(this.trigger, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this.trigger || !this.positioner) {
      return;
    }
    z(this.trigger, this.positioner, {
      placement: this.placement,
      middleware: [
        T({ mainAxis: this.distance, crossAxis: this.skidding }),
        b(),
        D(),
        k({
          apply: ({ availableWidth, availableHeight }) => {
            Object.assign(this.panel.style, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`
            });
          }
        }),
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
      <div
        part="base"
        id="popover"
        class=${o({
      "lynk-popover": true,
      "lynk-popover--open": this.open,
      "lynk-popover--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <span
          part="trigger"
          class="lynk-popover__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="lynk-popover__positioner">
          <div
            part="panel"
            class="lynk-popover__panel"
            role="popover"
            aria-popover="true"
            aria-hidden=${this.open ? "false" : "true"}
            aria-label=${l(this.noHeader ? this.label : void 0)}
            aria-labelledby=${l(!this.noHeader ? "title" : void 0)}
            tabindex="0"
          >

            <div class="lynk-popover__arrow"></div>

            ${!this.noHeader ? $`
                  <header part="header" class="lynk-popover__header">
                    <h2 part="title" class="lynk-popover__title" id="title">
                      <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                    </h2>
                    <lynk-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="lynk-popover__close"
                      style="--padding: 0;"
                      name="x"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.hide()}"
                    ></lynk-icon-button>
                  </header>
                ` : ""}

            <div part="body" class="lynk-popover__body">
              <slot></slot>
            </div>

            ${this.hasSlotController.test("footer") ? $`
                <footer part="footer" class="lynk-popover__footer">
                  <slot name="footer"></slot>
                </footer>
              ` : ""}
          </div>
        </div>
      </div>
    `;
  }
};
LynkPopover.styles = popover_styles_default;
__decorateClass([
  i(".lynk-popover__trigger")
], LynkPopover.prototype, "trigger", 2);
__decorateClass([
  i(".lynk-popover__panel")
], LynkPopover.prototype, "panel", 2);
__decorateClass([
  i(".lynk-popover__positioner")
], LynkPopover.prototype, "positioner", 2);
__decorateClass([
  i(".lynk-popover__arrow")
], LynkPopover.prototype, "arrow", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkPopover.prototype, "open", 2);
__decorateClass([
  e({ reflect: true })
], LynkPopover.prototype, "label", 2);
__decorateClass([
  e({ attribute: "no-header", type: Boolean, reflect: true })
], LynkPopover.prototype, "noHeader", 2);
__decorateClass([
  e({ attribute: "no-arrow", type: Boolean, reflect: true })
], LynkPopover.prototype, "noArrow", 2);
__decorateClass([
  e({ attribute: "click-to-hide", type: Boolean, reflect: true })
], LynkPopover.prototype, "clickToHide", 2);
__decorateClass([
  e({ reflect: true })
], LynkPopover.prototype, "placement", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkPopover.prototype, "disabled", 2);
__decorateClass([
  e({ attribute: false })
], LynkPopover.prototype, "containingElement", 2);
__decorateClass([
  e({ type: Number })
], LynkPopover.prototype, "distance", 2);
__decorateClass([
  e({ type: Number })
], LynkPopover.prototype, "skidding", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkPopover.prototype, "block", 2);
__decorateClass([
  e({ type: Boolean })
], LynkPopover.prototype, "hoist", 2);
__decorateClass([
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], LynkPopover.prototype, "handlePopoverOptionsChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], LynkPopover.prototype, "handleOpenChange", 1);
LynkPopover = __decorateClass([
  n("lynk-popover")
], LynkPopover);
setDefaultAnimation("popover.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.9)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("popover.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.9)" }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  LynkPopover
};
