import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '../../components/icon/icon';
import styles from './breadcrumb.styles';
import type LynkBreadcrumbItem from '../../components/breadcrumb-item/breadcrumb-item';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items.
 *
 * @dependency lynk-icon
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('lynk-breadcrumb')
export default class LynkBreadcrumb extends LitElement {
  static styles = styles;

  @query('slot') defaultSlot: HTMLSlotElement;
  @query('slot[name="separator"]') separatorSlot: HTMLSlotElement;

  /**
   * The label to use for the breadcrumb control. This will not be shown, but it will be announced by screen readers and
   * other assistive devices.
   */
  @property() label = 'Breadcrumb';

  // Generates a clone of the separator element to use for each breadcrumb item
  private getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0] as HTMLElement;

    // Clone it, remove ids, and slot it
    const clone = separator.cloneNode(true) as HTMLElement;
    [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
    clone.slot = 'separator';

    return clone;
  }

  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      item => item.tagName.toLowerCase() === 'lynk-breadcrumb-item'
    ) as LynkBreadcrumbItem[];

    items.forEach((item, index) => {
      // Append separators to each item if they don't already have one
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      }

      // The last breadcrumb item is the "current page"
      if (index === items.length - 1) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  render() {
    return html`
      <nav part="base" class="lynk-breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <lynk-icon name="chevron-right" library="system"></lynk-icon>
      </slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-breadcrumb': LynkBreadcrumb;
  }
}
