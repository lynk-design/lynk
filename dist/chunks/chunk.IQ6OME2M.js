import {
  tag_styles_default
} from "./chunk.DU5LPHIA.js";
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
var SlTag = class extends s {
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
      tag: true,
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable ? $`
              <lynk-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></lynk-icon-button>
            ` : ""}
      </span>
    `;
  }
};
SlTag.styles = tag_styles_default;
__decorateClass([
  e({ reflect: true })
], SlTag.prototype, "variant", 2);
__decorateClass([
  e({ reflect: true })
], SlTag.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTag.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean })
], SlTag.prototype, "removable", 2);
SlTag = __decorateClass([
  n("lynk-tag")
], SlTag);

export {
  SlTag
};
