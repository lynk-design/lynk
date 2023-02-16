import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import LynkPageLayout from '../../components/page-layout/page-layout';
import styles from './page-header.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A standardized page header componenent.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-page-layout
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('lynk-page-header')
export default class LynkPageHeader extends LynkElement {
  static styles: CSSResultGroup = styles;

  /**
   * The pages heading as displayed in the header. If you need to display HTML, you can use the `heading` slot
   * instead.
   */
  @property({ reflect: true }) heading = '';

  connectedCallback() {
    super.connectedCallback();

    if (!this.slot && this.hasParentLayout()) {
      this.slot = 'header';
    }
  }

  // Checks whether the item is nested into an item
  private hasParentLayout(): boolean {
    const parent = this.parentElement;
    return parent instanceof LynkPageLayout;
  }

  render() {
    return html`
        <header
          part="base"
          class=${classMap({
            'lynk-page-header': true
          })}
        >
            <slot name="breadcrumb" class="lynk-page-header__breadcrumb"></slot>
            <slot name="actions" class="lynk-page-header__actions"></slot>
            <slot name="aux" class="lynk-page-header__aux-actions"></slot>
            <slot class="lynk-page-header__details"></slot>
            <slot name="tabs" class="lynk-page-header__tabs"></slot>
        </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-header': LynkPageHeader;
  }
}
