import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import '../icon/icon';
import styles from './radio.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Radios allow the user to select a single option from a group.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 *
 * @slot - The radio's label.
 *
 * @event on:blur - Emitted when the control loses focus.
 * @event on:change - Emitted when the control's checked state changes.
 * @event on:focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart control - The radio control.
 * @csspart control--checked - The radio control if radio is checked.
 * @csspart checked-icon - The container the wraps the checked icon.
 * @csspart label - The radio label.
 */

 @customElement('lynk-radio')
 export default class LynkRadio extends LynkElement {
   static styles: CSSResultGroup = styles;

   @state() checked = false;
   @state() protected hasFocus = false;

   /** The radio's value attribute. */
   @property() value: string;

   /** Disables the radio. */
   @property({ type: Boolean, reflect: true }) disabled = false;

   connectedCallback(): void {
     super.connectedCallback();
     this.setInitialAttributes();
     this.addEventListeners();
   }

   @watch('checked')
   handleCheckedChange() {
     this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
     this.setAttribute('tabindex', this.checked ? '0' : '-1');
     this.emit('on:change');
   }

   @watch('disabled', { waitUntilFirstUpdate: true })
   handleDisabledChange() {
     this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
   }

   private handleBlur() {
     this.hasFocus = false;
     this.emit('on:blur');
   }

   private handleClick() {
     if (!this.disabled) {
       this.checked = true;
     }
   }

   private handleFocus() {
     this.hasFocus = true;
     this.emit('on:focus');
   }

   private addEventListeners() {
     this.addEventListener('blur', () => this.handleBlur());
     this.addEventListener('click', () => this.handleClick());
     this.addEventListener('focus', () => this.handleFocus());
   }

   private setInitialAttributes() {
     this.setAttribute('role', 'radio');
     this.setAttribute('tabindex', '-1');
     this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
   }

   render() {
     return html`
       <span
         part="base"
         class=${classMap({
           'lynk-radio': true,
           'lynk-radio--checked': this.checked,
           'lynk-radio--disabled': this.disabled,
           'lynk-radio--focused': this.hasFocus
         })}
       >
         <span part="${`control${this.checked ? ' control--checked' : ''}`}" class="lynk-radio__control">
           ${this.checked ? html` <lynk-icon part="checked-icon" library="system" name="radio"></lynk-icon> ` : ''}
         </span>

         <slot part="label" class="lynk-radio__label"></slot>
       </span>
     `;
   }
 }

declare global {
  interface HTMLElementTagNameMap {
    'lynk-radio': LynkRadio;
  }
}
