import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkCheckbox from './checkbox';

describe('<lynk-checkbox>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox disabled></lynk-checkbox> `);
    const checkbox = el.shadowRoot!.querySelector('input')!;

    expect(checkbox.disabled).to.be.true;
  });

  it('should be disabled when disabled property is set', async () => {
    const el = await fixture<LynkCheckbox>(html`<lynk-checkbox></lynk-checkbox>`);
    const checkbox = el.shadowRoot!.querySelector('input')!;

    el.disabled = true;
    await el.updateComplete;

    expect(checkbox.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire lynk-change when clicked', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);
    setTimeout(() => el.shadowRoot!.querySelector('input')!.click());
    const event = (await oneEvent(el, 'lynk-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire lynk-change when toggled via keyboard', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);
    const input = el.shadowRoot!.querySelector('input')!;
    input.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(el, 'lynk-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should not fire lynk-change when checked is set by javascript', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);
    el.addEventListener('lynk-change', () => expect.fail('event fired'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-checkbox name="a" value="1" checked></lynk-checkbox>
          <lynk-button type="submit">Submit</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('1');
    });

    it('should submit "on" when no value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-checkbox name="a" checked></lynk-checkbox>
          <lynk-button type="submit">Submit</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('on');
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-checkbox name="a" value="1" checked></lynk-checkbox>
          <lynk-button type="submit">Submit</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const checkbox = form.querySelector('lynk-checkbox')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      checkbox.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();

      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });
  });

  describe('click', () => {
    it('should click the inner input', async () => {
      const el = await fixture<LynkCheckbox>(html`<lynk-checkbox></lynk-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const clickSpy = sinon.spy();

      checkbox.addEventListener('click', clickSpy, { once: true });

      el.click();
      await el.updateComplete;

      expect(clickSpy.called).to.equal(true);
      expect(el.checked).to.equal(true);
    });
  });

  describe('focus', () => {
    it('should focus the inner input', async () => {
      const el = await fixture<LynkCheckbox>(html`<lynk-checkbox></lynk-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const focusSpy = sinon.spy();

      checkbox.addEventListener('focus', focusSpy, { once: true });

      el.focus();
      await el.updateComplete;

      expect(focusSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(checkbox);
    });
  });

  describe('blur', () => {
    it('should blur the inner input', async () => {
      const el = await fixture<LynkCheckbox>(html`<lynk-checkbox></lynk-checkbox>`);
      const checkbox = el.shadowRoot!.querySelector('input')!;
      const blurSpy = sinon.spy();

      checkbox.addEventListener('blur', blurSpy, { once: true });

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(blurSpy.called).to.equal(true);
      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('indeterminate', () => {
    it('should render indeterminate icon until checked', async () => {
      const el = await fixture<LynkCheckbox>(html`<lynk-checkbox indeterminate></lynk-checkbox>`);
      let indeterminateIcon = el.shadowRoot!.querySelector('[part="indeterminate-icon"]')!;

      expect(indeterminateIcon).not.to.be.null;

      el.click();
      await el.updateComplete;

      indeterminateIcon = el.shadowRoot!.querySelector('[part="indeterminate-icon"]')!;

      expect(indeterminateIcon).to.be.null;
    });
  });
});
