// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SlDrawer from './drawer';

describe('<lynk-drawer>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlDrawer>(html`
      <lynk-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-drawer>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlDrawer>(
      html` <lynk-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-drawer> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit lynk-show and lynk-after-show when calling show()', async () => {
    const el = await fixture<SlDrawer>(html`
      <lynk-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-drawer>
    `);
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
    const el = await fixture<SlDrawer>(html`
      <lynk-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-drawer>
    `);
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
    const el = await fixture<SlDrawer>(html`
      <lynk-drawer>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-drawer>
    `);
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
    const el = await fixture<SlDrawer>(html`
      <lynk-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-drawer>
    `);
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

  it('should not close when lynk-request-close is prevented', async () => {
    const el = await fixture<SlDrawer>(html`
      <lynk-drawer open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-drawer>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part="overlay"]')!;

    el.addEventListener('lynk-request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<SlDrawer>(html` <lynk-drawer><input /></lynk-drawer> `);
    const input = el.querySelector<HTMLInputElement>('input')!;
    const initialFocusHandler = sinon.spy((event: InputEvent) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('lynk-initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });
});
