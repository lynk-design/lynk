import {
  tab_group_styles_default
} from "./chunk.EGSFBB7U.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  scrollIntoView
} from "./chunk.MZXL76U3.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass,
  __spreadValues
} from "./chunk.LKA3TPUC.js";

// src/components/tab-group/tab-group.ts
var LynkTabGroup = class extends s {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.tabs = [];
    this.panels = [];
    this.hasScrollControls = false;
    this.placement = "top";
    this.activation = "auto";
    this.noScrollControls = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      this.preventIndicatorTransition();
      this.repositionIndicator();
      this.updateScrollControls();
    });
    this.mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((m) => !["aria-labelledby", "aria-controls"].includes(m.attributeName))) {
        setTimeout(() => this.setAriaLabels());
      }
      if (mutations.some((m) => m.attributeName === "disabled")) {
        this.syncTabsAndPanels();
      }
    });
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        var _a;
        if (entries[0].intersectionRatio > 0) {
          this.setAriaLabels();
          this.setActiveTab((_a = this.getActiveTab()) != null ? _a : this.tabs[0], { emitEvents: false });
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
  show(panel) {
    const tab = this.tabs.find((el) => el.panel === panel);
    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  getAllTabs(includeDisabled = false) {
    const slot = this.shadowRoot.querySelector('slot[name="nav"]');
    return [...slot.assignedElements()].filter((el) => {
      return includeDisabled ? el.tagName.toLowerCase() === "lynk-tab" : el.tagName.toLowerCase() === "lynk-tab" && !el.disabled;
    });
  }
  getAllPanels() {
    const slot = this.body.querySelector("slot");
    return [...slot.assignedElements()].filter((el) => el.tagName.toLowerCase() === "lynk-tab-panel");
  }
  getActiveTab() {
    return this.tabs.find((el) => el.active);
  }
  handleClick(event) {
    const target = event.target;
    const tab = target.closest("lynk-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("lynk-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tab = target.closest("lynk-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("lynk-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (["Enter", " "].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
        event.preventDefault();
      }
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const activeEl = document.activeElement;
      if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "lynk-tab") {
        let index = this.tabs.indexOf(activeEl);
        if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = this.tabs.length - 1;
        } else if (["top", "bottom"].includes(this.placement) && event.key === "ArrowLeft" || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
          index--;
        } else if (["top", "bottom"].includes(this.placement) && event.key === "ArrowRight" || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
          index++;
        }
        if (index < 0) {
          index = this.tabs.length - 1;
        }
        if (index > this.tabs.length - 1) {
          index = 0;
        }
        this.tabs[index].focus({ preventScroll: true });
        if (this.activation === "auto") {
          this.setActiveTab(this.tabs[index], { scrollBehavior: "smooth" });
        }
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(this.tabs[index], this.nav, "horizontal");
        }
        event.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  updateScrollControls() {
    if (this.noScrollControls) {
      this.hasScrollControls = false;
    } else {
      this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
    }
  }
  setActiveTab(tab, options) {
    options = __spreadValues({
      emitEvents: true,
      scrollBehavior: "auto"
    }, options);
    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;
      this.tabs.map((el) => el.active = el === this.activeTab);
      this.panels.map((el) => {
        var _a;
        return el.active = el.name === ((_a = this.activeTab) == null ? void 0 : _a.panel);
      });
      this.syncIndicator();
      if (["top", "bottom"].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
      }
      if (options.emitEvents) {
        if (previousTab) {
          emit(this, "on:tab-hide", { detail: { name: previousTab.panel } });
        }
        emit(this, "on:tab-show", { detail: { name: this.activeTab.panel } });
      }
    }
  }
  setAriaLabels() {
    this.tabs.forEach((tab) => {
      const panel = this.panels.find((el) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute("aria-controls", panel.getAttribute("id"));
        panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
      }
    });
  }
  syncIndicator() {
    const tab = this.getActiveTab();
    if (tab) {
      this.indicator.style.display = "block";
      this.repositionIndicator();
    } else {
      this.indicator.style.display = "none";
    }
  }
  repositionIndicator() {
    const currentTab = this.getActiveTab();
    if (!currentTab) {
      return;
    }
    const width = currentTab.clientWidth;
    const height = currentTab.clientHeight;
    const isRtl = this.localize.dir() === "rtl";
    const allTabs = this.getAllTabs(true);
    const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
    const offset = precedingTabs.reduce((previous, current) => ({
      left: previous.left + current.clientWidth,
      top: previous.top + current.clientHeight
    }), { left: 0, top: 0 });
    switch (this.placement) {
      case "top":
      case "bottom":
        this.indicator.style.width = `${width}px`;
        this.indicator.style.height = "auto";
        this.indicator.style.transform = isRtl ? `translateX(${-1 * offset.left}px)` : `translateX(${offset.left}px)`;
        break;
      case "start":
      case "end":
        this.indicator.style.width = "auto";
        this.indicator.style.height = `${height}px`;
        this.indicator.style.transform = `translateY(${offset.top}px)`;
        break;
    }
  }
  preventIndicatorTransition() {
    const transitionValue = this.indicator.style.transition;
    this.indicator.style.transition = "none";
    requestAnimationFrame(() => {
      this.indicator.style.transition = transitionValue;
    });
  }
  syncTabsAndPanels() {
    this.tabs = this.getAllTabs();
    this.panels = this.getAllPanels();
    this.syncIndicator();
  }
  render() {
    return $`
      <div
        part="base"
        class=${o({
      "lynk-tab-group": true,
      "lynk-tab-group--top": this.placement === "top",
      "lynk-tab-group--bottom": this.placement === "bottom",
      "lynk-tab-group--start": this.placement === "start",
      "lynk-tab-group--end": this.placement === "end",
      "lynk-tab-group--rtl": this.localize.dir() === "rtl",
      "lynk-tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? $`
                <lynk-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="lynk-tab-group__scroll-button lynk-tab-group__scroll-button--start"
                  name="chevron-left"
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></lynk-icon-button>
              ` : ""}

          <div class="lynk-tab-group__nav">
            <div part="tabs" class="lynk-tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="lynk-tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? $`
                <lynk-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="lynk-tab-group__scroll-button lynk-tab-group__scroll-button--end"
                  name="chevron-right"
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></lynk-icon-button>
              ` : ""}
        </div>

        <div part="body" class="lynk-tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `;
  }
};
LynkTabGroup.styles = tab_group_styles_default;
__decorateClass([
  i(".lynk-tab-group")
], LynkTabGroup.prototype, "tabGroup", 2);
__decorateClass([
  i(".lynk-tab-group__body")
], LynkTabGroup.prototype, "body", 2);
__decorateClass([
  i(".lynk-tab-group__nav")
], LynkTabGroup.prototype, "nav", 2);
__decorateClass([
  i(".lynk-tab-group__indicator")
], LynkTabGroup.prototype, "indicator", 2);
__decorateClass([
  t()
], LynkTabGroup.prototype, "hasScrollControls", 2);
__decorateClass([
  e()
], LynkTabGroup.prototype, "placement", 2);
__decorateClass([
  e()
], LynkTabGroup.prototype, "activation", 2);
__decorateClass([
  e({ attribute: "no-scroll-controls", type: Boolean })
], LynkTabGroup.prototype, "noScrollControls", 2);
__decorateClass([
  e()
], LynkTabGroup.prototype, "lang", 2);
__decorateClass([
  watch("noScrollControls", { waitUntilFirstUpdate: true })
], LynkTabGroup.prototype, "updateScrollControls", 1);
__decorateClass([
  watch("placement", { waitUntilFirstUpdate: true })
], LynkTabGroup.prototype, "syncIndicator", 1);
LynkTabGroup = __decorateClass([
  n("lynk-tab-group")
], LynkTabGroup);

export {
  LynkTabGroup
};
