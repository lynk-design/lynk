import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkCheckbox from './checkbox';

describe('<lynk-checkbox>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox>Checkbox</lynk-checkbox> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);

    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.indeterminate).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox title="Test"></lynk-checkbox> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

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

  it('should emit on:change and on:input when clicked', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('on:change', changeHandler);
    el.addEventListener('on:input', inputHandler);
    el.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit on:change and on:input when toggled with spacebar', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('on:change', changeHandler);
    el.addEventListener('on:input', inputHandler);
    el.focus();
    await el.updateComplete;
    await sendKeys({ press: ' ' });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should not emit on:change or on:input when checked programmatically', async () => {
    const el = await fixture<LynkCheckbox>(html` <lynk-checkbox></lynk-checkbox> `);

    el.addEventListener('on:change', () => expect.fail('on:change should not be emitted'));
    el.addEventListener('on:input', () => expect.fail('on:input should not be emitted'));
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

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-checkbox name="a" value="1" checked></lynk-checkbox>
          <lynk-button type="reset">Reset</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const checkbox = form.querySelector('lynk-checkbox')!;
      checkbox.checked = false;

      await checkbox.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, 'reset');
      await checkbox.updateComplete;

      expect(checkbox.checked).to.true;

      checkbox.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await checkbox.updateComplete;

      expect(checkbox.checked).to.false;
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
      let indeterminateIcon = el.shadowRoot!.querySelector('[part~="indeterminate-icon"]')!;

      expect(indeterminateIcon).not.to.be.null;

      el.click();
      await el.updateComplete;

      indeterminateIcon = el.shadowRoot!.querySelector('[part~="indeterminate-icon"]')!;

      expect(indeterminateIcon).to.be.null;
    });
  });
});
