import { LitElement } from 'lit';
import { LynkTableSortDirection } from '../table/models';
export default class LynkTableHeader extends LitElement {
    static styles: import("lit").CSSResult;
    key: string;
    sortDirection: LynkTableSortDirection;
    sortEnabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-th': LynkTableHeader;
    }
}
