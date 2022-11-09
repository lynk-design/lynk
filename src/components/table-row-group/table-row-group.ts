import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './table-row-group.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-tbody')
export default class LynkTableRowGroup extends LitElement {
  static styles = styles;

  /** Disables the background colors applied to rows in their default state. 
   * This attribute is required to apply a background with a lynk-col element. */
  @property({ type: Boolean, reflect: true }) transparent = false;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tbody': LynkTableRowGroup;
  }
}
