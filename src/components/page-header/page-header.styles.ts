import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
  }

  .lynk-page-header {
    margin: 0 var(--lynk-spacing-large);
    padding-top: var(--lynk-spacing-large);
    display: grid;
    grid-template-areas:
        'breadcrumb aux'
        'main controls'
        'tabs tabs';
    grid-template-rows: min-content;
    grid-template-columns: 1fr min-content;
  }

  .lynk-page-header__breadcrumb,
  ::slotted(lynk-breadcrumb) {
      grid-area: breadcrumb;
      margin-bottom: var(--lynk-spacing-small);
  }

  .lynk-page-header__aux-actions {
      grid-area: aux;
      display: flex;
      gap: var(--lynk-spacing-2x-small);
      justify-content: flex-end;
  }

  .lynk-page-header__actions {
      grid-area: controls;
      display: flex;
      width: auto;
      gap: var(--lynk-spacing-2x-small);
      justify-content: flex-end;
      align-self: center;
  }

  .lynk-page-header__details {
      grid-area: main;
      min-width: 320px;
  }

  .lynk-page-header__details::slotted(h1),
  .lynk-page-header__details::slotted(h2),
  .lynk-page-header__details::slotted(h3) {
      margin: var(--lynk-spacing-2x-small) 0;
      font-size: var(--lynk-font-size-2x-large);
      line-height: var(--lynk-line-height-dense);
      font-weight: var(--lynk-font-weight-semibold);
  }

  .lynk-page-header__tabs,
  ::slotted(lynk-tab-group) {
      grid-area: tabs;
      margin-top: var(--lynk-spacing-x-small);
  }

  @media only screen and (min-width: 1024px) {
      .lynk-page-header {
          margin: 0 var(--lynk-spacing-x-large);
      }
  }

  @media only screen and (min-width: 1440px) {
      .lynk-page-header {
          margin: 0 var(--lynk-spacing-2x-large);
      }
  }
`;
