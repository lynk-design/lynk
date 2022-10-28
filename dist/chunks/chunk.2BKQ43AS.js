import {
  mutation_observer_styles_default
} from "./chunk.IWTSAPCJ.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
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

// src/components/mutation-observer/mutation-observer.ts
var LynkMutationObserver = class extends s {
  constructor() {
    super(...arguments);
    this.attrOldValue = false;
    this.charData = false;
    this.charDataOldValue = false;
    this.childList = false;
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleMutation = this.handleMutation.bind(this);
    this.mutationObserver = new MutationObserver(this.handleMutation);
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    this.stopObserver();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }
  handleMutation(mutationList) {
    emit(this, "on:mutation", {
      detail: { mutationList }
    });
  }
  startObserver() {
    const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch (e2) {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  render() {
    return $` <slot></slot> `;
  }
};
LynkMutationObserver.styles = mutation_observer_styles_default;
__decorateClass([
  e({ reflect: true })
], LynkMutationObserver.prototype, "attr", 2);
__decorateClass([
  e({ attribute: "attr-old-value", type: Boolean, reflect: true })
], LynkMutationObserver.prototype, "attrOldValue", 2);
__decorateClass([
  e({ attribute: "char-data", type: Boolean, reflect: true })
], LynkMutationObserver.prototype, "charData", 2);
__decorateClass([
  e({ attribute: "char-data-old-value", type: Boolean, reflect: true })
], LynkMutationObserver.prototype, "charDataOldValue", 2);
__decorateClass([
  e({ attribute: "child-list", type: Boolean, reflect: true })
], LynkMutationObserver.prototype, "childList", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkMutationObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], LynkMutationObserver.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("attr", { waitUntilFirstUpdate: true }),
  watch("attr-old-value", { waitUntilFirstUpdate: true }),
  watch("char-data", { waitUntilFirstUpdate: true }),
  watch("char-data-old-value", { waitUntilFirstUpdate: true }),
  watch("childList", { waitUntilFirstUpdate: true })
], LynkMutationObserver.prototype, "handleChange", 1);
LynkMutationObserver = __decorateClass([
  n("lynk-mutation-observer")
], LynkMutationObserver);

export {
  LynkMutationObserver
};
