import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emit } from '../../internal/event';
import { watch } from '../../internal/watch';
import styles from './grid-item.styles';

/**
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-example
 *
 * @event lynk-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('lynk-grid-item')
export default class LynkGridItem extends LitElement {
  static styles = styles;

  /** The flow direction of grid items */
  @property({ type: Number, reflect: true }) span: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' = null;

  render() {
    return html`
      <div
        part="base"
        class="lynk-grid-item ${this.span ? 'lynk-grid-item--span-' + this.span : ''}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-grid-item': LynkGridItem;
  }
}
