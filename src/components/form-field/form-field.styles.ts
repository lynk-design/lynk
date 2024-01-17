import { css } from 'lit';

export default css`
  .form-field {
    text-align: left;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-field__control {
    display: flex;
    flex-direction: column;
    gap: var(--lynk-spacing-tiny);
  }

  .form-field .form-field__label {
    display: none;
  }

  .form-field .form-field__help-text {
    display: none;
  }

  /* Label */
  .form-field--has-label .form-field__label {
    display: inline-block;
    color: var(--lynk-input-label-color);
    font-weight: var(--lynk-input-label-font-weight);
    margin-bottom: var(--lynk-spacing-tiny);
  }

  .form-field--focused .form-field__label {
    color: var(--lynk-color-primary-500);
  }

  .form-field--has-label.form-field--small .form-field__label {
    font-size: var(--lynk-input-label-font-size-small);
  }

  .form-field--has-label.form-field--medium .form-field__label {
    font-size: var(--lynk-input-label-font-size-medium);
  }

  .form-field--has-label.form-field--large .form-field_label {
    font-size: var(--lynk-input-label-font-size-large);
  }

  /* Help text */
  .form-field--has-help-text .form-field__help-text {
    display: block;
    color: var(--lynk-input-help-text-color);
    margin-top: var(--lynk-spacing-tiny);
  }

  .form-field--has-help-text .form-field__help-text ::slotted(*) {
    margin-top: var(--lynk-spacing-tiny);
  }

  .form-field--has-help-text.form-field--small .form-field__help-text {
    font-size: var(--lynk-input-help-text-font-size-small);
  }

  .form-field--has-help-text.form-field--medium .form-field__help-text {
    font-size: var(--lynk-input-help-text-font-size-medium);
  }

  .form-field--has-help-text.form-field--large .form-field__help-text {
    font-size: var(--lynk-input-help-text-font-size-large);
  }

  /* Validation States */
  .form-field--has-error.form-field--has-label .form-field__label,
  .form-field--has-error.form-field--has-help-text .form-field__help-text {
    color: var(--lynk-color-danger-500);
  }

  .form-field--has-warning.form-field--has-label .form-field__label,
  .form-field--has-warning.form-field--has-help-text .form-field__help-text {
    color: var(--lynk-color-warning-500);
  }

  .form-field--has-success.form-field--has-label .form-field__label,
  .form-field--has-success.form-field--has-help-text .form-field__help-text {
    color: var(--lynk-color-success-500);
  }
`;
