import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkSwitch from './switch';

describe('<lynk-switch>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch>Switch</lynk-switch> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);

    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch title="Test"></lynk-switch> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch disabled></lynk-switch> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);

    expect(el.checkValidity()).to.be.true;
  });

  it('should emit on:change and on:input when clicked', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
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

  it('should emit on:change when toggled with spacebar', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('on:change', changeHandler);
    el.addEventListener('on:input', inputHandler);
    el.focus();
    await sendKeys({ press: ' ' });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit on:change and on:input when toggled with the right arrow', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('on:change', changeHandler);
    el.addEventListener('on:input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowRight' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit on:change and on:input when toggled with the left arrow', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch checked></lynk-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('on:change', changeHandler);
    el.addEventListener('on:input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowLeft' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.false;
  });

  it('should not emit on:change or on:input when checked is set by javascript', async () => {
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    el.addEventListener('on:change', () => expect.fail('on:change incorrectly emitted'));
    el.addEventListener('on:input', () => expect.fail('on:change incorrectly emitted'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  it('should hide the native input with the correct positioning to scroll correctly when contained in an overflow', async () => {
    //
    // See: https://github.com/shoelace-style/shoelace/issues/1169
    //
    const el = await fixture<LynkSwitch>(html` <lynk-switch></lynk-switch> `);
    const label = el.shadowRoot!.querySelector('.lynk-switch')!;
    const input = el.shadowRoot!.querySelector('.lynk-switch__input')!;

    const labelPosition = getComputedStyle(label).position;
    const inputPosition = getComputedStyle(input).position;

    expect(labelPosition).to.equal('relative');
    expect(inputPosition).to.equal('absolute');
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-switch name="a" value="1" checked></lynk-switch>
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
          <lynk-switch name="a" checked></lynk-switch>
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
          <lynk-switch name="a" value="1" checked></lynk-switch>
          <lynk-button type="submit">Submit</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const lynkSwitch = form.querySelector('lynk-switch')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      lynkSwitch.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();
      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });

    it('should be invalid when required and unchecked', async () => {
      const lynkSwitch = await fixture<HTMLFormElement>(html` <lynk-switch required></lynk-switch> `);
      expect(lynkSwitch.checkValidity()).to.be.false;
    });

    it('should be valid when required and checked', async () => {
      const lynkSwitch = await fixture<HTMLFormElement>(html` <lynk-switch required checked></lynk-switch> `);
      expect(lynkSwitch.checkValidity()).to.be.true;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <lynk-button type="submit">Submit</lynk-button>
          </form>
          <lynk-switch form="f" name="a" value="1" checked></lynk-switch>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('1');
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html` <form novalidate><lynk-switch required></lynk-switch></form> `);
      const lynkSwitch = el.querySelector<LynkSwitch>('lynk-switch')!;

      expect(lynkSwitch.hasAttribute('data-required')).to.be.true;
      expect(lynkSwitch.hasAttribute('data-optional')).to.be.false;
      expect(lynkSwitch.hasAttribute('data-invalid')).to.be.true;
      expect(lynkSwitch.hasAttribute('data-valid')).to.be.false;
      expect(lynkSwitch.hasAttribute('data-user-invalid')).to.be.false;
      expect(lynkSwitch.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-switch name="a" value="1" checked></lynk-switch>
          <lynk-button type="reset">Reset</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const switchEl = form.querySelector('lynk-switch')!;
      switchEl.checked = false;

      await switchEl.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.true;

      switchEl.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.false;
    });
  });

  runFormControlBaseTests('lynk-switch');
});
