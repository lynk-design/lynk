import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-page-header>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-page-header></lynk-page-header> `);

    expect(el).to.exist;
  });
});
