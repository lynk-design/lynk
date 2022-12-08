import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import { customElement, property } from 'lit/decorators.js';
import styles from './table-cell.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-td')
export default class LynkTableCell extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** A visual state for this row of data to indicate */
  @property({reflect: true}) state: 'danger' | 'primary' | 'success' | 'warning';

render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-td': LynkTableCell;
  }
}
