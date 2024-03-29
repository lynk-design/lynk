import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .lynk-form-control {
    border: none;
    padding: 0;
    margin: 0;
  }

  .lynk-form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--lynk-input-required-content);
    margin-inline-start: var(--lynk-input-required-content-offset);
  }

  .radio-group__control {
    display: flex;
    flex-direction: column;
    gap: var(--lynk-spacing-tiny);
  }

  .radio-group__control--has-button-group {
    display: contents;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
