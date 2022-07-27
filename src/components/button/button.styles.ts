import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  :host([block]) {
    display: block;
  }

  .lynk-button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--lynk-button-border-width);
    font-family: var(--lynk-button-font-family);
    font-weight: var(--lynk-font-weight-bold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--lynk-transition-x-fast) background-color, var(--lynk-transition-x-fast) color,
      var(--lynk-transition-x-fast) border, var(--lynk-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .lynk-button::-moz-focus-inner {
    border: 0;
  }

  .lynk-button:focus {
    outline: none;
  }

  .lynk-button:focus-visible {
    outline: var(--lynk-focus-ring);
    outline-offset: var(--lynk-focus-ring-offset);
  }

  .lynk-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .lynk-button--disabled * {
    pointer-events: none;
  }

  .lynk-button__prefix,
  .lynk-button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .lynk-button__label ::slotted(l-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .lynk-button--standard.lynk-button--default {
    background-color: var(--lynk-color-neutral-0);
    border-color: var(--lynk-color-neutral-300);
    color: var(--lynk-color-neutral-700);
  }

  .lynk-button--standard.lynk-button--default:hover:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-primary-50);
    border-color: var(--lynk-color-primary-300);
    color: var(--lynk-color-primary-700);
  }

  .lynk-button--standard.lynk-button--default:active:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-primary-100);
    border-color: var(--lynk-color-primary-400);
    color: var(--lynk-color-primary-700);
  }

  /* Primary */
  .lynk-button--standard.lynk-button--primary {
    background-color: var(--lynk-color-primary-500);
    border-color: var(--lynk-color-primary-500);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--primary:hover:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-primary-400);
    border-color: var(--lynk-color-primary-400);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--primary:active:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-primary-300);
    border-color: var(--lynk-color-primary-400);
    color: var(--lynk-color-neutral-0);
  }

  /* Success */
  .lynk-button--standard.lynk-button--success {
    background-color: var(--lynk-color-success-600);
    border-color: var(--lynk-color-success-600);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--success:hover:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-success-500);
    border-color: var(--lynk-color-success-500);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--success:active:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-success-600);
    border-color: var(--lynk-color-success-600);
    color: var(--lynk-color-neutral-0);
  }

  /* Neutral */
  .lynk-button--standard.lynk-button--neutral {
    background-color: var(--lynk-color-neutral-500);
    border-color: var(--lynk-color-neutral-500);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--neutral:hover:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-neutral-400);
    border-color: var(--lynk-color-neutral-400);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--neutral:active:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-neutral-500);
    border-color: var(--lynk-color-neutral-500);
    color: var(--lynk-color-neutral-0);
  }

  /* Warning */
  .lynk-button--standard.lynk-button--warning {
    background-color: var(--lynk-color-warning-600);
    border-color: var(--lynk-color-warning-600);
    color: var(--lynk-color-neutral-0);
  }
  .lynk-button--standard.lynk-button--warning:hover:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-warning-500);
    border-color: var(--lynk-color-warning-500);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--warning:active:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-warning-600);
    border-color: var(--lynk-color-warning-600);
    color: var(--lynk-color-neutral-0);
  }

  /* Danger */
  .lynk-button--standard.lynk-button--danger {
    background-color: var(--lynk-color-danger-500);
    border-color: var(--lynk-color-danger-500);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--danger:hover:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-danger-400);
    border-color: var(--lynk-color-danger-400);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--standard.lynk-button--danger:active:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-danger-600);
    border-color: var(--lynk-color-danger-600);
    color: var(--lynk-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .lynk-button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .lynk-button--outline.lynk-button--default {
    border-color: var(--lynk-color-neutral-800);
    color: var(--lynk-color-neutral-800);
  }

  .lynk-button--outline.lynk-button--default:hover:not(.lynk-button--disabled),
  .lynk-button--outline.lynk-button--default.lynk-button--checked:not(.lynk-button--disabled) {
    border-color: var(--lynk-color-neutral-800);
    background-color: var(--lynk-color-neutral-800);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--outline.lynk-button--default:active:not(.lynk-button--disabled) {
    border-color: var(--lynk-color-primary-700);
    background-color: var(--lynk-color-primary-700);
    color: var(--lynk-color-neutral-0);
  }

  /* Primary */
  .lynk-button--outline.lynk-button--primary {
    border-color: var(--lynk-color-primary-600);
    color: var(--lynk-color-primary-600);
  }

  .lynk-button--outline.lynk-button--primary:hover:not(.lynk-button--disabled),
  .lynk-button--outline.lynk-button--primary.lynk-button--checked:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-primary-600);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--outline.lynk-button--primary:active:not(.lynk-button--disabled) {
    border-color: var(--lynk-color-primary-700);
    background-color: var(--lynk-color-primary-700);
    color: var(--lynk-color-neutral-0);
  }

  /* Success */
  .lynk-button--outline.lynk-button--success {
    border-color: var(--lynk-color-success-600);
    color: var(--lynk-color-success-600);
  }

  .lynk-button--outline.lynk-button--success:hover:not(.lynk-button--disabled),
  .lynk-button--outline.lynk-button--success.lynk-button--checked:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-success-600);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--outline.lynk-button--success:active:not(.lynk-button--disabled) {
    border-color: var(--lynk-color-success-700);
    background-color: var(--lynk-color-success-700);
    color: var(--lynk-color-neutral-0);
  }

  /* Neutral */
  .lynk-button--outline.lynk-button--neutral {
    border-color: var(--lynk-color-neutral-500);
    color: var(--lynk-color-neutral-500);
  }

  .lynk-button--outline.lynk-button--neutral:hover:not(.lynk-button--disabled),
  .lynk-button--outline.lynk-button--neutral.lynk-button--checked:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-neutral-500);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--outline.lynk-button--neutral:active:not(.lynk-button--disabled) {
    border-color: var(--lynk-color-neutral-700);
    background-color: var(--lynk-color-neutral-700);
    color: var(--lynk-color-neutral-0);
  }

  /* Warning */
  .lynk-button--outline.lynk-button--warning {
    border-color: var(--lynk-color-warning-600);
    color: var(--lynk-color-warning-600);
  }

  .lynk-button--outline.lynk-button--warning:hover:not(.lynk-button--disabled),
  .lynk-button--outline.lynk-button--warning.lynk-button--checked:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-warning-600);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--outline.lynk-button--warning:active:not(.lynk-button--disabled) {
    border-color: var(--lynk-color-warning-700);
    background-color: var(--lynk-color-warning-700);
    color: var(--lynk-color-neutral-0);
  }

  /* Danger */
  .lynk-button--outline.lynk-button--danger {
    border-color: var(--lynk-color-danger-500);
    color: var(--lynk-color-danger-500);
  }

  .lynk-button--outline.lynk-button--danger:hover:not(.lynk-button--disabled),
  .lynk-button--outline.lynk-button--danger.lynk-button--checked:not(.lynk-button--disabled) {
    background-color: var(--lynk-color-danger-500);
    color: var(--lynk-color-neutral-0);
  }

  .lynk-button--outline.lynk-button--danger:active:not(.lynk-button--disabled) {
    border-color: var(--lynk-color-danger-700);
    background-color: var(--lynk-color-danger-700);
    color: var(--lynk-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .lynk-button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--lynk-color-primary-600);
  }

  .lynk-button--text:hover:not(.lynk-button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--lynk-color-primary-500);
  }

  .lynk-button--text:focus-visible:not(.lynk-button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--lynk-color-primary-500);
  }

  .lynk-button--text:active:not(.lynk-button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--lynk-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .lynk-button--small {
    font-size: var(--lynk-button-font-size-small);
    height: var(--lynk-button-height-small);
    line-height: calc(var(--lynk-button-height-small) - var(--lynk-button-border-width) * 2);
    border-radius: var(--lynk-button-border-radius-small);
  }

  .lynk-button--medium {
    font-size: var(--lynk-button-font-size-medium);
    height: var(--lynk-button-height-medium);
    line-height: calc(var(--lynk-button-height-medium) - var(--lynk-button-border-width) * 2);
    border-radius: var(--lynk-button-border-radius-medium);
  }

  .lynk-button--large {
    font-size: var(--lynk-button-font-size-large);
    height: var(--lynk-button-height-large);
    line-height: calc(var(--lynk-button-height-large) - var(--lynk-button-border-width) * 2);
    border-radius: var(--lynk-button-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .lynk-button--pill.lynk-button--small {
    border-radius: var(--lynk-button-height-small);
  }

  .lynk-button--pill.lynk-button--medium {
    border-radius: var(--lynk-button-height-medium);
  }

  .lynk-button--pill.lynk-button--large {
    border-radius: var(--lynk-button-height-large);
  }

  /*
   * Circle modifier for icon only buttons
   */

  .lynk-button--circle {
    padding-left: 0;
    padding-right: 0;
    padding-top: 2px;
  }

  .lynk-button--circle.lynk-button--small {
    width: var(--lynk-button-height-small);
    border-radius: 50%;
  }

  .lynk-button--circle.lynk-button--medium {
    width: var(--lynk-button-height-medium);
    border-radius: 50%;
  }

  .lynk-button--circle.lynk-button--large {
    width: var(--lynk-button-height-large);
    border-radius: 50%;
  }

  .lynk-button--circle .lynk-button__prefix,
  .lynk-button--circle .lynk-button__suffix,
  .lynk-button--circle .lynk-button__caret {
    display: none;
  }

  /*
   * Square modifier for icon only buttons
   */

  .lynk-button--square {
    padding-left: 0;
    padding-right: 0;
    padding-top: 2px;
  }

  .lynk-button--square.lynk-button--small {
    width: var(--lynk-button-height-small);
    border-radius: var(--lynk-button-border-radius-small);
  }

  .lynk-button--square.lynk-button--medium {
    width: var(--lynk-button-height-medium);
    border-radius: var(--lynk-button-border-radius-medium);
  }

  .lynk-button--square.lynk-button--large {
    width: var(--lynk-button-height-large);
    border-radius: var(--lynk-button-border-radius-large);
  }

  .lynk-button--square .lynk-button__prefix,
  .lynk-button--square .lynk-button__suffix,
  .lynk-button--square .lynk-button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .lynk-button--caret .lynk-button__suffix {
    display: none;
  }

  .lynk-button--caret .lynk-button__caret {
    display: flex;
    align-items: center;
  }

  .lynk-button--caret .lynk-button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * thinking modifier
   */

  .lynk-button--thinking {
    position: relative;
    cursor: wait;
  }

  .lynk-button--thinking .lynk-button__prefix,
  .lynk-button--thinking .lynk-button__label,
  .lynk-button--thinking .lynk-button__suffix,
  .lynk-button--thinking .lynk-button__caret {
    visibility: hidden;
  }

  .lynk-button--thinking lynk-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .lynk-button ::slotted(lynk-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .lynk-button--rtl ::slotted(lynk-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .lynk-button--has-label.lynk-button--small .lynk-button__label {
    padding: 0 var(--lynk-spacing-small);
  }

  .lynk-button--has-label.lynk-button--medium .lynk-button__label {
    padding: 0 var(--lynk-spacing-medium);
  }

  .lynk-button--has-label.lynk-button--large .lynk-button__label {
    padding: 0 var(--lynk-spacing-large);
  }

  .lynk-button--has-prefix.lynk-button--small {
    padding-inline-start: var(--lynk-spacing-x-small);
  }

  .lynk-button--has-prefix.lynk-button--small .lynk-button__label {
    padding-inline-start: var(--lynk-spacing-x-small);
  }

  .lynk-button--has-prefix.lynk-button--medium {
    padding-inline-start: var(--lynk-spacing-small);
  }

  .lynk-button--has-prefix.lynk-button--medium .lynk-button__label {
    padding-inline-start: var(--lynk-spacing-small);
  }

  .lynk-button--has-prefix.lynk-button--large {
    padding-inline-start: var(--lynk-spacing-small);
  }

  .lynk-button--has-prefix.lynk-button--large .lynk-button__label {
    padding-inline-start: var(--lynk-spacing-small);
  }

  .lynk-button--has-suffix.lynk-button--small,
  .lynk-button--caret.lynk-button--small {
    padding-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-button--has-suffix.lynk-button--small .lynk-button__label,
  .lynk-button--caret.lynk-button--small .lynk-button__label {
    padding-inline-end: var(--lynk-spacing-x-small);
  }

  .lynk-button--has-suffix.lynk-button--medium,
  .lynk-button--caret.lynk-button--medium {
    padding-inline-end: var(--lynk-spacing-small);
  }

  .lynk-button--has-suffix.lynk-button--medium .lynk-button__label,
  .lynk-button--caret.lynk-button--medium .lynk-button__label {
    padding-inline-end: var(--lynk-spacing-small);
  }

  .lynk-button--has-suffix.lynk-button--large,
  .lynk-button--caret.lynk-button--large {
    padding-inline-end: var(--lynk-spacing-small);
  }

  .lynk-button--has-suffix.lynk-button--large .lynk-button__label,
  .lynk-button--caret.lynk-button--large .lynk-button__label {
    padding-inline-end: var(--lynk-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.lynk-button-group__button--first:not(.lynk-button-group__button--last)) .lynk-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.lynk-button-group__button--inner) .lynk-button {
    border-radius: 0;
  }

  :host(.lynk-button-group__button--last:not(.lynk-button-group__button--first)) .lynk-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.lynk-button-group__button:not(.lynk-button-group__button--first)) {
    margin-left: calc(-1 * var(--lynk-button-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.lynk-button-group__button:not(.lynk-button-group__button--focus, .lynk-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .lynk-button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.lynk-button-group__button--hover) {
    z-index: 1;
  }

  :host(.lynk-button-group__button--focus),
  :host(.lynk-button-group__button[checked]) {
    z-index: 2;
  }
`;
