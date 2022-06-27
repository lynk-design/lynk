import {
  menu_item_styles_default
} from "./chunk.MXU5IFJE.js";
import {
  getTextContent
} from "./chunk.7DIJ2SI4.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  emit
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

// src/components/menu-item/menu-item.ts
var LynkMenuItem = class extends s {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.value = "";
    this.disabled = false;
  }
  firstUpdated() {
    this.setAttribute("role", "menuitem");
  }
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      emit(this, "lynk-label-change");
    }
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-menu-item": true,
      "lynk-menu-item--checked": this.checked,
      "lynk-menu-item--disabled": this.disabled,
      "lynk-menu-item--has-submenu": false
    })}
      >
        <span class="lynk-menu-item__check">
          <lynk-icon name="check-lg" library="system" aria-hidden="true"></lynk-icon>
        </span>

        <span part="prefix" class="lynk-menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="lynk-menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="lynk-menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="lynk-menu-item__chevron">
          <lynk-icon name="chevron-right" library="system" aria-hidden="true"></lynk-icon>
        </span>
      </div>
    `;
  }
};
LynkMenuItem.styles = menu_item_styles_default;
__decorateClass([
  i("slot:not([name])")
], LynkMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  i(".lynk-menu-item")
], LynkMenuItem.prototype, "menuItem", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkMenuItem.prototype, "checked", 2);
__decorateClass([
  e()
], LynkMenuItem.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], LynkMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], LynkMenuItem.prototype, "handleDisabledChange", 1);
LynkMenuItem = __decorateClass([
  n("lynk-menu-item")
], LynkMenuItem);

export {
  LynkMenuItem
};
