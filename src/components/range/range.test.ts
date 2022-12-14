import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { clickOnElement } from '../../internal/test';
import { serialize } from '../../utilities/form';
import type LynkRange from './range';

describe('<lynk-range>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<LynkRange>(html` <lynk-range label="Name"></lynk-range> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<LynkRange>(html` <lynk-range></lynk-range> `);

    expect(el.name).to.equal('');
    expect(el.value).to.equal(0);
    expect(el.title).to.equal('');
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.invalid).to.be.false;
    expect(el.min).to.equal(0);
    expect(el.max).to.equal(100);
    expect(el.step).to.equal(1);
    expect(el.tooltip).to.equal('top');
    expect(el.defaultValue).to.equal(0);
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<LynkRange>(html` <lynk-range title="Test"></lynk-range> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LynkRange>(html` <lynk-range disabled></lynk-range> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="input"]')!;

    expect(input.disabled).to.be.true;
  });

  describe('when the value changes', () => {
    it('should emit on:change and on:input when the value changes from clicking the slider', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range value="0"></lynk-range> `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('on:change', changeHandler);
      el.addEventListener('on:input', inputHandler);
      await clickOnElement(el, 'right');
      await el.updateComplete;

      expect(el.value).to.equal(100);
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit on:change and on:input and decrease the value when pressing left arrow', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range value="50"></lynk-range> `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('on:change', changeHandler);
      el.addEventListener('on:input', inputHandler);
      el.focus();
      await sendKeys({ press: 'ArrowLeft' });
      await el.updateComplete;

      expect(el.value).to.equal(49);
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should emit on:change and on:input and decrease the value when pressing right arrow', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range value="50"></lynk-range> `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('on:change', changeHandler);
      el.addEventListener('on:input', inputHandler);
      el.focus();
      await sendKeys({ press: 'ArrowRight' });
      await el.updateComplete;

      expect(el.value).to.equal(51);
      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
    });

    it('should not emit on:change or on:input when changing the value programmatically', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range value="0"></lynk-range> `);

      el.addEventListener('on:change', () => expect.fail('on:change should not be emitted'));
      el.addEventListener('on:input', () => expect.fail('on:input should not be emitted'));
      el.value = 50;

      await el.updateComplete;
    });

    it('should not emit on:change or on:input when stepUp() is called programmatically', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range step="2" value="2"></lynk-range> `);

      el.addEventListener('on:change', () => expect.fail('on:change should not be emitted'));
      el.addEventListener('on:input', () => expect.fail('on:input should not be emitted'));
      el.stepUp();
      await el.updateComplete;
    });

    it('should not emit on:change or on:input when stepDown() is called programmatically', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range step="2" value="2"></lynk-range> `);

      el.addEventListener('on:change', () => expect.fail('on:change should not be emitted'));
      el.addEventListener('on:input', () => expect.fail('on:input should not be emitted'));
      el.stepDown();
      await el.updateComplete;
    });
  });

  describe('step', () => {
    it('should increment by step when stepUp() is called', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range step="2" value="2"></lynk-range> `);

      el.stepUp();
      await el.updateComplete;
      expect(el.value).to.equal(4);
    });

    it('should decrement by step when stepDown() is called', async () => {
      const el = await fixture<LynkRange>(html` <lynk-range step="2" value="2"></lynk-range> `);

      el.stepDown();
      await el.updateComplete;
      expect(el.value).to.equal(0);
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><lynk-range name="a" value="1"></lynk-range></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><lynk-range name="a" value="1"></lynk-range></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-range name="a" value="99"></lynk-range>
          <lynk-button type="reset">Reset</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const input = form.querySelector('lynk-range')!;
      input.value = 80;

      await input.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal(99);

      input.defaultValue = 0;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await input.updateComplete;

      expect(input.value).to.equal(0);
    });
  });
});
