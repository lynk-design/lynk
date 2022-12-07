import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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
 * @csspart base | .lynk-badge - The component's internal wrapper.
 */
@customElement('lynk-badge')
export default class LynkBadge extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** The badge's variant. */
  @property({ reflect: true }) type: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          'lynk-badge': true,
          'lynk-badge--primary': this.type === 'primary',
          'lynk-badge--success': this.type === 'success',
          'lynk-badge--neutral': this.type === 'neutral',
          'lynk-badge--warning': this.type === 'warning',
          'lynk-badge--danger': this.type === 'danger',
          'lynk-badge--pill': this.pill,
          'lynk-badge--pulse': this.pulse
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
