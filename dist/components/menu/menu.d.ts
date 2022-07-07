import { LitElement } from 'lit';
import type LynkMenuItem from '../../components/menu-item/menu-item';
export interface MenuSelectEventDetail {
    item: LynkMenuItem;
}
export default class LynkMenu extends LitElement {
    static styles: import("lit").CSSResult;
    menu: HTMLElement;
    defaultSlot: HTMLSlotElement;
    private typeToSelectString;
    private typeToSelectTimeout;
    firstUpdated(): void;
    getAllItems(options?: {
        includeDisabled: boolean;
    }): LynkMenuItem[];
    getCurrentItem(): LynkMenuItem | undefined;
    setCurrentItem(item: LynkMenuItem): void;
    typeToSelect(event: KeyboardEvent): void;
    handleClick(event: MouseEvent): void;
    handleKeyUp(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleMouseDown(event: MouseEvent): void;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-menu': LynkMenu;
    }
}
