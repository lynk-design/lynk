import {
  include_styles_default
} from "./chunk.DN6DTXPJ.js";
import {
  requestInclude
} from "./chunk.RPB53XXV.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
import {
  e,
  n
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/include/include.ts
var LynkInclude = class extends s {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        emit(this, "on:error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      emit(this, "on:load");
    } catch (e2) {
      emit(this, "on:error", { detail: { status: -1 } });
    }
  }
  render() {
    return $`<slot></slot>`;
  }
};
LynkInclude.styles = include_styles_default;
__decorateClass([
  e()
], LynkInclude.prototype, "src", 2);
__decorateClass([
  e()
], LynkInclude.prototype, "mode", 2);
__decorateClass([
  e({ attribute: "allow-scripts", type: Boolean })
], LynkInclude.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], LynkInclude.prototype, "handleSrcChange", 1);
LynkInclude = __decorateClass([
  n("lynk-include")
], LynkInclude);

export {
  LynkInclude
};
