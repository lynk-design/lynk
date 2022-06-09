import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SlColorPicker from './color-picker';

describe('<l-color-picker>', () => {
  it('should emit change and show correct color when the value changes', async () => {
    const el = await fixture<SlColorPicker>(html` <l-color-picker></l-color-picker> `);
    const trigger = el.shadowRoot!.querySelector<HTMLElement>('[part="trigger"]')!;
    const changeHandler = sinon.spy();
    const color = 'rgb(255, 204, 0)';

    el.addEventListener('l-change', changeHandler);
    el.value = color;

    await waitUntil(() => changeHandler.calledOnce);

    expect(changeHandler).to.have.been.calledOnce;
    expect(trigger.style.color).to.equal(color);
  });

  it('should render in a dropdown', async () => {
    const el = await fixture<SlColorPicker>(html` <l-color-picker></l-color-picker> `);
    const dropdown = el.shadowRoot!.querySelector('l-dropdown');

    expect(dropdown).to.exist;
  });

  it('should not render in a dropdown when inline is enabled', async () => {
    const el = await fixture<SlColorPicker>(html` <l-color-picker inline></l-color-picker> `);
    const dropdown = el.shadowRoot!.querySelector('l-dropdown');

    expect(dropdown).to.not.exist;
  });

  it('should show opacity slider when opacity is enabled', async () => {
    const el = await fixture<SlColorPicker>(html` <l-color-picker opacity></l-color-picker> `);
    const opacitySlider = el.shadowRoot!.querySelector('[part*="opacity-slider"]')!;

    expect(opacitySlider).to.exist;
  });

  it('should display a color when an initial value is provided', async () => {
    const el = await fixture<SlColorPicker>(html` <l-color-picker value="#000"></l-color-picker> `);
    const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('[part="trigger"]');

    expect(trigger?.style.color).to.equal('rgb(0, 0, 0)');
  });
});
