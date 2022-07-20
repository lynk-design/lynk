// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkAccordion from './accordion';

describe('<lynk-accordion>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<LynkAccordion>(html`
      <lynk-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.lynk-accordion__body')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<LynkAccordion>(html`
      <lynk-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.lynk-accordion__body')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit on:show and after:show when calling show()', async () => {
    const el = await fixture<LynkAccordion>(html`
      <lynk-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.lynk-accordion__body')!;
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
    const el = await fixture<LynkAccordion>(html`
      <lynk-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.lynk-accordion__body')!;
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
    const el = await fixture<LynkAccordion>(html`
      <lynk-accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.lynk-accordion__body')!;
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
    const el = await fixture<LynkAccordion>(html`
      <lynk-accordion open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-accordion>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.lynk-accordion__body')!;
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

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<LynkAccordion>(html`
      <div>
        <lynk-accordion>
          <div style="height: 200px;"></div>
        </lynk-accordion>
        <lynk-accordion>
          <div style="height: 400px;"></div>
        </lynk-accordion>
      </div>
    `);
    const first = el.querySelectorAll('lynk-accordion')[0];
    const second = el.querySelectorAll('lynk-accordion')[1];
    const firstBody = first.shadowRoot!.querySelector('.lynk-accordion__body')!;
    const secondBody = second.shadowRoot!.querySelector('.lynk-accordion__body')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(200);
    expect(secondBody.clientHeight).to.equal(400);
  });
});
