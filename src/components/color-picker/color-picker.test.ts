import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkColorPicker from './color-picker';

describe('<lynk-color-picker>', () => {
  it('should emit change and show correct color when the value changes', async () => {
    const el = await fixture<LynkColorPicker>(html` <lynk-color-picker></lynk-color-picker> `);
    const trigger = el.shadowRoot!.querySelector<HTMLElement>('[part="trigger"]')!;
    const changeHandler = sinon.spy();
    const color = 'rgb(255, 204, 0)';

    el.addEventListener('lynk-change', changeHandler);
    el.value = color;

    await waitUntil(() => changeHandler.calledOnce);

    expect(changeHandler).to.have.been.calledOnce;
    expect(trigger.style.color).to.equal(color);
  });

  it('should render in a dropdown', async () => {
    const el = await fixture<LynkColorPicker>(html` <lynk-color-picker></lynk-color-picker> `);
    const dropdown = el.shadowRoot!.querySelector('lynk-dropdown');

    expect(dropdown).to.exist;
  });

  it('should not render in a dropdown when inline is enabled', async () => {
    const el = await fixture<LynkColorPicker>(html` <lynk-color-picker inline></lynk-color-picker> `);
    const dropdown = el.shadowRoot!.querySelector('lynk-dropdown');

    expect(dropdown).to.not.exist;
  });

  it('should show opacity slider when opacity is enabled', async () => {
    const el = await fixture<LynkColorPicker>(html` <lynk-color-picker opacity></lynk-color-picker> `);
    const opacitySlider = el.shadowRoot!.querySelector('[part*="opacity-slider"]')!;

    expect(opacitySlider).to.exist;
  });

  it('should display a color when an initial value is provided', async () => {
    const el = await fixture<LynkColorPicker>(html` <lynk-color-picker value="#000"></lynk-color-picker> `);
    const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part="trigger"]');

    expect(trigger?.style.color).to.equal('rgb(0, 0, 0)');
  });
});
