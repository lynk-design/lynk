import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './table-row.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-tr')
export default class LynkTableRow extends LitElement {
  static styles = styles;

  /** A visual state for this row of data to indicate */
  @property({reflect: true}) state: 'danger' | 'primary' | 'success' | 'warning';

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tr': LynkTableRow;
  }
}
