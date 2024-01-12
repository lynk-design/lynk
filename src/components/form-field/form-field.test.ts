import { expect, fixture, html } from '@open-wc/testing';
import type LynkFormField from './form-field';

describe('<lynk-form-field>', () => {
  it('should render a component', async () => {
    const el = await fixture<LynkFormField>(html` <lynk-form-field></lynk-form-field> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    const el = await fixture<LynkFormField>(html` <lynk-input label="Name"></lynk-input> `);
    await expect(el).to.be.accessible();
  });
});
