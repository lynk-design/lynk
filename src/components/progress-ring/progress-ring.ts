import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import LynkElement from '../../internal/lynk-element';
import styles from './progress-ring.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Progress rings are used to show the progress of a determinate operation in a circular fashion.
 *
 * @since 1.0
 * @status stable
 *
 * @slot - A label to show inside the ring.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart label - The progress ring label.
 *
 * @cssproperty --size - The diameter of the progress ring (cannot be a percentage).
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-width - The width of the indicator. Defaults to the track width.
 * @cssproperty --indicator-color - The indicator color.
 * @cssproperty --indicator-transition-duration - The duration of the indicator's transition when the value changes.
 */
@customElement('lynk-progress-ring')
export default class LynkProgressRing extends LynkElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  @query('.lynk-progress-ring__indicator') indicator: SVGCircleElement;

  @state() indicatorOffset: string;

  /** The current progress, 0 to 100. */
  @property({ type: Number, reflect: true }) value = 0;

  /** A custom label for the progress ring's aria label. */
  @property() label = '';

  updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);

    //
    // This block is only required for Safari because it doesn't transition the circle when the custom properties
    // change, possibly because of a mix of pixel + unit-less values in the calc() function. It seems like a Safari bug,
    // but I couldn't pinpoint it so this works around the problem.
    //
    if (changedProps.has('value')) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue('r'));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (this.value / 100) * circumference;

      this.indicatorOffset = `${offset}px`;
    }
  }

  render() {
    return html`
      <div
        part="base"
        class="lynk-progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term('progress')}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="lynk-progress-ring__image">
          <circle class="lynk-progress-ring__track"></circle>
          <circle class="lynk-progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot part="label" class="lynk-progress-ring__label"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-progress-ring': LynkProgressRing;
  }
}
