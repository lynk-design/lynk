import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table></lynk-table> `);

    expect(el).to.exist;
  });
});
