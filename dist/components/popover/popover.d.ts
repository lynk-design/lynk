import { LitElement } from 'lit';
export default class LynkPopover extends LitElement {
    static styles: import("lit").CSSResult;
    trigger: HTMLElement;
    panel: HTMLElement;
    positioner: HTMLElement;
    arrow: HTMLElement;
    private positionerCleanup;
    private readonly hasSlotController;
    private readonly localize;
    open: boolean;
    label: string;
    noHeader: boolean;
    noArrow: boolean;
    clickToHide: boolean;
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    containingElement?: HTMLElement;
    distance: number;
    skidding: number;
    block: boolean;
    hoist: boolean;
    connectedCallback(): void;
    firstUpdated(): Promise<void>;
    disconnectedCallback(): void;
    focusOnTrigger(): void;
    handleDocumentKeyDown(event: KeyboardEvent): void;
    handleDocumentMouseDown(event: MouseEvent): void;
    handlePopoverOptionsChange(): void;
    handleTriggerClick(): void;
    handleTriggerKeyDown(event: KeyboardEvent): void;
    handleTriggerKeyUp(event: KeyboardEvent): void;
    handleTriggerSlotChange(): void;
    updateAccessibleTrigger(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    reposition(): void;
    addOpenListeners(): void;
    removeOpenListeners(): void;
    handleOpenChange(): Promise<void>;
    private startPositioner;
    private updatePositioner;
    private stopPositioner;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-popover': LynkPopover;
    }
}
