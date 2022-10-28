import {
  tab_panel_styles_default
} from "./chunk.3J2UCT6O.js";
import {
  autoIncrement
} from "./chunk.KFR7NC2M.js";
import {
  e,
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/tab-panel/tab-panel.ts
var LynkTabPanel = class extends s {
  constructor() {
    super(...arguments);
    this.attrId = autoIncrement();
    this.componentId = `lynk-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
  }
  render() {
    this.style.display = this.active ? "block" : "none";
    return $`
      <div part="base" class="lynk-tab-panel" role="tabpanel" aria-hidden=${this.active ? "false" : "true"}>
        <slot></slot>
      </div>
    `;
  }
};
LynkTabPanel.styles = tab_panel_styles_default;
__decorateClass([
  e({ reflect: true })
], LynkTabPanel.prototype, "name", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTabPanel.prototype, "active", 2);
LynkTabPanel = __decorateClass([
  n("lynk-tab-panel")
], LynkTabPanel);

export {
  LynkTabPanel
};
