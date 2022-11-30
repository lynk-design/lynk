import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';
import { LynkTableResizeEvent, LynkTableSortDirection, LynkTableSortEvent } from './models';
import styles from './table.styles';
import type LynkTableColumnGroup from '../table-column-group/table-column-group';
import type LynkTableColumn from '../table-column/table-column';
import type LynkTableHeaderGroup from '../table-header-group/table-header-group';
import type LynkTableRowGroup from '../table-row-group/table-row-group';
import type { ILynkTableCol, ILynkTableRow } from './models';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-table')
export default class LynkTable extends LitElement {
  static styles = styles;

  /**
   * Objects used for mapping column data, headers, and sorting.
   * Required for data-driven tables. 
   * Optional for custom tables, except if you want to use the built-in sorting.
   * Each object is expected to have a "key" corresponding a property in each row object.
   **/
  @property() cols: ILynkTableCol[] = [];

  /** todo */
   @property({ reflect: true }) layout: 'auto' | 'fixed' = 'auto';

   /**
    * Objects used for mapping row data.
    * Required for data-driven tables.
    * Optional for custom tables, except if you want to use the built-in sorting.
    * Each object is expected to have a string property corresponding to a "key" in one of the cols.
    */
  @property() rows: ILynkTableRow[] = [];

  /** Enables slotted children, and disables automatic table element construction */
  @property({ type: Boolean, reflect: true }) custom = false;

  @queryAssignedElements({selector: 'lynk-colgroup', flatten: true})
  assignedColumnGroup: NodeListOf<LynkTableColumnGroup>;
  columns: { [key: string]: LynkTableColumn } = {};

  @queryAssignedElements({selector: 'lynk-thead', flatten: true})
  assignedHeaderGroup: NodeListOf<LynkTableHeaderGroup>;

  @queryAssignedElements({selector: 'lynk-tbody', flatten: true})
  assignedRowGroup: NodeListOf<LynkTableRowGroup>;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(LynkTableSortEvent.TYPE, this.handleSort);
    this.addEventListener(LynkTableResizeEvent.TYPE, this.handleResize);
  }

  updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);
    this.assignedColumnGroup.forEach((columnGroup: LynkTableColumnGroup) => {
      columnGroup.querySelectorAll('lynk-col').forEach((column: LynkTableColumn) => {
        const key = column.getAttribute('key');
        if(key) this.columns[key] = column;
      });
    });
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(LynkTableSortEvent.TYPE, this.handleSort);
    this.removeEventListener(LynkTableResizeEvent.TYPE, this.handleResize);
  }

  handleResize(event: LynkTableResizeEvent) {
    if(this.columns[event.key]) {
      this.columns[event.key].requestWidth(event.requestedWidth);
    }
  }

  handleSort(event: LynkTableSortEvent) {
    let direction: LynkTableSortDirection;
    this.assignedColumnGroup.forEach((columnGroup: LynkTableColumnGroup) => {
      console.log(columnGroup);
      columnGroup.querySelectorAll('lynk-col').forEach((column: LynkTableColumn) => {
        console.log('found column', column);
        const key = column.getAttribute('key');
        if(key) this.columns[key] = column;
      });
    });
    this.assignedHeaderGroup.forEach(headerGroup => {
      headerGroup.querySelectorAll('lynk-tr').forEach(row => {
        row.querySelectorAll('lynk-th').forEach(header => {
          if(header.key === event.key) {
            switch(LynkTableSortDirection[header.sortDirection]) {
              case LynkTableSortDirection[LynkTableSortDirection.DESC]:
                header.sortDirection = LynkTableSortDirection.ASC;
                break;
              case LynkTableSortDirection[LynkTableSortDirection.ASC]:
              case LynkTableSortDirection[LynkTableSortDirection.NONE]:
                header.sortDirection = LynkTableSortDirection.DESC;
                break;
            }
            direction = header.sortDirection;
          } else {
            header.sortDirection = LynkTableSortDirection.NONE;
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

      if (!isNaN(parseFloat(val1)) && !isNaN(parseFloat(val2))) {
        return (Number(val1) - Number(val2)) * direction;
      }

      const str1 = val1.toString();
      const str2 = val2.toString();

      return str1.localeCompare(str2) * direction;
    });
    this.requestUpdate();
  }

  render() {
    if(this.custom) {
      return html`<slot></slot>`;
    }
    return html`
    <slot>
      <lynk-colgroup>
        ${repeat(this.cols, col => html`
          <lynk-col
            class="${col.key}"
            key="${col.key}"
            max-width="${ifDefined(col.maxWidth ? col.maxWidth : undefined)}"
            min-width="${ifDefined(col.minWidth ? col.minWidth : undefined)}"
            width="${ifDefined(col.width ? col.width : undefined)}"
          ></lynk-col>
        `)}
      </lynk-colgroup>
      <lynk-thead>
        <lynk-tr>
          ${repeat(this.cols, col => html`
            <lynk-th
              key="${col.key}"
              ?resize-enabled=${ifDefined(col.resizeEnabled ? col.resizeEnabled : undefined)}
              max-width="${ifDefined(col.maxWidth ? col.maxWidth : undefined)}"
              min-width="${ifDefined(col.minWidth ? col.minWidth : undefined)}"
              sort-direction=${ifDefined(col.sortDirection ? col.sortDirection : undefined)}
              ?sort-enabled=${ifDefined(col.sortEnabled ? col.sortEnabled : undefined)}
              width="${ifDefined(col.width ? col.width : undefined)}"
            >${col.title}</lynk-th>
          `)}
        </lynk-tr>
      </lynk-thead>
      <lynk-tbody>
        ${repeat(this.rows, row => html`
        <lynk-tr>
          ${repeat(this.cols, col => html`<lynk-td>${row[col.key]}</lynk-td>`)}
        </lynk-tr>`)}
      </lynk-tbody>
    </slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-table': LynkTable;
  }
}
