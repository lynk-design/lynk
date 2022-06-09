import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type SlRadioGroup from '../../components/radio-group/radio-group';
import type SlRadio from './radio';

describe('<l-radio>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlRadio>(html` <l-radio disabled></l-radio> `);
    const radio = el.input;

    expect(radio.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<SlRadio>(html` <l-radio></l-radio> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire l-change when clicked', async () => {
    const el = await fixture<SlRadio>(html` <l-radio></l-radio> `);
    setTimeout(() => el.input.click());
    const event = (await oneEvent(el, 'l-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire l-change when toggled via keyboard - space', async () => {
    const el = await fixture<SlRadio>(html` <l-radio></l-radio> `);
    el.input.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(el, 'l-change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire l-change when toggled via keyboard - arrow key', async () => {
    const radioGroup = await fixture<SlRadioGroup>(html`
      <l-radio-group>
        <l-radio id="radio-1"></l-radio>
        <l-radio id="radio-2"></l-radio>
      </l-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SlRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<SlRadio>('#radio-2')!;
    radio1.input.focus();
    setTimeout(() => sendKeys({ press: 'ArrowRight' }));
    const event = (await oneEvent(radio2, 'l-change')) as CustomEvent;
    expect(event.target).to.equal(radio2);
    expect(radio2.checked).to.be.true;
  });

  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<SlRadioGroup>(html`
      <l-radio-group>
        <l-radio checked></l-radio>
        <l-radio disabled></l-radio>
      </l-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SlRadio>('l-radio[checked]')!;
    const radio2 = radioGroup.querySelector<SlRadio>('l-radio[disabled]')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <l-radio-group>
            <l-radio id="radio-1" name="a" value="1" checked></l-radio>
            <l-radio id="radio-2" name="a" value="2"></l-radio>
            <l-radio id="radio-3" name="a" value="3"></l-radio>
          </l-radio-group>
          <l-button type="submit">Submit</l-button>
        </form>
      `);
      const button = form.querySelector('l-button')!;
      const radio = form.querySelectorAll('l-radio')[1]!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      radio.click();
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('2');
    });
  });

  it('should submit "on" when no value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <l-radio-group>
          <l-radio id="radio-1" name="a" checked></l-radio>
          <l-radio id="radio-2" name="a"></l-radio>
          <l-radio id="radio-3" name="a"></l-radio>
        </l-radio-group>
        <l-button type="submit">Submit</l-button>
      </form>
    `);
    const button = form.querySelector('l-button')!;
    const radio = form.querySelectorAll('l-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);
      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    radio.click();
    button.click();

    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.get('a')).to.equal('on');
  });

  it('should show a constraint validation error when setCustomValidity() is called', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <l-radio-group>
          <l-radio id="radio-1" name="a" value="1" checked></l-radio>
          <l-radio id="radio-2" name="a" value="2"></l-radio>
        </l-radio-group>
        <l-button type="submit">Submit</l-button>
      </form>
    `);
    const button = form.querySelector('l-button')!;
    const radio = form.querySelectorAll('l-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

    // Submitting the form after setting custom validity should not trigger the handler
    radio.setCustomValidity('Invalid selection');
    form.addEventListener('submit', submitHandler);
    button.click();

    await aTimeout(100);

    expect(submitHandler).to.not.have.been.called;
  });
});
