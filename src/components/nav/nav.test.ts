import { clickOnElement } from '../../internal/test';
import { expect, fixture, html, triggerBlurFor, triggerFocusFor } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkNav from './nav';
import type LynkNavItem from '../nav-item/nav-item';

describe('<lynk-nav>', () => {
  let el: LynkNav;

  beforeEach(async () => {
    el = await fixture(html`
      <lynk-nav>
        <lynk-nav-item>Node 1</lynk-nav-item>
        <lynk-nav-item>Node 2</lynk-nav-item>
        <lynk-nav-item id="expandable">
          Parent Node
          <lynk-nav-item>Child Node 1</lynk-nav-item>
          <lynk-nav-item>
            Child Node 2
            <lynk-nav-item>Child Node 2 - 1</lynk-nav-item>
            <lynk-nav-item>Child Node 2 - 2</lynk-nav-item>
          </lynk-nav-item>
        </lynk-nav-item>
        <lynk-nav-item>Node 3</lynk-nav-item>
      </lynk-nav>
    `);
  });

  it('should render a component', () => {
    expect(el).to.exist;
    expect(el).to.have.attribute('role', 'navigation');
    expect(el).to.have.attribute('tabindex', '0');
  });

  it('should not focus collapsed nav items', async () => {
    // Arrange
    const parentItem = el.children[2] as LynkNavItem;
    const childNode = parentItem.children[1] as LynkNavItem;
    childNode.expanded = true;
    parentItem.expanded = false;

    await el.updateComplete;

    // Act
    const focusableItems = el.getFocusableItems();

    // Assert
    expect(focusableItems).to.have.lengthOf(4);
    expect(focusableItems).not.to.include.all.members([childNode, ...childNode.children]);
    expect(focusableItems).not.to.include.all.members([...parentItem.children]);
  });

  describe('Keyboard navigation', () => {
    describe('when ArrowDown is pressed', () => {
      it('should move the focus to the next nav item', async () => {
        // Arrange
        el.focus();
        await el.updateComplete;

        // Act
        await sendKeys({ press: 'ArrowDown' });

        // Assert
        expect(el).to.have.attribute('tabindex', '-1');
        expect(el.children[0]).to.have.attribute('tabindex', '-1');
        expect(el.children[1]).to.have.attribute('tabindex', '0');
      });
    });

    describe('when ArrowUp is pressed', () => {
      it('should move the focus to the prev nav item', async () => {
        // Arrange
        (el.children[1] as HTMLElement).focus();
        await el.updateComplete;

        // Act
        await sendKeys({ press: 'ArrowUp' });

        // Assert
        expect(el).to.have.attribute('tabindex', '-1');
        expect(el.children[0]).to.have.attribute('tabindex', '0');
        expect(el.children[1]).to.have.attribute('tabindex', '-1');
      });
    });

    describe('when ArrowRight is pressed', () => {
      describe('and nav item is not a parent', () => {
        it('should move the focus to the next nav item', async () => {
          // Arrange
          (el.children[0] as HTMLElement).focus();
          await el.updateComplete;

          // Act
          await sendKeys({ press: 'ArrowRight' });

          // Assert
          expect(el).to.have.attribute('tabindex', '-1');
          expect(el.children[0]).to.have.attribute('tabindex', '-1');
          expect(el.children[1]).to.have.attribute('tabindex', '0');
        });
      });

      describe('and nav item is collapsed', () => {
        it('should expand the nav item', async () => {
          // Arrange
          const parentItem = el.children[2] as LynkNavItem;
          parentItem.focus();
          await el.updateComplete;

          // Act
          await sendKeys({ press: 'ArrowRight' });

          // Assert
          expect(el).to.have.attribute('tabindex', '-1');
          expect(parentItem).to.have.attribute('tabindex', '0');
          expect(parentItem).to.have.attribute('expanded');
        });
      });

      describe('and nav item is expanded', () => {
        it('should move the focus to the next nav item', async () => {
          // Arrange
          const parentItem = el.children[2] as LynkNavItem;
          parentItem.expanded = true;
          parentItem.focus();

          await el.updateComplete;

          // Act
          await sendKeys({ press: 'ArrowRight' });

          // Assert
          expect(el).to.have.attribute('tabindex', '-1');
          expect(parentItem).to.have.attribute('tabindex', '-1');
          expect(parentItem.children[0]).to.have.attribute('tabindex', '0');
        });
      });
    });

    describe('when ArrowLeft is pressed', () => {
      describe('and nav item does not have children', () => {
        it('should move the focus to the prev nav item', async () => {
          // Arrange
          (el.children[1] as HTMLElement).focus();
          await el.updateComplete;

          // Act
          await sendKeys({ press: 'ArrowLeft' });

          // Assert
          expect(el).to.have.attribute('tabindex', '-1');
          expect(el.children[0]).to.have.attribute('tabindex', '0');
          expect(el.children[1]).to.have.attribute('tabindex', '-1');
        });
      });

      describe('and nav item is collapsed', () => {
        it('should move the focus to the prev nav item', async () => {
          // Arrange
          (el.children[2] as HTMLElement).focus();
          await el.updateComplete;

          // Act
          await sendKeys({ press: 'ArrowLeft' });

          // Assert
          expect(el).to.have.attribute('tabindex', '-1');
          expect(el.children[1]).to.have.attribute('tabindex', '0');
          expect(el.children[2]).to.have.attribute('tabindex', '-1');
        });
      });

      describe('and nav item is expanded', () => {
        it('should collapse the nav item', async () => {
          // Arrange
          const parentItem = el.children[2] as LynkNavItem;
          parentItem.expanded = true;
          parentItem.focus();

          await el.updateComplete;

          // Act
          await sendKeys({ press: 'ArrowLeft' });

          // Assert
          expect(el).to.have.attribute('tabindex', '-1');
          expect(parentItem).to.have.attribute('tabindex', '0');
          expect(parentItem).not.to.have.attribute('expanded');
        });
      });
    });

    describe('when Home is pressed', () => {
      it('should move the focus to the first tree item in the tree', async () => {
        // Arrange
        const parentItem = el.children[3] as LynkNavItem;
        parentItem.focus();
        await el.updateComplete;

        // Act
        await sendKeys({ press: 'Home' });

        // Assert
        expect(el).to.have.attribute('tabindex', '-1');
        expect(el.children[0]).to.have.attribute('tabindex', '0');
        expect(el.children[3]).to.have.attribute('tabindex', '-1');
      });
    });

    describe('when End is pressed', () => {
      it('should move the focus to the last tree item in the tree', async () => {
        // Arrange
        const parentItem = el.children[0] as LynkNavItem;
        parentItem.focus();
        await el.updateComplete;

        // Act
        await sendKeys({ press: 'End' });

        // Assert
        expect(el).to.have.attribute('tabindex', '-1');
        expect(el.children[0]).to.have.attribute('tabindex', '-1');
        expect(el.children[3]).to.have.attribute('tabindex', '0');
      });
    });

    describe('when Enter or Space is pressed', () => {
      describe('and selection is a paret', () => {
        it('should expand/collapse the parent node', async () => {
          // Arrange
          const parentItem = el.children[2] as LynkNavItem;
          parentItem.focus();
          await el.updateComplete;

          // Act
          await sendKeys({ press: 'Enter' });

          // Assert
          expect(el).to.have.attribute('tabindex', '-1');
          expect(parentItem).to.have.attribute('tabindex', '0');
          expect(parentItem).to.have.attribute('expanded');

          await sendKeys({ press: ' ' });

          // Assert
          expect(parentItem).to.have.attribute('tabindex', '0');
          expect(parentItem).not.to.have.attribute('expanded');
        });
      });

      describe('and selection is not a parent', () => {
        it('nav should emit on:select with the correct event detail', async () => {
          const navItem = el.children[0];

          const selectHandler = sinon.spy((event: CustomEvent) => {
            const item = event.detail.item as LynkNavItem; // eslint-disable-line
            if (item !== navItem) {
              expect.fail('Incorrect event detail emitted with on:select');
            }
          });

          el.addEventListener('on:select', selectHandler);

          (el.children[0] as HTMLElement).focus();
          await el.updateComplete;

          await sendKeys({ press: 'Enter' });
          await sendKeys({ press: ' ' });

          expect(selectHandler).to.have.been.calledTwice;
        });
      });
    });
  });

  describe('Interactions', () => {
    describe('when the nav is about to receive the focus', () => {
      it('should set the focus to the last focused item', async () => {
        // Arrange
        const nav = el.children[1] as LynkNavItem;
        nav.focus();
        await el.updateComplete;

        // Act
        triggerBlurFor(nav);
        triggerFocusFor(el);

        // Assert
        expect(el).to.have.attribute('tabindex', '-1');
        expect(nav).to.have.attribute('tabindex', '0');
      });
    });

    describe('when the user clicks on a nav item', () => {
      describe('and item is not a parent', () => {
        it('nav should emit on:select with the correct event detail', async () => {
          const navItem = el.children[0];

          const selectHandler = sinon.spy((event: CustomEvent) => {
            const item = event.detail.item as LynkNavItem; // eslint-disable-line
            if (item !== navItem) {
              expect.fail('Incorrect event detail emitted with on:select');
            }
          });

          el.addEventListener('on:select', selectHandler);

          (el.children[0] as HTMLElement).focus();
          await el.updateComplete;

          await clickOnElement(navItem);

          expect(selectHandler).to.have.been.calledOnce;
        });
      });

      describe('and item is a parent', () => {
        it('should expand/collapse a parent node', async () => {
          // Arrange
          const parentItem = el.children[2] as LynkNavItem;
          parentItem.click();
          await el.updateComplete;

          // Assert
          expect(parentItem).to.have.attribute('expanded');
        });
        it('nav should not emit on:select when expanding or collapsing children list', async () => {
          const parentItem = el.children[2] as LynkNavItem;

          const selectHandler = sinon.spy();

          el.addEventListener('on:select', selectHandler);

          await el.updateComplete;

          await clickOnElement(parentItem);

          expect(selectHandler).to.not.have.been.calledOnce;
        });
      });
    });
  });
});
