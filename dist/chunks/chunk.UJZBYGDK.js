import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  dialog_styles_default
} from "./chunk.YBG2WRR6.js";
import {
  getTabbableBoundary
} from "./chunk.SCUNOITN.js";
import {
  lockBodyScrolling,
  unlockBodyScrolling
} from "./chunk.MZXL76U3.js";
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
  l
} from "./chunk.CRMBCBPN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  emit,
  waitForEvent
} from "./chunk.TOL7LDIN.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
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

// src/internal/modal.ts
var activeModals = [];
var Modal = class {
  constructor(element) {
    this.tabDirection = "forward";
    this.element = element;
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  activate() {
    activeModals.push(this.element);
    document.addEventListener("focusin", this.handleFocusIn);
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  deactivate() {
    activeModals = activeModals.filter((modal) => modal !== this.element);
    document.removeEventListener("focusin", this.handleFocusIn);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
  isActive() {
    return activeModals[activeModals.length - 1] === this.element;
  }
  checkFocus() {
    if (this.isActive()) {
      if (!this.element.matches(":focus-within")) {
        const { start, end } = getTabbableBoundary(this.element);
        const target = this.tabDirection === "forward" ? start : end;
        if (typeof (target == null ? void 0 : target.focus) === "function") {
          target.focus({ preventScroll: true });
        }
      }
    }
  }
  handleFocusIn() {
    this.checkFocus();
  }
  handleKeyDown(event) {
    if (event.key === "Tab" && event.shiftKey) {
      this.tabDirection = "backward";
    }
    requestAnimationFrame(() => this.checkFocus());
  }
  handleKeyUp() {
    this.tabDirection = "forward";
  }
};

// src/components/dialog/dialog.ts
var LynkDialog = class extends s {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer");
    this.localize = new LocalizeController(this);
    this.open = false;
    this.label = "";
    this.noHeader = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.modal = new Modal(this);
  }
  firstUpdated() {
    this.dialog.hidden = !this.open;
    if (this.open) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
  }
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "lynk-after-show");
  }
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "lynk-after-hide");
  }
  requestClose(source) {
    const requestClose = emit(this, "lynk-request-close", {
      cancelable: true,
      detail: { source }
    });
    if (requestClose.defaultPrevented) {
      const animation = getAnimation(this, "dialog.denyClose");
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      this.requestClose("keyboard");
    }
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, "lynk-show");
      this.originalTrigger = document.activeElement;
      this.modal.activate();
      lockBodyScrolling(this);
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      this.dialog.hidden = false;
      requestAnimationFrame(() => {
        const initialFocus = emit(this, "lynk-initial-focus", { cancelable: true });
        if (!initialFocus.defaultPrevented) {
          if (autoFocusTarget) {
            autoFocusTarget.focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute("autofocus", "");
        }
      });
      const panelAnimation = getAnimation(this, "dialog.show");
      const overlayAnimation = getAnimation(this, "dialog.overlay.show");
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      emit(this, "lynk-after-show");
    } else {
      emit(this, "lynk-hide");
      this.modal.deactivate();
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, "dialog.hide");
      const overlayAnimation = getAnimation(this, "dialog.overlay.hide");
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.dialog.hidden = true;
      unlockBodyScrolling(this);
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      emit(this, "lynk-after-hide");
    }
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-dialog": true,
      "lynk-dialog--open": this.open,
      "lynk-dialog--has-footer": this.hasSlotController.test("footer")
    })}
        @keydown=${this.handleKeyDown}
      >
        <div
          part="overlay"
          class="lynk-dialog__overlay"
          @click=${() => this.requestClose("overlay")}
          tabindex="-1"
        ></div>

        <div
          part="panel"
          class="lynk-dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? $`
                <header part="header" class="lynk-dialog__header">
                  <h2 part="title" class="lynk-dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <lynk-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="lynk-dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${() => this.requestClose("close-button")}"
                  ></lynk-icon-button>
                </header>
              ` : ""}

          <div part="body" class="lynk-dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="lynk-dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
LynkDialog.styles = dialog_styles_default;
__decorateClass([
  i(".lynk-dialog")
], LynkDialog.prototype, "dialog", 2);
__decorateClass([
  i(".lynk-dialog__panel")
], LynkDialog.prototype, "panel", 2);
__decorateClass([
  i(".lynk-dialog__overlay")
], LynkDialog.prototype, "overlay", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkDialog.prototype, "open", 2);
__decorateClass([
  e({ reflect: true })
], LynkDialog.prototype, "label", 2);
__decorateClass([
  e({ attribute: "no-header", type: Boolean, reflect: true })
], LynkDialog.prototype, "noHeader", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], LynkDialog.prototype, "handleOpenChange", 1);
LynkDialog = __decorateClass([
  n("lynk-dialog")
], LynkDialog);
setDefaultAnimation("dialog.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("dialog.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("dialog.denyClose", {
  keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }],
  options: { duration: 250 }
});
setDefaultAnimation("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

export {
  LynkDialog
};
