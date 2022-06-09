import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './badge.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The badge's content.
 *
 * @csspart base | .l-badge - The component's internal wrapper.
 */
@customElement('l-badge')
export default class LynkBadge extends LitElement {
  static styles = styles;

  /** The badge's variant. */
  @property({ reflect: true }) type: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          'l-badge': true,
          'l-badge--primary': this.type === 'primary',
          'l-badge--success': this.type === 'success',
          'l-badge--neutral': this.type === 'neutral',
          'l-badge--warning': this.type === 'warning',
          'l-badge--danger': this.type === 'danger',
          'l-badge--pill': this.pill,
          'l-badge--pulse': this.pulse
        })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-badge': LynkBadge;
  }
}
