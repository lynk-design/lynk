import { LitElement } from 'lit';
import '../../components/icon/icon';
import '../../components/tooltip/tooltip';
export default class LynkTextarea extends LitElement {
    static styles: import("lit").CSSResult;
    input: HTMLTextAreaElement;
    private readonly formSubmitController;
    private readonly hasSlotController;
    private resizeObserver;
    private hasFocus;
    state: 'error' | 'warning' | 'success';
    size: 'small' | 'medium' | 'large';
    name: string;
    value: string;
    filled: boolean;
    label: string;
    helpText: string;
    helpTip: string;
    placeholder: string;
    rows: number;
    resize: 'none' | 'vertical' | 'auto';
    disabled: boolean;
    readonly: boolean;
    restricted: boolean;
    minlength: number;
    maxlength: number;
    autovalidate: boolean;
    required: boolean;
    invalid: boolean;
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    autocorrect: string;
    autocomplete: string;
    autofocus: boolean;
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    spellcheck: boolean;
    inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    select(): void;
    scrollPosition(position?: {
        top?: number;
        left?: number;
    }): {
        top: number;
        left: number;
    } | undefined;
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    setRangeText(replacement: string, start: number, end: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    handleBlur(): void;
    handleChange(): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleInput(): void;
    handleRowsChange(): void;
    handleValueChange(): void;
    setTextareaHeight(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-textarea': LynkTextarea;
    }
}
