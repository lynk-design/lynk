import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-split-panel>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-split-panel></lynk-split-panel> `);

    expect(el).to.exist;
  });
});
