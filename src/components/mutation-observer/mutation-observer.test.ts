import { expect, fixture, html } from '@open-wc/testing';

describe('<l-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <l-mutation-observer></l-mutation-observer> `);

    expect(el).to.exist;
  });
});
