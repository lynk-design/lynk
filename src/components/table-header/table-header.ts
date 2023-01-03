import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import { LynkTableSortEvent, LynkTableSortDirection } from '../table/models';
import styles from './table-header.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Defines a header cell in a table.
 * 
 * @since 1.0
 * @status experimental
 *
 * @slot - The table column header label
 * 
 * @event lynk-table-event-sort - Emitted when a sortable table header is clicked on.
 */
@customElement('lynk-th')
export default class LynkTableHeader extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** The column key associated with this table header */
  @property() key: string;

  /** The sorting direction currently applied to the rows with the corresponding column key */
  @property({ attribute: 'sort-direction', reflect: true}) sortDirection = LynkTableSortDirection.NONE;

  /** Toggles sort events and the display of sorting related icons with the corresponding column key */
  @property({ attribute: 'sortable', type: Boolean, reflect: true }) sortable = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    if(this.sortable) {
      const event = new LynkTableSortEvent();
      event.key = this.key;
      this.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <slot part="base" class="lynk-th__label"></slot>
      ${this.sortable
      ? html`<lynk-icon
        library="system"
        name="${this.sortDirection === LynkTableSortDirection.ASC ? 'arrow-up-short' : this.sortDirection === LynkTableSortDirection.DESC ? 'arrow-down-short' : 'arrow-up-down-short'}"
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
