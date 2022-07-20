import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import type LynkSwitch from './switch';

describe('<lynk-switch>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch disabled></lynk-switch> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire on:change when clicked', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    setTimeout(() => el.shadowRoot!.querySelector('input')!.click());
    const event = (await oneEvent(el, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire on:change when toggled with spacebar', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(el, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire on:change when toggled with the right arrow', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: 'ArrowRight' }));
    const event = (await oneEvent(el, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire on:change when toggled with the left arrow', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch checked></lynk-switch> `);
    el.focus();
    setTimeout(() => sendKeys({ press: 'ArrowLeft' }));
    const event = (await oneEvent(el, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.false;
  });

  it('should not fire on:change when checked is set by javascript', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    el.addEventListener('on:change', () => expect.fail('event fired'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });
});
