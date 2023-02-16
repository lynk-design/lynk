import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --gap: var(--lynk-spacing-x-small);
  }

  .lynk-page-header {
    padding-top: var(--lynk-spacing-base);
    display: grid;
    gap: var(--gap);
    grid-template-areas:
        'breadcrumb breadcrumb aux'
        'main main controls'
        'tabs tabs tabs';
    grid-template-rows: min-content;
    grid-template-columns: 1fr min-content;
  }

  .lynk-page-header__breadcrumb,
  ::slotted(lynk-breadcrumb) {
      grid-area: breadcrumb;
  }

  .lynk-page-header__aux {
      grid-area: aux;
      display: flex;
      gap: var(--lynk-spacing-2x-small);
      justify-content: flex-end;
  }

  .lynk-page-header__controls {
      grid-area: controls;
      display: flex;
      width: auto;
      margin-left: auto;
      gap: var(--lynk-spacing-2x-small);
      justify-content: flex-end;
      align-self: center;
  }

  .lynk-page-header__main {
      display: block;
      grid-area: main;
      min-width: max-content;
  }

  .lynk-page-header__main h1,
  .lynk-page-header__main::slotted(h1),
  .lynk-page-header__main::slotted(h2),
  .lynk-page-header__main::slotted(h3) {
      margin: 0;
      font-size: var(--lynk-font-size-2x-large);
      line-height: var(--lynk-line-height-dense);
      font-weight: var(--lynk-font-weight-semibold);
  }

  .lynk-page-header__tabs,
  .lynk-page-header ::slotted(lynk-tab-group) {
      display: block;
      grid-area: tabs;
  }
`;
