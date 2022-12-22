import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './table-row.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Table rows are used inside manually constructed [tables](/components/tables) as child elements of [table row groups](/components/table-row-group) or [table head groups](/components/table-head-group) and are intended to behave like native `<tr>` HTML elements.
 * 
 * @since 1.0
 * @status experimental
 * 
 * @event on:click - Emitted when table row is clicked.
  *
 * @slot - Should contain 1 or more `<lynk-td>` or `<lynk-th>` components.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('lynk-tr')
export default class LynkTableRow extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** Draws teh table row using status colors */
  @property({reflect: true}) state: 'primary' | 'danger' | 'success' | 'warning' | 'neutral' | 'custom';

  /** Highlight the table row on hover */
  @property({ type: Boolean, reflect: true }) hover = false;

  /** Pulse the status colors for increased visibility */
  @property({ type: Boolean, reflect: true }) pulse = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListeners();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
  }

  private addEventListeners() {
    this.addEventListener('click', () => this.handleClick());
  }

  private removeEventListeners() {
    this.removeEventListener('click', () => this.handleClick());
  }

  handleClick() {
    this.emit('on:click');
  }

  render() {
    return html` <slot part="base" class="lynk-tr"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tr': LynkTableRow;
  }
}
