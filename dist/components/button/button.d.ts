import { LitElement } from 'lit';
import '../../components/spinner/spinner';
export default class LynkButton extends LitElement {
    static styles: import("lit").CSSResult;
    button: HTMLButtonElement | HTMLLinkElement;
    private readonly formSubmitController;
    private readonly hasSlotController;
    private readonly localize;
    private hasFocus;
    color: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    size: 'tiny' | 'small' | 'medium' | 'large';
    block: boolean;
    caret: boolean;
    disabled: boolean;
    thinking: boolean;
    outline: boolean;
    stealth: boolean;
    pill: boolean;
    circle: boolean;
    square: boolean;
    type: 'button' | 'submit';
    name?: string;
    value?: string;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    download?: string;
    form: string;
    formAction: string;
    formMethod: 'post' | 'get';
    formNoValidate: boolean;
    formTarget: '_self' | '_blank' | '_parent' | '_top' | string;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    handleBlur(): void;
    handleFocus(): void;
    handleClick(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<2 | 1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-button': LynkButton;
    }
}
