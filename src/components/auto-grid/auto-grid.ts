import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './auto-grid.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A simple automatic two-dimensional grid-based layout system based off CSS Grid spec.
 *
 * @since 1.0
 * @status experimental
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty [--gap=var(--lynk-spacing-base)] - Customize the gap of the auto-grid group.
 * @cssproperty [--min-size=20rem] - Customize the allowed min-size of the auto-grid items.
 */
@customElement('lynk-auto-grid')
export default class LynkAutoGrid extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** How to justify auto-grid items */
  @property({ reflect: true, attribute: 'auto-size' }) autoSize: 'fit' | 'fill' = 'fit';

  /** How to align auto-grid items to eachother */
  @property({ type: String, reflect: true, attribute: 'min-size' }) minSize = '20rem';

  /** The space between auto-grid items. Use spacing tokens or any custom size. */
  @property({ type: String, reflect: true }) gap = 'var(--lynk-spacing-base)';

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          'auto-grid': true,
          'auto-grid--fit': this.autoSize === 'fit',
          'auto-grid--fill': this.autoSize === 'fill'
        })}
        style="--gap: ${this.gap}; --min-size: ${this.minSize};"
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-auto-grid': LynkAutoGrid;
  }
}
