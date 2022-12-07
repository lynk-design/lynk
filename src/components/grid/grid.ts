import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './grid.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @since 1.0
 * @status experimental
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --width - Set a custom width for the grid container element. Defaults to 100%.
 */
@customElement('lynk-grid')
export default class LynkGrid extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** A container of grid items */
  @property({ type: Boolean, reflect: true }) container = false;

  /** A singular grid item */
  @property({ type: Boolean, reflect: true }) item = false;

  /** The flow direction of grid items, requries container property being set */
  @property({ reflect: true }) direction?: 'row' | 'row-reverse' | 'column' | 'column-revers';

  /** How to justify grid items, requires container property */
  @property({ reflect: true }) justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /** Hot to align grid items to eachother, requires container property */
  @property({ reflect: true }) align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  /** The width of a grid item. Requires item property  being set. This can be a single string or an array. */
  @property({ reflect: true }) span? : string;

  /** The space between grid items. Uses spacing token sizes.  */
  @property({ reflect: true }) gap: '0' | 'tiny' | '2x-small' | 'x-small' | 'small' | 'base' | 'medium' | 'large' | 'x-large' | '2x-large' | '3x-large' = 'base';

  getBreakpointClasses() {
    return this.span ? this.span.split(',').map(key => `span--${key.trim()}`).join(' ') : '';
  };

  render() {
    const containerClass = this.container ? 'lynk-grid' : null;
    const directionClass = this.direction && this.container ? 'lynk-grid--' + this.direction : null;
    const justifyClass = this.justify && this.container ? 'lynk-grid--justify-' + this.justify : null;
    const alignClass = this.align && this.container ? 'lynk-grid--align-' + this.align : null;
    const itemClass = this.item ? 'lynk-grid__item' : null;
    const spanClass = this.span && this.item ? this.getBreakpointClasses() : null;

    const classList = [containerClass, directionClass, justifyClass, alignClass, itemClass, spanClass];

    return html`
      <div part="base" class="${classList.join(' ')}" style="--gap: var(--lynk-spacing-${this.gap})">
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
