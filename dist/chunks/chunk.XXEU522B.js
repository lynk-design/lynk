import {
  icon_button_styles_default
} from "./chunk.2SW4EIOD.js";
import {
  l as l2,
  n as n2
} from "./chunk.K6X3Y6UE.js";
import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  emit
} from "./chunk.J4WLXQZ7.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.DC3HFRI2.js";
import {
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.SEZCJCPZ.js";

// src/components/icon-button/icon-button.ts
var LynkIconButton = class extends s {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.color = "default";
    this.label = "";
    this.disabled = false;
  }
  click() {
    this.button.click();
  }
  focus(options) {
    this.button.focus(options);
  }
  blur() {
    this.button.blur();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "on:blur");
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "on:focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    emit(this, "on:click");
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? l2`a` : l2`button`;
    return n2`
      <${tag}
        part="base"
        class=${o({
      "lynk-icon-button": true,
      "lynk-icon-button--default": this.color === "default",
      "lynk-icon-button--primary": this.color === "primary",
      "lynk-icon-button--success": this.color === "success",
      "lynk-icon-button--neutral": this.color === "neutral",
      "lynk-icon-button--warning": this.color === "warning",
      "lynk-icon-button--danger": this.color === "danger",
      "lynk-icon-button--disabled": !isLink && this.disabled,
      "lynk-icon-button--focused": this.hasFocus,
      "lynk-icon-button--has-prefix": this.hasSlotController.test("prefix"),
      "lynk-icon-button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${l(isLink ? void 0 : this.disabled)}
        type=${l(isLink ? void 0 : "button")}
        href=${l(isLink ? this.href : void 0)}
        target=${l(isLink ? this.target : void 0)}
        download=${l(isLink ? this.download : void 0)}
        rel=${l(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="lynk-icon-button__prefix">
          <slot name="prefix"></slot>
        </span>
        <lynk-icon
          class="lynk-icon-button__icon"
          name=${l(this.name)}
          library=${l(this.library)}
          src=${l(this.src)}
          aria-hidden="true"
        ></lynk-icon>
        <span part="suffix" class="lynk-icon-button__suffix">
          <slot name="suffix"></slot>
        </span>
      </${tag}>
    `;
  }
};
LynkIconButton.styles = icon_button_styles_default;
__decorateClass([
  t()
], LynkIconButton.prototype, "hasFocus", 2);
__decorateClass([
  i(".lynk-icon-button")
], LynkIconButton.prototype, "button", 2);
__decorateClass([
  e({ reflect: true })
], LynkIconButton.prototype, "color", 2);
__decorateClass([
  e()
], LynkIconButton.prototype, "name", 2);
__decorateClass([
  e()
], LynkIconButton.prototype, "library", 2);
__decorateClass([
  e()
], LynkIconButton.prototype, "src", 2);
__decorateClass([
  e()
], LynkIconButton.prototype, "href", 2);
__decorateClass([
  e()
], LynkIconButton.prototype, "target", 2);
__decorateClass([
  e()
], LynkIconButton.prototype, "download", 2);
__decorateClass([
  e()
], LynkIconButton.prototype, "label", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkIconButton.prototype, "disabled", 2);
LynkIconButton = __decorateClass([
  n("lynk-icon-button")
], LynkIconButton);

export {
  LynkIconButton
};
