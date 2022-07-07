import {
  tag_styles_default
} from "./chunk.TVCFPKHH.js";
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
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/tag/tag.ts
var LynkTag = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    emit(this, "lynk-remove");
  }
  render() {
    return $`
      <span
        part="base"
        class=${o({
      "lynk-tag": true,
      "lynk-tag--primary": this.variant === "primary",
      "lynk-tag--success": this.variant === "success",
      "lynk-tag--neutral": this.variant === "neutral",
      "lynk-tag--warning": this.variant === "warning",
      "lynk-tag--danger": this.variant === "danger",
      "lynk-tag--text": this.variant === "text",
      "lynk-tag--small": this.size === "small",
      "lynk-tag--medium": this.size === "medium",
      "lynk-tag--large": this.size === "large",
      "lynk-tag--pill": this.pill,
      "lynk-tag--removable": this.removable
    })}
      >
        <span part="content" class="lynk-tag__content">
          <slot></slot>
        </span>

        ${this.removable ? $`
              <lynk-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="lynk-tag__remove"
                @click=${this.handleRemoveClick}
              ></lynk-icon-button>
            ` : ""}
      </span>
    `;
  }
};
LynkTag.styles = tag_styles_default;
__decorateClass([
  e({ reflect: true })
], LynkTag.prototype, "variant", 2);
__decorateClass([
  e({ reflect: true })
], LynkTag.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkTag.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean })
], LynkTag.prototype, "removable", 2);
LynkTag = __decorateClass([
  n("lynk-tag")
], LynkTag);

export {
  LynkTag
};
