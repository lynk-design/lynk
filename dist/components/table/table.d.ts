import { LitElement } from 'lit';
import { LynkTableSortEvent } from './models';
import type LynkTableHeaderGroup from '../table-header-group/table-header-group';
import type LynkTableRowGroup from '../table-row-group/table-row-group';
import type { ILynkTableCol, ILynkTableRow } from './models';
export default class LynkTable extends LitElement {
    static styles: import("lit").CSSResult;
    cols: ILynkTableCol[];
    rows: ILynkTableRow[];
    custom: boolean;
    assignedHeaderGroup: NodeListOf<LynkTableHeaderGroup>;
    assignedRowGroup: NodeListOf<LynkTableRowGroup>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleSort(event: LynkTableSortEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-table': LynkTable;
    }
}
