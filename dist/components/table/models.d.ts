export interface ILynkTableCol {
    key: string;
    sortDirection: LynkTableSortDirection;
    sortEnabled: boolean;
    title: string;
}
export interface ILynkTableRow {
    [key: string]: any;
}
export declare enum LynkTableSortDirection {
    DESC = 1,
    ASC = -1,
    NONE = 0
}
export declare class LynkTableSortEvent extends Event {
    key: any;
    static TYPE: string;
    constructor(key: any);
}
