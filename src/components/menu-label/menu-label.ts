import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './menu-label.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('l-menu-label')
export default class LynkMenuLabel extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div part="base" class="l-menu-label">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-menu-label': LynkMenuLabel;
  }
}
