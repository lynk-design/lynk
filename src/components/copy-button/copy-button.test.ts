import { expect, fixture, html } from '@open-wc/testing';
import type LynkCopyButton from './copy-button.js';

// We use aria-live to announce labels via tooltips
const ignoredRules = ['button-name'];

describe('<lynk-copy-button>', () => {
  let el: LynkCopyButton;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture(html`<lynk-copy-button value="something"></lynk-copy-button> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
