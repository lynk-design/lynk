import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../components/icon/icon';
import { emit } from '../../internal/event';
import { getTextContent } from '../../internal/slot';
import { watch } from '../../internal/watch';
import styles from './menu-item.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @dependency l-icon
 *
 * @event le-label-change - Emitted when the menu item's text label changes. For performance reasons, this event is only
 *   emitted if the default slot's `slotchange` event is triggered. It will not fire when the label is first set.
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart prefix - The prefix container.
 * @csspart label - The menu item label.
 * @csspart suffix - The suffix container.
 */
@customElement('l-menu-item')
export default class LynkMenuItem extends LitElement {
  static styles = styles;

  private cachedTextLabel: string;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.l-menu-item') menuItem: HTMLElement;

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

  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();

    // Ignore the first time the label is set
    if (typeof this.cachedTextLabel === 'undefined') {
      this.cachedTextLabel = textLabel;
      return;
    }

    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      emit(this, 'le-label-change');
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'l-menu-item': true,
          'l-menu-item--checked': this.checked,
          'l-menu-item--disabled': this.disabled,
          'l-menu-item--has-submenu': false // reserved for future use
        })}
      >
        <span class="l-menu-item__check">
          <l-icon name="check-lg" library="system" aria-hidden="true"></l-icon>
        </span>

        <span part="prefix" class="l-menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="l-menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="l-menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="l-menu-item__chevron">
          <l-icon name="chevron-right" library="system" aria-hidden="true"></l-icon>
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-menu-item': LynkMenuItem;
  }
}
