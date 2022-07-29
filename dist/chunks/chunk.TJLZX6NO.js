import {
  progress_bar_styles_default
} from "./chunk.FD34SRFL.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  l
} from "./chunk.CRMBCBPN.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  e as e2,
  i,
  t
} from "./chunk.2JQPDYNA.js";
import {
  e,
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  b,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// node_modules/lit-html/directives/style-map.js
var i2 = e2(class extends i {
  constructor(t2) {
    var e3;
    if (super(t2), t2.type !== t.ATTRIBUTE || t2.name !== "style" || ((e3 = t2.strings) === null || e3 === void 0 ? void 0 : e3.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).reduce((e3, r) => {
      const s2 = t2[r];
      return s2 == null ? e3 : e3 + `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
    }, "");
  }
  update(e3, [r]) {
    const { style: s2 } = e3.element;
    if (this.ct === void 0) {
      this.ct = /* @__PURE__ */ new Set();
      for (const t2 in r)
        this.ct.add(t2);
      return this.render(r);
    }
    this.ct.forEach((t2) => {
      r[t2] == null && (this.ct.delete(t2), t2.includes("-") ? s2.removeProperty(t2) : s2[t2] = "");
    });
    for (const t2 in r) {
      const e4 = r[t2];
      e4 != null && (this.ct.add(t2), t2.includes("-") ? s2.setProperty(t2, e4) : s2[t2] = e4);
    }
    return b;
  }
});

// src/components/progress-bar/progress-bar.ts
var LynkProgressBar = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-progress-bar": true,
      "lynk-progress-bar--indeterminate": this.indeterminate
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="lynk-progress-bar__indicator" style=${i2({ width: `${this.value}%` })}>
          ${!this.indeterminate ? $`
                <span part="label" class="lynk-progress-bar__label">
                  <slot></slot>
                </span>
              ` : ""}
        </div>
      </div>
    `;
  }
};
LynkProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e({ type: Number, reflect: true })
], LynkProgressBar.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e()
], LynkProgressBar.prototype, "label", 2);
__decorateClass([
  e()
], LynkProgressBar.prototype, "lang", 2);
LynkProgressBar = __decorateClass([
  n("lynk-progress-bar")
], LynkProgressBar);

export {
  LynkProgressBar
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
