import { elementUpdated, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { registerIconLibrary } from '../../../dist/shoelace.js';
import type LynkIcon from './icon';

const testLibraryIcons = {
  'test-icon1': `
    <svg id="test-icon1">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,
  'test-icon2': `
    <svg id="test-icon2">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,
  'bad-icon': `<div></div>`
};

describe('<l-icon>', () => {
  before(() => {
    registerIconLibrary('test-library', {
      resolver: (name: keyof typeof testLibraryIcons) => {
        // only for testing a bad request
        if (name === ('bad-request' as keyof typeof testLibraryIcons)) {
          return `data:image/svg+xml`;
        }

        if (name in testLibraryIcons) {
          return `data:image/svg+xml,${encodeURIComponent(testLibraryIcons[name])}`;
        }
        return '';
      },
      mutator: (svg: SVGElement) => svg.setAttribute('fill', 'currentColor')
    });
  });

  describe('defaults ', () => {
    it('default properties', async () => {
      const el = await fixture<LynkIcon>(html` <l-icon></l-icon> `);

      expect(el.name).to.be.undefined;
      expect(el.src).to.be.undefined;
      expect(el.label).to.equal('');
      expect(el.library).to.equal('default');
    });

    it('renders pre-loaded system icons and emits l-load event', async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="system"></l-icon> `);
      const listener = oneEvent(el, 'l-load') as Promise<CustomEvent>;

      el.name = 'check-lg';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.exist;
      expect(ev).to.exist;
    });

    it('the icon is accessible', async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="system" name="check-lg"></l-icon> `);
      await expect(el).to.be.accessible();
    });

    it('the icon has the correct default aria attributes', async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="system" name="check-lg"></l-icon> `);
      const rootDiv = el.shadowRoot?.querySelector('div.icon');

      expect(rootDiv?.getAttribute('role')).to.be.null;
      expect(rootDiv?.getAttribute('aria-label')).to.be.null;
      expect(rootDiv?.getAttribute('aria-hidden')).to.equal('true');
    });
  });

  describe('when a label is provided', () => {
    it('the icon has the correct default aria attributes', async () => {
      const fakeLabel = 'a label';
      const el = await fixture<LynkIcon>(html` <l-icon label="${fakeLabel}" library="system" name="check"></l-icon> `);
      const rootDiv = el.shadowRoot?.querySelector('div.icon');

      expect(rootDiv?.getAttribute('role')).to.equal('img');
      expect(rootDiv?.getAttribute('aria-label')).to.equal(fakeLabel);
      expect(rootDiv?.getAttribute('aria-hidden')).to.be.null;
    });
  });

  describe('when a valid src is provided', () => {
    it('the svg is rendered', async () => {
      const fakeId = 'test-src';
      const el = await fixture<LynkIcon>(html` <l-icon></l-icon> `);

      const listener = oneEvent(el, 'l-load');
      el.src = `data:image/svg+xml,${encodeURIComponent(`<svg id="${fakeId}"></svg>`)}`;

      await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.exist;
      expect(el.shadowRoot?.querySelector('svg')?.getAttribute('id')).to.equal(fakeId);
    });
  });

  describe('new library', () => {
    it('renders icons from the new library and emits l-load event', async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="test-library"></l-icon> `);
      const listener = oneEvent(el, 'l-load') as Promise<CustomEvent>;

      el.name = 'test-icon1';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.exist;
      expect(ev.isTrusted).to.exist;
    });

    it('runs mutator from new library', async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="test-library" name="test-icon1"></l-icon> `);
      await elementUpdated(el);

      const svg = el.shadowRoot?.querySelector('svg');
      expect(svg?.getAttribute('fill')).to.equal('currentColor');
    });
  });

  describe('negative cases', () => {
    // using new library so we can test for malformed icons when registered
    it("svg not rendered with an icon that doesn't exist in the library", async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="test-library" name="does-not-exist"></l-icon> `);

      expect(el.shadowRoot?.querySelector('svg')).to.be.null;
    });

    it('emits l-error when the file cant be retrieved', async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="test-library"></l-icon> `);
      const listener = oneEvent(el, 'l-error') as Promise<CustomEvent>;

      el.name = 'bad-request';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.be.null;
      expect(ev).to.exist;
    });

    it("emits l-error when there isn't an svg element in the registered icon", async () => {
      const el = await fixture<LynkIcon>(html` <l-icon library="test-library"></l-icon> `);
      const listener = oneEvent(el, 'l-error') as Promise<CustomEvent>;

      el.name = 'bad-icon';
      const ev = await listener;
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('svg')).to.be.null;
      expect(ev).to.exist;
    });
  });
});
