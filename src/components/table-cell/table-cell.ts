import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './table-cell.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A standard data cell in a `<lynk-table>` component. Indended to behave like a native `<td>` HTML element.
 *
 * @since 1.0
 * @status experimental
 *
 * @slot - The contents of the table cell.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('lynk-td')
export default class LynkTableCell extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** A visual state for this row of data to indicate */
  @property({ reflect: true }) state: 'danger' | 'primary' | 'success' | 'warning' | 'neutral' | 'custom';

  /** Animates the state background in a barberpole style loop */
  @property({ type: Boolean, reflect: true }) barberpole = false;

  render() {
    return html` <slot part="base" class="lynk-td"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-td': LynkTableCell;
  }
}
