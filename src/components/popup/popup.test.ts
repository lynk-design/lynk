import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-popup></lynk-popup> `);

    expect(el).to.exist;
  });
});
