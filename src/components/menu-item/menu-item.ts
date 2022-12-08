import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { getTextContent } from '../../internal/slot';
import { watch } from '../../internal/watch';
import '../icon/icon';
import styles from './menu-item.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Menu items provide options for the user to pick from in a menu.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 *
 * @event on:click - Emitted when a menu item is clicked
 * @event on:label-change - Emitted when the menu item's text label changes. For performance reasons, this event is only
 *   emitted if the default slot's `slotchange` event is triggered. It will not fire when the label is first set.
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart checked-icon - The checked icon, which is only visible when the menu item is checked.
 * @csspart prefix - The prefix container.
 * @csspart label - The menu item label.
 * @csspart suffix - The suffix container.
 */
@customElement('lynk-menu-item')
export default class LynkMenuItem extends LynkElement {
  static styles: CSSResultGroup = styles;

  private cachedTextLabel: string;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.lynk-menu-item') menuItem: HTMLElement;

  /** Draws the item in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property() value = '';

  /** Draws the menu item in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  firstUpdated() {
    this.setAttribute('role', 'menuitem');
  }

  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.emit('on:click');
  }


  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();

    // Ignore the first time the label is set
    if (typeof this.cachedTextLabel === 'undefined') {
      this.cachedTextLabel = textLabel;
      return;
    }

    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit('on:label-change');
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-menu-item': true,
          'lynk-menu-item--checked': this.checked,
          'lynk-menu-item--disabled': this.disabled,
          'lynk-menu-item--has-submenu': false // reserved for future use
        })}
        @click=${this.handleClick}
      >
        <span part="checked-icon" class="lynk-menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="lynk-menu-item__prefix"></slot>

        <slot part="label" class="lynk-menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="lynk-menu-item__suffix"></slot>

        <span class="lynk-menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-menu-item': LynkMenuItem;
  }
}
