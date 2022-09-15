import { LitElement } from 'lit';
import '../../components/icon/icon';
export default class LynkMenuItem extends LitElement {
    static styles: import("lit").CSSResult;
    private cachedTextLabel;
    defaultSlot: HTMLSlotElement;
    menuItem: HTMLElement;
    checked: boolean;
    value: string;
    disabled: boolean;
    firstUpdated(): void;
    getTextLabel(): string;
    handleCheckedChange(): void;
    handleClick(event: MouseEvent): void;
    handleDisabledChange(): void;
    handleDefaultSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-menu-item': LynkMenuItem;
    }
}
