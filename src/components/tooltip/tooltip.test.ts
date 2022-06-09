import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SlTooltip from './tooltip';

describe('<l-tooltip>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlTooltip>(html`
      <l-tooltip content="This is a tooltip" open>
        <l-button>Hover Me</l-button>
      </l-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlTooltip>(html`
      <l-tooltip content="This is a tooltip">
        <l-button>Hover Me</l-button>
      </l-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit l-show and l-after-show when calling show()', async () => {
    const el = await fixture<SlTooltip>(html`
      <l-tooltip content="This is a tooltip">
        <l-button>Hover Me</l-button>
      </l-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('l-show', showHandler);
    el.addEventListener('l-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit l-hide and l-after-hide when calling hide()', async () => {
    const el = await fixture<SlTooltip>(html`
      <l-tooltip content="This is a tooltip" open>
        <l-button>Hover Me</l-button>
      </l-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('l-hide', hideHandler);
    el.addEventListener('l-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit l-show and l-after-show when setting open = true', async () => {
    const el = await fixture<SlTooltip>(html`
      <l-tooltip content="This is a tooltip">
        <l-button>Hover Me</l-button>
      </l-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('l-show', showHandler);
    el.addEventListener('l-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit l-hide and l-after-hide when setting open = false', async () => {
    const el = await fixture<SlTooltip>(html`
      <l-tooltip content="This is a tooltip" open>
        <l-button>Hover Me</l-button>
      </l-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('l-hide', hideHandler);
    el.addEventListener('l-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should hide the tooltip when tooltip is visible and disabled becomes true', async () => {
    const el = await fixture<SlTooltip>(html`
      <l-tooltip content="This is a tooltip" open>
        <l-button>Hover Me</l-button>
      </l-tooltip>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('l-hide', hideHandler);
    el.addEventListener('l-after-hide', afterHideHandler);
    el.disabled = true;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });
});
