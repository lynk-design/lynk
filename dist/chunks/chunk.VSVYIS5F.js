import {
  autoIncrement
} from "./chunk.KFR7NC2M.js";
import {
  tab_styles_default
} from "./chunk.PNEHTRYP.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
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

// src/components/tab/tab.ts
var LynkTab = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = autoIncrement();
    this.componentId = `lynk-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  focus(options) {
    this.tab.focus(options);
  }
  blur() {
    this.tab.blur();
  }
  handleCloseClick() {
    emit(this, "on:close");
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return $`
      <div
        part="base"
        class=${o({
      "lynk-tab": true,
      "lynk-tab--active": this.active,
      "lynk-tab--closable": this.closable,
      "lynk-tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? $`
              <lynk-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="lynk-tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></lynk-icon-button>
            ` : ""}
      </div>
    `;
  }
};
LynkTab.styles = tab_styles_default;
__decorateClass([
  i(".lynk-tab")
], LynkTab.prototype, "tab", 2);
__decorateClass([
  e({ reflect: true })
], LynkTab.prototype, "panel", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTab.prototype, "active", 2);
__decorateClass([
  e({ type: Boolean })
], LynkTab.prototype, "closable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTab.prototype, "disabled", 2);
__decorateClass([
  e()
], LynkTab.prototype, "lang", 2);
LynkTab = __decorateClass([
  n("lynk-tab")
], LynkTab);

export {
  LynkTab
};
