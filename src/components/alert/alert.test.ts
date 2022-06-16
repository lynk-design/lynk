import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkAlert from './alert';

describe('<lynk-alert>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<LynkAlert>(html` <lynk-alert open>I am an alert</lynk-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<LynkAlert>(html` <lynk-alert>I am an alert</lynk-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit lynk-show and lynk-after-show when calling show()', async () => {
    const el = await fixture<LynkAlert>(html` <lynk-alert>I am an alert</lynk-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('lynk-show', showHandler);
    el.addEventListener('lynk-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit lynk-hide and lynk-after-hide when calling hide()', async () => {
    const el = await fixture<LynkAlert>(html` <lynk-alert open>I am an alert</lynk-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('lynk-hide', hideHandler);
    el.addEventListener('lynk-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit lynk-show and lynk-after-show when setting open = true', async () => {
    const el = await fixture<LynkAlert>(html` <lynk-alert>I am an alert</lynk-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('lynk-show', showHandler);
    el.addEventListener('lynk-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit lynk-hide and lynk-after-hide when setting open = false', async () => {
    const el = await fixture<LynkAlert>(html` <lynk-alert open>I am an alert</lynk-alert> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('lynk-hide', hideHandler);
    el.addEventListener('lynk-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });
});
