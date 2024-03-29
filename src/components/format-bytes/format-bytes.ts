import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize';
import LynkElement from '../../internal/lynk-element';

/**
 * @summary Formats a number as a human readable bytes value.
 *
 * @since 1.0
 * @status stable
 */
@customElement('lynk-format-bytes')
export default class LynkFormatBytes extends LynkElement {
  private readonly localize = new LocalizeController(this);

  /** The number to format in bytes. */
  @property({ type: Number }) value = 0;

  /** The unit to display. */
  @property() unit: 'byte' | 'bit' = 'byte';

  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  @property() display: 'long' | 'short' | 'narrow' = 'short';

  render() {
    if (isNaN(this.value)) {
      return '';
    }

    const bitPrefixes = ['', 'kilo', 'mega', 'giga', 'tera']; // petabit isn't a supported unit
    const bytePrefixes = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];
    const prefix = this.unit === 'bit' ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1000, index)).toPrecision(3));

    return this.localize.number(valueToFormat, {
      style: 'unit',
      unit,
      unitDisplay: this.display
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-format-bytes': LynkFormatBytes;
  }
}
