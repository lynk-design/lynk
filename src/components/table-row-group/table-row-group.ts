import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './table-row-group.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-tbody')
export default class LynkTableRowGroup extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tbody': LynkTableRowGroup;
  }
}
