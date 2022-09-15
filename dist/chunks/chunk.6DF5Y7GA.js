import {
  Modal
} from "./chunk.BQLXYG6H.js";
import {
  lockBodyScrolling,
  unlockBodyScrolling
} from "./chunk.MZXL76U3.js";
import {
  drawer_styles_default
} from "./chunk.MX3ZP7TG.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
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

// src/internal/string.ts
function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// src/components/drawer/drawer.ts
var LynkDrawer = class extends s {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer");
    this.localize = new LocalizeController(this);
    this.open = false;
    this.label = "";
    this.placement = "end";
    this.contained = false;
    this.noHeader = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.modal = new Modal(this);
  }
  firstUpdated() {
    this.drawer.hidden = !this.open;
    if (this.open && !this.contained) {
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
    return waitForEvent(this, "after:show");
  }
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "after:hide");
  }
  requestClose(source) {
    const onRequestClose = emit(this, "on:request-close", {
      cancelable: true,
      detail: { source }
    });
    if (onRequestClose.defaultPrevented) {
      const animation = getAnimation(this, "drawer.denyClose");
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
      emit(this, "on:show");
      this.originalTrigger = document.activeElement;
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;
      requestAnimationFrame(() => {
        const slInitialFocus = emit(this, "on:initial-focus", { cancelable: true });
        if (!slInitialFocus.defaultPrevented) {
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
      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`);
      const overlayAnimation = getAnimation(this, "drawer.overlay.show");
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      emit(this, "after:show");
    } else {
      emit(this, "on:hide");
      this.modal.deactivate();
      unlockBodyScrolling(this);
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`);
      const overlayAnimation = getAnimation(this, "drawer.overlay.hide");
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.drawer.hidden = true;
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      emit(this, "after:hide");
    }
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-drawer": true,
      "lynk-drawer--open": this.open,
      "lynk-drawer--top": this.placement === "top",
      "lynk-drawer--end": this.placement === "end",
      "lynk-drawer--bottom": this.placement === "bottom",
      "lynk-drawer--start": this.placement === "start",
      "lynk-drawer--contained": this.contained,
      "lynk-drawer--fixed": !this.contained,
      "lynk-drawer--has-footer": this.hasSlotController.test("footer")
    })}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="lynk-drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="lynk-drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? $`
                <header part="header" class="lynk-drawer__header">
                  <h2 part="title" class="lynk-drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <lynk-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="lynk-drawer__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click=${() => this.requestClose("close-button")}
                  ></lynk-icon-button>
                </header>
              ` : ""}

          <div part="body" class="lynk-drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="lynk-drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
LynkDrawer.styles = drawer_styles_default;
__decorateClass([
  i(".lynk-drawer")
], LynkDrawer.prototype, "drawer", 2);
__decorateClass([
  i(".lynk-drawer__panel")
], LynkDrawer.prototype, "panel", 2);
__decorateClass([
  i(".lynk-drawer__overlay")
], LynkDrawer.prototype, "overlay", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkDrawer.prototype, "open", 2);
__decorateClass([
  e({ reflect: true })
], LynkDrawer.prototype, "label", 2);
__decorateClass([
  e({ reflect: true })
], LynkDrawer.prototype, "placement", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkDrawer.prototype, "contained", 2);
__decorateClass([
  e({ attribute: "no-header", type: Boolean, reflect: true })
], LynkDrawer.prototype, "noHeader", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], LynkDrawer.prototype, "handleOpenChange", 1);
LynkDrawer = __decorateClass([
  n("lynk-drawer")
], LynkDrawer);
setDefaultAnimation("drawer.showTop", {
  keyframes: [
    { opacity: 0, transform: "translateY(-100%)" },
    { opacity: 1, transform: "translateY(0)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideTop", {
  keyframes: [
    { opacity: 1, transform: "translateY(0)" },
    { opacity: 0, transform: "translateY(-100%)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showEnd", {
  keyframes: [
    { opacity: 0, transform: "translateX(100%)" },
    { opacity: 1, transform: "translateX(0)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, transform: "translateX(0)" },
    { opacity: 0, transform: "translateX(100%)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showBottom", {
  keyframes: [
    { opacity: 0, transform: "translateY(100%)" },
    { opacity: 1, transform: "translateY(0)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, transform: "translateY(0)" },
    { opacity: 0, transform: "translateY(100%)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showStart", {
  keyframes: [
    { opacity: 0, transform: "translateX(-100%)" },
    { opacity: 1, transform: "translateX(0)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideStart", {
  keyframes: [
    { opacity: 1, transform: "translateX(0)" },
    { opacity: 0, transform: "translateX(-100%)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.denyClose", {
  keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.01)" }, { transform: "scale(1)" }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

export {
  LynkDrawer
};
