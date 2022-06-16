import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './spinner.styles';

/**
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
@customElement('lynk-spinner')
export default class LynkSpinner extends LitElement {
  static styles = styles;

  render() {
    return html`
      <svg part="base" class="lynk-spinner" role="status">
        <circle class="lynk-spinner__track"></circle>
        <circle class="lynk-spinner__indicator"></circle>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-spinner': LynkSpinner;
  }
}
