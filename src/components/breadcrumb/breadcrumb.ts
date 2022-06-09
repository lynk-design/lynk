import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '../../components/icon/icon';
import styles from './breadcrumb.styles';
import type SlBreadcrumbItem from '../../components/breadcrumb-item/breadcrumb-item';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items.
 *
 * @dependency l-icon
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('l-breadcrumb')
export default class SlBreadcrumb extends LitElement {
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
      item => item.tagName.toLowerCase() === 'l-breadcrumb-item'
    ) as SlBreadcrumbItem[];

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
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <l-icon name="chevron-right" library="system"></l-icon>
      </slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-breadcrumb': SlBreadcrumb;
  }
}
