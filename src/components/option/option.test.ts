import { expect, fixture, html, waitUntil, aTimeout } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkOption from './option';

describe('<lynk-option>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<LynkOption>(html`
      <lynk-select label="Select one">
        <lynk-option value="1">Option 1</lynk-option>
        <lynk-option value="2">Option 2</lynk-option>
        <lynk-option value="3">Option 3</lynk-option>
        <lynk-option value="4" disabled>Disabled</lynk-option>
      </lynk-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<LynkOption>(html` <lynk-option>Test</lynk-option> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<LynkOption>(html` <lynk-option>Test</lynk-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits the slotchange event when the label changes', async () => {
    const el = await fixture<LynkOption>(html` <lynk-option>Text</lynk-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });
});
