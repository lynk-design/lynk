import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import styles from './responsive-media.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The element to receive the aspect ratio. Should be a replaced element, such as `<img>`, `<iframe>`, or `<video>`.
 */
@customElement('lynk-responsive-media')
export default class LynkResponsiveMedia extends LitElement {
  static styles = styles;

  /**
   * The aspect ratio of the embedded media in the format of `width:height`, e.g. `16:9`, `4:3`, or `1:1`. Ratios not in
   * this format will be ignored.
   */
  @property({ attribute: 'aspect-ratio' }) aspectRatio = '16:9';

  /** Determines how content will be resized to fit its container. */
  @property() fit: 'cover' | 'contain' = 'cover';

  render() {
    const split = this.aspectRatio.split(':');
    const x = parseFloat(split[0]);
    const y = parseFloat(split[1]);
    const paddingBottom = !isNaN(x) && !isNaN(y) && x > 0 && y > 0 ? `${(y / x) * 100}%` : '0';

    return html`
      <div
        class=${classMap({
          'lynk-responsive-media': true,
          'lynk-responsive-media--cover': this.fit === 'cover',
          'lynk-responsive-media--contain': this.fit === 'contain'
        })}
        style="padding-bottom: ${paddingBottom}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-responsive-media': LynkResponsiveMedia;
  }
}
