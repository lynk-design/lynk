import { expect, fixture, html } from '@open-wc/testing';
import type LynkRadioButton from './radio-button';
import type LynkRadioGroup from '../radio-group/radio-group';

describe('<lynk-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<LynkRadioGroup>(html`
      <lynk-radio-group value="1">
        <lynk-radio-button id="radio-1" value="1"></lynk-radio-button>
        <lynk-radio-button id="radio-2" value="2" disabled></lynk-radio-button>
      </lynk-radio-group>
    `);
    const radio1 = radioGroup.querySelector<LynkRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<LynkRadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
