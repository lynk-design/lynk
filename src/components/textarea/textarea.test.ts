import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import { serialize } from '../../utilities/form';
import type SlTextarea from './textarea';

describe('<l-textarea>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<SlTextarea>(html` <l-textarea label="Name"></l-textarea> `);
    await expect(el).to.be.accessible();
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<SlTextarea>(html` <l-textarea disabled></l-textarea> `);
    const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('[part="textarea"]')!;

    expect(textarea.disabled).to.be.true;
  });

  it('should focus the textarea when clicking on the label', async () => {
    const el = await fixture<SlTextarea>(html` <l-textarea label="Name"></l-textarea> `);
    const label = el.shadowRoot!.querySelector('[part="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('l-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<SlTextarea>(html` <l-textarea></l-textarea> `);

      expect(el.invalid).to.be.false;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<SlTextarea>(html` <l-textarea required></l-textarea> `);

      expect(el.invalid).to.be.true;
    });

    it('should be invalid when required and after removing disabled ', async () => {
      const el = await fixture<SlTextarea>(html` <l-textarea disabled required></l-textarea> `);

      el.disabled = false;
      await el.updateComplete;

      expect(el.invalid).to.be.true;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<SlTextarea>(html` <l-textarea disabled required></l-textarea> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.invalid).to.be.true;
    });
  });

  describe('when serializing', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><l-textarea name="a" value="1"></l-textarea></form> `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html` <form><l-textarea name="a" value="1"></l-textarea></form> `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });
  });
});
