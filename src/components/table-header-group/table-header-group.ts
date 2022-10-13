import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './table-header-group.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-thead')
export default class LynkTableHeaderGroup extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-thead': LynkTableHeaderGroup;
  }
}
