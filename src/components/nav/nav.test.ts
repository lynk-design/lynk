import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-nav>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-nav></lynk-nav> `);

    expect(el).to.exist;
  });
});
