export interface ILynkTableCol {
  key: string;
  sortDirection?: LynkTableSortDirection;
  sortable?: boolean;
  title: string;
}

export interface ILynkTableRow {
  [key: string]: string;
}

export enum LynkTableSortDirection {
  DESC = 1,
  ASC = -1,
  NONE = 0
}

export class LynkTableSortEvent extends Event {
  static TYPE = 'lynk-table-event-sort';
  public key: string;

  constructor() {
    super(LynkTableSortEvent.TYPE, {
      bubbles: true,
      cancelable: false,
      composed: true
    });
  }
}
