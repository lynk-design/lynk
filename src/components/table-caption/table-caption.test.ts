import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-caption>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-caption></lynk-table-caption> `);

    expect(el).to.exist;
  });
});
