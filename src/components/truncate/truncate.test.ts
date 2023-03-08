import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-truncate>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-truncate></lynk-truncate> `);

    expect(el).to.exist;
  });
});
