import { LitElement } from 'lit';
import { FormSubmitController } from '../../internal/form';
export default class LynkRadioButton extends LitElement {
    static styles: import("lit").CSSResult;
    input: HTMLInputElement;
    hiddenInput: HTMLInputElement;
    protected readonly formSubmitController: FormSubmitController;
    private readonly hasSlotController;
    protected hasFocus: boolean;
    name: string;
    value: string;
    disabled: boolean;
    checked: boolean;
    invalid: boolean;
    connectedCallback(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    handleBlur(): void;
    handleClick(): void;
    handleFocus(): void;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    size: 'small' | 'medium' | 'large';
    pill: boolean;
    render(): import("lit-html").TemplateResult<2 | 1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-radio-button': LynkRadioButton;
    }
}
