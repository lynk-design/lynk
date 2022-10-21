import {
  resize_observer_styles_default
} from "./chunk.ZCCISVGF.js";
import {
  watch
} from "./chunk.ELARI7L4.js";
import {
  emit
} from "./chunk.J4WLXQZ7.js";
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

// src/components/resize-observer/resize-observer.ts
var LynkResizeObserver = class extends s {
  constructor() {
    super(...arguments);
    this.observedElements = [];
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => {
      emit(this, "on:resize", { detail: { entries } });
    });
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }
  startObserver() {
    const slot = this.shadowRoot.querySelector("slot");
    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true });
      this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
      this.observedElements = [];
      elements.forEach((el) => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }
  stopObserver() {
    this.resizeObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  render() {
    return $` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
LynkResizeObserver.styles = resize_observer_styles_default;
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkResizeObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkResizeObserver.prototype, "handleDisabledChange", 1);
LynkResizeObserver = __decorateClass([
  n("lynk-resize-observer")
], LynkResizeObserver);

export {
  LynkResizeObserver
};
