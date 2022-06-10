import { css } from 'lit';
import shared from '../../styles/components/_shared.scss';
import styles from './_dropdown.scss';

export default css`
  ${shared}

  :host {
    display: inline-block;
  }

  ${styles}
`;
