import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-stack>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-stack></lynk-stack> `);

    expect(el).to.exist;
  });
});
