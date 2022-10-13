import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-row-group>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-row-group></lynk-table-row-group> `);

    expect(el).to.exist;
  });
});
