import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import { serialize } from '../../utilities/form';
import type LynkTextarea from './textarea';

describe('<lynk-textarea>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea label="Name"></lynk-textarea> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea></lynk-textarea> `);

    expect(el.size).to.equal('medium');
    expect(el.name).to.equal('');
    expect(el.value).to.equal('');
    expect(el.defaultValue).to.equal('');
    expect(el.title).to.equal('');
    expect(el.filled).to.be.false;
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.placeholder).to.equal('');
    expect(el.rows).to.equal(4);
    expect(el.resize).to.equal('vertical');
    expect(el.disabled).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.minlength).to.be.undefined;
    expect(el.maxlength).to.be.undefined;
    expect(el.required).to.be.false;
    expect(el.autocapitalize).to.be.undefined;
    expect(el.autocorrect).to.be.undefined;
    expect(el.autocomplete).to.be.undefined;
    expect(el.autofocus).to.be.undefined;
    expect(el.enterkeyhint).to.be.undefined;
    expect(el.spellcheck).to.be.true;
    expect(el.inputmode).to.be.undefined;
  });
  it('should have title if title attribute is set', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea title="Test"></lynk-textarea> `);
    const textarea = el.shadowRoot!.querySelector('textarea')!;

    expect(textarea.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea disabled></lynk-textarea> `);
    const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('[part~="textarea"]')!;

    expect(textarea.disabled).to.be.true;
  });

  it('should focus the textarea when clicking on the label', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea label="Name"></lynk-textarea> `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('on:focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit on:change and on:input when the user types in the textarea', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea></lynk-textarea> `);
      const inputHandler = sinon.spy();
      const changeHandler = sinon.spy();

      el.addEventListener('on:input', inputHandler);
      el.addEventListener('on:change', changeHandler);
      el.focus();
      await sendKeys({ type: 'abc' });
      el.blur();
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledThrice;
    });

    it('should not emit on:change or on:input when the value is set programmatically', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea></lynk-textarea> `);

      el.addEventListener('on:change', () => expect.fail('on:change should not be emitted'));
      el.addEventListener('on:input', () => expect.fail('on:input should not be emitted'));
      el.value = 'abc';

      await el.updateComplete;
    });

    it('should not emit on:change or on:input when calling setRangeText()', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea value="hi there"></lynk-textarea> `);

      el.addEventListener('on:change', () => expect.fail('on:change should not be emitted'));
      el.addEventListener('on:input', () => expect.fail('on:input should not be emitted'));
      el.focus();
      el.setSelectionRange(0, 2);
      el.setRangeText('hello');

      await el.updateComplete;
    });
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea></lynk-textarea> `);

      expect(el.invalid).to.be.false;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea required></lynk-textarea> `);

      expect(el.invalid).to.be.true;
    });

    it('should be invalid when required and after removing disabled ', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea disabled required></lynk-textarea> `);

      el.disabled = false;
      await el.updateComplete;

      expect(el.invalid).to.be.true;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea disabled required></lynk-textarea> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.invalid).to.be.true;
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><lynk-textarea name="a" value="1"></lynk-textarea></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><lynk-textarea name="a" value="1"></lynk-textarea></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <lynk-textarea name="a" value="test"></lynk-textarea>
          <lynk-button type="reset">Reset</lynk-button>
        </form>
      `);
      const button = form.querySelector('lynk-button')!;
      const textarea = form.querySelector('lynk-textarea')!;
      textarea.value = '1234';

      await textarea.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await textarea.updateComplete;

      expect(textarea.value).to.equal('test');

      textarea.defaultValue = '';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await textarea.updateComplete;

      expect(textarea.value).to.equal('');
    });
  });

  describe('when using spellcheck', () => {
    it('should enable spellcheck when no attribute is present', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea></lynk-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('true');
      expect(textarea.spellcheck).to.be.true;
    });

    it('should enable spellcheck when set to "true"', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea spellcheck="true"></lynk-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('true');
      expect(textarea.spellcheck).to.be.true;
    });

    it('should disable spellcheck when set to "false"', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea spellcheck="false"></lynk-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('false');
      expect(textarea.spellcheck).to.be.false;
    });
  });
});
