import moment from 'moment';

import { html, LitElement } from 'lit';
import {
  customElement,
  property,
  // query,
  // state,
} from 'lit/decorators.js';

// import { range } from 'lit/directives/range.js';
// import { map } from 'lit/directives/map.js';
// import { classMap } from 'lit/directives/class-map.js';
// import { ifDefined } from 'lit/directives/if-defined.js';
// import { live } from 'lit/directives/live.js';

// import { emit } from '../../internal/event';
// import { FormSubmitController } from '../../internal/form';
// import { watch } from '../../internal/watch';
import styles from './calendar.styles';

export enum CalendarMode {
  DAY,
  WEEK,
  MONTH,
}

interface IDay {
  name: string;
  date: moment.Moment;
  day: number;
  isSelectedMonth: boolean;
  isToday: boolean;
  isPast: boolean;
}


@customElement('lynk-calendar')
export default class LynkCalendar extends LitElement {
  static styles = styles;
  @property()
  month: number;

  @property()
  year: number;

  @property()
  date: moment.Moment;

  @property()
  dayNameFormat = 'dddd';

  @property()
  use24Hour = false;

  @property()
  interval = 60;

  @property()
  mode: CalendarMode = CalendarMode.WEEK;

  public today: moment.Moment;

  render() {
    const week = this.getWeek(this.date);

    return html`
      <div role="grid">
        <div role="presentation" class="lynk-calendar__header">
          ${this.getHeader(week)}
        </div>
        <div role="presentation" class="lynk-calendar__content">
          <div>
            <div class="lynk-calendar__content-sidebar">
              ${this.getSidebar()}
            </div>
            <div class="lynk-calendar__content-body">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.today = moment().startOf('day');

    if (!this.month) {
      this.month = this.today.month();
    }

    if (!this.year) {
      this.year = this.today.year();
    }

    if (!this.date) {
      this.date = this.today;
    }
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
      ${week.map(day => html`
        <div class="lynk-calendar__weekday">
          <div class="lynk-calendar__weekday-name">
            ${day.name}
          </div>
          <div class="lynk-calendar__weekday-date">
            ${day.date}
          </div>
        </div>
      `)}
    `;
  }

  private getSidebar() {
    const intervals = (24* 60) / this.interval;
    const time = this.today.clone();
    const timeBreaks: string[] = [];

    for (let i = 0; i < intervals; i++) {
      timeBreaks.push(time.format(this.use24Hour ? 'HH:mm' : 'hh:mm A'));
      time.add(this.interval, 'minutes');
    }

    return html`
      ${timeBreaks.map(t => html`
        <div class="lynk-calendar__time">
          <span>${t}</span>
        </div>
      `)}
    `;
  }

  private getWeek(date: moment.Moment): IDay[] {
    const day = date.startOf('week');
    const selectedMonth = date.month();
    const week: IDay[] = [];

    let i = 0;

    while (i < 7) {
      week.push({
        name:            day.format(this.dayNameFormat),
        date:            day.clone(),
        day:             day.day(),
        isSelectedMonth: day.month() === selectedMonth,
        isToday:         day.isSame(this.today),
        isPast:          day.isBefore(this.today),
      });

      day.add(1, 'day');
      i++;
    }

    return week;
  }

  // private getDay() {
  //   return html`
  //     <div class="lynk-calendar__day">
  //     </div>
  //   `;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-calendar': LynkCalendar;
  }
}
