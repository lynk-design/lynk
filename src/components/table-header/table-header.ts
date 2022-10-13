import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LynkTableSortEvent, LynkTableSortDirection } from '../table/models';
import styles from './table-header.styles';

/**
 * @since 1.0
 * @status experimental
 *
 * @event lynk-table-event-sort - Emitted when a sortable table header is clicked on.
 */
@customElement('lynk-th')
export default class LynkTableHeader extends LitElement {
  static styles = styles;

  /** The column key associated with this table header */
  @property() key: string;

  /** The sorting direction currently applied to the rows with the corresponding column key */
  @property({reflect: true}) sort = LynkTableSortDirection.NONE;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    const event = new LynkTableSortEvent(this.key);
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <lynk-button
        block
        color="neutral"
        stealth
      >
        ${this.sort === LynkTableSortDirection.ASC || this.sort === LynkTableSortDirection.DESC
        ? html`<lynk-icon
          name="${this.sort === LynkTableSortDirection.ASC ? 'sort-up' : this.sort === LynkTableSortDirection.DESC ? 'sort-down' : ''}"
          slot="suffix"
        ></lynk-icon>`
        : ``}
        <slot></slot>
      </lynk-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-th': LynkTableHeader;
  }
}
