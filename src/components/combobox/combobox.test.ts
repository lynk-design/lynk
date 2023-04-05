import { expect, fixture, html } from '@open-wc/testing';

describe('<lynk-combobox>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <lynk-combobox></lynk-combobox> `);

    expect(el).to.exist;
  });
});
