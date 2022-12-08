import { expect, fixture, html } from '@open-wc/testing';
import type LynkMenuLabel from './menu-label';

describe('<lynk-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<LynkMenuLabel>(html` <lynk-menu-label>Test</lynk-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
