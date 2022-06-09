import { expect, fixture, html } from '@open-wc/testing';
import type LynkBadge from './badge';

describe('<l-badge>', () => {
  let el: LynkBadge;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture<LynkBadge>(html` <l-badge>Badge</l-badge> `);
    });

    it('should pass accessibility tests with a role of status on the base part.', async () => {
      await expect(el).to.be.accessible();

      const part = el.shadowRoot!.querySelector('[part="base"]')!;
      expect(part.getAttribute('role')).to.eq('status');
    });

    it('should render the child content provided', () => {
      expect(el.innerText).to.eq('Badge');
    });

    it('should default to square styling, with the primary color', () => {
      const part = el.shadowRoot!.querySelector('[part="base"]')!;
      expect(part.classList.value.trim()).to.eq('l-badge l-badge--primary');
    });
  });

  describe('when provided a pill parameter', () => {
    before(async () => {
      el = await fixture<LynkBadge>(html` <l-badge pill>Badge</l-badge> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should append the pill class to the classlist to render a pill', () => {
      const part = el.shadowRoot!.querySelector('[part="base"]')!;
      expect(part.classList.value.trim()).to.eq('l-badge l-badge--primary l-badge--pill');
    });
  });

  describe('when provided a pulse parameter', () => {
    before(async () => {
      el = await fixture<LynkBadge>(html` <l-badge pulse>Badge</l-badge> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should append the pulse class to the classlist to render a pulse', () => {
      const part = el.shadowRoot!.querySelector('[part="base"]')!;
      expect(part.classList.value.trim()).to.eq('l-badge l-badge--primary l-badge--pulse');
    });
  });

  ['primary', 'success', 'neutral', 'warning', 'danger'].forEach(type => {
    describe(`when passed a type attribute ${type}`, () => {
      before(async () => {
        el = await fixture<LynkBadge>(html`<l-badge type="${type}">Badge</l-badge>`);
      });

      it('should pass accessibility tests', async () => {
        await expect(el).to.be.accessible();
      });

      it('should default to square styling, with the primary color', () => {
        const part = el.shadowRoot!.querySelector('[part="base"]')!;
        expect(part.classList.value.trim()).to.eq(`l-badge l-badge--${type}`);
      });
    });
  });
});
