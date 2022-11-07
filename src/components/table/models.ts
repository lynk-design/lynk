export interface ILynkTableCol {
    key: string;
    sort: LynkTableSortDirection;
    title: string;
}

export interface ILynkTableRow {
    [key: string]: any;
}

export enum LynkTableSortDirection {
    DESC = 1,
    ASC = -1,
    NONE = 0,
}

export class LynkTableSortEvent extends Event {
    static TYPE = 'lynk-table-event-sort';

    constructor(
        public key: any,
    ) {
        super(LynkTableSortEvent.TYPE, {
            bubbles: true,
            cancelable: false,
            composed: true,
        });
    }
}