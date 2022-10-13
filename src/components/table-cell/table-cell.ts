import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './table-cell.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-td')
export default class LynkTableCell extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-td': LynkTableCell;
  }
}
