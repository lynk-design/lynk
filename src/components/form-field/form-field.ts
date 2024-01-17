import '../icon/icon';
import '../tooltip/tooltip';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { getTabbableBoundary } from '../../internal/tabbable';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './form-field.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A container for customized or non-standard form inputs.
 * @documentation https://lynk.design/components/form-field
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-icon
 * @dependency lynk-tooltip
 *
 * @event on:focus - Emitted when field or slotted element gains focus.
 * @event on:blur - Emitted when field or slotted element loses focus.
 *
 * @slot - The default slot.
 * @slot help-tip - Custom help-tip content.
 * @slot help-text - Custom help-text content.
 * @slot label - Custom label content.
 *
 * @csspart base - The component's base wrapper.
 * @csspart label - The component's label wrapper.
 * @csspart control - The component's slotted control wrapper.
 * @csspart help-text - The component's help-text wrapper.
 *
 */
@customElement('lynk-form-field')
export default class LynkFormField extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  private target?: HTMLElement;

  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'help-tip', 'label');

  @state() private hasFocus = false;

  /** The field will lose focus when the user interacts outside of this element (e.g. clicking). */
  @property({ attribute: false }) containingElement?: HTMLElement;

  /** The fields's styled validity state  */
  @property({ reflect: true }) state: 'error' | 'warning' | 'success' | 'default' = 'default';

  /** The input's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The input's label. Alternatively, you can use the label slot. */
  @property() label = '';

  @property() id = '';

  /** The help text below the input. Alternatively, you can use the help-text slot. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The help tooltip appended to the label. Alternatively, you can use the help-tip slot. */
  @property({ attribute: 'help-tip' }) helpTip = '';

  /** Adds the required mark. */
  @property({ type: Boolean, reflect: true }) required = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);

    if (!this.containingElement) {
      this.containingElement = this;
    }
  }

  firstUpdated() {
    this.addOpenListeners()
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
  }

  private addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('on:focus');

  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('on:blur');
  }

  private handleLabelClick() {
    this.focus()
  }

  private handleDefaultSlotChange() {
    this.manageAccessibleTarget();
  }

  private handleDocumentKeyDown(event: KeyboardEvent) {
    // Handle tabbing
    if (event.key === 'Tab') {
      // Tabbing outside of the containing element closes the panel
      //
      // If the popover is used within a shadow DOM, we need to obtain the activeElement within that shadowRoot,
      // otherwise `document.activeElement` will only return the name of the parent shadow DOM element.
      setTimeout(() => {
        const activeElement =
          this.containingElement?.getRootNode() instanceof ShadowRoot
            ? document.activeElement?.shadowRoot?.activeElement
            : document.activeElement;

        if (
          !this.containingElement ||
          activeElement?.closest(this.containingElement.tagName.toLowerCase()) !== this.containingElement
        ) {
          this.blur();
        }
      });
    }
  }

  private handleDocumentMouseDown(event: MouseEvent) {
    // Close when clicking outside of the containing element
    const path = event.composedPath();
    if (this && this.containingElement && !path.includes(this.containingElement)) {
      this.blur();
    }
  }


  //
  // Slotted elements can be arbitrary content or form elements, but we need to link them to the label with `aria-labelledby`.
  // This must be applied to the "accessible element" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible element could be a slotted form element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // To determine this, we assume the first tabbable element in the element slot is the "accessible element."
  //
  private manageAccessibleTarget() {
    const assignedElements = this.defaultSlot.assignedElements({ flatten: true }) as HTMLElement[];
    const accessibleTarget = assignedElements.find(el => getTabbableBoundary(el).start);

    if (accessibleTarget) {
      this.target = accessibleTarget;
      this.target.setAttribute('aria-label', this.label);
    }
  }

  /** Sets focus on the control. */
  focus(options?: FocusOptions) {
    if (this.target && typeof this.target?.focus === 'function') {
      this.target.focus(options);
    }

    this.handleFocus();
  }

  /** Removes focus from the control. */
  blur() {
    if (this.target && typeof this.target?.blur === 'function') {
      this.target.blur();
    }

    this.handleBlur();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpTipSlot = this.hasSlotController.test('help-tip');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasHelpTip = this.helpTip ? true : !!hasHelpTipSlot;

    return html`
      <fieldset
        part="base"
        class=${classMap({
          'form-field': true,
          'form-field--small': this.size === 'small',
          'form-field--medium': this.size === 'medium',
          'form-field--large': this.size === 'large',
          'form-field--has-label': hasLabel,
          'form-field--has-help-text': hasHelpText,
          'form-field--has-error': this.state === 'error' || this.hasAttribute('data-user-invalid'),
          'form-field--has-warning': this.state === 'warning',
          'form-field--has-success': this.state === 'success',
          'form-field--focused': this.hasFocus,
        })}
      >

        <label
          id="label"
          part="label"
          class=${classMap({
            'form-field__label': true,
          })}
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>

          ${this.required
            ? html`
                <lynk-tooltip content="Required" hoist>
                  <lynk-icon style="font-size: 9px;" name="asterisk" library="system"></lynk-icon>
                </lynk-tooltip>
              `
            : ''}
          ${hasHelpTip
            ? html`
                <lynk-tooltip hoist>
                  <div slot="content">
                    <slot name="help-tip">${this.helpTip}</slot>
                  </div>
                  <lynk-icon style="font-size: 11px;" name="question-fill" library="system"></lynk-icon>
                </lynk-tooltip>
              `
            : ''}
        </label>

        <slot
          part="control"
          class="form-field__control"
          @click=${this.focus}
          @slotchange=${this.handleDefaultSlotChange}
        ></slot>

        <slot
          name="help-text"
          part="help-text"
          id="help-text"
          class="form-field__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}

        >
          ${this.helpText}
        </slot>
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-form-field': LynkFormField;
  }
}
