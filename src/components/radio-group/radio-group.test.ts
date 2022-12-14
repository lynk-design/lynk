import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkRadio from '../radio/radio';
import type LynkRadioGroup from './radio-group';

describe('<lynk-radio-group>', () => {
  describe('validation tests', () => {
    it('should be invalid initially when required and no radio is checked', async () => {
      const radioGroup = await fixture<LynkRadioGroup>(html`
        <lynk-radio-group required>
          <lynk-radio value="1"></lynk-radio>
          <lynk-radio value="2"></lynk-radio>
        </lynk-radio-group>
      `);

      expect(radioGroup.invalid).to.be.true;
    });

    it('should become valid when an option is checked', async () => {
      const radioGroup = await fixture<LynkRadioGroup>(html`
        <lynk-radio-group required>
          <lynk-radio value="1"></lynk-radio>
          <lynk-radio value="2"></lynk-radio>
        </lynk-radio-group>
      `);

      radioGroup.value = '1';
      await radioGroup.updateComplete;

      expect(radioGroup.invalid).to.be.false;
    });

    it(`should be valid when required and one radio is checked`, async () => {
      const el = await fixture<LynkRadioGroup>(html`
        <lynk-radio-group label="Select an option" value="1" required>
          <lynk-radio name="option" value="1">Option 1</lynk-radio>
          <lynk-radio name="option" value="2">Option 2</lynk-radio>
          <lynk-radio name="option" value="3">Option 3</lynk-radio>
        </lynk-radio-group>
      `);

      expect(el.reportValidity()).to.be.true;
    });

    it(`should be invalid when required and no radios are checked`, async () => {
      const el = await fixture<LynkRadioGroup>(html`
        <lynk-radio-group label="Select an option" required>
          <lynk-radio name="option" value="1">Option 1</lynk-radio>
          <lynk-radio name="option" value="2">Option 2</lynk-radio>
          <lynk-radio name="option" value="3">Option 3</lynk-radio>
        </lynk-radio-group>
      `);

      expect(el.reportValidity()).to.be.false;
    });

    it(`should be valid when required and a different radio is checked`, async () => {
      const el = await fixture<LynkRadioGroup>(html`
        <lynk-radio-group label="Select an option" value="3" required>
          <lynk-radio name="option" value="1">Option 1</lynk-radio>
          <lynk-radio name="option" value="2">Option 2</lynk-radio>
          <lynk-radio name="option" value="3">Option 3</lynk-radio>
        </lynk-radio-group>
      `);

      expect(el.reportValidity()).to.be.true;
    });

    it(`should be invalid when custom validity is set`, async () => {
      const el = await fixture<LynkRadioGroup>(html`
        <lynk-radio-group label="Select an option">
          <lynk-radio name="option" value="1">Option 1</lynk-radio>
          <lynk-radio name="option" value="2">Option 2</lynk-radio>
          <lynk-radio name="option" value="3">Option 3</lynk-radio>
        </lynk-radio-group>
      `);

      el.setCustomValidity('Error');

      expect(el.reportValidity()).to.be.false;
    });
  });

  it('should show a constraint validation error when setCustomValidity() is called', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <lynk-radio-group>
          <lynk-radio id="radio-1" name="a" value="1" checked></lynk-radio>
          <lynk-radio id="radio-2" name="a" value="2"></lynk-radio>
        </lynk-radio-group>
        <lynk-button type="submit">Submit</lynk-button>
      </form>
    `);
    const button = form.querySelector('lynk-button')!;
    const radioGroup = form.querySelector<LynkRadioGroup>('lynk-radio-group')!;
    const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

    // Submitting the form after setting custom validity should not trigger the handler
    radioGroup.setCustomValidity('Invalid selection');
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
        <lynk-radio-group value="1">
          <lynk-radio value="1"></lynk-radio>
          <lynk-radio value="2"></lynk-radio>
        </lynk-radio-group>
        <lynk-button type="reset">Reset</lynk-button>
      </form>
    `);
    const button = form.querySelector('lynk-button')!;
    const radioGroup = form.querySelector('lynk-radio-group')!;
    radioGroup.value = '2';

    await radioGroup.updateComplete;
    setTimeout(() => button.click());

    await oneEvent(form, 'reset');
    await radioGroup.updateComplete;

    expect(radioGroup.value).to.equal('1');
  });
});

describe('when submitting a form', () => {
  it('should submit the correct value when a value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <lynk-radio-group name="a" value="1">
          <lynk-radio id="radio-1" value="1"></lynk-radio>
          <lynk-radio id="radio-2" value="2"></lynk-radio>
          <lynk-radio id="radio-3" value="3"></lynk-radio>
        </lynk-radio-group>
        <lynk-button type="submit">Submit</lynk-button>
      </form>
    `);
    const button = form.querySelector('lynk-button')!;
    const radio = form.querySelectorAll('lynk-radio')[1]!;
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

describe('when the value changes', () => {
  it('should emit on:change when toggled with the arrow keys', async () => {
    const radioGroup = await fixture<LynkRadioGroup>(html`
      <lynk-radio-group>
        <lynk-radio id="radio-1" value="1"></lynk-radio>
        <lynk-radio id="radio-2" value="2"></lynk-radio>
      </lynk-radio-group>
    `);
    const firstRadio = radioGroup.querySelector<LynkRadio>('#radio-1')!;
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    radioGroup.addEventListener('on:change', changeHandler);
    radioGroup.addEventListener('on:input', inputHandler);
    firstRadio.focus();
    await sendKeys({ press: 'ArrowRight' });
    await radioGroup.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(radioGroup.value).to.equal('2');
  });

  it('should emit on:change and on:input when clicked', async () => {
    const radioGroup = await fixture<LynkRadioGroup>(html`
      <lynk-radio-group>
        <lynk-radio id="radio-1" value="1"></lynk-radio>
        <lynk-radio id="radio-2" value="2"></lynk-radio>
      </lynk-radio-group>
    `);
    const radio = radioGroup.querySelector<LynkRadio>('#radio-1')!;
    setTimeout(() => radio.click());
    const event = (await oneEvent(radioGroup, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should emit on:change and on:input when toggled with spacebar', async () => {
    const radioGroup = await fixture<LynkRadioGroup>(html`
      <lynk-radio-group>
        <lynk-radio id="radio-1" value="1"></lynk-radio>
        <lynk-radio id="radio-2" value="2"></lynk-radio>
      </lynk-radio-group>
    `);
    const radio = radioGroup.querySelector<LynkRadio>('#radio-1')!;
    radio.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = (await oneEvent(radioGroup, 'on:change')) as CustomEvent;
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should not emit on:change or on:input when the value is changed programmatically', async () => {
    const radioGroup = await fixture<LynkRadioGroup>(html`
      <lynk-radio-group value="1">
        <lynk-radio id="radio-1" value="1"></lynk-radio>
        <lynk-radio id="radio-2" value="2"></lynk-radio>
      </lynk-radio-group>
    `);

    radioGroup.addEventListener('on:change', () => expect.fail('on:change should not be emitted'));
    radioGroup.addEventListener('on:input', () => expect.fail('on:input should not be emitted'));
    radioGroup.value = '2';
    await radioGroup.updateComplete;
  });
});
