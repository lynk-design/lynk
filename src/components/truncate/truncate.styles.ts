import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --truncate-min-width: 12ch;
    --truncate__start--min-width: 6ch;
  }

  .truncate {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: baseline;
    min-width: var(--truncate-min-width);
  }

  .truncate__start,
  .truncate__end {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline;
  }

  .truncate--end .truncate__start,
  .truncate--middle .truncate__start {
    min-width: var(-truncate__start--min-width);
  }

  .truncate--start .truncate__end {
    min-width: var(-truncate__start--min-width);
    direction: rtl;
  }

  :host([clamp]) .truncate__start {
    white-space: unset;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
  }

  :host([clamp='2']) .truncate--end .truncate__start {
    -webkit-line-clamp: 2;
  }

  :host([clamp='3']) .truncate--end .truncate__start {
    -webkit-line-clamp: 3;
  }

  :host([clamp='4']) .truncate--end .truncate__start {
    -webkit-line-clamp: 4;
  }

  :host([clamp='5']) .truncate--end .truncate__start {
    -webkit-line-clamp: 5;
  }
`;
