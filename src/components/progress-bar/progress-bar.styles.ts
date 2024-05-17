import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    --height: 1rem;
    --track-color: var(--lynk-color-neutral-200);
    --indicator-color: var(--lynk-color-primary-600);
    --label-color: var(--lynk-color-neutral-0);

    display: block;
  }

  .lynk-progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--lynk-border-radius-pill);
    box-shadow: inset var(--lynk-shadow-small);
    overflow: hidden;
  }

  .lynk-progress-bar__indicator {
    height: 100%;
    font-family: var(--lynk-font-sans);
    font-size: 12px;
    font-weight: var(--lynk-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .lynk-progress-bar--indeterminate .lynk-progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .lynk-progress-bar--indeterminate.lynk-progress-bar--rtl .lynk-progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .lynk-progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--lynk-color-neutral-0);
    }

    .lynk-progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;
