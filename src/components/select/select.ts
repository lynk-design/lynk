import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defaultValue } from '../../internal/default-value';
import { FormSubmitController } from '../../internal/form';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import '../dropdown/dropdown';
import '../icon-button/icon-button';
import '../icon/icon';
import '../menu/menu';
import '../tag/tag';
import styles from './select.styles';
import type { LynkFormControl } from '../../internal/lynk-element';
import type LynkDropdown from '../dropdown/dropdown';
import type LynkIconButton from '../icon-button/icon-button';
import type LynkMenuItem from '../menu-item/menu-item';
import type { MenuSelectEventDetail } from '../menu/menu';
import type LynkMenu from '../menu/menu';
import type { TemplateResult, CSSResultGroup } from 'lit';

/**
 * @summary Selects allow you to choose one or more items from a dropdown menu.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-dropdown
 * @dependency lynk-icon
 * @dependency lynk-icon-button
 * @dependency lynk-menu
 * @dependency lynk-tag
 * @dependency lynk-tooltip
 *
 * @slot - The select's options in the form of menu items.
 * @slot prefix - Used to prepend an icon or similar element to the select.
 * @slot suffix - Used to append an icon or similar element to the select.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot label - The select's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the select.
 * @slot help-tip - Help tooltip next to the label that can be used in place of help-text to give additional information about how to use the select. Alternatively, you can use the help-tip prop.
 *
 * @event on:clear - Emitted when the clear button is activated.
 * @event on:change - Emitted when the control's value changes.
 * @event on:input - Emitted when the control receives input.
 * @event on:focus - Emitted when the control gains focus.
 * @event on:blur - Emitted when the control loses focus.
 *
 * @csspart form-control - The form control that wraps the label, input, and help-text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's internal wrapper.
 * @csspart clear-button - The clear button.
 * @csspart control - The container that holds the prefix, label, and suffix.
 * @csspart display-label - The label that displays the current selection. Not available when used with `multiple`.
 * @csspart icon - The select's icon.
 * @csspart prefix - The select's prefix.
 * @csspart suffix - The select's suffix.
 * @csspart menu - The select menu, an `<lynk-menu>` element.
 * @csspart tag - The multi select option, an `<lynk-tag>` element.
 * @csspart tag__base - The tag's `base` part.
 * @csspart tag__content - The tag's `content` part.
 * @csspart tag__remove-button - The tag's `remove-button` part.
 * @csspart tags - The container in which multi select options are rendered.
 */
