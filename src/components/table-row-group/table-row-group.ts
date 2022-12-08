import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './table-row-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-tbody')
export default class LynkTableRowGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tbody': LynkTableRowGroup;
  }
}
