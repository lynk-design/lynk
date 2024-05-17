// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type LynkAccordion from './accordion';
import type LynkPanel from './panel';

describe('<lynk-accordion>', () => {
  let accordion: LynkAccordion;
  let panel: LynkPanel;

  beforeEach(async () => {
    accordion = await fixture(html`
      <lynk-accordion>
        <lynk-panel>Node 1</lynk-panel>
        <lynk-panel>Node 2</lynk-panel>
      </lynk-accordion>
    `);
  });

  it('should render a component', () => {
    expect(accordion).to.exist;
  });
});
