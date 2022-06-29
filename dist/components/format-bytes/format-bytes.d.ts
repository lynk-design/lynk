import { LitElement } from 'lit';
export default class LynkFormatBytes extends LitElement {
    private readonly localize;
    value: number;
    unit: 'byte' | 'bit';
    display: 'long' | 'short' | 'narrow';
    lang: string;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-format-bytes': LynkFormatBytes;
    }
}
