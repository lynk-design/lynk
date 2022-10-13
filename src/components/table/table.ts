import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import LynkTableFooterGroup from '../table-footer-group/table-footer-group';
import LynkTableHeaderGroup from '../table-header-group/table-header-group';
import LynkTableRowGroup from '../table-row-group/table-row-group';
import { ILynkTableCol, ILynkTableRow, LynkTableSortDirection, LynkTableSortEvent } from './models';
import styles from './table.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-table')
export default class LynkTable extends LitElement {
  static styles = styles;

  /** An optional caption to display for automatically constructed tables */
  @property() caption: string;

  /** todo */
  @property() cols: ILynkTableCol[] = [];

  /** todo */
  @property() rows: ILynkTableRow[] = [];

  /** Enables slotted children, and disables automatic table element construction */
  @property({ type: Boolean, reflect: true }) custom = false;

  @queryAssignedElements({selector: 'lynk-tfoot', flatten: true})
  assignedFooterGroup: NodeListOf<LynkTableFooterGroup>;

  @queryAssignedElements({selector: 'lynk-thead', flatten: true})
  assignedHeaderGroup: NodeListOf<LynkTableHeaderGroup>;

  @queryAssignedElements({selector: 'lynk-tbody', flatten: true})
  assignedRowGroup: NodeListOf<LynkTableRowGroup>;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(LynkTableSortEvent.TYPE, this.handleSort);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(LynkTableSortEvent.TYPE, this.handleSort);
  }

  handleSort(event: LynkTableSortEvent) {
    let direction: LynkTableSortDirection;
    this.assignedHeaderGroup.forEach(headerGroup => {
      headerGroup.querySelectorAll('lynk-tr').forEach(row => {
        row.querySelectorAll('lynk-th').forEach(header => {
          if(header.key === event.key) {
            switch(header.sort) {
              case LynkTableSortDirection.DESC:
                header.sort = LynkTableSortDirection.ASC;
                break;
              default:
                header.sort = LynkTableSortDirection.DESC;
                break;
            }
            direction = header.sort;
          } else {
            header.sort = LynkTableSortDirection.NONE;
          }
        });
      });
    });
    this.rows.sort((rowA, rowB) => {
      let val1 = rowA[event.key];
      let val2 = rowB[event.key];

      // accounting for null and undefined properties
      if (val1 === null || val1 === undefined) val1 = '';
      if (val2 === null || val2 === undefined) val2 = '';

      if (this.isNumeric(val1) && this.isNumeric(val2)) {
        return (Number(val1) - Number(val2)) * direction;
      }

      let str1 = val1.toString();
      let str2 = val2.toString();

      return str1.localeCompare(str2) * direction;
    });
    this.requestUpdate();
  }

  isNumeric(toCheck: any) {
    return !isNaN(parseFloat(toCheck)) && isFinite(toCheck);
  }

  render() {
    return this.custom ? html` <slot></slot> ` : html`<slot>
      ${this.caption ? html`<lynk-caption>${this.caption}</lynk-caption>` : ``}
      <lynk-colgroup>
        ${repeat(this.cols, col => html`<lynk-col class="${col.key}"></lynk-col>`)}
      </lynk-colgroup>
      <lynk-thead>
        <lynk-tr>
          ${repeat(this.cols, col => html`
            <lynk-th
              key="${col.key}"
            >${col.title}</lynk-th>
          `)}
        </lynk-tr>
      </lynk-thead>
      <lynk-tbody>
        ${repeat(this.rows, row => html`<lynk-tr>
          ${repeat(this.cols, col => html`<lynk-td>${row[col.key]}</lynk-td>`)}
        </lynk-tr>`)}
      </lynk-tbody>
      <lynk-tfoot>
        <lynk-tr>
          ${repeat(this.cols, col => html`<lynk-td>${col.footer}</lynk-td>`)}
        </lynk-tr>
      </lynk-tfoot>
    </slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-table': LynkTable;
  }
}
