import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-table-row>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-table-row></lynk-table-row> `);

    expect(el).to.exist;
  });
});
