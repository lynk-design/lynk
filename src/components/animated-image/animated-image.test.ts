import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-animated-image>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-animated-image></lynk-animated-image> `);

    expect(el).to.exist;
  });
});
