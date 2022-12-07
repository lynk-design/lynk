import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './table-row.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-tr')
export default class LynkTableRow extends LynkElement {
  static styles: CSSResultGroup = styles;

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
