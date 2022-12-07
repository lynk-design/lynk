import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './table-column-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-colgroup')
export default class LynkTableColumnGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-colgroup': LynkTableColumnGroup;
  }
}
