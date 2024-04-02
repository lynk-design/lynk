import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-dot-loader>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-dot-loader></lynk-dot-loader> `);

    expect(el).to.exist;
  });
});
