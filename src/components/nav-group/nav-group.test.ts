import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-nav-group>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-nav-group></lynk-nav-group> `);

    expect(el).to.exist;
  });
});
