import { LitElement } from 'lit';
export default class LynkTableCell extends LitElement {
    static styles: import("lit").CSSResult;
    state: 'danger' | 'primary' | 'success' | 'warning';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-td': LynkTableCell;
    }
}
