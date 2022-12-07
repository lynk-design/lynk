import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import { LocalizeController } from '../../utilities/localize';

interface UnitConfig {
  max: number;
  value: number;
  unit: Intl.RelativeTimeFormatUnit;
}

const availableUnits: UnitConfig[] = [
  { max: 2760000, value: 60000, unit: 'minute' }, // max 46 minutes
  { max: 72000000, value: 3600000, unit: 'hour' }, // max 20 hours
  { max: 518400000, value: 86400000, unit: 'day' }, // max 6 days
  { max: 2419200000, value: 604800000, unit: 'week' }, // max 28 days
  { max: 28512000000, value: 2592000000, unit: 'month' }, // max 11 months
  { max: Infinity, value: 31536000000, unit: 'year' }
];

/**
 * @summary Outputs a localized time phrase relative to the current date and time.
 *
 * @since 1.0
 * @status stable
 */
@customElement('lynk-relative-time')
export default class LynkRelativeTime extends LynkElement {
  private readonly localize = new LocalizeController(this);
  private updateTimeout: number;

  @state() private isoTime = '';
  @state() private relativeTime = '';
  @state() private titleTime = '';

  /** The date from which to calculate time from. */
  @property() date: Date | string;

  /** The formatting style to use. */
  @property() format: 'long' | 'short' | 'narrow' = 'long';

  /**
   * When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
   * "1 day ago" and "in 1 day" will be shown.
   */
  @property() numeric: 'always' | 'auto' = 'auto';

  /** Keep the displayed value up to date as time passes. */
  @property({ type: Boolean }) sync = false;

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.updateTimeout);
  }

  render() {
    const now = new Date();
    const then = new Date(this.date);

    // Check for an invalid date
    if (isNaN(then.getMilliseconds())) {
      this.relativeTime = '';
      this.isoTime = '';
      return '';
    }

    const diff = then.getTime() - now.getTime();
    const { unit, value } = availableUnits.find(singleUnit => Math.abs(diff) < singleUnit.max)!;

    this.isoTime = then.toISOString();
    this.titleTime = this.localize.date(then, {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    });

    this.relativeTime = this.localize.relativeTime(Math.round(diff / value), unit, {
      numeric: this.numeric,
      style: this.format
    });

    // If sync is enabled, update as time passes
    clearTimeout(this.updateTimeout);

    if (this.sync) {
      let nextInterval: number;

      // NOTE: this could be optimized to determine when the next update should actually occur, but the size and cost of
      // that logic probably isn't worth the performance benefit
      if (unit === 'minute') {
        nextInterval = getTimeUntilNextUnit('second');
      } else if (unit === 'hour') {
        nextInterval = getTimeUntilNextUnit('minute');
      } else if (unit === 'day') {
        nextInterval = getTimeUntilNextUnit('hour');
      } else {
        // Cap updates at once per day. It's unlikely a user will reach this value, plus setTimeout has a limit on the
        // value it can accept. https://stackoverflow.com/a/3468650/567486
        nextInterval = getTimeUntilNextUnit('day'); // next day
      }

      this.updateTimeout = window.setTimeout(() => this.requestUpdate(), nextInterval);
    }

    return html` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `;
  }
}

// Calculates the number of milliseconds until the next respective unit changes. This ensures that all components
// update at the same time which is less distracting than updating independently.
function getTimeUntilNextUnit(unit: 'second' | 'minute' | 'hour' | 'day') {
  const units = { second: 1000, minute: 60000, hour: 3600000, day: 86400000 };
  const value = units[unit];
  return value - (Date.now() % value);
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-relative-time': LynkRelativeTime;
  }
}
