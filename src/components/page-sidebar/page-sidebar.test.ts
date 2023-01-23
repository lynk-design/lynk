import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-page-sidebar>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-page-sidebar></lynk-page-sidebar> `);

    expect(el).to.exist;
  });
});
