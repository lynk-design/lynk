import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
  }

  .lynk-page-footer {
    border-radius: var(--lynk-border-radius-large) var(--lynk-border-radius-large) 0 0;
    height: auto;
    background: var(--lynk-color-neutral-100);
    box-shadow: var(--lynk-shadow-large);
    border: 1px solid var(--lynk-color-neutral-200);
    border-bottom: none;
    padding: var(--lynk-spacing-small);
    margin: 0 var(--lynk-spacing-large);
    z-index: var(--lynk-z-index-footer);
    display: grid;
    grid-template-areas: 'primary center secondary';
    grid-template-columns: 1fr 1fr 1fr;
  }

  .lynk-page-footer__primary {
      grid-area: primary;
      display: flex;
      gap: var(--lynk-spacing-x-small);
  }

  .lynk-page-footer__center {
      grid-area: center;
      display: flex;
      justify-self: center;
      justify-content: center;
      align-self: center;
      align-content: center;
      gap: var(--lynk-spacing-x-small);
  }

  .lynk-page-footer__secondary {
      grid-area: secondary;
      display: flex;
      gap: var(--lynk-spacing-x-small);
      justify-content: flex-end;
  }

  @media only screen and (min-width: 1024px) {
      .lynk-page-footer {
          margin: 0 var(--lynk-spacing-x-large);
      }
  }

  @media only screen and (min-width: 1440px) {
      .lynk-page-footer {
          margin: 0 var(--lynk-spacing-2x-large);
      }
  }
`;
