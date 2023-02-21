import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './table-header-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Table Header Groups behave like the native `<thead>` HTML element.
 *
 * @since 1.0
 * @status experimental
 */

@customElement('lynk-thead')
export default class LynkTableHeaderGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

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
