import {
  tag_styles_default
} from "./chunk.SIGWZG5J.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
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

// src/components/tag/tag.ts
var LynkTag = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.type = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    emit(this, "on:remove");
  }
  render() {
    return $`
      <span
        part="base"
        class=${o({
      "lynk-tag": true,
      "lynk-tag--primary": this.type === "primary",
      "lynk-tag--success": this.type === "success",
      "lynk-tag--neutral": this.type === "neutral",
      "lynk-tag--warning": this.type === "warning",
      "lynk-tag--danger": this.type === "danger",
      "lynk-tag--text": this.type === "text",
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
], LynkTag.prototype, "type", 2);
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
