import { css } from 'lit';
import shared from '../../styles/components/_shared.scss';
import styles from './_tooltip.scss';

export default css`
  ${shared}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  ${styles}
`;
