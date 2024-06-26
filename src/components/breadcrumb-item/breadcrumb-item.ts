import '../truncate/truncate';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import LynkElement from '../../internal/lynk-element';
import styles from './breadcrumb-item.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.
 * @documentation https://lynk.design/components/breadcrumb-item
 * @status stable
 * @since 1.0
 *
 * @slot - The breadcrumb item's label.
 * @slot prefix - An optional prefix, usually an icon or icon button.
 * @slot suffix - An optional suffix, usually an icon or icon button.
 * @slot separator - The separator to use for the breadcrumb item. This will only change the separator for this item. If
 * you want to change it for all items in the group, set the separator on `<lynk-breadcrumb>` instead.
 *
 * @dependency lynk-truncate
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The breadcrumb item's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart separator - The container that wraps the separator.
 */
@customElement('lynk-breadcrumb-item')
export default class LynkBreadcrumbItem extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'prefix', 'suffix');

  /**
   * Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
   * internally. When unset, a button will be rendered instead.
   */
  @property() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property() target?: '_blank' | '_parent' | '_self' | '_top';

  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  @property() rel = 'noreferrer noopener';

  render() {
    const isLink = this.href ? true : false;

    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-breadcrumb-item': true,
          'lynk-breadcrumb-item--has-prefix': this.hasSlotController.test('prefix'),
          'lynk-breadcrumb-item--has-suffix': this.hasSlotController.test('suffix')
        })}
      >
        <slot name="prefix" part="prefix" class="lynk-breadcrumb-item__prefix"></slot>

        ${isLink
          ? html`
              <a
                part="label"
                class="lynk-breadcrumb-item__label lynk-breadcrumb-item__label--link"
                href="${this.href!}"
                target="${ifDefined(this.target ? this.target : undefined)}"
                rel=${ifDefined(this.target ? this.rel : undefined)}
              >
                <lynk-truncate><slot></slot></lynk-truncate>
              </a>
            `
          : html`
              <button
                part="label"
                type="button"
                class="lynk-breadcrumb-item__label lynk-breadcrumb-item__label--button"
              >
                <lynk-truncate><slot></slot></lynk-truncate>
              </button>
            `}

        <slot name="suffix" part="suffix" class="lynk-breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="lynk-breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-breadcrumb-item': LynkBreadcrumbItem;
  }
}
