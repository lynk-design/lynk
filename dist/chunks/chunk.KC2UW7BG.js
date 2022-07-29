import {
  component_styles_default
} from "./chunk.XYURGYC6.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/grid/grid.styles.ts
var grid_styles_default = r`
  ${component_styles_default}

  :host {
    display: contents;
    --width: 100%;
    --height: auto;
  }

  .lynk-grid {
    display: flex;
    width: calc(var(--width) + var(--gap));
    height: calc(var(--height) + var(--gap));
    flex-flow: row wrap;
    margin: calc(var(--gap) * -0.5);
  }

  .lynk-grid--row {
    flex-flow: row wrap;
  }

  .lynk-grid--row-reverse {
    flex-flow: row-reverse wrap;
  }

  .lynk-grid--column {
    flex-flow: column wrap;
  }

  .lynk-grid--column-reverse {
    flex-flow: column-reverse wrap;
  }

  .lynk-grid--justify-start {
    justify-content: flex-start;
  }

  .lynk-grid--justify-center {
    justify-content: center;
  }

  .lynk-grid--justify-end {
    justify-content: flex-end;
  }

  .lynk-grid--justify-between {
    justify-content: space-between;
  }

  .lynk-grid--justify-around {
    justify-content: space-around;
  }

  .lynk-grid--justify-evenly {
    justify-content: space-evenly;
  }

  .lynk-grid--align-start {
    align-items: flex-start;
  }

  .lynk-grid--align-center {
    align-items: center;
  }

  .lynk-grid--align-end {
    align-items: flex-end;
  }

  .lynk-grid--align-stretch {
    align-items: stretch;
  }

  .lynk-grid--align-baseline {
    align-items: baseline;
  }

  .lynk-grid__item {
    box-sizing: border-box;
    min-width: 0;
    padding: calc(var(--gap) * 0.5);
  }

  .span--25,
  .span--sm-1,
  .span--1 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .span--50,
  .span--sm-2,
  .span--2 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .span--75,
  .span--sm-3,
  .span--3 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .span--100,
  .span--sm-4,
  .span--4,
  .span--5,
  .span--6,
  .span--7,
  .span--8,
  .span--9,
  .span--10,
  .span--11,
  .span--12,
  .span--13,
  .span--14,
  .span--15,
  .span--16 {
    flex-basis: 100%;
    max-width: 100%;
  }


  @media only screen and (min-width: 768px) {
    .span--md-1,
    .span--1 {
      flex-basis: 12.5%;
      max-width: 12.5%;
    }

    .span--md-2,
    .span--2 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .span--md-3,
    .span--3 {
      flex-basis: 37.5%;
      max-width: 37.5%;
    }

    .span--md-4,
    .span--4 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .span--md-5,
    .span--5 {
      flex-basis: 62.5%;
      max-width: 62.5%;
    }

    .span--md-6,
    .span--6 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .span--md-7,
    .span--7 {
      flex-basis: 87.5%;
      max-width: 87.5%;
    }

    .span--md-8,
    .span--8,
    .span--9,
    .span--10,
    .span--11,
    .span--12,
    .span--13,
    .span--14,
    .span--15,
    .span--16 {
      flex-basis: 100%;
      max-width: 100%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .span--lg-1,
    .span--1 {
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .span--lg-2,
    .span--2 {
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .span--lg-3,
    .span--3 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .span--lg-4,
    .span--4 {
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .span--lg-5,
    .span--5 {
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .span--lg-6,
    .span--6 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .span--lg-7,
    .span--7 {
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .span--lg-8,
    .span--8 {
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .span--lg-9,
    .span--9 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .span--lg-10,
    .span--10 {
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .span--lg-11,
    .span--11 {
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .span--lg-12,
    .span--12,
    .span--13,
    .span--14,
    .span--15,
    .span--16 {
      flex-basis: 100%;
      max-width: 100%;
    }
  }

  /*
  @media only screen and (min-width: 1440px) {
    .span--xl-1,
    .span--1 {
      flex-basis: 6.25%;
      max-width: 6.25%;
    }

    .span--xl-2,
    .span--2 {
      flex-basis: 12.5%;
      max-width: 12.5%;
    }

    .span--xl-3,
    .span--3 {
      flex-basis: 18.75%;
      max-width: 18.75%;
    }

    .span--xl-4,
    .span--4 {
      flex-basis: 25%;
      max-width: 25%;
    }

    .span--xl-5,
    .span--5 {
      flex-basis: 31.25%;
      max-width: 31.25%;
    }

    .span--xl-6,
    .span--6 {
      flex-basis: 37.5%;
      max-width: 37.5%;
    }

    .span--xl-7,
    .span--7 {
      flex-basis: 43.75%;
      max-width: 43.75%;
    }

    .span--xl-8,
    .span--8 {
      flex-basis: 50%;
      max-width: 50%;
    }

    .span--xl-9,
    .span--9 {
      flex-basis: 56.25%;
      max-width: 56.25%;
    }

    .span--xl-10,
    .span--10 {
      flex-basis: 62.5%;
      max-width: 62.5%;
    }

    .span--xl-11,
    .span--11 {
      flex-basis: 68.75%;
      max-width: 68.75%;
    }

    .span--xl-12,
    .span--12 {
      flex-basis: 75%;
      max-width: 75%;
    }

    .span--xl-13,
    .span--13 {
      flex-basis: 81.25%;
      max-width: 81.25%;
    }

    .span--xl-14,
    .span--14 {
      flex-basis: 87.5%;
      max-width: 87.5%;
    }

    .span--xl-15,
    .span--15 {
      flex-basis: 93.75%;
      max-width: 93.75%;
    }

    .span--xl-16,
    .span--16 {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
  */

`;

export {
  grid_styles_default
};
