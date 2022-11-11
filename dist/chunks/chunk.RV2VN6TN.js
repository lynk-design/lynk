import {
  table_header_styles_default
} from "./chunk.RTDQTRDN.js";
import {
  LynkTableSortEvent
} from "./chunk.FMIHG2HV.js";
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

// src/components/table-header/table-header.ts
var LynkTableHeader = class extends s {
  constructor() {
    super(...arguments);
    this.sortDirection = 0 /* NONE */;
    this.sortEnabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleClick);
  }
  handleClick() {
    if (this.sortEnabled) {
      const event = new LynkTableSortEvent();
      event.key = this.key;
      this.dispatchEvent(event);
    }
  }
  render() {
    return $`
      <slot></slot>
      ${this.sortEnabled ? $`<lynk-icon
        name="${this.sortDirection === -1 /* ASC */ ? "sort-up" : this.sortDirection === 1 /* DESC */ ? "sort-down" : ""}"
      ></lynk-icon>` : ``}
    `;
  }
};
LynkTableHeader.styles = table_header_styles_default;
__decorateClass([
  e()
], LynkTableHeader.prototype, "key", 2);
__decorateClass([
  e({ attribute: "sort-direction", reflect: true })
], LynkTableHeader.prototype, "sortDirection", 2);
__decorateClass([
  e({ attribute: "sort-enabled", type: Boolean, reflect: true })
], LynkTableHeader.prototype, "sortEnabled", 2);
LynkTableHeader = __decorateClass([
  n("lynk-th")
], LynkTableHeader);

export {
  LynkTableHeader
};
