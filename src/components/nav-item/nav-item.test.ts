import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-nav-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-nav-item></lynk-nav-item> `);

    expect(el).to.exist;
  });
});
