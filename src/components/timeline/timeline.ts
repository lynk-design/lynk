import { html, LitElement } from 'lit';
import {
  customElement,
  property,
  query,
  // query,
  // state,
} from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { DateTime } from 'luxon';
import { emit } from 'src/internal/event';
// import { range } from 'lit/directives/range.js';
// import { map } from 'lit/directives/map.js';
// import { classMap } from 'lit/directives/class-map.js';
// import { ifDefined } from 'lit/directives/if-defined.js';
// import { live } from 'lit/directives/live.js';
// import { emit } from '../../internal/event';
// import { FormSubmitController } from '../../internal/form';
// import { watch } from '../../internal/watch';
import styles from './timeline.styles';

export enum TimelineMode {
  DAY,
  WEEK,
  MONTH,
}

interface IDay {
  name: string;
  date: string;
  day: string;
  isSelectedMonth: boolean;
  isToday: boolean;
  isPast: boolean;
}


@customElement('lynk-timeline')
export default class LynkTimeline extends LitElement {
  static styles = styles;

  @query('.lynk-timeline__row')
  private timelineRow!: HTMLElement;

  @property()
  date: string;

  @property()
  dayNameFormat = 'ddd';

  @property()
  use24Hour = false;

  @property()
  intervals = 60;

  @property()
  mode: TimelineMode = TimelineMode.WEEK;

  public today: string;

  render() {
    const week = this.getWeek(this.date);

    return html`
      <div role="grid">
        <div>
          <div role="presentation" class="lynk-timeline__header">
            ${this.getHeader(week)}
          </div>
          <div role="presentation" class="lynk-timeline__content">
            <div>
              <div class="lynk-timeline__sidebar">
                ${this.getSidebar()}
              </div>
              <div class="lynk-timeline__row">
                ${map(week, (w, i) => html`
                  <div class="lynk-timeline__column" data-week=${w.day}>
                    <slot name="column_${i}"></slot>
                  </div>
                `)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private drop(event: DragEvent, week: IDay) {
    event.preventDefault();
    const data = event.dataTransfer?.getData("text");

    console.log('event: ', event)
    console.log('week: ', week)
    console.log('data: ', data)
  }

  connectedCallback() {
    super.connectedCallback();

    this.today = DateTime.now().startOf('day').toISO();

    if (!this.date) {
      this.date = this.today;
    } else {
      this.date = DateTime.fromISO(this.date).toISO();
    }
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    // this.addEventListener('click', this.columnClick);
    this.timelineRow.addEventListener('click', (e: PointerEvent) => {
      const path = e.composedPath();

      console.log('path', path);
      // emit(this, 'on:click');
      const event = new CustomEvent('on:click', {
        detail: {
          path: path[0],
          x: e.offsetX,
          y: e.offsetY,
        }
      });

      this.dispatchEvent(event);
    });

    this.timelineRow.querySelectorAll('lynk-timeline__column').forEach(el => {
      el.addEventListener('drop', (e: DragEvent) => {
        console.log('drop: ', e);
      });
    })
  }

  // get weekdays() {
  //   return Array(7).fill(null).map((_, i) => {
  //     return moment(i, 'e')
  //       .startOf('week')
  //       .isoWeekday(i)
  //       .format(this.dayNameFormat);
  //   });
  // }

  private getHeader(week: IDay[]) {
    return html`
      <div class="lynk-timeline__left-spacer">
      </div>
      <div class="lynk-timeline__weekdays">
      ${week.map(day => html`
        <div class="lynk-timeline__weekday">
          <div class="lynk-timeline__weekday-name">
            ${day.name}
          </div>
          <div class="lynk-timeline__weekday-date">
            ${day.day}
          </div>
        </div>
      `)}
      </div>
    `;
  }

  private getSidebar() {
    const intervals = (24 * 60) / this.intervals;
    let time = DateTime.fromISO(this.today);
    const timeBreaks: string[] = [];

    for (let i = 0; i < intervals; i++) {
      timeBreaks.push(time.toFormat(this.use24Hour ? 'HH:mm' : 'h:mm a'));
      time = time.plus({ minutes: this.intervals });
    }

    return html`
      ${timeBreaks.map(t => html`
        <div class="lynk-timeline__time">
          <span>${t}</span>
        </div>
      `)}
    `;
  }

  private getWeek(date: string): IDay[] {
    const day: DateTime = DateTime.fromISO(date).startOf('week');
    // const selectedMonth = day.month;
    const week: IDay[] = [];
    const today = DateTime.fromISO(this.today);

    let i = 0;
    let _day: DateTime = day;

    while (i < 7) {
      week.push({
        name:            _day.weekdayShort,
        date:            _day.toISO(),
        day:             `${_day.day}`,
        isSelectedMonth: today.hasSame(_day, 'month'),
        isToday:         today.hasSame(_day, 'day'),
        isPast:          _day < DateTime.now(),
      });

      _day = _day.plus({ days: 1});
      i++;
    }

    return week;
  }

  private columnClick() {
    console.log('clicky');
    emit(this, 'on:click');
  }

  // private getDay() {
  //   return html`
  //     <div class="lynk-timeline__day">
  //     </div>
  //   `;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-timeline': LynkTimeline;
  }
}
