import { css } from 'lit';
import buttonStyles from '../button/button.styles';

export default css`
  ${buttonStyles}

  .lynk-button__prefix,
  .lynk-button__suffix,
  .lynk-button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* fixes a bug where clicking on an icon used in the label doesn't fire the click event  */
  .lynk-button__label::slotted(lynk-icon) {
    pointer-events: none;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;
