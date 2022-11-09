import {
  LynkTableSortEvent
} from "./chunk.IKUYWLCG.js";
import {
  table_styles_default
} from "./chunk.CLIQDKUF.js";
import {
  a,
  c,
  m,
  s as s2,
  u
} from "./chunk.L7LQW522.js";
import {
  l as l2
} from "./chunk.CRMBCBPN.js";
import {
  e as e2,
  i,
  t
} from "./chunk.2JQPDYNA.js";
import {
  e,
  l,
  n
} from "./chunk.X6SWQQ2B.js";
import {
  $,
  b,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// node_modules/lit-html/directives/repeat.js
var u2 = (e3, s3, t2) => {
  const r = /* @__PURE__ */ new Map();
  for (let l3 = s3; l3 <= t2; l3++)
    r.set(e3[l3], l3);
  return r;
};
var c2 = e2(class extends i {
  constructor(e3) {
    if (super(e3), e3.type !== t.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(e3, s3, t2) {
    let r;
    t2 === void 0 ? t2 = s3 : s3 !== void 0 && (r = s3);
    const l3 = [], o = [];
    let i2 = 0;
    for (const s4 of e3)
      l3[i2] = r ? r(s4, i2) : i2, o[i2] = t2(s4, i2), i2++;
    return { values: o, keys: l3 };
  }
  render(e3, s3, t2) {
    return this.dt(e3, s3, t2).values;
  }
  update(s3, [t2, r, c3]) {
    var d;
    const a2 = a(s3), { values: p, keys: v } = this.dt(t2, r, c3);
    if (!Array.isArray(a2))
      return this.ut = v, p;
    const h = (d = this.ut) !== null && d !== void 0 ? d : this.ut = [], m2 = [];
    let y, x, j = 0, k = a2.length - 1, w = 0, A = p.length - 1;
    for (; j <= k && w <= A; )
      if (a2[j] === null)
        j++;
      else if (a2[k] === null)
        k--;
      else if (h[j] === v[w])
        m2[w] = c(a2[j], p[w]), j++, w++;
      else if (h[k] === v[A])
        m2[A] = c(a2[k], p[A]), k--, A--;
      else if (h[j] === v[A])
        m2[A] = c(a2[j], p[A]), u(s3, m2[A + 1], a2[j]), j++, A--;
      else if (h[k] === v[w])
        m2[w] = c(a2[k], p[w]), u(s3, a2[j], a2[k]), k--, w++;
      else if (y === void 0 && (y = u2(v, w, A), x = u2(h, j, k)), y.has(h[j]))
        if (y.has(h[k])) {
          const e3 = x.get(v[w]), t3 = e3 !== void 0 ? a2[e3] : null;
          if (t3 === null) {
            const e4 = u(s3, a2[j]);
            c(e4, p[w]), m2[w] = e4;
          } else
            m2[w] = c(t3, p[w]), u(s3, a2[j], t3), a2[e3] = null;
          w++;
        } else
          m(a2[k]), k--;
      else
        m(a2[j]), j++;
    for (; w <= A; ) {
      const e3 = u(s3, m2[A + 1]);
      c(e3, p[w]), m2[w++] = e3;
    }
    for (; j <= k; ) {
      const e3 = a2[j++];
      e3 !== null && m(e3);
    }
    return this.ut = v, s2(s3, m2), b;
  }
});

// src/components/table/table.ts
var LynkTable = class extends s {
  constructor() {
    super(...arguments);
    this.cols = [];
    this.rows = [];
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(LynkTableSortEvent.TYPE, this.handleSort);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(LynkTableSortEvent.TYPE, this.handleSort);
  }
  handleSort(event) {
    let direction;
    this.assignedHeaderGroup.forEach((headerGroup) => {
      headerGroup.querySelectorAll("lynk-tr").forEach((row) => {
        row.querySelectorAll("lynk-th").forEach((header) => {
          if (header.key === event.key) {
            switch (header.sortDirection) {
              case 1 /* DESC */:
                header.sortDirection = -1 /* ASC */;
                break;
              default:
                header.sortDirection = 1 /* DESC */;
                break;
            }
            direction = header.sortDirection;
          } else {
            header.sortDirection = 0 /* NONE */;
          }
        });
      });
    });
    this.rows.sort((rowA, rowB) => {
      let val1 = rowA[event.key];
      let val2 = rowB[event.key];
      if (val1 === null || val1 === void 0)
        val1 = "";
      if (val2 === null || val2 === void 0)
        val2 = "";
      if (this.isNumeric(val1) && this.isNumeric(val2)) {
        return (Number(val1) - Number(val2)) * direction;
      }
      let str1 = val1.toString();
      let str2 = val2.toString();
      return str1.localeCompare(str2) * direction;
    });
    this.requestUpdate();
  }
  isNumeric(toCheck) {
    return !isNaN(parseFloat(toCheck)) && isFinite(toCheck);
  }
  render() {
    return $`<slot>
      <lynk-colgroup>
        ${c2(this.cols, (col) => $`<lynk-col class="${col.key}"></lynk-col>`)}
      </lynk-colgroup>
      <lynk-thead>
        <lynk-tr>
          ${c2(this.cols, (col) => $`
            <lynk-th
              key="${col.key}"
              ?sort-enabled=${l2(col.sortEnabled ? col.sortEnabled : void 0)}
            >${col.title}</lynk-th>
          `)}
        </lynk-tr>
      </lynk-thead>
      <lynk-tbody>
        ${c2(this.rows, (row) => $`<lynk-tr>
          ${c2(this.cols, (col) => $`<lynk-td>${row[col.key]}</lynk-td>`)}
        </lynk-tr>`)}
      </lynk-tbody>
    </slot>`;
  }
};
LynkTable.styles = table_styles_default;
__decorateClass([
  e()
], LynkTable.prototype, "cols", 2);
__decorateClass([
  e()
], LynkTable.prototype, "rows", 2);
__decorateClass([
  l({ selector: "lynk-thead", flatten: true })
], LynkTable.prototype, "assignedHeaderGroup", 2);
__decorateClass([
  l({ selector: "lynk-tbody", flatten: true })
], LynkTable.prototype, "assignedRowGroup", 2);
LynkTable = __decorateClass([
  n("lynk-table")
], LynkTable);

export {
  LynkTable
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
