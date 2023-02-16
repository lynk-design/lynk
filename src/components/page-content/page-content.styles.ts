import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --padding-top: var(--lynk-spacing-large);
    --padding-bottom: var(--lynk-spacing-large);
  }

  .lynk-page-content {
    padding-left: var(--lynk-spacing-large);
    padding-right: var(--lynk-spacing-large);
    padding-top: var(--padding-top);
    padding-bottom: var(--padding-bottom);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .lynk-page-content.lynk-page-content--fluid {
      width: fit-content;
      max-width: unset;
      padding-left: 0;
      padding-right: 0;
      margin: 0 var(--lynk-spacing-large);
      min-width: calc(100% - (var(--lynk-spacing-large) * 2));
  }

  @media (min-width: 588px) {
    .lynk-page-content,
    .lynk-page-content.lynk-page-content--sm {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .lynk-page-content,
    .lynk-page-content.lynk-page-content--md {
      max-width: 720px;
    }
  }

  @media (min-width: 1024px) {
    .lynk-page-content {
      padding-left: var(--lynk-spacing-x-large);
      padding-right: var(--lynk-spacing-x-large);
    }

    .lynk-page-content,
    .lynk-page-content.lynk-page-content--lg {
      max-width: 968px;
    }

    .lynk-page-content.lynk-page-content--fluid {
      margin: 0 var(--lynk-spacing-x-large);
      min-width: calc(100% - (var(--lynk-spacing-x-large) * 2));
    }
  }

  @media (min-width: 1200px) {
    .lynk-page-content,
    .lynk-page-content.lynk-page-content--xl {
      max-width: 1144px;
    }
  }

  @media (min-width: 1400px) {
    .lynk-page-content {
      padding-left: var(--lynk-spacing-2x-large);
      padding-right: var(--lynk-spacing-2x-large);
    }

    .lynk-page-content,
    .lynk-page-content.lynk-page-content--xxl {
      max-width: 1328px;
    }

    .lynk-page-content.lynk-page-content--fluid {
      margin: 0 var(--lynk-spacing-2x-large);
      min-width: calc(100% - (var(--lynk-spacing-2x-large) * 2));
    }
  }


  //   :host {
  //     display: contents;
  //     --padding: var(--lynk-spacing-large) 0;
  // }

  // .lynk-page-content {
  //       margin: 0 var(--lynk-spacing-large);
  //       width: fit-content;
  //       min-width: calc(100% - (var(--lynk-spacing-large) * 2));
  //       padding: var(--padding);
  // }

  // @media only screen and (min-width: 1024px) {
  //     .lynk-page-content {
  //         margin: 0 var(--lynk-spacing-x-large);
  //         min-width: calc(100% - (var(--lynk-spacing-x-large) * 2));
  //     }
  // }

  // @media only screen and (min-width: 1440px) {
  //     .lynk-page-content {
  //         margin: 0 var(--lynk-spacing-2x-large);
  //         min-width: calc(100% - (var(--lynk-spacing-2x-large) * 2));
  //     }
  // }
`;
