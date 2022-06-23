import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-grid>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-grid></lynk-grid> `);

    expect(el).to.exist;
  });
});
