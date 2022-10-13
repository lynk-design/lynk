import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './table-caption.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-caption')
export default class LynkTableCaption extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-caption': LynkTableCaption;
  }
}
