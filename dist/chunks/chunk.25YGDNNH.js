import {
  FormSubmitController
} from "./chunk.QRRAQY34.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  l as l2,
  n as n2
} from "./chunk.K6X3Y6UE.js";
import {
  button_styles_default
} from "./chunk.7PGKU5DO.js";
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

// src/components/button/button.ts
var LynkButton = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      form: (input) => {
        if (input.hasAttribute("form")) {
          const doc = input.getRootNode();
          const formId = input.getAttribute("form");
          return doc.getElementById(formId);
        }
        return input.closest("form");
      }
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.color = "default";
    this.size = "medium";
    this.block = false;
    this.caret = false;
    this.disabled = false;
    this.thinking = false;
    this.outline = false;
    this.pill = false;
    this.circle = false;
    this.square = false;
    this.type = "button";
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
    if (this.disabled || this.thinking) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this.type === "submit") {
      this.formSubmitController.submit(this);
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
      "lynk-button": true,
      "lynk-button--default": this.color === "default",
      "lynk-button--primary": this.color === "primary",
      "lynk-button--success": this.color === "success",
      "lynk-button--neutral": this.color === "neutral",
      "lynk-button--warning": this.color === "warning",
      "lynk-button--danger": this.color === "danger",
      "lynk-button--text": this.color === "text",
      "lynk-button--small": this.size === "small",
      "lynk-button--medium": this.size === "medium",
      "lynk-button--large": this.size === "large",
      "lynk-button--caret": this.caret,
      "lynk-button--circle": this.circle,
      "lynk-button--square": this.square,
      "lynk-button--disabled": this.disabled,
      "lynk-button--focused": this.hasFocus,
      "lynk-button--thinking": this.thinking,
      "lynk-button--standard": !this.outline,
      "lynk-button--outline": this.outline,
      "lynk-button--pill": this.pill,
      "lynk-button--rtl": this.localize.dir() === "rtl",
      "lynk-button--has-label": this.hasSlotController.test("[default]"),
      "lynk-button--has-prefix": this.hasSlotController.test("prefix"),
      "lynk-button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${l(isLink ? void 0 : this.disabled)}
        type=${l(isLink ? void 0 : this.type)}
        name=${l(isLink ? void 0 : this.name)}
        value=${l(isLink ? void 0 : this.value)}
        href=${l(isLink ? this.href : void 0)}
        target=${l(isLink ? this.target : void 0)}
        download=${l(isLink ? this.download : void 0)}
        rel=${l(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="lynk-button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="lynk-button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="lynk-button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret ? n2`
                <span part="caret" class="lynk-button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              ` : ""}
        ${this.thinking ? n2`<lynk-spinner></lynk-spinner>` : ""}
      </${tag}>
    `;
  }
};
LynkButton.styles = button_styles_default;
__decorateClass([
  i(".lynk-button")
], LynkButton.prototype, "button", 2);
__decorateClass([
  t()
], LynkButton.prototype, "hasFocus", 2);
__decorateClass([
  e({ reflect: true })
], LynkButton.prototype, "color", 2);
__decorateClass([
  e({ reflect: true })
], LynkButton.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "block", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "caret", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "thinking", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "outline", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "circle", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkButton.prototype, "square", 2);
__decorateClass([
  e()
], LynkButton.prototype, "type", 2);
__decorateClass([
  e()
], LynkButton.prototype, "name", 2);
__decorateClass([
  e()
], LynkButton.prototype, "value", 2);
__decorateClass([
  e()
], LynkButton.prototype, "href", 2);
__decorateClass([
  e()
], LynkButton.prototype, "target", 2);
__decorateClass([
  e()
], LynkButton.prototype, "download", 2);
__decorateClass([
  e()
], LynkButton.prototype, "form", 2);
__decorateClass([
  e({ attribute: "formaction" })
], LynkButton.prototype, "formAction", 2);
__decorateClass([
  e({ attribute: "formmethod" })
], LynkButton.prototype, "formMethod", 2);
__decorateClass([
  e({ attribute: "formnovalidate", type: Boolean })
], LynkButton.prototype, "formNoValidate", 2);
__decorateClass([
  e({ attribute: "formtarget" })
], LynkButton.prototype, "formTarget", 2);
LynkButton = __decorateClass([
  n("lynk-button")
], LynkButton);

export {
  LynkButton
};
