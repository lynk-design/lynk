import { clickOnElement } from '../../internal/test';
import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkNavItem from './nav-item';

describe('<lynk-nav-item>', () => {
  let navItem: LynkNavItem;
  let parentItem: LynkNavItem;

  beforeEach(async () => {
    navItem = await fixture(html` <lynk-nav-item>Item 1</lynk-nav-item> `);
    parentItem = await fixture(html`
      <lynk-nav-item>
        Parent Item
        <lynk-nav-item>Child 1</lynk-nav-item>
        <lynk-nav-item>Child 1</lynk-nav-item>
      </lynk-nav-item>
    `);
  });

  it('should render a component', () => {
    expect(navItem).to.exist;
    expect(parentItem).to.exist;

    expect(navItem).to.have.attribute('role', 'menuitem');
    expect(navItem).to.have.attribute('aria-disabled', 'false');
  });

  it('default values are set correctly', () => {
    expect(navItem.value).to.equal('');
    expect(navItem.href).to.equal('');
    expect(navItem.depth).to.equal(0);
    expect(navItem.isParent).to.equal(false);
    expect(navItem.isChild).to.equal(false);
    expect(navItem.disabled).to.equal(false);
    expect(navItem.selected).to.equal(false);
    expect(navItem.expanded).to.equal(false);
  });

  describe('when href is present', () => {
    it('should render as an <a>', async () => {
      const el = await fixture<HTMLFormElement>(html` <lynk-nav-item href="some/path" disabled>Label</lynk-nav-item> `);
      expect(el.shadowRoot!.querySelector('a')).to.exist;
      expect(el.shadowRoot!.querySelector('button')).not.to.exist;
    });
  });

  describe('when it contains child items', () => {
    it('should set isParent to true', () => {
      // Assert
      expect(parentItem.isParent).to.be.true;
    });

    it('should set the aria-expanded attribute', () => {
      expect(parentItem).to.have.attribute('aria-expanded', 'false');
    });
  });

  describe('when it is a child item', () => {
    it('should set isChild to true', () => {
      // Arrange
      const childItem = parentItem.querySelector('lynk-nav-item');
      // Assert
      expect(childItem.isChild).to.be.true;
    });
    it('should set depth to correct level', () => {
      // Arrange
      const childItem = parentItem.querySelector('lynk-nav-item');
      // Assert
      expect(childItem.depth).to.eq(1);
    });
  });

  describe('when the user clicks the parent nav item', () => {
    describe('and the item is collapsed', () => {
      it('should emit on:expand and after:expand events', async () => {
        // Arrange
        const expandSpy = sinon.spy();
        const afterExpandSpy = sinon.spy();

        parentItem.addEventListener('on:expand', expandSpy);
        parentItem.addEventListener('after:expand', afterExpandSpy);

        // Act
        parentItem.expanded = true;
        await waitUntil(() => expandSpy.calledOnce);
        await waitUntil(() => afterExpandSpy.calledOnce);

        // Assert
        expect(expandSpy).to.have.been.calledOnce;
        expect(afterExpandSpy).to.have.been.calledOnce;
      });
    });

    describe('and the item is expanded', () => {
      it('should emit on:collapse and after:collapse events', async () => {
        // Arrange
        const collapseSpy = sinon.spy();
        const afterCollapseSpy = sinon.spy();

        parentItem.addEventListener('on:collapse', collapseSpy);
        parentItem.addEventListener('after:collapse', afterCollapseSpy);

        parentItem.expanded = true;
        await oneEvent(parentItem, 'after:expand');

        // Act
        parentItem.expanded = false;
        await waitUntil(() => collapseSpy.calledOnce);
        await waitUntil(() => afterCollapseSpy.calledOnce);

        // Assert
        expect(collapseSpy).to.have.been.calledOnce;
        expect(afterCollapseSpy).to.have.been.calledOnce;
      });

      describe('and the item is disabled', () => {
        it('should not expand', async () => {
          // Arrange
          parentItem.disabled = true;

          // Act
          await clickOnElement(parentItem);
          await parentItem.updateComplete;

          // Assert
          expect(parentItem).not.to.have.attribute('expanded');
          expect(parentItem).to.have.attribute('aria-expanded', 'false');
        });
      });
    });
    it('should not bubble up clicks', async () => {
      const handleClick = sinon.spy();
      parentItem.addEventListener('click', handleClick);
      await clickOnElement(parentItem);
      await parentItem.updateComplete;

      expect(handleClick).not.to.have.been.called;
    });
  });

  describe('when the item is disabled', () => {
    it('should update the aria-disabled attribute', async () => {
      // Act
      navItem.disabled = true;
      await navItem.updateComplete;

      // Assert
      expect(navItem).to.have.attribute('aria-disabled', 'true');
    });
  });
});
