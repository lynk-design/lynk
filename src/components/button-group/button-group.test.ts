import { expect, fixture, html, elementUpdated } from '@open-wc/testing';
import type SlButtonGroup from './button-group';

describe('<l-button-group>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const group = await fixture<SlButtonGroup>(html`
        <l-button-group>
          <l-button>Button 1 Label</l-button>
          <l-button>Button 2 Label</l-button>
          <l-button>Button 3 Label</l-button>
        </l-button-group>
      `);
      await expect(group).to.be.accessible();
    });

    it('default label empty', async () => {
      const group = await fixture<SlButtonGroup>(html`
        <l-button-group>
          <l-button>Button 1 Label</l-button>
          <l-button>Button 2 Label</l-button>
          <l-button>Button 3 Label</l-button>
        </l-button-group>
      `);
      expect(group.label).to.equal('');
    });
  });

  describe('slotted button classes', () => {
    it('slotted buttons have the right classes applied based on their order', async () => {
      const group = await fixture<SlButtonGroup>(html`
        <l-button-group>
          <l-button>Button 1 Label</l-button>
          <l-button>Button 2 Label</l-button>
          <l-button>Button 3 Label</l-button>
        </l-button-group>
      `);

      const allButtons = group.querySelectorAll('l-button');
      const hasGroupClass = Array.from(allButtons).every(button =>
        button.classList.contains('l-button-group__button')
      );
      expect(hasGroupClass).to.be.true;

      expect(allButtons[0]).to.have.class('l-button-group__button--first');
      expect(allButtons[1]).to.have.class('l-button-group__button--inner');
      expect(allButtons[2]).to.have.class('l-button-group__button--last');
    });
  });

  describe('focus and blur events', () => {
    it('toggles focus class to slotted buttons on focus/blur', async () => {
      const group = await fixture<SlButtonGroup>(html`
        <l-button-group>
          <l-button>Button 1 Label</l-button>
          <l-button>Button 2 Label</l-button>
          <l-button>Button 3 Label</l-button>
        </l-button-group>
      `);

      const allButtons = group.querySelectorAll('l-button');
      allButtons[0].dispatchEvent(new FocusEvent('focusin', { bubbles: true }));

      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('l-button-group__button--focus')).to.be.true;

      allButtons[0].dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('l-button-group__button--focus')).not.to.be.true;
    });
  });

  describe('mouseover and mouseout events', () => {
    it('toggles hover class to slotted buttons on mouseover/mouseout', async () => {
      const group = await fixture<SlButtonGroup>(html`
        <l-button-group>
          <l-button>Button 1 Label</l-button>
          <l-button>Button 2 Label</l-button>
          <l-button>Button 3 Label</l-button>
        </l-button-group>
      `);

      const allButtons = group.querySelectorAll('l-button');

      allButtons[0].dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('l-button-group__button--hover')).to.be.true;

      allButtons[0].dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
      await elementUpdated(allButtons[0]);
      expect(allButtons[0].classList.contains('l-button-group__button--hover')).not.to.be.true;
    });
  });
});
