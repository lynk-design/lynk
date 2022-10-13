import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-column>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-column></lynk-table-column> `);

    expect(el).to.exist;
  });
});
