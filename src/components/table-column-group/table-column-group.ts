import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './table-column-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Column Groups specify a group of one or more [columns](/components/table-column) in a `<lynk-table>` for formatting.
 * 
 * @since 1.0
 * @status experimental
 * 
 * @slot - Should contain 1 or more `<lynk-col>` components.
 * 
 * @csspart base - The component's internal wrapper.
 */

@customElement('lynk-colgroup')
export default class LynkTableColumnGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot part="base" class="lynk-colgroup"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-colgroup': LynkTableColumnGroup;
  }
}
