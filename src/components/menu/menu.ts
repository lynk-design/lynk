import { customElement, query } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './menu.styles';
import type { CSSResultGroup } from 'lit';
import type LynkMenuItem from '../menu-item/menu-item';
export interface MenuSelectEventDetail {
  item: LynkMenuItem;
}

/**
 * @summary Menus provide a list of options for the user to choose from.
 * @documentation https://lynk.design/components/menu
 * @since 1.0
 * @status stable
 *
 * @slot - The menu's content, including menu items, menu labels, and dividers.
 *
 * @event {{ item: LynkMenuItem }} on:select - Emitted when a menu item is selected.
 */
@customElement('lynk-menu')
export default class LynkMenu extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('slot') defaultSlot: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'menu');
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.closest('lynk-menu-item');

    if (!item || item.disabled || item.inert) {
      return;
    }

    if (item.type === 'checkbox') {
      item.checked = !item.checked;
    }

    this.emit('on:select', { detail: { item } });
  }

  private handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const isInput = target.closest('lynk-input') !== null;

    // Make a selection when pressing enter
    if (event.key === 'Enter') {
      const item = this.getCurrentItem();
      event.preventDefault();

      // Simulate a click to support @click handlers on menu items that also work with the keyboard
      item?.click();
    }

    // Prevent scrolling when space is pressed
    if (event.key === ' ' && !isInput) {
      event.preventDefault();
    }

    // Move the selection when pressing down or up
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      const items = this.getAllItems();
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;

      if (isInput) {
        index = -1;
      }

      if (items.length > 0) {
        event.preventDefault();

        if (event.key === 'ArrowDown') {
          index++;
        } else if (event.key === 'ArrowUp') {
          index--;
        } else if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = items.length - 1;
        }

        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }

        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }

  private handleMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (this.isMenuItem(target)) {
      this.setCurrentItem(target as LynkMenuItem);
    }
  }

  private handleSlotChange() {
    const items = this.getAllItems();

    // Reset the roving tab index when the slotted items change
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }

  private isMenuItem(item: HTMLElement) {
    return (
      item.tagName.toLowerCase() === 'lynk-menu-item' ||
      ['menuitem', 'menuitemcheckbox', 'menuitemradio'].includes(item.getAttribute('role') ?? '')
    );
  }

  /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el: HTMLElement) => {
      if (el.inert || !this.isMenuItem(el)) {
        return false;
      }
      return true;
    }) as LynkMenuItem[];
  }

  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find(i => i.getAttribute('tabindex') === '0');
  }

  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(item: LynkMenuItem) {
    const items = this.getAllItems();

    // Update tab indexes
    items.forEach(i => {
      i.setAttribute('tabindex', i === item ? '0' : '-1');
    });
  }

  render() {
    return html`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-menu': LynkMenu;
  }
}
