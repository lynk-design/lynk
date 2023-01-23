import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import styles from './page-header.styles';
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
@customElement('lynk-page-header')
export default class LynkPageHeader extends LynkElement {
  static styles: CSSResultGroup = styles;

  /**
   * The pages heading as displayed in the header. If you need to display HTML, you can use the `heading` slot
   * instead.
   */
  @property({ reflect: true }) heading = '';

  /** An example attribute. */
  @property() attr = 'example';

  @watch('someProperty')
  doSomething() {
    // Example event
    this.emit('sl-event-name');
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
