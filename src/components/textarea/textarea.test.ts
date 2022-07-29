import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import { serialize } from '../../utilities/form';
import type LynkTextarea from './textarea';

describe('<lynk-textarea>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea label="Name"></lynk-textarea> `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea disabled></lynk-textarea> `);
    const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('[part="textarea"]')!;

    expect(textarea.disabled).to.be.true;
  });

  it('should focus the textarea when clicking on the label', async () => {
    const el = await fixture<LynkTextarea>(html` <lynk-textarea label="Name"></lynk-textarea> `);
    const label = el.shadowRoot!.querySelector('[part="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('on:focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea autovalidate></lynk-textarea> `);

      expect(el.invalid).to.be.false;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea autovalidate required></lynk-textarea> `);

      expect(el.invalid).to.be.true;
    });

    it('should be invalid when required and after removing disabled ', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea disabled autovalidate required></lynk-textarea> `);

      el.disabled = false;
      await el.updateComplete;

      expect(el.invalid).to.be.true;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<LynkTextarea>(html` <lynk-textarea disabled autovalidate required></lynk-textarea> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.invalid).to.be.true;
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(
        html` <form><lynk-textarea name="a" value="1"></lynk-textarea></form> `
      );
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(
        html` <form><lynk-textarea name="a" value="1"></lynk-textarea></form> `
      );
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });
});
