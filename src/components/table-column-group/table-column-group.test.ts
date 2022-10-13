import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-column-group>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-column-group></lynk-table-column-group> `);

    expect(el).to.exist;
  });
});
