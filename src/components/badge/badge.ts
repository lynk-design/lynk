import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './badge.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Badges are used to draw attention and display statuses or counts.
 *
 * @since 1.0
 * @status stable
 *
 * @slot - The badge's content.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --background-color - The badges background and pulse color.
 * @cssproperty --color - The badges text color.
 * @cssproperty --pulse-speed - The badges pulse speed in seconds or ms. Default is 1.5s.
 *
 */
@customElement('lynk-badge')
export default class LynkBadge extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** The badge's variant. */
  @property({ reflect: true }) type?: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          badge: true,
          'badge--primary': this.type === 'primary',
          'badge--success': this.type === 'success',
          'badge--neutral': this.type === 'neutral',
          'badge--warning': this.type === 'warning',
          'badge--danger': this.type === 'danger',
          'badge--pill': this.pill,
          'badge--pulse': this.pulse
        })}
        role="status"
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-badge': LynkBadge;
  }
}
