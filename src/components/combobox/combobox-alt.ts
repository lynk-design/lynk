import '../dropdown/dropdown';
import '../input/input';
import '../menu/menu';
import '../menu-item/menu-item';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './combobox.styles';
import type { CSSResultGroup } from 'lit';
import type LynkDropdown from '../dropdown/dropdown';
import type LynkInput from '../input/input';
import type LynkMenu from '../menu/menu';
import type LynkMenuItem from '../menu-item/menu-item';

/**
 * @summary A combobox is a text input with an associated popup that enables users to select a value from a collection of possible values or optionally enter a custom value.
 * @documentation https:/lynk.design/components/combobox
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-input
 * @dependency lynk-dropdown
 * @dependency lynk-menu
 * @dependency lynk-menu-item
 *
 * @slot - The combobox's content.
 * @slot trigger - The combobox's trigger, usually a `<lynk-button>` element.
 *
 * @event on:show - Emitted when the combobox opens.
 * @event after:show - Emitted after the combobox opens and all animations are complete.
 * @event on:hide - Emitted when the combobox closes.
 * @event after:hide - Emitted after the combobox closes and all animations are complete.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the combobox is open.
 *
 * @animation combobox.show - The animation to use when showing the combobox.
 * @animation combobox.hide - The animation to use when hiding the combobox.
 */
@customElement('lynk-combobox')
export default class LynkCombobox extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'help-tip', 'label');

  @query('lynk-dropdown') _dropdown: LynkDropdown;
  @query('lynk-input') _input: LynkDropdown;

  @property({ type: String })
  public selected?: string;

  @property({ type: String })
  public value = '';

  /** The combobox input's validity state when using manual validation or set automatically to `error` when field uses Contraint Validation */
  @property({ reflect: true })
  public state: 'error' | 'warning' | 'success' | 'default' = 'default';

  /** The combobox input's size. */
  @property({ reflect: true })
  public size: 'small' | 'medium' | 'large' = 'medium';

  /** The input's label. Alternatively, you can use the label slot. */
  @property({ type: String })
  public label = '';

  /**
   * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
   * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
   */
  @property() autocomplete: string;

  /** The help text below the input. Alternatively, you can use the help-text slot. */
  @property({ attribute: 'help-text', type: String })
  public helpText = '';

  /** The help tooltip appended to the label. Alternatively, you can use the help-tip slot. */
  @property({ attribute: 'help-tip', type: String })
  public helpTip = '';

  /** The help tooltip appended to the label. Alternatively, you can use the help-tip slot. */
  @property({ attribute: 'placeholder', type: String })
  public placeholder = '';

  @property({ type: Boolean })
  public caret = false;

  /** Adds a clear button when the input is populated. */
  @property({ type: Boolean })
  public clearable = false;

  @property({ type: Boolean })
  public empty = true;

  @property({ type: Boolean })
  public expanded = false;

  @property({ type: Boolean })
  public hoist = false;

  @property({ type: Boolean })
  public disabled = false;

  @property({ type: Number, attribute: 'debounce-timeout' })
  public debounceTimeout = 350;

  @property({ type: Boolean, reflect: true })
  public loading?: boolean;

  protected updated(_changedProperties: PropertyValues) {
    if (_changedProperties.has('loading')) {
      if (this.loading) {
        this._dropdown.hide();
      } else {
        this._dropdown.show();
      }
    }
  }

  updateEmpty(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this.empty = slot.assignedElements().length === 0;
  }

  dispatchSearch() {
    this.dispatchEvent(new CustomEvent('search', {
      detail: {
        value: this._input.value,
      },
    }))
  }

  dispatchItemSelected(e: CustomEvent) {
    this.value = e.detail.item.getTextLabel()
    this.selected = e.detail.item.value
    this.dispatchEvent(new CustomEvent('itemSelected', {
      detail: {
        value: e.detail.item.value,
      },
    }))
  }

  handleTriggerKeyDown(e: KeyboardEvent) {
    if (e.key === ' ') {
      e.stopPropagation()
    }
  }

  handleMenuKeyDown(e: KeyboardEvent) {
    if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
      this._input.focus();
    }

    // All other "printable" keys trigger type to select
    if (event.key.length === 1 || event.key === 'Backspace') {

      // Don't block important key combos like CMD+R
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      this._input.focus();
    }
  }

  render() {
    return html`
      <lynk-dropdown
        ?hoist="${this.hoist}"
        .disabled="${this.disabled}"
        ?placement="${this.placement}"
        ?distance="${this.distance}"
        ?skidding="${this.skidding}"
      >
        <lynk-input
          slot="trigger"
          label=${this.label}
          .value="${this.value}"
          ?clearable=${this.clearable}
          autocomplete=${ifDefined(this.autocomplete)}
          help-tip=${ifDefined(this.helpTip)}
          help-text=${ifDefined(this.helpText)}
          placeholder=${ifDefined(this.placeholder)}
          @keydown="${this.handleTriggerKeyDown}"
          @on:input="${this.dispatchSearch}"

        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="suffix" slot="suffix"></slot>

          ${this.caret
            ? html`
                <lynk-icon slot="suffix" library="system" name="chevron-down"></lynk-icon>
              `
            : ''}

        </lynk-input> 

        <lynk-menu
          ?hoist=${this.hoist}
          .value=${this.selected}
          ?hidden=${this.empty}
          ?open=${this.expanded}
          placeholder="Missing data!"
          @keydown=${this.handleMenuKeyDown}
          @on:select=${this.dispatchItemSelected}
        >
          <slot @slotchange=${this.updateEmpty}></slot>
        </lynk-menu>
      </lynk-popup>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-combobox': LynkDropdown;
  }
}

