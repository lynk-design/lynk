import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { scrollIntoView } from '../../internal/scroll';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import '../icon-button/icon-button';
import styles from './tab-group.styles';
import type LynkTabPanel from '../tab-panel/tab-panel';
import type LynkTab from '../tab/tab';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://lynk.design/components/tab-group
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-icon-button
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<lynk-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<lynk-tab>` elements.
 *
 * @event {{ name: String }} on:tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} on:tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart nav - The tab group navigation container.
 * @csspart tabs - The container that wraps the slotted tabs.
 * @csspart active-tab-indicator - The line that highlights the currently selected tab.
 * @csspart body - The tab group body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<lynk-icon-button>`.
 * @csspart scroll-button--start - Targets the starting scroll button.
 * @csspart scroll-button--end - Targets the ending scroll button.
 * @csspart scroll-button__base - The scroll button's `base` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */
@customElement('lynk-tab-group')
export default class LynkTabGroup extends LynkElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  private activeTab?: LynkTab;
  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private tabs: LynkTab[] = [];
  private panels: LynkTabPanel[] = [];

  @query('.lynk-tab-group') tabGroup: HTMLElement;
  @query('.lynk-tab-group__body') body: HTMLSlotElement;
  @query('.lynk-tab-group__nav') nav: HTMLElement;
  @query('.lynk-tab-group__indicator') indicator: HTMLElement;

  @state() private hasScrollControls = false;

  /** The placement of the tabs. */
  @property() placement: 'top' | 'bottom' | 'start' | 'end' = 'top';

  /**
   * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   */
  @property() activation: 'auto' | 'manual' = 'auto';

  /** Disables the scroll arrows that appear when tabs overflow. */
  @property({ attribute: 'no-scroll-controls', type: Boolean }) noScrollControls = false;

  connectedCallback() {
    super.connectedCallback();

    this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator();
      this.updateScrollControls();
    });

    this.mutationObserver = new MutationObserver(mutations => {
      // Update aria labels when the DOM changes
      if (mutations.some(m => !['aria-labelledby', 'aria-controls'].includes(m.attributeName!))) {
        setTimeout(() => this.setAriaLabels());
      }

      // Sync tabs when disabled states change
      if (mutations.some(m => m.attributeName === 'disabled')) {
        this.syncTabsAndPanels();
      }
    });

    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);

      // Set initial tab state when the tabs first become visible
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].intersectionRatio > 0) {
          this.setAriaLabels();
          this.setActiveTab(this.getActiveTab() ?? this.tabs[0], { emitEvents: false });
          observer.unobserve(entries[0].target);
        }
      });
      intersectionObserver.observe(this.tabGroup);
    });
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
    this.resizeObserver.unobserve(this.nav);
  }

  private getAllTabs(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    const slot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="nav"]')!;

    return [...(slot.assignedElements() as LynkTab[])].filter(el => {
      return options.includeDisabled
        ? el.tagName.toLowerCase() === 'lynk-tab'
        : el.tagName.toLowerCase() === 'lynk-tab' && !el.disabled;
    });
  }

  private getAllPanels() {
    return [...this.body.assignedElements()].filter(el => el.tagName.toLowerCase() === 'lynk-tab-panel') as [LynkTabPanel];
  }

  private getActiveTab() {
    return this.tabs.find(el => el.active);
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('lynk-tab');
    const tabGroup = tab?.closest('lynk-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('lynk-tab');
    const tabGroup = tab?.closest('lynk-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    // Activate a tab
    if (['Enter', ' '].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: 'smooth' });
        event.preventDefault();
      }
    }

    // Move focus left or right
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const activeEl = this.tabs.find(t => t.matches(':focus'));
      const isRtl = this.localize.dir() === 'rtl';

      if (activeEl?.tagName.toLowerCase() === 'lynk-tab') {
        let index = this.tabs.indexOf(activeEl);

        if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = this.tabs.length - 1;
        } else if (
          (['top', 'bottom'].includes(this.placement) && event.key === (isRtl ? 'ArrowRight' : 'ArrowLeft')) ||
          (['start', 'end'].includes(this.placement) && event.key === 'ArrowUp')
        ) {
          index--;
        } else if (
          (['top', 'bottom'].includes(this.placement) && event.key === (isRtl ? 'ArrowLeft' : 'ArrowRight')) ||
          (['start', 'end'].includes(this.placement) && event.key === 'ArrowDown')
        ) {
          index++;
        }

        if (index < 0) {
          index = this.tabs.length - 1;
        }

        if (index > this.tabs.length - 1) {
          index = 0;
        }

        this.tabs[index].focus({ preventScroll: true });

        if (this.activation === 'auto') {
          this.setActiveTab(this.tabs[index], { scrollBehavior: 'smooth' });
        }

        if (['top', 'bottom'].includes(this.placement)) {
          scrollIntoView(this.tabs[index], this.nav, 'horizontal');
        }

        event.preventDefault();
      }
    }
  }

  private handleScrollToStart() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft + this.nav.clientWidth
          : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  private handleScrollToEnd() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft - this.nav.clientWidth
          : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  private setActiveTab(tab: LynkTab, options?: { emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }) {
    options = {
      emitEvents: true,
      scrollBehavior: 'auto',
      ...options
    };

    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;

      // Sync active tab and panel
      this.tabs.map(el => (el.active = el === this.activeTab));
      this.panels.map(el => (el.active = el.name === this.activeTab?.panel));
      this.syncIndicator();

      if (['top', 'bottom'].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, 'horizontal', options.scrollBehavior);
      }

      // Emit events
      if (options.emitEvents) {
        if (previousTab) {
          this.emit('on:tab-hide', { detail: { name: previousTab.panel } });
        }

        this.emit('on:tab-show', { detail: { name: this.activeTab.panel } });
      }
    }
  }

  private setAriaLabels() {
    // Link each tab with its corresponding panel
    this.tabs.forEach(tab => {
      const panel = this.panels.find(el => el.name === tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id')!);
        panel.setAttribute('aria-labelledby', tab.getAttribute('id')!);
      }
    });
  }

  private repositionIndicator() {
    const currentTab = this.getActiveTab();

    if (!currentTab) {
      return;
    }

    const width = currentTab.clientWidth;
    const height = currentTab.clientHeight;
    const isRtl = this.localize.dir() === 'rtl';

    // We can't used offsetLeft/offsetTop here due to a shadow parent issue where neither can getBoundingClientRect
    // because it provides invalid values for animating elements: https://bugs.chromium.org/p/chromium/issues/detail?id=920069
    const allTabs = this.getAllTabs();
    const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
    const offset = precedingTabs.reduce(
      (previous, current) => ({
        left: previous.left + current.clientWidth,
        top: previous.top + current.clientHeight
      }),
      { left: 0, top: 0 }
    );

    switch (this.placement) {
      case 'top':
      case 'bottom':
        this.indicator.style.width = `${width}px`;
        this.indicator.style.height = 'auto';
        this.indicator.style.translate = isRtl ? `${-1 * offset.left}px` : `${offset.left}px`;
        break;

      case 'start':
      case 'end':
        this.indicator.style.width = 'auto';
        this.indicator.style.height = `${height}px`;
        this.indicator.style.translate = `0 ${offset.top}px`;
        break;
    }
  }

  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  private syncTabsAndPanels() {
    this.tabs = this.getAllTabs({ includeDisabled: false });
    this.panels = this.getAllPanels();
    this.syncIndicator();
  }

  @watch('noScrollControls', { waitUntilFirstUpdate: true })
  updateScrollControls() {
    if (this.noScrollControls) {
      this.hasScrollControls = false;
    } else {
      this.hasScrollControls =
        ['top', 'bottom'].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
    }
  }

  @watch('placement', { waitUntilFirstUpdate: true })
  syncIndicator() {
    const tab = this.getActiveTab();

    if (tab) {
      this.indicator.style.display = 'block';
      this.repositionIndicator();
    } else {
      this.indicator.style.display = 'none';
    }
  }

  /** Shows the specified tab panel. */
  show(panel: string) {
    const tab = this.tabs.find(el => el.panel === panel);

    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-tab-group': true,
          'lynk-tab-group--top': this.placement === 'top',
          'lynk-tab-group--bottom': this.placement === 'bottom',
          'lynk-tab-group--start': this.placement === 'start',
          'lynk-tab-group--end': this.placement === 'end',
          'lynk-tab-group--rtl': this.localize.dir() === 'rtl',
          'lynk-tab-group--has-scroll-controls': this.hasScrollControls
        })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="lynk-tab-group__nav-container" part="nav">
          ${this.hasScrollControls
            ? html`
                <lynk-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="lynk-tab-group__scroll-button lynk-tab-group__scroll-button--start"
                  name=${isRtl ? 'chevron-right' : 'chevron-left'}
                  library="system"
                  label=${this.localize.term('scrollToStart')}
                  @click=${this.handleScrollToStart}
                ></lynk-icon-button>
              `
            : ''}

          <div class="lynk-tab-group__nav">
            <div part="tabs" class="lynk-tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="lynk-tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls
            ? html`
                <lynk-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="lynk-tab-group__scroll-button lynk-tab-group__scroll-button--end"
                  name=${isRtl ? 'chevron-left' : 'chevron-right'}
                  library="system"
                  label=${this.localize.term('scrollToEnd')}
                  @click=${this.handleScrollToEnd}
                ></lynk-icon-button>
              `
            : ''}
        </div>

        <slot part="body" class="lynk-tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tab-group': LynkTabGroup;
  }
}
