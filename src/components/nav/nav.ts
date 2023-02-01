import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { clamp } from '../../internal/math';
import { watch } from '../../internal/watch';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { LocalizeController } from '../../utilities/localize';
import LynkNavItem from '../nav-item/nav-item';
import LynkNavGroup from '../nav-group/nav-group';
import styles from './nav.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Navs display a hierarchical menu of [nav items](/components/nav-item) for navigating within an app or page. Items with children can be expanded and collapsed as desired by the user.
 *
 * @since 1.0
 * @status experimental
 *
 * @event {{ selection: LynkNavItem }} on:select - Emitted when a nav item is selected.
 *
 * @slot - The nav's content, including nav items, nav groups, and dividers.
 *
* @cssproperty [--max-width=100%] - Customize the max nav width.
* @cssproperty [--background=transparent] - Customize the nav background.
* @cssproperty [--padding=var(--lynk-spacing-x-small) 0] - Customize the nav padding.
* @cssproperty [--border-top=none] - Customize the top border.
* @cssproperty [--border-right=none] - Customize the right border.
* @cssproperty [--border-bottom=none] - Customize the bottom border.
* @cssproperty [--border-left=none] - Customize the left border.
* @cssproperty [--border-radius=0] - Customize the border radius.
 */
@customElement('lynk-nav')
export default class LynkNav extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  @property({ reflect: true })
  public value: string | undefined = undefined;

  /** Simplifies the nav and draws the nav items in a slim style. */
  @property({ type: Boolean, reflect: true })
  public squished = false;

  //
  // A collection of all the items in the nav, in the order they appear. The collection is live, meaning it is
  // automatically updated when the underlying document is changed.
  //
  private lastFocusedItem: LynkNavItem;
  private readonly localize = new LocalizeController(this);
  private mutationObserver: MutationObserver;

  async connectedCallback() {
    super.connectedCallback();
    this.handleNavChanged = this.handleNavChanged.bind(this);
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);

    this.handleSquishedChange();

    this.setAttribute('role', 'navigation');
    this.setAttribute('tabindex', '0');

    this.addEventListener('focusin', this.handleFocusIn);
    this.addEventListener('focusout', this.handleFocusOut);

    await this.updateComplete;

    this.mutationObserver = new MutationObserver(this.handleNavChanged);
    this.mutationObserver.observe(this, { childList: true, subtree: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.mutationObserver.disconnect();

    this.removeEventListener('focusin', this.handleFocusIn);
    this.removeEventListener('focusout', this.handleFocusOut);
  }

  private handleNavChanged(mutations: MutationRecord[]) {
    for (const mutation of mutations) {
      // const addedNodes: LynkNavItem[] = [...mutation.addedNodes].filter(LynkNavItem.isNavItem) as LynkNavItem[];
      const removedNodes = [...mutation.removedNodes].filter(LynkNavItem.isNavItem) as LynkNavItem[];

      // addedNodes.forEach(this.initNavItem);
      // If the focused item has been removed from the DOM, move the focus to the first focusable item
      if (removedNodes.includes(this.lastFocusedItem)) {
        this.focusItem(this.getFocusableItems()[0]);
      }
    }
  }

  private getAllNavItems() {
    return [...this.querySelectorAll<LynkNavItem>('lynk-nav-item')];
  }

  private getNavGroups() {
    return [...this.querySelectorAll<LynkNavGroup>('lynk-nav-group')];
  }

  private getFocusableItems() {
    const items = this.getAllNavItems();
    const collapsedItems = new Set();

    return items.filter(item => {
      // Exclude disabled elements
      if (item.disabled) return false;

      // Exclude those whose parent is collapsed or loading
      const parent: LynkNavItem | null | undefined = item.parentElement?.closest('[role=menuitem]');
      if (parent && (!parent.expanded || collapsedItems.has(parent))) {
        collapsedItems.add(item);
      }

      return !collapsedItems.has(item);
    });
  }

  private focusItem(item?: LynkNavItem | null) {
    item?.focus();
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End', 'Enter', 'Tab', ' '].includes(event.key)) {
      return;
    }

    const items = this.getFocusableItems();
    const isLtr = this.localize.dir() === 'ltr';
    const isRtl = this.localize.dir() === 'rtl';

    if (items.length > 0) {

      const activeItemIndex = items.findIndex(item => item.matches(':focus'));
      const activeItem: LynkNavItem | undefined = items[activeItemIndex];

      const focusItemAt = (index: number) => {
        const item = items[clamp(index, 0, items.length - 1)];
        this.focusItem(item);
      };
      const toggleExpand = (expanded: boolean) => {
        activeItem.expanded = expanded;
      };

      // Allow tabbing to contine on to the next dom element outside the nav as expected
      if ((event.key === 'Tab' && !event.shiftKey) && activeItemIndex === items.length - 1 ) {
        this.tabIndex = 0;
        activeItem.tabIndex = 0;
        return;
      } else if ((event.key === 'Tab' && event.shiftKey) && activeItemIndex === 0 ){
        this.tabIndex = -1;
        activeItem.tabIndex = -1;
      } else {

        event.preventDefault();

        if (event.key === 'ArrowDown' || (event.key === 'Tab' && !event.shiftKey)) {
          // Moves focus to the next node that is focusable without opening or closing a node.
          focusItemAt(activeItemIndex + 1);
        } else if ((event.key === 'ArrowUp') || (event.key === 'Tab' && event.shiftKey)) {
          // Moves focus to the next node that is focusable without opening or closing a node.
          focusItemAt(activeItemIndex - 1);
        } else if ((isLtr && event.key === 'ArrowRight') || (isRtl && event.key === 'ArrowLeft')) {
          //
          // When focus is on an nav item with collapsed children, opens the submenu; focus does not move.
          // When focus is on an expanded item with children, moves focus to the first child node.
          // When focus is on an childless nav item, does nothing.
          //
          if (!activeItem || activeItem.disabled || (activeItem.isParent && activeItem.expanded) || !activeItem.isParent) {
            focusItemAt(activeItemIndex + 1);
          } else {
            toggleExpand(true);
          }
        } else if ((isLtr && event.key === 'ArrowLeft') || (isRtl && event.key === 'ArrowRight')) {
          //
          // When focus is on an expanded item with chilren, collapses the submenu.
          // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
          // When focus is on an item with a collapsed child menu, does nothing.
          //
          if (!activeItem || activeItem.disabled || !activeItem.isParent || (activeItem.isParent && !activeItem.expanded)) {
            focusItemAt(activeItemIndex - 1);
          } else {
            toggleExpand(false);
          }
        } else if (event.key === 'Home') {
          // Moves focus to the first node in the nav without opening or closing a node.
          focusItemAt(0);
        } else if (event.key === 'End') {
          // Moves focus to the last node in the nav that is focusable without opening the node.
          focusItemAt(items.length - 1);
        } else if (event.key === 'Enter' || event.key === ' ') {
          // Fire a click event on the item
          if (!activeItem.disabled) {
            activeItem.click();
          }
        }
      }
    }
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.closest('lynk-nav-item');

    if (!item || item.disabled || item.inert) {
      return;
    }

    this.emit('on:select', { detail: { item } });
  }

  private handleFocusOut(event: FocusEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement;

    // If the element that got the focus is not in the nav
    if (!relatedTarget || !this.contains(relatedTarget)) {
      this.tabIndex = 0;
    }
  }

  private handleFocusIn(event: FocusEvent) {
    const target = event.target as LynkNavItem;

    // If the nav has been focused, move the focus to the last focused item
    if (event.target === this) {
      this.focusItem(this.lastFocusedItem || this.getAllNavItems()[0]);
    }

    // If the target is a nav item, update the tabindex
    if (LynkNavItem.isNavItem(target) && !target.disabled) {
      if (this.lastFocusedItem) {
        this.lastFocusedItem.tabIndex = -1;
      }
      this.lastFocusedItem = target;
      this.tabIndex = -1;

      target.tabIndex = 0;
    }
  }

  private handleSlotChange() {
    // const items = this.getAllNavItems();
    // items.forEach(this.initNavItem);
  }

  @watch('squished', { waitUntilFirstUpdate: true })
  handleSquishedChange() {
    const items = this.getAllNavItems();
    const groups = this.getNavGroups();
    items.forEach(item => {
      item.squished = this.squished;
      item.expanded = false;
      item.isParent = false;
    });
    groups.forEach(item => {
      item.squished = this.squished;
    });
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-nav': true
        })}
        role="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <slot
          part="list"
          role="group"
          @slotchange=${this.handleSlotChange}
        ></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-nav': LynkNav;
  }
}
