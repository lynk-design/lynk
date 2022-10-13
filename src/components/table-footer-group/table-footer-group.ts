import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './table-footer-group.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-tfoot')
export default class LynkTableFooterGroup extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tfoot': LynkTableFooterGroup;
  }
}