@customElement('lynk-select')
export default class LynkSelect extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  @query('.lynk-select') dropdown: LynkDropdown;
  @query('.lynk-select__control') control: LynkDropdown;
  @query('.lynk-select__hidden-select') input: HTMLInputElement;
  @query('.lynk-select__menu') menu: LynkMenu;

  // @ts-expect-error -- Controller is currently unused
  private readonly formSubmitController = new FormSubmitController(this);
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'help-tip', 'label');
  private readonly localize = new LocalizeController(this);
  private menuItems: LynkMenuItem[] = [];
  private resizeObserver: ResizeObserver;

  @state() private hasFocus = false;
  @state() private isOpen = false;
  @state() private displayLabel = '';
  @state() private displayTags: TemplateResult[] = [];
  @state() invalid = false;

  /** Enables multi select. With this enabled, value will be an array. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /**
   * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
   * number of additional items that are selected. Set to -1 to remove the limit.
   */
  @property({ attribute: 'max-tags-visible', type: Number }) maxTagsVisible = 3;

  /** Disables the select control. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Replaces the select with a plain text string of the selected value. */
  @property({ type: Boolean, reflect: true }) restricted = false;

  /** The select's name. */
  @property() name = '';

  /** The select's placeholder text. */
  @property() placeholder = '';

  /** The select's feedback status using manual validation. Alternatively, you can use the invalid attribute */
  @property({ reflect: true }) state: 'error' | 'warning' | 'success';

  /** The select's size. */
  @property() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @property({ type: Boolean }) hoist = false;

  /** The value of the control. This will be a string or an array depending on `multiple`. */
  @property() value: string | string[] = '';

  /** Draws a filled select. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a pill-style select with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The select's label. Alternatively, you can use the label slot. */
  @property() label = '';

  /**
   * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   */
  @property() placement: 'top' | 'bottom' = 'bottom';

  /** The select's help text. Alternatively, you can use the help-text slot. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The select's help tooltip appended to the label. Alternatively, you can use the help-tip slot. */
  @property({ attribute: 'help-tip' }) helpTip = '';

  /** The select's required attribute. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Adds a clear button when the select is populated. */
  @property({ type: Boolean }) clearable = false;

  /** Use the browsers built constraint validation API  in tandem with the `required` property` */
  @property({ type: Boolean, reflect: true }) autovalidate = false;

  /** Gets or sets the default value used to reset this element. The initial value corresponds to the one originally specified in the HTML that created this element. */
  @defaultValue() defaultValue = '';

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.resizeMenu());

    this.updateComplete.then(() => {
      this.resizeObserver.observe(this);
      this.syncItemsFromValue();
    });
  }

  firstUpdated() {
    if (this.autovalidate) {
      this.invalid = !this.input.checkValidity();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
  }

  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.autovalidate ? this.input.reportValidity() : false;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  getValueAsArray() {
    // Single selects use '' as an empty selection value, so convert this to [] for an empty multi select
    if (this.multiple && this.value === '') {
      return [];
    }

    return Array.isArray(this.value) ? this.value : [this.value];
  }

  /** Sets focus on the control. */
  focus(options?: FocusOptions) {
    this.control.focus(options);
  }

  /** Removes focus from the control. */
  blur() {
    this.control.blur();
  }

  handleBlur() {
    // Don't blur if the control is open. We'll move focus back once it closes.
    if (!this.isOpen) {
      this.hasFocus = false;
      this.emit('on:blur');
    }
  }

  handleClearClick(event: MouseEvent) {
    event.stopPropagation();
    this.value = this.multiple ? [] : '';
    this.emit('on:clear');
    this.syncItemsFromValue();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.disabled && this.isOpen) {
      this.dropdown.hide();
    }

    // Disabled form controls are always valid, so we need to recheck validity when the state changes
    this.input.disabled = this.disabled;

    if (this.autovalidate) {
      this.invalid = !this.input.checkValidity();
    }
  }

  handleFocus() {
    if (!this.hasFocus) {
      this.hasFocus = true;
      this.emit('on:focus');
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const firstItem = this.menuItems[0];
    const lastItem = this.menuItems[this.menuItems.length - 1];

    // Ignore key presses on tags
    if (target.tagName.toLowerCase() === 'lynk-tag') {
      return;
    }

    // Tabbing out of the control closes it
    if (event.key === 'Tab') {
      if (this.isOpen) {
        this.dropdown.hide();
      }
      return;
    }

    // Up/down opens the menu
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();

      // Show the menu if it's not already open
      if (!this.isOpen) {
        this.dropdown.show();
      }

      // Focus on a menu item
      if (event.key === 'ArrowDown') {
        this.menu.setCurrentItem(firstItem);
        firstItem.focus();
        return;
      }

      if (event.key === 'ArrowUp') {
        this.menu.setCurrentItem(lastItem);
        lastItem.focus();
        return;
      }
    }

    // don't open the menu when a CTRL/Command key is pressed
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    // All other "printable" keys open the menu and initiate type to select
    if (!this.isOpen && event.key.length === 1) {
      event.stopPropagation();
      event.preventDefault();
      this.dropdown.show();
      this.menu.typeToSelect(event);
    }
  }

  handleLabelClick() {
    if (!this.restricted) {
      this.focus();
    }
  }

  handleMenuSelect(event: CustomEvent<MenuSelectEventDetail>) {
    const item = event.detail.item;

    if (this.multiple) {
      this.value = this.value.includes(item.value)
        ? (this.value as []).filter(v => v !== item.value)
        : [...this.value, item.value];
    } else {
      this.value = item.value;
    }

    this.syncItemsFromValue();
  }

  handleMenuShow() {
    this.resizeMenu();
    this.isOpen = true;
  }

  handleMenuHide() {
    this.isOpen = false;

    // Restore focus on the box after the menu is hidden
    this.control.focus();
  }

  handleMenuItemLabelChange() {
    // Update the display label when checked menu item's label changes
    if (!this.multiple) {
      const checkedItem = this.menuItems.find(item => item.value === this.value);
      this.displayLabel = checkedItem ? checkedItem.getTextLabel() : '';
    }
  }

  @watch('multiple')
  handleMultipleChange() {
    // Cast to array | string based on `this.multiple`
    const value = this.getValueAsArray();
    this.value = this.multiple ? value : value[0] ?? '';
    this.syncItemsFromValue();
  }

  async handleMenuSlotChange() {
    // Wait for items to render before gathering labels otherwise the slot won't exist
    this.menuItems = [...this.querySelectorAll<LynkMenuItem>('lynk-menu-item')];

    // Check for duplicate values in menu items
    const values: string[] = [];
    this.menuItems.forEach(item => {
      if (values.includes(item.value)) {
        console.error(`Duplicate value found in <lynk-select> menu item: '${item.value}'`, item);
      }

      values.push(item.value);
    });

    await Promise.all(this.menuItems.map(item => item.render));
    this.syncItemsFromValue();
  }

  handleTagInteraction(event: KeyboardEvent | MouseEvent) {
    // Don't toggle the menu when a tag's clear button is activated
    const path = event.composedPath();
    const clearButton = path.find((el: LynkIconButton) => {
      if (el instanceof HTMLElement) {
        const element = el as HTMLElement;
        return element.classList.contains('lynk-tag__remove');
      }
      return false;
    });

    if (clearButton) {
      event.stopPropagation();
    }
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    this.syncItemsFromValue();
    await this.updateComplete;

    if (this.autovalidate) {
      this.invalid = !this.input.checkValidity();
    }

    this.emit('on:change');
    this.emit('on:input');
  }

  resizeMenu() {
    this.menu.style.width = `${this.control.clientWidth}px`;
    requestAnimationFrame(() => this.dropdown.reposition());
  }

  syncItemsFromValue() {
    const value = this.getValueAsArray();

    // Sync checked states
    this.menuItems.forEach(item => (item.checked = value.includes(item.value)));

    // Sync display label and tags
    if (this.multiple) {
      const checkedItems = this.menuItems.filter(item => value.includes(item.value));

      this.displayLabel = checkedItems.length > 0 ? checkedItems[0].getTextLabel() : '';
      this.displayTags = checkedItems.map((item: LynkMenuItem) => {
        return html`
          <lynk-tag
            part="tag"
            exportparts="
              base:lynk-tag__base,
              content:lynk-tag__content,
              remove-button:lynk-tag__remove-button
            "
            type="neutral"
            size=${this.size}
            ?pill=${this.pill}
            ?removable=${!this.restricted}
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @on:remove=${(event: CustomEvent) => {
              event.stopPropagation();
              if (!this.disabled) {
                item.checked = false;
                this.syncValueFromItems();
              }
            }}
          >
            ${item.getTextLabel()}
          </lynk-tag>
        `;
      });

      if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
        const total = this.displayTags.length;
        this.displayLabel = '';
        this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
        this.displayTags.push(html`
          <lynk-tag
            part="tag"
            exportparts="
              base:lynk-tag__base,
              content:lynk-tag__content,
              remove-button:lynk-tag__remove-button
            "
            type="neutral"
            size=${this.size}
          >
            +${total - this.maxTagsVisible}
          </lynk-tag>
        `);
      }
    } else {
      const checkedItem = this.menuItems.find(item => item.value === value[0]);

      this.displayLabel = checkedItem ? checkedItem.getTextLabel() : '';
      this.displayTags = [];
    }
  }

  syncValueFromItems() {
    const checkedItems = this.menuItems.filter(item => item.checked);
    const checkedValues = checkedItems.map(item => item.value);

    if (this.multiple) {
      this.value = (this.value as []).filter(val => checkedValues.includes(val));
    } else {
      this.value = checkedValues.length > 0 ? checkedValues[0] : '';
    }
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpTipSlot = this.hasSlotController.test('help-tip');
    const hasSelection = this.multiple ? this.value.length > 0 : this.value !== '';
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasHelpTip = this.helpTip ? true : !!hasHelpTipSlot;
    const hasClearIcon = this.clearable && !this.disabled && hasSelection;

    return html`
      <div
        part="form-control"
        class=${classMap({
          'lynk-form-control': true,
          'lynk-form-control--small': this.size === 'small',
          'lynk-form-control--medium': this.size === 'medium',
          'lynk-form-control--large': this.size === 'large',
          'lynk-form-control--has-label': hasLabel,
          'lynk-form-control--has-help-text': hasHelpText,
          'lynk-form-control--has-error': this.state === 'error',
          'lynk-form-control--has-warning': this.state === 'warning',
          'lynk-form-control--has-success': this.state === 'success'
        })}
      >
        <label
          part="form-control-label"
          class=${classMap({
            'lynk-form-control__label': true,
            'lynk-form-control--focused': this.hasFocus,
          })}
          for="input"
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

        <div part="form-control-input" class="lynk-form-control-input">
          <lynk-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this as HTMLElement}
            ?disabled=${this.disabled || this.restricted}
            class=${classMap({
              'lynk-select': true,
              'lynk-select--open': this.isOpen,
              'lynk-select--empty': !this.value,
              'lynk-select--focused': this.hasFocus,
              'lynk-select--clearable': this.clearable,
              'lynk-select--disabled': this.disabled,
              'lynk-select--restricted': this.restricted,
              'lynk-select--multiple': this.multiple,
              'lynk-select--standard': !this.filled,
              'lynk-select--filled': this.filled,
              'lynk-select--has-tags': this.multiple && this.displayTags.length > 0,
              'lynk-select--placeholder-visible': this.displayLabel === '',
              'lynk-select--small': this.size === 'small',
              'lynk-select--medium': this.size === 'medium',
              'lynk-select--large': this.size === 'large',
              'lynk-select--pill': this.pill,
              'lynk-select--invalid': this.invalid,
              'lynk-select--has-error': this.state === 'error',
              'lynk-select--has-warning': this.state === 'warning',
              'lynk-select--has-success': this.state === 'success',
            })}
            @on:show=${this.handleMenuShow}
            @on:hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="lynk-select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled ? 'true' : 'false'}
              aria-expanded=${this.isOpen ? 'true' : 'false'}
              aria-controls="menu"
              tabindex=${this.disabled ? '-1' : '0'}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="lynk-select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="lynk-select__label">
                ${this.displayTags.length > 0
                  ? html` <span part="tags" class="lynk-select__tags"> ${this.displayTags} </span> `
                  : this.displayLabel.length > 0
                  ? this.displayLabel
                  : this.placeholder}
              </div>

              ${hasClearIcon
                ? html`
                    <button
                      part="clear-button"
                      class="lynk-select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term('clearEntry')}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <lynk-icon name="x-circle-fill" library="system"></lynk-icon>
                      </slot>
                    </button>
                  `
                : ''}

              <slot name="suffix" part="suffix" class="lynk-select__suffix"></slot>

              <span part="icon" class="lynk-select__icon" aria-hidden="true">
                <lynk-icon name="chevron-down" library="system"></lynk-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="lynk-select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${hasSelection ? '1' : ''}
                tabindex="-1"
                @focus=${() => this.control.focus()}
              />
            </div>

            <lynk-menu part="menu" id="menu" class="lynk-select__menu" @on:select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @on:label-change=${this.handleMenuItemLabelChange}></slot>
            </lynk-menu>
          </lynk-dropdown>

        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="lynk-form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          ${this.helpText}
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-select': LynkSelect;
  }
}
