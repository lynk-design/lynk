import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import { LocalizeController } from '../../utilities/localize';
import styles from './spinner.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 *
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
export default class LynkSpinner extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  render() {
    return html`
      <svg part="base" class="lynk-spinner" role="progressbar" aria-valuetext=${this.localize.term('loading')}>
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
