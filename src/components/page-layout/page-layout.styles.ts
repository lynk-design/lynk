import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
  }

  .lynk-page-layout {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template:
      'left-sidebar left-inset-sidebar header right-inset-sidebar right-sidebar' min-content
      'left-sidebar left-inset-sidebar main right-inset-sidebar right-sidebar' 1fr
      'left-sidebar footer footer footer right-sidebar' min-content
      / auto auto 1fr auto auto;
  }

  .lynk-page-layout__main {
    grid-area: main;
    display: block;
    overflow: auto;
  }

  .lynk-page-layout__header {
    grid-area: header;
    display: block;
  }

  .lynk-page-layout__footer {
    grid-area: footer;
    display: block;
  }

  .lynk-page-layout__left-sidebar {
    grid-area: left-sidebar;
    display: block;
  }

  .lynk-page-layout__right-sidebar {
    grid-area: right-sidebar;
    display: block;
  }

  .lynk-page-layout__left-inset-sidebar {
    grid-area: left-inset-sidebar;
    display: block;
  }

  .lynk-page-layout__right-inset-sidebar {
    grid-area: right-inset-sidebar;
    display: block;
  }
`;
