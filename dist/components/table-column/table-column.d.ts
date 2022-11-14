import { LitElement } from 'lit';
export default class LynkTableColumn extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-col': LynkTableColumn;
    }
}
