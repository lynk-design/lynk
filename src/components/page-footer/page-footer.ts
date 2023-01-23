import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import styles from './page-footer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 *
 * @since 2.0
 * @status experimental
 *
 * @dependency lynk-example
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

  /** An example attribute. */
  @property() attr = 'example';

  @watch('someProperty')
  doSomething() {
    // Example event
    this.emit('on:event-name');
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
