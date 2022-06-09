import { expect, fixture, html } from '@open-wc/testing';
import type SlBreadcrumb from './breadcrumb';

describe('<l-breadcrumb>', () => {
  let el: SlBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <l-breadcrumb>
          <l-breadcrumb-item>Catalog</l-breadcrumb-item>
          <l-breadcrumb-item>Clothing</l-breadcrumb-item>
          <l-breadcrumb-item>Women's</l-breadcrumb-item>
          <l-breadcrumb-item>Shirts &amp; Tops</l-breadcrumb-item>
        </l-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should render l-icon as separator', () => {
      expect(el.querySelectorAll('l-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('l-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <l-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <l-breadcrumb-item>First</l-breadcrumb-item>
          <l-breadcrumb-item>Second</l-breadcrumb-item>
          <l-breadcrumb-item>Third</l-breadcrumb-item>
        </l-breadcrumb>
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

    it('should replace the l-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('l-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <l-breadcrumb>
          <l-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </l-breadcrumb-item>
          <l-breadcrumb-item>First</l-breadcrumb-item>
          <l-breadcrumb-item>Second</l-breadcrumb-item>
          <l-breadcrumb-item>Third</l-breadcrumb-item>
        </l-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<SlBreadcrumb>(html`
        <l-breadcrumb>
          <l-breadcrumb-item>First</l-breadcrumb-item>
          <l-breadcrumb-item>Second</l-breadcrumb-item>
          <l-breadcrumb-item>Third</l-breadcrumb-item>
          <l-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </l-breadcrumb-item>
        </l-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });
  });
});
