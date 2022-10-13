import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-footer-group>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-footer-group></lynk-table-footer-group> `);

    expect(el).to.exist;
  });
});
