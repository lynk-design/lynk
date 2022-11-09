import { LitElement } from 'lit';
import LynkTableHeaderGroup from '../table-header-group/table-header-group';
import LynkTableRowGroup from '../table-row-group/table-row-group';
import { ILynkTableCol, ILynkTableRow, LynkTableSortEvent } from './models';
export default class LynkTable extends LitElement {
    static styles: import("lit").CSSResult;
    cols: ILynkTableCol[];
    rows: ILynkTableRow[];
    assignedHeaderGroup: NodeListOf<LynkTableHeaderGroup>;
    assignedRowGroup: NodeListOf<LynkTableRowGroup>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleSort(event: LynkTableSortEvent): void;
    isNumeric(toCheck: any): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-table': LynkTable;
    }
}
