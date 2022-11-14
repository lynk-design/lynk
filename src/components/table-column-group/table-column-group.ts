import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './table-column-group.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-colgroup')
export default class LynkTableColumnGroup extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-colgroup': LynkTableColumnGroup;
  }
}
