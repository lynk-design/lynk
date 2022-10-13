import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-header-group>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-header-group></lynk-table-header-group> `);

    expect(el).to.exist;
  });
});
