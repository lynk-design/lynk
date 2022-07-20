import { LitElement } from 'lit';
import '../../components/icon-button/icon-button';
import type LynkTabPanel from '../../components/tab-panel/tab-panel';
import type LynkTab from '../../components/tab/tab';
export default class LynkTabGroup extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly localize;
    tabGroup: HTMLElement;
    body: HTMLElement;
    nav: HTMLElement;
    indicator: HTMLElement;
    private activeTab?;
    private mutationObserver;
    private resizeObserver;
    private tabs;
    private panels;
    private hasScrollControls;
    placement: 'top' | 'bottom' | 'start' | 'end';
    activation: 'auto' | 'manual';
    noScrollControls: boolean;
    lang: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    show(panel: string): void;
    getAllTabs(includeDisabled?: boolean): LynkTab[];
    getAllPanels(): [LynkTabPanel];
    getActiveTab(): LynkTab | undefined;
    handleClick(event: MouseEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleScrollToStart(): void;
    handleScrollToEnd(): void;
    updateScrollControls(): void;
    setActiveTab(tab: LynkTab, options?: {
        emitEvents?: boolean;
        scrollBehavior?: 'auto' | 'smooth';
    }): void;
    setAriaLabels(): void;
    syncIndicator(): void;
    repositionIndicator(): void;
    preventIndicatorTransition(): void;
    syncTabsAndPanels(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lynk-tab-group': LynkTabGroup;
    }
}
