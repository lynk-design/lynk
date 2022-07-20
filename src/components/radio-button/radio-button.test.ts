import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkRadioGroup from '../../components/radio-group/radio-group';
import type LynkRadioButton from './radio-button';

describe('<lynk-radio-button>', () => {
  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LynkRadioButton>(html` <lynk-radio-button disabled></lynk-radio-button> `);

    expect(el.input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<LynkRadioButton>(html` <lynk-radio-button></lynk-radio-button> `);

    expect(el.invalid).to.be.false;
  });

  it('should fire on:change when clicked', async () => {
    const el = await fixture<LynkRadioButton>(html` <lynk-radio-button></lynk-radio-button> `);
    setTimeout(() => el.input.click());
    const event = (await oneEvent(el, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire on:change when toggled via keyboard - space', async () => {
    const el = await fixture<LynkRadioButton>(html` <lynk-radio-button></lynk-radio-button> `);
    el.input.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(el, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(el);
    expect(el.checked).to.be.true;
  });

  it('should fire on:change when toggled via keyboard - arrow key', async () => {
    const radioGroup = await fixture<LynkRadioGroup>(html`
      <lynk-radio-group>
        <lynk-radio-button id="radio-1"></lynk-radio-button>
        <lynk-radio-button id="radio-2"></lynk-radio-button>
      </lynk-radio-group>
    `);
    const radio1 = radioGroup.querySelector<LynkRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<LynkRadioButton>('#radio-2')!;
    radio1.input.focus();
    setTimeout(() => sendKeys({ press: 'ArrowRight' }));
    const event = (await oneEvent(radio2, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(radio2);
    expect(radio2.checked).to.be.true;
  });

  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<LynkRadioGroup>(html`
      <lynk-radio-group>
        <lynk-radio-button checked></lynk-radio-button>
        <lynk-radio-button disabled></lynk-radio-button>
      </lynk-radio-group>
    `);
    const radio1 = radioGroup.querySelector<LynkRadioButton>('lynk-radio-button[checked]')!;
    const radio2 = radioGroup.querySelector<LynkRadioButton>('lynk-radio-button[disabled]')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });

  describe('when submitting a form', () => {
    it('should submit the correct value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-radio-group>
            <lynk-radio-button id="radio-1" name="a" value="1" checked></lynk-radio-button>
            <lynk-radio-button id="radio-2" name="a" value="2"></lynk-radio-button>
            <lynk-radio-button id="radio-3" name="a" value="3"></lynk-radio-button>
          </lynk-radio-group>
          <lynk-button type="submit">Submit</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const radio = form.querySelectorAll('lynk-radio-button')[1]!;
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

  it('should show a constraint validation error when setCustomValidity() is called', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <lynk-radio-group>
          <lynk-radio-button id="radio-1" name="a" value="1" checked></lynk-radio-button>
          <lynk-radio-button id="radio-2" name="a" value="2"></lynk-radio-button>
        </lynk-radio-group>
        <lynk-button type="submit">Submit</lynk-button>
      </form>
    `);
    const button = form.querySelector('lynk-button')!;
    const radio = form.querySelectorAll('lynk-radio-button')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

    // Submitting the form after setting custom validity should not trigger the handler
    radio.setCustomValidity('Invalid selection');
    form.addEventListener('submit', submitHandler);
    button.click();

    await aTimeout(100);

    expect(submitHandler).to.not.have.been.called;
  });
});
