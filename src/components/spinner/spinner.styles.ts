import { css } from 'lit';
import shared from '../../styles/components/_shared.scss';
import styles from './_spinner.scss';

export default css`
  ${shared}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--lynk-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  ${styles}
`;
