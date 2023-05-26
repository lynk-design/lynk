import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './stack.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Stacks are a fundamental building block for laying out and aligning small bits of content or simple components in a vertical or horizontal space.
 *
 * @since 1.0
 * @status stable
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty [--width=100%] - Customize the width of the stack group.
 * @cssproperty [--height=auto] - Customize the width of the stack group.
 * @cssproperty [--gap=var(--lynk-spacing-small)] - Customize the gap of the stack group.
 * @cssproperty [--margin=0] - Customize the margin of the stack group.
 */
@customElement('lynk-stack')
export default class LynkStack extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** Stack items horizontaly */
  @property({ type: Boolean, reflect: true }) horizontal = false;

  /** Reverse the order of stack items */
  @property({ type: Boolean, reflect: true }) reverse = false;

  /** How to justify stack items */
  @property({ reflect: true }) justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /** How to align stack items to eachother */
  @property({ reflect: true }) align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  /** How to wrap the stack */
  @property({ type: Boolean, reflect: true }) wrap = false;

  /** The space between stack items. Use spacing tokens or any custom size. */
  @property({ type: String, reflect: true }) gap = 'var(--lynk-spacing-small)';

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          'stack': true,
          'stack--horizontal': this.horizontal,
          'stack--reverse': this.reverse,
          'stack--align-start': this.align === 'start',
          'stack--align-center': this.align === 'center',
          'stack--align-end': this.align === 'end',
          'stack--align-stretch': this.align === 'stretch',
          'stack--align-baseline': this.align === 'baseline',
          'stack--justify-start': this.justify === 'start',
          'stack--justify-center': this.justify === 'center',
          'stack--justify-end': this.justify === 'end',
          'stack--justify-between': this.justify === 'between',
          'stack--justify-around': this.justify === 'around',
          'stack--justify-evenly': this.justify === 'evenly',
          'stack--wrap': this.wrap,
        })}
        style="--gap: ${this.gap};"
      ></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-stack': LynkStack;
  }
}
