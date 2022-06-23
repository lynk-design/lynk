import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './grid.styles';

/**
 * @since 1.0
 * @status experimental
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --width - Set a custom width for the entire grid. Defaults to 100%..
 */
@customElement('lynk-grid')
export default class LynkGrid extends LitElement {
  static styles = styles;

  /** The flow direction of grid items */
  @property({ reflect: true }) direction: 'row' | 'row-reverse' | 'column' | 'column-revers' = null;

  /** The alert's type (color). */
  @property({ reflect: true }) justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = null;

  /** The alert's type (color). */
  @property({ reflect: true }) align: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = null;

  render() {
    const directionClass = this.direction ? 'lynk-grid--' + this.direction : '';
    const justifyClass = this.justify ? 'lynk-grid--justify-' + this.justify : '';
    const alignClass = this.align ? 'lynk-grid--align-' + this.align : '';

    return html`
      <div
        part="base"
        class="lynk-grid ${directionClass} ${justifyClass} ${alignClass}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-grid': LynkGrid;
  }
}
