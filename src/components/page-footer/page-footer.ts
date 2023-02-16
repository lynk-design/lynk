import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import LynkPageLayout from '../../components/page-layout/page-layout';
import styles from './page-footer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 *
 * @since 2.0
 * @status experimental
 *
 * @dependency lynk-page-layout
 *
 * @event on:event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('lynk-page-footer')
export default class LynkPageFooter extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  connectedCallback() {
    super.connectedCallback();

    if (!this.slot && this.hasParentLayout()) {
      this.slot = 'footer';
    }
  }

  // Checks whether the footer is nested into a page-layout element
  private hasParentLayout(): boolean {
    const parent = this.parentElement;
    return parent instanceof LynkPageLayout;
  }

  render() {
    return html`
        <div
          part="base"
          class=${classMap({
            'lynk-page-footer': true
          })}
        >
            <slot class="lynk-page-footer__primary"></slot>
            <slot name="center" class="lynk-page-footer__center"></slot>
            <slot name="secondary" class="lynk-page-footer__secondary"></slot>
        </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-footer': LynkPageFooter;
  }
}
