import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import LynkElement from '../../internal/lynk-element';
import styles from './dot-loader.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://lynk.design/components/dot-loader
 * @since 1.0
 * @status stable
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-color - The color of the indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */
@customElement('lynk-dot-loader')
export default class LynkSpinner extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  render() {
    return html`
      <svg
        part="base"
        class="dot-loader"
        role="progressbar"
        width="24"
        height="12"
        viewBox="0 6 24 12"
        aria-valuetext=${this.localize.term('loading')}
      >
        <circle
          class="dot-loader__circle"
          cx="4"
          cy="12"
          r="3"
        />
        <circle
          class="dot-loader__circle dot-loader__circle--b"
          cx="12"
          cy="12"
          r="3"
        />
        <circle
          class="dot-loader__circle dot-loader__circle--c"
          cx="20"
          cy="12"
          r="3"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-dot-loader': LynkSpinner;
  }
}
