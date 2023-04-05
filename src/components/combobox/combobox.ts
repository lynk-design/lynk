import '../icon/icon';
import '../popup/popup';
import { animateTo, stopAnimations } from '../../internal/animate';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../../internal/default-value';
import { FormControlController } from '../../internal/form';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import { scrollIntoView } from 'src/internal/scroll';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './combobox.styles';
import type { CSSResultGroup } from 'lit';
import type { LynkFormControl } from '../../internal/lynk-element';
import type LynkOption from '../option/option';
import type LynkPopup from '../popup/popup';
import type OnRemoveEvent from '../../events/on-remove';

/**
 * @summary A combobox is a text input with an associated popup that enables users to select a value from a collection of possible values.
 * @documentation https:/lynk.design/components/combobox
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-icon
 * @dependency lynk-popup
 *
 * @slot - The listbox options. Must be `<lynk-option>` elements. You can use `<lynk-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event on:change - Emitted when the combobox's value changes.
 * @event on:clear - Emitted when the combobox's value is cleared.
 * @event on:input - Emitted when the combobox receives input.
 * @event on:focus - Emitted when the combobox gains focus.
 * @event on:blur - Emitted when the combobox loses focus.
 * @event on:show - Emitted when the combobox's menu opens.
 * @event after:show - Emitted after the combobox's menu opens and all animations are complete.
 * @event on:hide - Emitted when the combobox's menu closes.
 * @event after:hide - Emitted after the combobox's menu closes and all animations are complete.
 * @event on:invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 */
