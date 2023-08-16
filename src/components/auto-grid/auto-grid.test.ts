import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-auto-grid>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-auto-grid></lynk-auto-grid> `);

    expect(el).to.exist;
  });
});
