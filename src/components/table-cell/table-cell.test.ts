import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-cell>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-cell></lynk-table-cell> `);

    expect(el).to.exist;
  });
});
