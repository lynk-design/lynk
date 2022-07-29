import { LitElement } from 'lit';
export default class LynkStack extends LitElement {
    static styles: import("lit").CSSResult;
    horizontal: boolean;
    reverse: boolean;
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    gap: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-stack': LynkStack;
    }
}
