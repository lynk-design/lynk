import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './table-column.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-col')
export default class LynkTableColumn extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-col': LynkTableColumn;
  }
}
