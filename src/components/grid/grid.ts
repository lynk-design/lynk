import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './grid.styles';

/**
 * @since 1.0
 * @status experimental
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --container-width - Set a custom width for the grid container element. Defaults to 100%.
 */
@customElement('lynk-grid')
export default class LynkGrid extends LitElement {
  static styles = styles;

  /** A container of grid items */
  @property({ type: Boolean, reflect: true }) container = false;

  /** A singular grid item */
  @property({ type: Boolean, reflect: true }) item = false;

  /** The flow direction of grid items, requries container property being set */
  @property({ reflect: true }) direction: 'row' | 'row-reverse' | 'column' | 'column-revers' = 'row';

  /** How to justify grid items, requires container property */
  @property({ reflect: true }) justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = 'start';

  /** Hot to align grid items to eachother, requires container property */
  @property({ reflect: true }) align: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = 'start';

  /** The width of a singular grid item, requires item property being set */
  @property({ type: String, reflect: true }) span: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' = 'auto';

  render() {
    const containerClass = this.container ? 'lynk-grid' : null;
    const directionClass = this.direction && this.container ? 'lynk-grid--' + this.direction : null;
    const justifyClass = this.justify && this.container ? 'lynk-grid--justify-' + this.justify : null;
    const alignClass = this.align && this.container ? 'lynk-grid--align-' + this.align : null;
    const itemClass = this.item ? 'lynk-grid__item' : null;
    const spanClass = this.span && this.item ? 'lynk-grid__item--span-' + this.span : null;

    const classList = [containerClass, directionClass, justifyClass, alignClass, itemClass, spanClass];

    return html`
      <div
        part="base"
        class="${classList.join(' ')}"
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