@customElement('lynk-combobox')
export default class LynkCombobox extends LynkElement implements LynkFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['on:blur', 'on:input']
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'help-tip', 'label');
  private readonly localize = new LocalizeController(this);
  private typeToSelectString = '';
  private typeToSelectTimeout: number;

  @query('.lynk-combobox') popup: LynkPopup;
  @query('.lynk-combobox__control') combobox: HTMLSlotElement;
  @query('.lynk-combobox__display-input') displayInput: HTMLInputElement;
  @query('.lynk-combobox__value-input') valueInput: HTMLInputElement;
  @query('.lynk-combobox__listbox') listbox: HTMLSlotElement;


  @state() private hasFocus = false;
  @state() private comboboxHasFocus = false;
  @state() private listboxHasFocus = false;

  @state() displayValue = '';
  @state() currentOption: LynkOption;
  @state() selectedOptions: LynkOption[] = [];
  @state() filteredOptions: LynkOption[] = [];

  /** The name of the combobox, submitted as a name/value pair with form data. */
  @property() name = '';

  /**
   * The current value of the combobox, submitted as a name/value pair with form data. When `multiple` is enabled, the
   * value will be a space-delimited list of values based on the options selected.
   */
  @property({
    converter: {
      fromAttribute: (value: string) => value.split(' '),
      toAttribute: (value: string[]) => value.join(' ')
    }
  })
  value: string | string[] = '';

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue: string | string[] = '';

  /** The combobox's size. */
  @property() size: 'small' | 'medium' | 'large' = 'medium';

  /** Placeholder text to show as a hint when the combobox is empty. */
  @property() placeholder = '';

  /** Allow custom values to be entered */
  @property({ attribute: 'autocomplete', reflect: true }) autocomplete: 'none' | 'list' | 'inline' | 'both' = 'none';

  /** Allow custom values to be entered */
  @property({ attribute: 'allow-custom-value', type: Boolean, reflect: true }) allowCustomValue = false;

  /** Determine when the listbox popup is triggered */
  @property({ attribute: 'trigger', reflect: true }) trigger: 'input' | 'focus' | 'manual' = 'input';

  /** Allows more than one option to be selected. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /**
   * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   */
  @property({ attribute: 'max-options-visible', type: Number }) maxOptionsVisible = 3;

  /** Disables the combobox control. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Adds a clear button when the combobox is not empty. */
  @property({ type: Boolean }) clearable = false;

  /**
   * Indicates whether or not the combobox is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the combobox's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /** Draws a filled combobox. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a pill-style combobox with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The combobox's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = '';

  /**
   * The preferred placement of the combobox's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  /** The combobox's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** The combobox's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-tip' }) helpTip = '';

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** The combobox's required attribute. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Replaces the combobox with a plain text string of the selected value. */
  @property({ type: Boolean, reflect: true }) restricted = false;

  /** The combobox's feedback status using manual validation. Alternatively, you can use the invalid attribute */
  @property({ reflect: true }) state: 'error' | 'warning' | 'success' | 'default' = 'default';

  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentFocusIn = this.handleDocumentFocusIn.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleComboboxKeyDown = this.handleComboboxKeyDown.bind(this);
    this.handleComboboxKeyUp = this.handleComboboxKeyUp.bind(this);
    this.handleListboxKeyDown = this.handleListboxKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);

    // Because this is a form control, it shouldn't be opened initially
    this.open = false;
  }

  firstUpdated() {
    this.filteredOptions = this.getAllOptions();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.hide();
  }

  private addComboboxListeners() {
    document.addEventListener('focusin', this.handleDocumentFocusIn);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private removeComboboxListeners() {
    document.removeEventListener('focusin', this.handleDocumentFocusIn);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private addListboxListeners() {
    document.addEventListener('keydown', this.handleListboxKeyDown);
  }

  private removeListboxListeners() {
    document.removeEventListener('keydown', this.handleListboxKeyDown);
  }

  private handleFocusIn() {
    this.hasFocus = true;
    this.emit('on:focus');
  }

  private handleFocusOut() {
    this.hasFocus = false;
    this.hide();
    this.removeComboboxListeners();
    this.emit('on:blur');
  }

  private handleComboboxFocus() {
    this.comboboxHasFocus = true;
    this.listboxHasFocus = false;

    // Set the cursor at the end of the display input value
    const len = this.displayValue.length || 0;
    this.displayInput.setSelectionRange(len, len);

    if (this.trigger === 'focus') {
      this.open = true;
    }

    this.handleFocusIn();
  }

  private handleComboboxBlur() {
    this.comboboxHasFocus = false;
  }

  private handleDocumentFocusIn(event: KeyboardEvent) {
    // Close when focusing out of the combobox
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.handleFocusOut();
    }
  }

  private handleDocumentMouseDown(event: MouseEvent) {
    // Close when clicking outside of the combobox
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.handleFocusOut();
    }
  }

  private handleDocumentKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const isClearButton = target.closest('.lynk-combobox__clear') !== null;
    const isIconButton = target.closest('lynk-icon-button') !== null;

    // Ignore presses when the target is an icon button (e.g. the remove button in <lynk-tag>)
    if (isClearButton || isIconButton) {
      return;
    }

    if (event.key.length === 1 && this.trigger === 'input' && !this.open) {
      this.show();
    }

    // Handle enter and space. When pressing space, we allow for type to select behaviors so if there's anything in the
    // buffer we _don't_ close it.
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopImmediatePropagation();

      // If it's not open, open it
      if (!this.open) {
        this.show();
        return;
      }

      if (this.allowCustomValue && this.displayValue) {
        this.value = this.displayValue;
      }

      // If it is open, update the value based on the current selection and close it
      if (this.currentOption && !this.currentOption.disabled) {
        if (this.multiple) {
          this.toggleOptionSelection(this.currentOption);
        } else {
          this.setSelectedOptions(this.currentOption);
        }

        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('on:input');
          this.emit('on:change');
        });

        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }

      return
    }

    // Navigate options
    if (['ArrowUp', 'ArrowDown'].includes(event.key) && this.filteredOptions.length > 0) {
      const allOptions = this.getAllOptions();
      const currentIndex = allOptions.indexOf(this.currentOption);
      let newOption; 

      // Prevent scrolling
      event.preventDefault();

      // Open it
      if (!this.open) {
        this.show();

        // If an option is already selected, stop here because we want that one to remain highlighted when the listbox
        // opens for the first time
        if (this.currentOption) {
          return;
        }
      }

      if (event.key === 'ArrowDown') {
        newOption = this.getNextSelectableOption(currentIndex);
      } else if (event.key === 'ArrowUp') {
        newOption = this.getPreviousSelectableOption(currentIndex);
      } 

      this.listboxHasFocus = true;
      this.setCurrentOption(newOption);
    }

    // Close when pressing escape
    if (event.key === 'Escape' && this.open) {
      if (this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      } else {
        this.displayValue = this.defaultValue;
        this.setSelectedOptions([]);
      }
    }
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    event.stopPropagation();

    if (['Home', 'End'].includes(event.key) && this.comboboxHasFocus) {
      // Prevent scrolling
      event.preventDefault();

      // Set the cursor at the start or end of the display input value
      if (event.key === 'Home') {
        this.displayInput.setSelectionRange(0, 0);
      } else if (event.key === 'End') {
        const len = this.displayValue.length || 0;
        this.displayInput.setSelectionRange(len, len);
      }
    }

    this.handleDocumentKeyDown(event);
  }

  private handleComboboxKeyUp(event: KeyboardEvent) {
    // Printable keys trigger autocomplete
    if (event.key.length === 1 || event.key === 'Backspace') {
      if (this.autocomplete === 'list') {
        this.filterOptions();
      }
    }
  }

  private filterOptions() {
    const allOptions = this.getAllOptions();
    this.filteredOptions = [];

    for (const option of allOptions) {
      const label = option.getTextLabel().toLowerCase();
      const value = this.displayValue.toLowerCase();

      if (label.includes(value)) {
        option.hidden = false;
        this.filteredOptions.push(option);
      } else {
        option.hidden = true;
      }
    }

    this.setCurrentOption(this.getFirstSelectableOption());
  }

  private handleListboxKeyDown(event: KeyboardEvent) {
    if (!this.hasFocus && !this.listboxHasFocus) {
      return;
    }

    if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
      const len = this.displayValue.length;
      this.displayInput.focus({ preventScroll: true });
      this.displayInput.setSelectionRange(len, len);
    }

    // Navigate options
    if (['Home', 'End'].includes(event.key) && this.listboxHasFocus && this.filteredOptions.length > 0) {
      let newOption;
      // Prevent scrolling
      event.preventDefault();

      if (event.key === 'Home') {
        console.log("hello")
        newOption = this.getFirstSelectableOption();
        // newIndex = 0;
      } else if (event.key === 'End') {
        newOption = this.getPreviousSelectableOption(0);
        // newIndex = allOptions.length - 1;
      }

      this.setCurrentOption(newOption);
    }

    // All other "printable" keys trigger default text input
    if (event.key.length === 1 || event.key === 'Backspace') {
      this.displayInput.focus({ preventScroll: true });
      event.stopPropagation();
    }
  }

  private handleComboboxMouseDown(event: MouseEvent) {
    const path = event.composedPath();
    const isIconButton = path.some(el => el instanceof Element && el.tagName.toLowerCase() === 'lynk-icon-button');

    // Ignore disabled controls and clicks on tags (remove buttons)
    if (this.disabled || isIconButton) {
      return;
    }

    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
  }

  private handleLabelClick() {
    this.displayInput.focus();
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    this.displayValue = this.displayInput.value = '';

    if (this.autocomplete === 'list') {
      this.filterOptions();
    }

    if (this.value !== '') {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });



      // Emit after update
      this.updateComplete.then(() => {
        this.emit('on:clear');
        this.emit('on:input');
        this.emit('on:change');
      });
    }
  }

  private handleExpandClick(event: MouseEvent) {
    event.stopPropagation();
    this.open = !this.open;
  }

  private handleClearExpandMouseDown(event: MouseEvent) {
    // Don't lose focus or propagate events when clicking the clear button
    event.stopPropagation();
    event.preventDefault();
  }

  private handleInput() {
    this.displayValue = this.displayInput.value;
  }

  private handleChange() {
    this.displayValue = this.displayInput.value;
  }

  private handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest('lynk-option');
    const oldValue = this.value;

    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('on:input');
          this.emit('on:change');
        });
      }

      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }

  private handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values: string[] = [];

    // Check for duplicate values in menu items
    if (customElements.get('lynk-option')) {
      allOptions.forEach(option => values.push(option.value));

      // Select only the options that match the new value
      this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
    } else {
      // Rerun this handler when <lynk-option> is registered
      customElements.whenDefined('lynk-option').then(() => this.handleDefaultSlotChange());
    }
  }

  private handleTagRemove(event: OnRemoveEvent, option: LynkOption) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggleOptionSelection(option, false);

      // Emit after updating
      this.updateComplete.then(() => {
        this.emit('on:input');
        this.emit('on:change');
      });
    }
  }

  // Gets an array of all <lynk-option> elements
  private getAllOptions() {
    return [...this.querySelectorAll<LynkOption>('lynk-option')];
  }

  // Gets the first <lynk-option> element
  private getFirstOption() {
    return this.querySelector<LynkOption>('lynk-option');
  }

  private getFirstSelectableOption() {
    return this.querySelector<LynkOption>('lynk-option:not([hidden])');
  }

  private getPreviousSelectableOption(currentIndex: number) {
    const allOptions = this.getAllOptions();
    let previousIndex = currentIndex - 1;

    if (previousIndex < 0) previousIndex = allOptions.length - 1;

    const previousOption = allOptions[previousIndex];

    if (previousOption.disabled || previousOption.hidden) {
      return this.getPreviousSelectableOption(previousIndex);
    } else {
      return previousOption;
    }
  }

  private getNextSelectableOption(currentIndex: number) {
    const allOptions = this.getAllOptions();
    let nextIndex = currentIndex + 1;

    if (nextIndex > allOptions.length - 1) nextIndex = 0;

    const nextOption = allOptions[nextIndex];

    if (nextOption.disabled || nextOption.hidden) {
      return this.getNextSelectableOption(nextIndex);
    } else {
      return nextOption;
    }
  }

  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  private setCurrentOption(option: LynkOption | null) {
    const allOptions = this.getAllOptions();

    // Clear selection
    allOptions.forEach(el => {
      el.current = false;
      el.tabIndex = -1;
    });

    // Select the target option
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      scrollIntoView(option, this.listbox, 'vertical', 'auto');
      // option.focus();
    }
  }

  // Sets the selected option(s)
  private setSelectedOptions(option: LynkOption | LynkOption[]) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];

    // Clear existing selection
    allOptions.forEach(el => (el.selected = false));

    // Set the new selection
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach(el => (el.selected = true));
    }

    // Update selection, value, and display label
    this.selectionChanged();
  }

  // Toggles an option's selected state
  private toggleOptionSelection(option: LynkOption, force?: boolean) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }

    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged() {
    // Update selected options cache
    this.selectedOptions = this.getAllOptions().filter(el => el.selected);

    // Update the value and display label
    if (this.multiple) {
      this.value = this.selectedOptions.map(el => el.value);

      if (this.placeholder && this.value.length === 0) {
        // When no items are selected, keep the value empty so the placeholder shows
        this.displayValue = '';
      } else {
        this.displayValue = this.localize.term('numOptionsSelected', this.selectedOptions.length);
      }
    } else {
      this.value = this.selectedOptions[0]?.value ?? '';
      this.displayValue = this.selectedOptions[0]?.getTextLabel() ?? '';
    }

    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  @watch('hasFocus', { waitUntilFirstUpdate: true })
  handleFocusChange() {
    if (this.hasFocus && !this.disabled) {
      this.addComboboxListeners();
    } else {
      this.removeComboboxListeners();
    }
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Close the listbox when the control is disabled
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];

    // Select only the options that match the new value
    this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      // Reset the current option
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());

      // Show
      this.emit('on:show');
      this.addListboxListeners();

      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;

      // Select the appropriate option based on value after the listbox opens
      // requestAnimationFrame(() => {
      //   this.setCurrentOption(this.currentOption);
      // });

      const { keyframes, options } = getAnimation(this, 'combobox.show', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);

      // Make sure the current option is scrolled into view (required for Safari)
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, 'vertical', 'auto');
      }

      this.emit('after:show');
    } else {
      // Hide
      this.emit('on:hide');
      this.removeListboxListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'combobox.hide', { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.listboxHasFocus = false;

      this.emit('after:hide');
    }
  }

  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'after:show');
  }

  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'after:hide');
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Sets focus on the control. */
  focus(options?: FocusOptions) {
    this.displayInput.focus(options);
    this.hasFocus = true;
    this.comboboxHasFocus = true;
  }

  /** Removes focus from the control. */
  blur() {
    this.blur();
    this.hasFocus = false;
    this.comboboxHasFocus = false;
    this.listboxHasFocus = false;
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpTipSlot = this.hasSlotController.test('help-tip');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasHelpTip = this.helpTip ? true : !!hasHelpTipSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;
    const noFilterResutls = this.displayValue && this.filteredOptions.length === 0;

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
          'lynk-form-control--has-error': this.state === 'error' || this.hasAttribute('data-user-invalid'),
          'lynk-form-control--has-warning': this.state === 'warning',
          'lynk-form-control--has-success': this.state === 'success'
        })}
      >
        <label
          id="label"
          part="form-control-label"
          class=${classMap({
            'lynk-form-control__label': true,
            'lynk-form-control--focused': this.hasFocus
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

        <div part="form-control-input" class="lynk-form-control-input">
          <lynk-popup
            class=${classMap({
              'lynk-combobox': true,
              'lynk-combobox--standard': true,
              'lynk-combobox--filled': this.filled,
              'lynk-combobox--pill': this.pill,
              'lynk-combobox--open': this.open,
              'lynk-combobox--disabled': this.disabled,
              'lynk-combobox--restricted': this.restricted,
              'lynk-combobox--multiple': this.multiple,
              'lynk-combobox--focused': this.hasFocus,
              'lynk-combobox--placeholder-visible': isPlaceholderVisible,
              'lynk-combobox--top': this.placement === 'top',
              'lynk-combobox--bottom': this.placement === 'bottom',
              'lynk-combobox--small': this.size === 'small',
              'lynk-combobox--medium': this.size === 'medium',
              'lynk-combobox--large': this.size === 'large',
              'lynk-combobox--has-error': this.state === 'error' || this.hasAttribute('data-user-invalid'),
              'lynk-combobox--has-warning': this.state === 'warning',
              'lynk-combobox--has-success': this.state === 'success'
            })}
            placement=${this.placement}
            strategy=${this.hoist ? 'fixed' : 'absolute'}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="lynk-combobox__control"
              slot="anchor"
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="lynk-combobox__prefix"></slot>

              ${this.restricted
                ? html`
                    <div part="display-input" class="lynk-combobox__display-input">
                      ${this.displayValue ? this.displayValue : '-'}
                    </div>
                  `
                : html`
                    <input
                      part="display-input"
                      class="lynk-combobox__display-input"
                      type="text"
                      placeholder=${this.placeholder}
                      .disabled=${this.disabled}
                      .value=${this.displayValue}
                      autocomplete="off"
                      spellcheck="false"
                      autocapitalize="off"
                      aria-autocomplete=${this.autocomplete}
                      aria-controls="listbox"
                      aria-expanded=${this.open ? 'true' : 'false'}
                      aria-haspopup="listbox"
                      aria-labelledby="label"
                      aria-disabled=${this.disabled ? 'true' : 'false'}
                      aria-describedby="help-text"
                      role="combobox"
                      tabindex="0"
                      @change=${this.handleChange}
                      @input=${this.handleInput}
                      @keydown=${this.handleComboboxKeyDown}
                      @keyup=${this.handleComboboxKeyUp}
                      @focus=${this.handleComboboxFocus}
                      @blur=${this.handleComboboxBlur}
                    />
                  `}
              ${this.multiple
                ? html`
                    <div part="tags" class="lynk-combobox__tags">
                      ${this.selectedOptions.map((option, index) => {
                        if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
                          return html`
                            <lynk-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              ?pill=${this.pill}
                              size=${this.size}
                              ?removable=${!this.restricted}
                              @on:remove=${(event: CustomEvent) => this.handleTagRemove(event, option)}
                            >
                              ${option.getTextLabel()}
                            </lynk-tag>
                          `;
                        } else if (index === this.maxOptionsVisible) {
                          return html`
                            <lynk-tag size=${this.size}> +${this.selectedOptions.length - index} </lynk-tag>
                          `;
                        }
                        return null;
                      })}
                    </div>
                  `
                : ''}

              <input
                class="lynk-combobox__value-input"
                type="text"
                ?disabled=${this.disabled || this.restricted}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(', ') : this.value}
                tabindex="-1"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon
                ? html`
                    <button
                      part="clear-button"
                      class="lynk-combobox__clear-btn"
                      type="button"
                      aria-label=${this.localize.term('clearEntry')}
                      @mousedown=${this.handleClearExpandMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <lynk-icon name="x-lg" library="system"></lynk-icon>
                      </slot>
                    </button>
                  `
                : html`
                  <button
                    part="expand-button"
                    class="lynk-combobox__expand-btn"
                    type="button"
                    @mousedown=${this.handleClearExpandMouseDown}
                    @click=${this.handleExpandClick}
                    tabindex="-1"
                  >
                    <slot name="expand-icon" class="lynk-combobox__expand-icon">
                      <lynk-icon library="system" name="chevron-down"></lynk-icon>
                    </slot>
                  </button>
                `}
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-multiselectable=${this.multiple ? 'true' : 'false'}
              aria-labelledby="label"
              part="listbox"
              class="lynk-combobox__listbox"
              tabindex="-1"
              @keydown=${this.handleListboxKeyDown}
              @mouseup=${this.handleOptionClick}
            >
              ${noFilterResutls
                ? html`
                  <slot
                    name="no-results"
                    class="lynk-combobox__listbox-empty"
                  >
                    No results found...
                  </slot>
                ` : ''
              }
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </lynk-popup>

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
      </div>
    `;
  }
}

setDefaultAnimation('combobox.show', {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: 'ease' }
});

setDefaultAnimation('combobox.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'lynk-combobox': LynkCombobox;
  }
}

