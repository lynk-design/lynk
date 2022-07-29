import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './stack.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --width - Customize the width of the stack group, defaults to `auto`.
 * @cssproperty --height - Customize the width of the stack group, defaults to `auto`.
 */
@customElement('lynk-stack')
export default class LynkStack extends LitElement {
  static styles = styles;

  /** Stack items horizontaly */
  @property({ type: Boolean, reflect: true }) horizontal = false;

  /** Reverse the order of stack items */
  @property({ type: Boolean, reflect: true }) reverse = false;

  /** How to justify stack items */
  @property({ reflect: true }) justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = 'start';

  /** Hot to align stack items to eachother */
  @property({ reflect: true }) align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = 'start';

  /** The space between stack items. Use spacing tokens or any custom size. */
  @property({ type: String, reflect: true }) gap = 'var(--lynk-spacing-small)';

  render() {
    const horizontalClass = this.horizontal ? 'lynk-stack--horizontal' : null;
    const reverseClass = this.reverse ? 'lynk-stack--reverse' : null;
    const justifyClass = this.justify ? 'lynk-stack--justify-' + this.justify : null;
    const alignClass = this.align ? 'lynk-stack--align-' + this.align : null;

    const classList = [horizontalClass, reverseClass, justifyClass, alignClass];

    return html`
      <div part="base" class="lynk-stack ${classList.join(' ')}" style="--gap: ${this.gap};">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-stack': LynkStack;
  }
}