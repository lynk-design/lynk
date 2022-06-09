import { expect, fixture, html } from '@open-wc/testing';

describe('<l-split-panel>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <l-split-panel></l-split-panel> `);

    expect(el).to.exist;
  });
});
