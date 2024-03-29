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
    padding-left: var(--lynk-page-layout-margin);
    padding-right: var(--lynk-page-layout-margin);
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
    margin: 0 var(--lynk-page-layout-margin);
    min-width: calc(100% - (var(--lynk-page-layout-margin) * 2));
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
    .lynk-page-content,
    .lynk-page-content.lynk-page-content--lg {
      max-width: 968px;
    }
  }

  @media (min-width: 1200px) {
    .lynk-page-content,
    .lynk-page-content.lynk-page-content--xl {
      max-width: 1144px;
    }
  }

  @media (min-width: 1400px) {
    .lynk-page-content,
    .lynk-page-content.lynk-page-content--xxl {
      max-width: 1328px;
    }
  }
`;
