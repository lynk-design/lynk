import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkInclude from './include';

const stubbedFetchResponse: Response = {
  headers: new Headers(),
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'OK',
  type: 'default',
  url: '',
  json: () => Promise.resolve({}),
  text: () => Promise.resolve(''),
  blob: sinon.fake(),
  arrayBuffer: sinon.fake(),
  formData: sinon.fake(),
  bodyUsed: false,
  body: null,
  clone: sinon.fake()
};

async function delayResolve(resolveValue: string) {
  // Delay the fetch response to give time for the event listener to attach
  await aTimeout(10);
  return resolveValue;
}

describe('<lynk-include>', () => {
  afterEach(() => {
    sinon.verifyAndRestore();
  });

  it('should load content and emit on:load', async () => {
    sinon.stub(window, 'fetch').resolves({
      ...stubbedFetchResponse,
      ok: true,
      status: 200,
      text: () => delayResolve('"id": 1')
    });
    const el = await fixture<LynkInclude>(html` <lynk-include src="/found"></lynk-include> `);
    const loadHandler = sinon.spy();

    el.addEventListener('on:load', loadHandler);
    await waitUntil(() => loadHandler.calledOnce);

    expect(el.innerHTML).to.contain('"id": 1');
    expect(loadHandler).to.have.been.calledOnce;
  });

  it('should emit on:error when content cannot be loaded', async () => {
    sinon.stub(window, 'fetch').resolves({
      ...stubbedFetchResponse,
      ok: false,
      status: 404,
      text: () => delayResolve('{}')
    });
    const el = await fixture<LynkInclude>(html` <lynk-include src="/not-found"></lynk-include> `);
    const loadHandler = sinon.spy();

    el.addEventListener('on:error', loadHandler);
    await waitUntil(() => loadHandler.calledOnce);

    expect(loadHandler).to.have.been.calledOnce;
  });
});
