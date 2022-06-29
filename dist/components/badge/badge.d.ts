import { LitElement } from 'lit';
export default class LynkBadge extends LitElement {
    static styles: import("lit").CSSResult;
    type: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    pill: boolean;
    pulse: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-badge': LynkBadge;
    }
}
