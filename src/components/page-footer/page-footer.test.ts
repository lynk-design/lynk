import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-page-footer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-page-footer></lynk-page-footer> `);

    expect(el).to.exist;
  });
});
