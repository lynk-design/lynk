// src/components/table/models.ts
var LynkTableSortDirection = /* @__PURE__ */ ((LynkTableSortDirection2) => {
  LynkTableSortDirection2[LynkTableSortDirection2["DESC"] = 1] = "DESC";
  LynkTableSortDirection2[LynkTableSortDirection2["ASC"] = -1] = "ASC";
  LynkTableSortDirection2[LynkTableSortDirection2["NONE"] = 0] = "NONE";
  return LynkTableSortDirection2;
})(LynkTableSortDirection || {});
var _LynkTableSortEvent = class extends Event {
  constructor(key) {
    super(_LynkTableSortEvent.TYPE, {
      bubbles: true,
      cancelable: false,
      composed: true
    });
    this.key = key;
  }
};
var LynkTableSortEvent = _LynkTableSortEvent;
LynkTableSortEvent.TYPE = "lynk-table-event-sort";

export {
  LynkTableSortDirection,
  LynkTableSortEvent
};
