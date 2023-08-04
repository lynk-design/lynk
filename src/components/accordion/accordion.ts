import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './accordion.styles';
import LynkPanel from '../panel/panel';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A vertically stacked set of interactive [Panels](/components/panel) that can expand to reveal an associated section of content.
 *
 * @since 1.0
 * @status stable
 *
 */
@customElement('lynk-accordion')
export default class LynkAccordion extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** Allow multiple panels to be open at the same time or automatically collapse other panels */
  @property({ type: Boolean }) multiple = false;

  /** Allow multiple panels to be open at the same time or automatically collapse other panels */
  @property({ reflect: true }) density?: 'flush' | 'compact' | 'comfy';

  /** Allow multiple panels to be open at the same time or automatically collapse other panels */
  @property({ reflect: true }) shape?: 'rounded' | 'square';

  private getAllPanels() {
    return [...this.querySelectorAll<LynkPanel>('lynk-panel')];
  }

  private handlePanelToggle(event: Event) {
    const target = (event.target as HTMLElement).closest<LynkPanel>('lynk-panel')!;
    const panels = this.getAllPanels();

    if (target.disabled) {
      return;
    }

    if (!this.multiple) {
      panels.forEach(panel => (panel.expanded = panel === target));
    }
  }

  /** Expands all panels. */
  async expandAll() {
    const panels = this.getAllPanels();
    panels.forEach(panel => (panel.expanded = true));
  }

  /** Collapses all panels */
  async collapseAll() {
    const panels = this.getAllPanels();
    panels.forEach(panel => (panel.expanded = false));
  }

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          'accordion': true,
          'accordion--square': this.shape === 'square',
          'accordion--flush': this.density === 'flush',
          'accordion--compact': this.density === 'compact',
          'accordion--comfy': this.density === 'comfy',
        })}
        @on:expand=${this.handlePanelToggle}
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-accordion': LynkAccordion;
  }
}
