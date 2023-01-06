import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import LynkElement from '../../internal/lynk-element';
import { getTextContent } from '../../internal/slot';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import '../icon/icon';
import styles from './nav-item.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Nav items allow the user to navigate or trigger actions from within a navigation menu.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-icon
 *
 * @event on:click - Emitted when a nav item is clicked
 * @event on:label-change - Emitted when the nav item's text label changes. For performance reasons, this event is only emitted if the default slot's `slotchange` event is triggered. It will not fire when the label is first set.
 *
 * @slot - The nav item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart prefix - The prefix container.
 * @csspart label - The menu item label.
 * @csspart suffix - The suffix container.
 *
 */
@customElement('lynk-nav-item')
export default class LynkNavItem extends LynkElement {
  static styles: CSSResultGroup = styles;

  private cachedTextLabel: string;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.lynk-nav-item') navItem: HTMLElement;

  private readonly localize = new LocalizeController(this);

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property()
  public value = '';

  @property({ type: Boolean, reflect: true })
  public selected = false;

  @property({ type: Boolean, reflect: true })
  public expanded = false;

  /** Draws the menu item in a disabled state. */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  protected get hasChildren(): boolean {
    return !!this.querySelector('lynk-nav-item');
  }

  protected get depth(): number {
      let depth = 0;
      let element = this.parentElement;
      while (element instanceof LynkNavItem) {
          depth++;
          element = element.parentElement;
      }
      return depth;
  }

  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }



  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  protected handleClick(event?: Event): void {
      if (!this.href && event) {
          event.preventDefault();
          event.stopPropagation();
      }
      if (!this.disabled) {
          if (this.hasChildren) {
              this.expanded = !this.expanded;
          }

          this.emit('on:click');
      }
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
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <a
        class=${classMap({
          'lynk-nav-item': true,
          'lynk-nav-item--disabled': this.disabled,
          'lynk-nav-item--selected': this.selected,
          'lynk-nav-item--has-children': this.hasChildren,
          'lynk-nav-item--expanded': this.expanded,
          'lynk-nav-item--rtl': isRtl,
        })}
        href=${this.href || '#'}
        @click=${this.handleClick}
        target=${ifDefined(this.target)}
        download=${ifDefined(this.download)}
        rel=${ifDefined(this.rel)}
        data-level=${this.depth}
        aria-current=${ifDefined(
          this.selected && this.href ? 'page' : undefined
        )}
      >
        <slot name="prefix" part="prefix" class="lynk-nav-item__prefix"></slot>
        <slot part="label" class="lynk-nav-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="lynk-menu-item__suffix"></slot>

        ${this.hasChildren
          ? html`
            <span class="lynk-nav-item__chevron">
              <lynk-icon library="system" aria-hidden="true" name=${isRtl ? 'chevron-left' : 'chevron-right'}></lynk-icon>
            </span>
        ` : ''}

      </a>
      ${this.expanded
        ? html`
          <slot name="children"></slot>
        ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-nav-item': LynkNavItem;
  }
}
