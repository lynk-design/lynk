import '../../components/page-content/page-content';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import LynkPageLayout from '../../components/page-layout/page-layout';
import styles from './page-footer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A Page Footer is used inside a [Page Layout](/components/page-layout) to render a standardized sticky page footer with slots for typical page controls.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-page-layout
 * @dependency lynk-page-content
 *
 * @slot - The default start-aligned slot for primary page actions, Typically where `save` and `cancel` of form based pages should go.
 * @slot center - Typically used for pagination info or other non interactive page metadata.
 * @slot secondary - The end-aligned slot for secondary page actions. Typically where `delete` or other secondary destructive actions should go..
 *
 * @csspart base - The component's base wrapper.
 * @csspart primary - The component's primary slot area.
 * @csspart center - The component's center slot area.
 * @csspart secondary - The component's secondary slot area.
 */
@customElement('lynk-page-footer')
export default class LynkPageFooter extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** Set an optional maximum width for page header  */
  @property({ reflect: true }) width: 'auto' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large' | 'fluid' =
    'fluid';

  connectedCallback() {
    super.connectedCallback();

    if (!this.slot && this.hasParentLayout()) {
      this.slot = 'footer';
    }
  }

  // Checks whether the heading is nested into a lynk-page-layout
  private hasParentLayout(): boolean {
    const parent = this.parentElement;
    return parent instanceof LynkPageLayout;
  }

  render() {
    return html`
      <lynk-page-content
        width="${this.width}"
        style="--padding-top: 0; --padding-bottom: 0;"
      >
        <footer
          part="base"
          class=${classMap({
            'lynk-page-footer': true
          })}
        >
          <slot part="primary" class="lynk-page-footer__primary"></slot>
          <slot part="center" name="center" class="lynk-page-footer__center"></slot>
          <slot part="secondary" name="secondary" class="lynk-page-footer__secondary"></slot>
        </footer>
      </lynk-page-layout>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-footer': LynkPageFooter;
  }
}
