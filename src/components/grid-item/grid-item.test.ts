import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-grid-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-grid-item></lynk-grid-item> `);

    expect(el).to.exist;
  });
});
