import { LitElement } from 'lit';
export default class LynkDivider extends LitElement {
    static styles: import("lit").CSSResult;
    vertical: boolean;
    firstUpdated(): void;
    handleVerticalChange(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-divider': LynkDivider;
    }
}
