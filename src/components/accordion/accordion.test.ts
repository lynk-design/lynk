// cspell:dictionaries lorem-ipsum
import { expect, fixture, html } from '@open-wc/testing';
import type LynkAccordion from './accordion';

describe('<lynk-accordion>', () => {
  let accordion: LynkAccordion;

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
