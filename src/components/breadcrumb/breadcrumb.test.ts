import { expect, fixture, html } from '@open-wc/testing';
import type LynkBreadcrumb from './breadcrumb';

describe('<lynk-breadcrumb>', () => {
  let el: LynkBreadcrumb;

  describe('when provided a standard list of elynk-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<LynkBreadcrumb>(html`
        <lynk-breadcrumb>
          <lynk-breadcrumb-item>Catalog</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Clothing</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Women's</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Shirts &amp; Tops</lynk-breadcrumb-item>
        </lynk-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should render lynk-icon as separator', () => {
      expect(el.querySelectorAll('lynk-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('lynk-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of lynk-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<LynkBreadcrumb>(html`
        <lynk-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
        </lynk-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the lynk-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('lynk-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of elynk-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<LynkBreadcrumb>(html`
        <lynk-breadcrumb>
          <lynk-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </lynk-breadcrumb-item>
          <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
        </lynk-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });

  describe('when provided a standard list of elynk-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<LynkBreadcrumb>(html`
        <lynk-breadcrumb>
          <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
          <lynk-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </lynk-breadcrumb-item>
        </lynk-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });
});
