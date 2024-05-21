import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkPopup from '../popup/popup';
import type LynkTooltip from './tooltip';

describe('<lynk-tooltip>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip" open>
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip">
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit on:show and after:show when calling show()', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip">
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('on:show', showHandler);
    el.addEventListener('after:show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit on:hide and after:hide when calling hide()', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip" open>
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('on:hide', hideHandler);
    el.addEventListener('after:hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit on:show and after:show when setting open = true', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip">
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('on:show', showHandler);
    el.addEventListener('after:show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit on:hide and after:hide when setting open = false', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip" open>
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('on:hide', hideHandler);
    el.addEventListener('after:hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should hide the tooltip when tooltip is visible and disabled becomes true', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip" open>
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('on:hide', hideHandler);
    el.addEventListener('after:hide', afterHideHandler);
    el.disabled = true;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should show when open initially', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip" open>
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    await el.updateComplete;

    expect(body.hidden).to.be.false;
  });

  it('should not accept pointer events on the tooltip', async () => {
    const el = await fixture<LynkTooltip>(html`
      <lynk-tooltip content="This is a tooltip" open>
        <lynk-button>Hover Me</lynk-button>
      </lynk-tooltip>
    `);
    const popup = el.shadowRoot!.querySelector<LynkPopup>('lynk-popup')!;

    expect(getComputedStyle(popup.popup).pointerEvents).to.equal('none');
  });
});
