import {
  r
} from "./chunk.4DJQ63TK.js";

// src/styles/form-control.styles.ts
var form_control_styles_default = r`
  .lynk-form-control .lynk-form-control__label {
    display: none;
  }

  .lynk-form-control .lynk-form-control__help-text {
    display: none;
  }

  /* Label */
  .lynk-form-control--has-label .lynk-form-control__label {
    display: inline-block;
    color: var(--lynk-input-label-color);
    margin-bottom: var(--lynk-spacing-tiny);
  }

  .lynk-form-control--has-label.lynk-form-control--small .lynk-form-control__label {
    font-size: var(--lynk-input-label-font-size-small);
  }

  .lynk-form-control--has-label.lynk-form-control--medium .lynk-form-control__label {
    font-size: var(--lynk-input-label-font-size-medium);
  }

  .lynk-form-control--has-label.lynk-form-control--large .lynk-form-control_label {
    font-size: var(--lynk-input-label-font-size-large);
  }

  /* Help text */
  .lynk-form-control--has-help-text .lynk-form-control__help-text {
    display: block;
    color: var(--lynk-input-help-text-color);
  }

  .lynk-form-control--has-help-text .lynk-form-control__help-text ::slotted(*) {
    margin-top: var(--lynk-spacing-tiny);
  }

  .lynk-form-control--has-help-text.lynk-form-control--small .lynk-form-control__help-text {
    font-size: var(--lynk-input-help-text-font-size-small);
  }

  .lynk-form-control--has-help-text.lynk-form-control--medium .lynk-form-control__help-text {
    font-size: var(--lynk-input-help-text-font-size-medium);
  }

  .lynk-form-control--has-help-text.lynk-form-control--large .lynk-form-control__help-text {
    font-size: var(--lynk-input-help-text-font-size-large);
  }

  /* Feedback States */
  .lynk-form-control--has-error.lynk-form-control--has-label .lynk-form-control__label,
  .lynk-form-control--has-error.lynk-form-control--has-help-text .lynk-form-control__help-text {
    color: var(--lynk-color-danger-500);
  }

  .lynk-form-control--has-warning.lynk-form-control--has-label .lynk-form-control__label,
  .lynk-form-control--has-warning.lynk-form-control--has-help-text .lynk-form-control__help-text {
    color: var(--lynk-color-warning-500);
  }

  .lynk-form-control--has-success.lynk-form-control--has-label .lynk-form-control__label,
  .lynk-form-control--has-success.lynk-form-control--has-help-text .lynk-form-control__help-text {
    color: var(--lynk-color-success-500);
  }
`;

export {
  form_control_styles_default
};
