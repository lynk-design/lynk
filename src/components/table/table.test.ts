import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { LynkTableSortDirection, LynkTableSortEvent } from './models';
import type { ILynkTableCol} from './models';
import type LynkTable from './table';

describe('<lynk-table>', () => {
  let cols: ILynkTableCol[];
  let rows: object[];

  beforeEach(() => {
    cols = [
      {
        key: 'keyA',
        title: 'titleA',
      },
      {
        key: 'keyB',
        title: 'titleB',
      },
    ];

    rows = [
      {
        keyA: 'a1',
        keyB: 'b1',
      },
      {
        keyA: 'a2',
        keyB: 'b2',
      },
    ];
  });

  it('should render a component using slotted elements', async () => {
    const el = await fixture<LynkTable>(html`
      <lynk-table
        custom
        .cols=${cols}
        .rows=${rows}
      >
        <lynk-thead>
          <lynk-tr>
            <lynk-th>Title</lynk-th>
          </lynk-tr>
        </lynk-thead>
        <lynk-tbody>
          <lynk-tr>
            <lynk-td>Value</lynk-td>
          </lynk-tr>
        </lynk-tbody>
      </lynk-table>
    `);
    expect(el).dom.to.equal(`
      <lynk-table custom>
        <lynk-thead>
          <lynk-tr>
            <lynk-th sort-direction="0">Title</lynk-th>
          </lynk-tr>
        </lynk-thead>
        <lynk-tbody>
          <lynk-tr>
            <lynk-td>Value</lynk-td>
          </lynk-tr>
        </lynk-tbody>
      </lynk-table>
    `);
  });

  it('should render a component using data', async () => {
    const el = await fixture<LynkTable>(html`
      <lynk-table
        .cols=${cols}
        .rows=${rows}
      ></lynk-table>
    `);
    expect(el).shadowDom.to.equal(`
      <slot>
        <lynk-colgroup>
          <lynk-col class="${cols[0].key}"></lynk-col>
          <lynk-col class="${cols[1].key}"></lynk-col>
        </lynk-colgroup>
        <lynk-thead>
          <lynk-tr>
            <lynk-th key="${cols[0].key}" sort-direction="0">${cols[0].title}</lynk-th>
            <lynk-th key="${cols[1].key}" sort-direction="0">${cols[1].title}</lynk-th>
          </lynk-tr>
        </lynk-thead>
        <lynk-tbody>
          <lynk-tr>
            <lynk-td>a1</lynk-td>
            <lynk-td>b1</lynk-td>
          </lynk-tr>
          <lynk-tr>
            <lynk-td>a2</lynk-td>
            <lynk-td>b2</lynk-td>
          </lynk-tr>
        </lynk-tbody>
      </slot>
    `);
  });

  describe('should toggle header sort directions', () => {
    it('change same sorting column from descending to ascending', async () => {
      cols[0].sortDirection = LynkTableSortDirection.DESC;
      cols[1].sortDirection = LynkTableSortDirection.NONE;
      cols[0].sortable = true;
      cols[1].sortable = true;

      const el = await fixture<LynkTable>(html`
        <lynk-table
          .cols=${cols}
          .rows=${rows}
        ></lynk-table>
      `);

      const event = new LynkTableSortEvent();
      event.key = cols[0].key;
      el.handleSort(event);
      await elementUpdated(el);
      
      expect(el).shadowDom.to.equal(`
        <slot>
          <lynk-colgroup>
            <lynk-col class="${cols[0].key}"></lynk-col>
            <lynk-col class="${cols[1].key}"></lynk-col>
          </lynk-colgroup>
          <lynk-thead>
            <lynk-tr>
              <lynk-th
                key="${cols[0].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.ASC}"
              >${cols[0].title}</lynk-th>
              <lynk-th
                key="${cols[1].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.NONE}"
              >${cols[1].title}</lynk-th>
            </lynk-tr>
          </lynk-thead>
          <lynk-tbody>
            <lynk-tr>
              <lynk-td>a2</lynk-td>
              <lynk-td>b2</lynk-td>
            </lynk-tr>
            <lynk-tr>
              <lynk-td>a1</lynk-td>
              <lynk-td>b1</lynk-td>
            </lynk-tr>
          </lynk-tbody>
        </slot>
      `);
    });

    it('change same sorting column from ascending to descending', async () => {
      cols[0].sortDirection = LynkTableSortDirection.ASC;
      cols[1].sortDirection = LynkTableSortDirection.NONE;
      cols[0].sortable = true;
      cols[1].sortable = true;
      rows.reverse();

      const el = await fixture<LynkTable>(html`
        <lynk-table
          .cols=${cols}
          .rows=${rows}
        ></lynk-table>
      `);

      const event = new LynkTableSortEvent();
      event.key = cols[0].key;
      el.handleSort(event);
      await elementUpdated(el);
      
      expect(el).shadowDom.to.equal(`
        <slot>
          <lynk-colgroup>
            <lynk-col class="${cols[0].key}"></lynk-col>
            <lynk-col class="${cols[1].key}"></lynk-col>
          </lynk-colgroup>
          <lynk-thead>
            <lynk-tr>
              <lynk-th
                key="${cols[0].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.DESC}"
              >${cols[0].title}</lynk-th>
              <lynk-th
                key="${cols[1].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.NONE}"
              >${cols[1].title}</lynk-th>
            </lynk-tr>
          </lynk-thead>
          <lynk-tbody>
            <lynk-tr>
              <lynk-td>a1</lynk-td>
              <lynk-td>b1</lynk-td>
            </lynk-tr>
            <lynk-tr>
              <lynk-td>a2</lynk-td>
              <lynk-td>b2</lynk-td>
            </lynk-tr>
          </lynk-tbody>
        </slot>
      `);
    });

    it('reset previous sorting columns and set requested column to to descending', async () => {
      cols[0].sortDirection = LynkTableSortDirection.ASC;
      cols[1].sortDirection = LynkTableSortDirection.NONE;
      cols[0].sortable = true;
      cols[1].sortable = true;
      rows.reverse();

      const el = await fixture<LynkTable>(html`
        <lynk-table
          .cols=${cols}
          .rows=${rows}
        ></lynk-table>
      `);

      const event = new LynkTableSortEvent();
      event.key = cols[1].key;
      el.handleSort(event);
      await elementUpdated(el);
      
      expect(el).shadowDom.to.equal(`
        <slot>
          <lynk-colgroup>
            <lynk-col class="${cols[0].key}"></lynk-col>
            <lynk-col class="${cols[1].key}"></lynk-col>
          </lynk-colgroup>
          <lynk-thead>
            <lynk-tr>
              <lynk-th
                key="${cols[0].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.NONE}"
              >${cols[0].title}</lynk-th>
              <lynk-th
                key="${cols[1].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.DESC}"
              >${cols[1].title}</lynk-th>
            </lynk-tr>
          </lynk-thead>
          <lynk-tbody>
            <lynk-tr>
              <lynk-td>a1</lynk-td>
              <lynk-td>b1</lynk-td>
            </lynk-tr>
            <lynk-tr>
              <lynk-td>a2</lynk-td>
              <lynk-td>b2</lynk-td>
            </lynk-tr>
          </lynk-tbody>
        </slot>
      `);
    });

    it('be able to sort strings with an undefined right value', async () => {
      cols[0].sortDirection = LynkTableSortDirection.NONE;
      cols[1].sortDirection = LynkTableSortDirection.ASC;
      cols[0].sortable = true;
      cols[1].sortable = true;
      rows[0] = { keyA: 'a1' };

      const el = await fixture<LynkTable>(html`
        <lynk-table
          .cols=${cols}
          .rows=${rows}
        ></lynk-table>
      `);

      const event = new LynkTableSortEvent();
      event.key = cols[1].key;
      el.handleSort(event);
      await elementUpdated(el);
      
      expect(el).shadowDom.to.equal(`
        <slot>
          <lynk-colgroup>
            <lynk-col class="${cols[0].key}"></lynk-col>
            <lynk-col class="${cols[1].key}"></lynk-col>
          </lynk-colgroup>
          <lynk-thead>
            <lynk-tr>
              <lynk-th
                key="${cols[0].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.NONE}"
              >${cols[0].title}</lynk-th>
              <lynk-th
                key="${cols[1].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.DESC}"
              >${cols[1].title}</lynk-th>
            </lynk-tr>
          </lynk-thead>
          <lynk-tbody>
            <lynk-tr>
              <lynk-td>a1</lynk-td>
              <lynk-td></lynk-td>
            </lynk-tr>
            <lynk-tr>
              <lynk-td>a2</lynk-td>
              <lynk-td>b2</lynk-td>
            </lynk-tr>
          </lynk-tbody>
        </slot>
      `);
    });

    it('be able to sort strings with an undefined left value', async () => {
      cols[0].sortDirection = LynkTableSortDirection.NONE;
      cols[1].sortDirection = LynkTableSortDirection.ASC;
      cols[0].sortable = true;
      cols[1].sortable = true;
      rows[1] = { keyA: 'a2' };

      const el = await fixture<LynkTable>(html`
        <lynk-table
          .cols=${cols}
          .rows=${rows}
        ></lynk-table>
      `);

      const event = new LynkTableSortEvent();
      event.key = cols[1].key;
      el.handleSort(event);
      await elementUpdated(el);
      
      expect(el).shadowDom.to.equal(`
        <slot>
          <lynk-colgroup>
            <lynk-col class="${cols[0].key}"></lynk-col>
            <lynk-col class="${cols[1].key}"></lynk-col>
          </lynk-colgroup>
          <lynk-thead>
            <lynk-tr>
              <lynk-th
                key="${cols[0].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.NONE}"
              >${cols[0].title}</lynk-th>
              <lynk-th
                key="${cols[1].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.DESC}"
              >${cols[1].title}</lynk-th>
            </lynk-tr>
          </lynk-thead>
          <lynk-tbody>
            <lynk-tr>
              <lynk-td>a2</lynk-td>
              <lynk-td></lynk-td>
            </lynk-tr>
            <lynk-tr>
              <lynk-td>a1</lynk-td>
              <lynk-td>b1</lynk-td>
            </lynk-tr>
          </lynk-tbody>
        </slot>
      `);
    });

    it('be able to sort numbers', async () => {
      cols[0].sortDirection = LynkTableSortDirection.DESC;
      cols[1].sortDirection = LynkTableSortDirection.NONE;
      cols[0].sortable = true;
      cols[1].sortable = true;
      rows[0] = { keyA: 1 };
      rows[1] = { keyA: 2 };

      const el = await fixture<LynkTable>(html`
        <lynk-table
          .cols=${cols}
          .rows=${rows}
        ></lynk-table>
      `);

      const event = new LynkTableSortEvent();
      event.key = cols[0].key;
      el.handleSort(event);
      await elementUpdated(el);
      
      expect(el).shadowDom.to.equal(`
        <slot>
          <lynk-colgroup>
            <lynk-col class="${cols[0].key}"></lynk-col>
            <lynk-col class="${cols[1].key}"></lynk-col>
          </lynk-colgroup>
          <lynk-thead>
            <lynk-tr>
              <lynk-th
                key="${cols[0].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.ASC}"
              >${cols[0].title}</lynk-th>
              <lynk-th
                key="${cols[1].key}"
                sortable=""
                sort-direction="${LynkTableSortDirection.NONE}"
              >${cols[1].title}</lynk-th>
            </lynk-tr>
          </lynk-thead>
          <lynk-tbody>
            <lynk-tr>
              <lynk-td>2</lynk-td>
              <lynk-td></lynk-td>
            </lynk-tr>
            <lynk-tr>
              <lynk-td>1</lynk-td>
              <lynk-td></lynk-td>
            </lynk-tr>
          </lynk-tbody>
        </slot>
      `);
    });
  });
});
