import { expect, fixture, html } from '@open-wc/testing';
import type LynkSpinner from './spinner';

describe('<lynk-spinner>', () => {
  let el: LynkSpinner;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture<LynkSpinner>(html` <lynk-spinner></lynk-spinner> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should have a role of "status".', () => {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
      const base = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(base).have.attribute('role', 'progressbar');
    });
  });
});
