import { LitElement } from 'lit';
export default class LynkTabPanel extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly attrId;
    private readonly componentId;
    name: string;
    active: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-tab-panel': LynkTabPanel;
    }
}
