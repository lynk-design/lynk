import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-box>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-box></lynk-box> `);

    expect(el).to.exist;
  });
});
