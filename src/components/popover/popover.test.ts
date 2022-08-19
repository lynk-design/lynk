import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkPopover from './popover';

describe('<lynk-popover>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<LynkPopover>(html`
      <lynk-popover open>
        <lynk-button slot="trigger">Click Me</lynk-button>
        This is a popover.
      </lynk-popover>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;

    expect(panel.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<LynkPopover>(html`
      <lynk-popover>
        <lynk-button slot="trigger">Click Me</lynk-button>
        This is a popover.
      </lynk-popover>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;

    expect(panel.hidden).to.be.true;
  });

  it('should emit on:show and after:show when calling show()', async () => {
    const el = await fixture<LynkPopover>(html`
      <lynk-popover>
        <lynk-button slot="trigger">Click Me</lynk-button>
        This is a popover.
      </lynk-popover>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('on:show', showHandler);
    el.addEventListener('after:show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit on:hide and after:hide when calling hide()', async () => {
    const el = await fixture<LynkPopover>(html`
      <lynk-popover open>
        <lynk-button slot="trigger">Click Me</lynk-button>
        This is a popover.
      </lynk-popover>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('on:hide', hideHandler);
    el.addEventListener('after:hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should emit on:show and after:show when setting open = true', async () => {
    const el = await fixture<LynkPopover>(html`
      <lynk-popover>
        <lynk-button slot="trigger">Click Me</lynk-button>
        This is a popover.
      </lynk-popover>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('on:show', showHandler);
    el.addEventListener('after:show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit on:hide and after:hide when setting open = false', async () => {
    const el = await fixture<LynkPopover>(html`
      <lynk-popover open>
        <lynk-button slot="trigger">Click Me</lynk-button>
        This is a popover.
      </lynk-popover>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('on:hide', hideHandler);
    el.addEventListener('after:hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should close on escape key', async () => {
    const el = await fixture<LynkPopover>(html`
      <lynk-popover>
        <lynk-button slot="trigger">Click Me</lynk-button>
        This is a popover.
      </lynk-popover>
    `);
    const trigger = el.querySelector('lynk-button')!;

    trigger.click();
    await sendKeys({ press: 'Escape' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });
});
