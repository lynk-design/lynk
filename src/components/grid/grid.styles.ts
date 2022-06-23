import { css } from 'lit';
import shared from '../../styles/components/_shared.scss';
import styles from './_grid.scss';

export default css`
  ${shared}

  :host {
    display: content;
    width: var(--width, 100%);
  }

  ${styles}
`;
