import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  animateTo,
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
  alert_styles_default
} from "./chunk.4R3PUXXQ.js";
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
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/alert/alert.ts
var toastStack = Object.assign(document.createElement("div"), { className: "lynk-toast-stack" });
var LynkAlert = class extends s {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "icon", "action");
    this.open = false;
    this.closable = false;
    this.type = "primary";
    this.duration = Infinity;
  }
  firstUpdated() {
    this.base.hidden = !this.open;
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
  async toast() {
    return new Promise((resolve) => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }
      toastStack.appendChild(this);
      requestAnimationFrame(() => {
        this.clientWidth;
        this.show();
      });
      this.addEventListener("after:hide", () => {
        toastStack.removeChild(this);
        resolve();
        if (toastStack.querySelector("lynk-alert") === null) {
          toastStack.remove();
        }
      }, { once: true });
    });
  }
  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }
  handleCloseClick() {
    this.hide();
  }
  handleMouseMove() {
    this.restartAutoHide();
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "on:show");
      if (this.duration < Infinity) {
        this.restartAutoHide();
      }
      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, "alert.show");
      await animateTo(this.base, keyframes, options);
      emit(this, "after:show");
    } else {
      emit(this, "on:hide");
      clearTimeout(this.autoHideTimeout);
      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, "alert.hide");
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;
      emit(this, "after:hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-alert": true,
      "lynk-alert--open": this.open,
      "lynk-alert--closable": this.closable,
      "lynk-alert--has-icon": this.hasSlotController.test("icon") || this.type === "info" || this.type === "neutral" || this.type === "success" || this.type === "warning" || this.type === "danger",
      "lynk-alert--primary": this.type === "primary" || this.type === "info",
      "lynk-alert--success": this.type === "success",
      "lynk-alert--neutral": this.type === "neutral",
      "lynk-alert--warning": this.type === "warning",
      "lynk-alert--danger": this.type === "danger"
    })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="lynk-alert__icon">
          <slot name="icon">
            ${this.type ? $`
                <lynk-icon
                  library="system"
                  name="${this.type === "info" ? "info-circle" : this.type === "neutral" ? "question-square" : this.type === "success" ? "check-circle" : this.type === "warning" ? "exclamation-triangle" : this.type === "danger" ? "exclamation-octagon" : ""}"
                ></lynk-icon>
              ` : ""}
          </slot>
        </span>

        <span part="message" class="lynk-alert__message">
          <slot></slot>
        </span>

        ${this.hasSlotController.test("action") ? $`
            <span part="action" class="lynk-alert__action">
              <slot name="action"></slot>
            </span>
          ` : ""}

        ${this.closable ? $`
              <lynk-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="lynk-alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></lynk-icon-button>
            ` : ""}
      </div>
    `;
  }
};
LynkAlert.styles = alert_styles_default;
__decorateClass([
  i('[part="base"]')
], LynkAlert.prototype, "base", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkAlert.prototype, "open", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkAlert.prototype, "closable", 2);
__decorateClass([
  e({ reflect: true })
], LynkAlert.prototype, "type", 2);
__decorateClass([
  e({ type: Number })
], LynkAlert.prototype, "duration", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], LynkAlert.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("duration")
], LynkAlert.prototype, "handleDurationChange", 1);
LynkAlert = __decorateClass([
  n("lynk-alert")
], LynkAlert);
setDefaultAnimation("alert.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("alert.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 250, easing: "ease" }
});

export {
  LynkAlert
};
