// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkPanel from './panel';

describe('<lynk-panel>', () => {
  it('should be visible', async () => {
    const el = await fixture<LynkPanel>(html`
      <lynk-panel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-panel>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.panel__body')!;

    expect(body.hidden).to.be.false;
  });


  it('should be visible with the expanded and accordion attribute', async () => {
    const el = await fixture<LynkPanel>(html`
      <lynk-panel accordion expanded>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-panel>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.panel__body')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<LynkPanel>(html`
      <lynk-panel accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-panel>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.panel__body')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit on:expand and after:expand when calling expand()', async () => {
    const el = await fixture<LynkPanel>(html`
      <lynk-panel accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-panel>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.panel__body')!;
    const expandHandler = sinon.spy();
    const afterExpandHandler = sinon.spy();

    el.addEventListener('on:expand', expandHandler);
    el.addEventListener('after:expand', afterExpandHandler);
    el.expand();

    await waitUntil(() => expandHandler.calledOnce);
    await waitUntil(() => afterExpandHandler.calledOnce);

    expect(expandHandler).to.have.been.calledOnce;
    expect(afterExpandHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit on:collapse and after:collapse when calling collapse()', async () => {
    const el = await fixture<LynkPanel>(html`
      <lynk-panel accordion expanded>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-panel>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.panel__body')!;
    const collapseHandler = sinon.spy();
    const afterCollapseHandler = sinon.spy();

    el.addEventListener('on:collapse', collapseHandler);
    el.addEventListener('after:collapse', afterCollapseHandler);
    el.collapse();

    await waitUntil(() => collapseHandler.calledOnce);
    await waitUntil(() => afterCollapseHandler.calledOnce);

    expect(collapseHandler).to.have.been.calledOnce;
    expect(afterCollapseHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit on:expand and after:expand when setting expanded = true', async () => {
    const el = await fixture<LynkPanel>(html`
      <lynk-panel accordion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-panel>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.panel__body')!;
    const expandHandler = sinon.spy();
    const afterExpandHandler = sinon.spy();

    el.addEventListener('on:expand', expandHandler);
    el.addEventListener('after:expand', afterExpandHandler);
    el.expanded = true;

    await waitUntil(() => expandHandler.calledOnce);
    await waitUntil(() => afterExpandHandler.calledOnce);

    expect(expandHandler).to.have.been.calledOnce;
    expect(afterExpandHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit on:collapse and after:collapse when setting expanded = false', async () => {
    const el = await fixture<LynkPanel>(html`
      <lynk-panel accordion expanded>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </lynk-panel>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.panel__body')!;
    const collapseHandler = sinon.spy();
    const afterCollapseHandler = sinon.spy();

    el.addEventListener('on:collapse', collapseHandler);
    el.addEventListener('after:collapse', afterCollapseHandler);
    el.expanded = false;

    await waitUntil(() => collapseHandler.calledOnce);
    await waitUntil(() => afterCollapseHandler.calledOnce);

    expect(collapseHandler).to.have.been.calledOnce;
    expect(afterCollapseHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<LynkPanel>(html`
      <div>
        <lynk-panel accordion>
          <div style="height: 200px;"></div>
        </lynk-panel>
        <lynk-panel accordion>
          <div style="height: 400px;"></div>
        </lynk-panel>
      </div>
    `);
    const first = el.querySelectorAll('lynk-panel')[0];
    const second = el.querySelectorAll('lynk-panel')[1];
    const firstBody = first.shadowRoot!.querySelector('.panel__body')!;
    const secondBody = second.shadowRoot!.querySelector('.panel__body')!;

    await first.expand();
    await second.expand();

    expect(firstBody.clientHeight).to.equal(220); // 200 + 20px (vertical padding)
    expect(secondBody.clientHeight).to.equal(420); // 400 + 20px + 20px (vertical padding)
  });
});
