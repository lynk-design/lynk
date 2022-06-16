import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type LynkDivider from './divider';

describe('<lynk-divider>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<LynkDivider>(html` <lynk-divider></lynk-divider> `);
      await expect(el).to.be.accessible();
    });

    it('default properties', async () => {
      const el = await fixture<LynkDivider>(html` <lynk-divider></lynk-divider> `);

      expect(el.vertical).to.be.false;
      expect(el.getAttribute('role')).to.equal('separator');
      expect(el.getAttribute('aria-orientation')).to.equal('horizontal');
    });
  });

  describe('vertical property change ', () => {
    it('aria-orientation is updated', async () => {
      const el = await fixture<LynkDivider>(html` <lynk-divider></lynk-divider> `);

      el.vertical = true;
      await elementUpdated(el);

      expect(el.getAttribute('aria-orientation')).to.equal('vertical');
    });
  });
});
