import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-page-container>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-page-container></lynk-page-container> `);

    expect(el).to.exist;
  });
});
