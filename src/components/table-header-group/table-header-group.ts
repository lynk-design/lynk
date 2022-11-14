import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './table-header-group.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-thead')
export default class LynkTableHeaderGroup extends LitElement {
  static styles = styles;

  /** Makes the header stick to the top of the table while its overflow is scrolling vertically */
  @property({ type: Boolean, reflect: true }) sticky = false;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-thead': LynkTableHeaderGroup;
  }
}
