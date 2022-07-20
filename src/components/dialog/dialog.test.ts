// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkDialog from './dialog';

describe('<lynk-dialog>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<LynkDialog>(html`
      <lynk-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<LynkDialog>(
      html` <lynk-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-dialog> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;

    expect(base.hidden).to.be.true;
  });

  it('should emit on:show and after:show when calling show()', async () => {
    const el = await fixture<LynkDialog>(html`
      <lynk-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('on:show', showHandler);
    el.addEventListener('after:show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit on:hide and after:hide when calling hide()', async () => {
    const el = await fixture<LynkDialog>(html`
      <lynk-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('on:hide', hideHandler);
    el.addEventListener('after:hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should emit on:show and after:show when setting open = true', async () => {
    const el = await fixture<LynkDialog>(html`
      <lynk-dialog>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('on:show', showHandler);
    el.addEventListener('after:show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.false;
  });

  it('should emit on:hide and after:hide when setting open = false', async () => {
    const el = await fixture<LynkDialog>(html`
      <lynk-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-dialog>
    `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('on:hide', hideHandler);
    el.addEventListener('after:hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(base.hidden).to.be.true;
  });

  it('should not close when on:request-close is prevented', async () => {
    const el = await fixture<LynkDialog>(html`
      <lynk-dialog open>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</lynk-dialog>
    `);
    const overlay = el.shadowRoot!.querySelector<HTMLElement>('[part="overlay"]')!;

    el.addEventListener('on:request-close', event => {
      event.preventDefault();
    });
    overlay.click();

    expect(el.open).to.be.true;
  });

  it('should allow initial focus to be set', async () => {
    const el = await fixture<LynkDialog>(html` <lynk-dialog><input /></lynk-dialog> `);
    const input = el.querySelector('input')!;
    const initialFocusHandler = sinon.spy((event: Event) => {
      event.preventDefault();
      input.focus();
    });

    el.addEventListener('on:initial-focus', initialFocusHandler);
    el.show();

    await waitUntil(() => initialFocusHandler.calledOnce);

    expect(initialFocusHandler).to.have.been.calledOnce;
    expect(document.activeElement).to.equal(input);
  });
});
