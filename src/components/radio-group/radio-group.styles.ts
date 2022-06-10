import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .l-radio-group {
    border: solid var(--l-panel-border-width) var(--l-panel-border-color);
    border-radius: var(--l-border-radius-medium);
    padding: var(--l-spacing-large);
    padding-top: var(--l-spacing-x-small);
  }

  .l-radio-group .l-radio-group__label {
    font-family: var(--l-input-font-family);
    font-size: var(--l-input-font-size-medium);
    font-weight: var(--l-input-font-weight);
    color: var(--l-input-color);
    padding: 0 var(--l-spacing-2x-small);
  }

  ::slotted(l-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--l-spacing-2x-small);
  }

  .l-radio-group:not(.l-radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .l-radio-group:not(.l-radio-group--has-fieldset) .l-radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;
