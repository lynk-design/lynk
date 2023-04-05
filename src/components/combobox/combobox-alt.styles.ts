import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  [hidden] {
    display: none;
  }

  :host([loading]) lynk-input lynk-icon {
    animation-name: spin;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }

  lynk-dropdown {
    display: block;
  }

  lynk-input lynk-icon[slot=suffix] {
    padding-right: 0;
    margin-right: var(--lynk-input-spacing-medium);
  }
`;
