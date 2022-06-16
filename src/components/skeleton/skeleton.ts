import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './skeleton.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @csspart base - The component's internal wrapper.
 * @csspart indicator - The skeleton's indicator which is responsible for its color and animation.
 *
 * @cssproperty --border-radius - The skeleton's border radius.
 * @cssproperty --color - The color of the skeleton.
 * @cssproperty --sheen-color - The sheen color when the skeleton is in its loading state.
 */
@customElement('lynk-skeleton')
export default class LynkSkeleton extends LitElement {
  static styles = styles;

  /** Determines which effect the skeleton will use. */
  @property() effect: 'pulse' | 'sheen' | 'none' = 'none';

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-skeleton': true,
          'lynk-skeleton--pulse': this.effect === 'pulse',
          'lynk-skeleton--sheen': this.effect === 'sheen'
        })}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="lynk-skeleton__indicator"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-skeleton': LynkSkeleton;
  }
}
