import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-page-layout>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-page-layout></lynk-page-layout> `);

    expect(el).to.exist;
  });
});
