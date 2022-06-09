import { expect, fixture, html } from '@open-wc/testing';

describe('<l-animated-image>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <l-animated-image></l-animated-image> `);

    expect(el).to.exist;
  });
});
