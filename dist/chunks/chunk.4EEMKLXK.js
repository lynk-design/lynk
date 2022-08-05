import {
  icon_button_styles_default
} from "./chunk.WG4FFPOR.js";
import {
  l as l2,
  n as n2
} from "./chunk.K6X3Y6UE.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.ML4GKG4X.js";
import {
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/icon-button/icon-button.ts
var LynkIconButton = class extends s {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
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
    }
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? l2`a` : l2`button`;
    return n2`
      <${tag}
        part="base"
        class=${o({
      "lynk-icon-button": true,
      "lynk-icon-button--disabled": !isLink && this.disabled,
      "lynk-icon-button--focused": this.hasFocus
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
        <lynk-icon
          class="lynk-icon-button__icon"
          name=${l(this.name)}
          library=${l(this.library)}
          src=${l(this.src)}
          aria-hidden="true"
        ></lynk-icon>
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
