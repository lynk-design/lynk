import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-header>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-header></lynk-table-header> `);

    expect(el).to.exist;
  });
});
