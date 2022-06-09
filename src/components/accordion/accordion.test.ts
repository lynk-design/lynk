// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkAccordion from './accordion';

describe('<l-accordion>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlDetails>(html`
      <l-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </l-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.l-accordion__body')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlDetails>(html`
      <l-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </l-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.l-accordion__body')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit l-show and l-after-show when calling show()', async () => {
    const el = await fixture<SlDetails>(html`
      <l-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </l-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.l-accordion__body')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('le-show', showHandler);
    el.addEventListener('le-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit l-hide and l-after-hide when calling hide()', async () => {
    const el = await fixture<SlDetails>(html`
      <l-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </l-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.l-accordion__body')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('l-hide', hideHandler);
    el.addEventListener('l-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit l-show and l-after-show when setting open = true', async () => {
    const el = await fixture<SlDetails>(html`
      <l-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </l-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.l-accordion__body')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('l-show', showHandler);
    el.addEventListener('l-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit l-hide and l-after-hide when setting open = false', async () => {
    const el = await fixture<SlDetails>(html`
      <l-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </l-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.l-accordion__body')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('le-hide', hideHandler);
    el.addEventListener('le-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<SlDetails>(html`
      <div>
        <l-accordion>
          <div style="height: 200px;"></div>
        </l-accordion>
        <l-accordion>
          <div style="height: 400px;"></div>
        </l-accordion>
      </div>
    `);
    const first = el.querySelectorAll('l-accordion')[0];
    const second = el.querySelectorAll('l-accordion')[1];
    const firstBody = first.shadowRoot!.querySelector('.l-accordion__body')!;
    const secondBody = second.shadowRoot!.querySelector('.l-accordion__body')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(200);
    expect(secondBody.clientHeight).to.equal(400);
  });
});
