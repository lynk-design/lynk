import { LitElement } from 'lit';
export default class LynkGrid extends LitElement {
    static styles: import("lit").CSSResult;
    container: boolean;
    item: boolean;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-revers';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    span?: string;
    gap: '0' | 'tiny' | '2x-small' | 'x-small' | 'small' | 'base' | 'medium' | 'large' | 'x-large' | '2x-large' | '3x-large';
    getBreakpointClasses(): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-grid': LynkGrid;
    }
}
