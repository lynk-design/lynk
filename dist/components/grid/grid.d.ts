import { LitElement } from 'lit';
export default class LynkGrid extends LitElement {
    static styles: import("lit").CSSResult;
    container: boolean;
    item: boolean;
    direction: 'row' | 'row-reverse' | 'column' | 'column-revers';
    justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    span: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-grid': LynkGrid;
    }
}
