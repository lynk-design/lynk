import {
  accordion_styles_default
} from "./chunk.Z7QVD4S3.js";
import {
  animateTo,
  shimKeyframesHeightAuto,
  stopAnimations
} from "./chunk.LYIRHJ4T.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.5FIVCLSV.js";
import {
  emit,
  waitForEvent
} from "./chunk.TOL7LDIN.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
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

// src/components/accordion/accordion.ts
var LynkAccordion = class extends s {
  constructor() {
    super(...arguments);
    this.open = false;
    this.disabled = false;
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    this.body.style.height = this.open ? "auto" : "0";
  }
  async show() {
    if (this.open || this.disabled) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "after:show");
  }
  async hide() {
    if (!this.open || this.disabled) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "after:hide");
  }
  handleSummaryClick() {
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      this.hide();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      this.show();
    }
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "on:show");
      await stopAnimations(this.body);
      this.body.hidden = false;
      const { keyframes, options } = getAnimation(this, "accordion.show");
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      emit(this, "after:show");
    } else {
      emit(this, "on:hide");
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "accordion.hide");
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = "auto";
      emit(this, "after:hide");
    }
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-accordion": true,
      "lynk-accordion--open": this.open,
      "lynk-accordion--disabled": this.disabled
    })}
      >
        <header
          part="header"
          id="header"
          class="lynk-accordion__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="lynk-accordion__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="lynk-accordion__summary-icon">
            <lynk-icon name="chevron-right" library="system"></lynk-icon>
          </span>
        </header>

        <div class="lynk-accordion__body">
          <div part="content" id="content" class="lynk-accordion__content" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
LynkAccordion.styles = accordion_styles_default;
__decorateClass([
  i(".lynk-accordion")
], LynkAccordion.prototype, "accordion", 2);
__decorateClass([
  i(".lynk-accordion__header")
], LynkAccordion.prototype, "header", 2);
__decorateClass([
  i(".lynk-accordion__body")
], LynkAccordion.prototype, "body", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkAccordion.prototype, "open", 2);
__decorateClass([
  e()
], LynkAccordion.prototype, "summary", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkAccordion.prototype, "disabled", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], LynkAccordion.prototype, "handleOpenChange", 1);
LynkAccordion = __decorateClass([
  n("lynk-accordion")
], LynkAccordion);
setDefaultAnimation("accordion.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
setDefaultAnimation("accordion.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});

export {
  LynkAccordion
};
