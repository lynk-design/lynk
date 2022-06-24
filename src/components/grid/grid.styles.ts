import { css } from 'lit';
import shared from '../../styles/components/_shared.scss';
import styles from './_grid.scss';

export default css`
  ${shared}

  :host {
    display: contents;
  }

  :host([container]) {
    width: var(--container-width, 100%);
  }

  ${styles}
`;
