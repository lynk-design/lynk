export interface ILynkTableCol {
    key: string;
    sortDirection?: LynkTableSortDirection;
    sortEnabled?: boolean;
    title: string;
}
export interface ILynkTableRow {
    [key: string]: string;
}
export declare enum LynkTableSortDirection {
    DESC = 1,
    ASC = -1,
    NONE = 0
}
export declare class LynkTableSortEvent extends Event {
    static TYPE: string;
    key: string;
    constructor();
}
