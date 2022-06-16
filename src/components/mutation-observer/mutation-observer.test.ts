import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-mutation-observer></lynk-mutation-observer> `);

    expect(el).to.exist;
  });
});
