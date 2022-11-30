export interface ILynkTableCol {
    key: string;
    maxWidth?: number;
    minWidth?: number;
    resizeEnabled?: boolean;
    sortDirection?: LynkTableSortDirection;
    sortEnabled?: boolean;
    title: string;
    width?: number;
}

export interface ILynkTableRow {
    [key: string]: string;
}

export enum LynkTableSortDirection {
    DESC = 1,
    ASC = -1,
    NONE = 0,
}

export class LynkTableHeaderEvent extends Event {
    public key: string;

    constructor(type: string) {
        super(type, {
            bubbles: true,
            cancelable: false,
            composed: true,
        });
    }
}

export class LynkTableResizeEvent extends LynkTableHeaderEvent {
    static TYPE = 'lynk-table-header-event-resize';
    public requestedWidth: number;

    constructor() {
        super(LynkTableResizeEvent.TYPE);
    }
}

export class LynkTableSortEvent extends LynkTableHeaderEvent {
    static TYPE = 'lynk-table-header-event-sort';

    constructor() {
        super(LynkTableSortEvent.TYPE);
    }
}