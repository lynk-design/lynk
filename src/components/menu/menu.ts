import { html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './menu.styles';
import type LynkMenuItem from '../../components/menu-item/menu-item';
import type { CSSResultGroup } from 'lit';
export interface MenuSelectEventDetail {
  item: LynkMenuItem;
}

/**
 * @summary Menus provide a list of options for the user to choose from.
 *
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

  private getAllItems(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el: HTMLElement) => {
      if (el.getAttribute('role') !== 'menuitem') {
        return false;
      }

      if (!options.includeDisabled && (el as LynkMenuItem).disabled) {
        return false;
      }

      return true;
    }) as LynkMenuItem[];
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.closest('lynk-menu-item');

    if (item?.disabled === false) {
      this.emit('on:select', { detail: { item } });
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Make a selection when pressing enter
    if (event.key === 'Enter') {
      const item = this.getCurrentItem();
      event.preventDefault();

      // Simulate a click to support @click handlers on menu items that also work with the keyboard
      item?.click();
    }

    // Prevent scrolling when space is pressed
    if (event.key === ' ') {
      event.preventDefault();
    }

    // Move the selection when pressing down or up
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      const items = this.getAllItems({ includeDisabled: false });
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;

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

    if (target.getAttribute('role') === 'menuitem') {
      this.setCurrentItem(target as LynkMenuItem);
    }
  }

  private handleSlotChange() {
    const items = this.getAllItems({ includeDisabled: false });

    // Reset the roving tab index when the slotted items change
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }

  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems({ includeDisabled: false }).find(i => i.getAttribute('tabindex') === '0');
  }

  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(item: SlMenuItem) {
    const items = this.getAllItems({ includeDisabled: false });
    const activeItem = item.disabled ? items[0] : item;

    // Update tab indexes
    items.forEach(i => {
      i.setAttribute('tabindex', i === activeItem ? '0' : '-1');
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
