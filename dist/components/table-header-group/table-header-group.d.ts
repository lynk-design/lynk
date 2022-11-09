import { LitElement } from 'lit';
export default class LynkTableHeaderGroup extends LitElement {
    static styles: import("lit").CSSResult;
    sticky: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-thead': LynkTableHeaderGroup;
    }
}
