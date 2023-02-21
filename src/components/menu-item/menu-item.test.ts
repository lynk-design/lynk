import { clickOnElement } from '../../internal/test';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkMenuItem from './menu-item';

describe('<lynk-menu-item>', () => {
  it.skip('should pass accessibility tests', async () => {
    const el = await fixture<LynkMenuItem>(html`
      <lynk-menu>
        <lynk-menu-item>Item 1</lynk-menu-item>
        <lynk-menu-item>Item 2</lynk-menu-item>
        <lynk-menu-item>Item 3</lynk-menu-item>
        <lynk-divider></lynk-divider>
        <lynk-menu-item type="checkbox" checked>Checked</lynk-menu-item>
        <lynk-menu-item type="checkbox">Unchecked</lynk-menu-item>
      </lynk-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<LynkMenuItem>(html` <lynk-menu-item>Test</lynk-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<LynkMenuItem>(html` <lynk-menu-item disabled>Test</lynk-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should not emit the click event when disabled', async () => {
    const el = await fixture<LynkMenuItem>(html` <lynk-menu-item disabled>Test</lynk-menu-item> `);
    const clickHandler = sinon.spy();
    el.addEventListener('click', clickHandler);
    await clickOnElement(el);
    await el.updateComplete;

    expect(clickHandler).to.not.have.been.called;
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<LynkMenuItem>(html` <lynk-menu-item>Test</lynk-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<LynkMenuItem>(html` <lynk-menu-item>Text</lynk-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<LynkMenuItem>(html`
      <lynk-menu>
        <lynk-menu-item inert>Item 1</lynk-menu-item>
        <lynk-menu-item>Item 2</lynk-menu-item>
        <lynk-menu-item>Item 3</lynk-menu-item>
      </lynk-menu>
    `);
    const item1 = menu.querySelector('lynk-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });
});
