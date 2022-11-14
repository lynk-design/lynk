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
  @property({ attribute: 'sort-direction', reflect: true}) sortDirection = LynkTableSortDirection.NONE;

  /** Toggles sort events and the display of sorting related icons with the corresponding column key */
  @property({ attribute: 'sort-enabled', type: Boolean, reflect: true }) sortEnabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    if(this.sortEnabled) {
      const event = new LynkTableSortEvent();
      event.key = this.key;
      this.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <slot></slot>
      ${this.sortEnabled
      ? html`<lynk-icon
        name="${this.sortDirection === LynkTableSortDirection.ASC ? 'sort-up' : this.sortDirection === LynkTableSortDirection.DESC ? 'sort-down' : ''}"
      ></lynk-icon>`
      : ``}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-th': LynkTableHeader;
  }
}
