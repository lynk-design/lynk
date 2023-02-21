import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './table-column.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-col')
export default class LynkTableColumn extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-col': LynkTableColumn;
  }
}
