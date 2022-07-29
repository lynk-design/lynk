import { LitElement } from 'lit';
export default class LynkResponsiveMedia extends LitElement {
    static styles: import("lit").CSSResult;
    aspectRatio: string;
    fit: 'cover' | 'contain';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-responsive-media': LynkResponsiveMedia;
    }
}
