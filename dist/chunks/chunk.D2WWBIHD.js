import {
  select_styles_default
} from "./chunk.MJKTLVJB.js";
import {
  LocalizeController
} from "./chunk.E66L43KD.js";
import {
  FormSubmitController
} from "./chunk.QRRAQY34.js";
import {
  HasSlotController
} from "./chunk.7DIJ2SI4.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  emit
} from "./chunk.TOL7LDIN.js";
import {
  watch
} from "./chunk.EYJTTIDT.js";
import {
  e,
  i,
  n,
  t
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/select/select.ts
var LynkSelect = class extends s {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController(this);
    this.menuItems = [];
    this.hasFocus = false;
    this.isOpen = false;
    this.displayLabel = "";
    this.displayTags = [];
    this.multiple = false;
    this.maxTagsVisible = 3;
    this.disabled = false;
    this.name = "";
    this.placeholder = "";
    this.size = "medium";
    this.hoist = false;
    this.value = "";
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.required = false;
    this.clearable = false;
    this.invalid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.resizeMenu());
    this.updateComplete.then(() => {
      this.resizeObserver.observe(this);
      this.syncItemsFromValue();
    });
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  getValueAsArray() {
    if (this.multiple && this.value === "") {
      return [];
    }
    return Array.isArray(this.value) ? this.value : [this.value];
  }
  focus(options) {
    this.control.focus(options);
  }
  blur() {
    this.control.blur();
  }
  handleBlur() {
    if (!this.isOpen) {
      this.hasFocus = false;
      emit(this, "on:blur");
    }
  }
  handleClearClick(event) {
    event.stopPropagation();
    this.value = this.multiple ? [] : "";
    emit(this, "lynk-clear");
    this.syncItemsFromValue();
  }
  handleDisabledChange() {
    if (this.disabled && this.isOpen) {
      this.dropdown.hide();
    }
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleFocus() {
    if (!this.hasFocus) {
      this.hasFocus = true;
      emit(this, "lynk-focus");
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const firstItem = this.menuItems[0];
    const lastItem = this.menuItems[this.menuItems.length - 1];
    if (target.tagName.toLowerCase() === "lynk-tag") {
      return;
    }
    if (event.key === "Tab") {
      if (this.isOpen) {
        this.dropdown.hide();
      }
      return;
    }
    if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      if (!this.isOpen) {
        this.dropdown.show();
      }
      if (event.key === "ArrowDown") {
        this.menu.setCurrentItem(firstItem);
        firstItem.focus();
        return;
      }
      if (event.key === "ArrowUp") {
        this.menu.setCurrentItem(lastItem);
        lastItem.focus();
        return;
      }
    }
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    if (!this.isOpen && event.key.length === 1) {
      event.stopPropagation();
      event.preventDefault();
      this.dropdown.show();
      this.menu.typeToSelect(event);
    }
  }
  handleLabelClick() {
    this.focus();
  }
  handleMenuSelect(event) {
    const item = event.detail.item;
    if (this.multiple) {
      this.value = this.value.includes(item.value) ? this.value.filter((v) => v !== item.value) : [...this.value, item.value];
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
    this.control.focus();
  }
  handleMenuItemLabelChange() {
    if (!this.multiple) {
      const checkedItem = this.menuItems.find((item) => item.value === this.value);
      this.displayLabel = checkedItem ? checkedItem.getTextLabel() : "";
    }
  }
  handleMultipleChange() {
    var _a;
    const value = this.getValueAsArray();
    this.value = this.multiple ? value : (_a = value[0]) != null ? _a : "";
    this.syncItemsFromValue();
  }
  async handleMenuSlotChange() {
    this.menuItems = [...this.querySelectorAll("lynk-menu-item")];
    const values = [];
    this.menuItems.forEach((item) => {
      if (values.includes(item.value)) {
        console.error(`Duplicate value found in <lynk-select> menu item: '${item.value}'`, item);
      }
      values.push(item.value);
    });
    await Promise.all(this.menuItems.map((item) => item.render));
    this.syncItemsFromValue();
  }
  handleTagInteraction(event) {
    const path = event.composedPath();
    const clearButton = path.find((el) => {
      if (el instanceof HTMLElement) {
        const element = el;
        return element.classList.contains("lynk-tag__remove");
      }
      return false;
    });
    if (clearButton) {
      event.stopPropagation();
    }
  }
  async handleValueChange() {
    this.syncItemsFromValue();
    await this.updateComplete;
    this.invalid = !this.input.checkValidity();
    emit(this, "lynk-change");
  }
  resizeMenu() {
    this.menu.style.width = `${this.control.clientWidth}px`;
    this.dropdown.reposition();
  }
  syncItemsFromValue() {
    const value = this.getValueAsArray();
    this.menuItems.forEach((item) => item.checked = value.includes(item.value));
    if (this.multiple) {
      const checkedItems = this.menuItems.filter((item) => value.includes(item.value));
      this.displayLabel = checkedItems.length > 0 ? checkedItems[0].getTextLabel() : "";
      this.displayTags = checkedItems.map((item) => {
        return $`
          <lynk-tag
            part="tag"
            exportparts="
              base:lynk-tag__base,
              content:lynk-tag__content,
              remove-button:lynk-tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @lynk-remove=${(event) => {
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
        this.displayLabel = "";
        this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
        this.displayTags.push($`
          <lynk-tag
            part="tag"
            exportparts="
              base:lynk-tag__base,
              content:lynk-tag__content,
              remove-button:lynk-tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${total - this.maxTagsVisible}
          </lynk-tag>
        `);
      }
    } else {
      const checkedItem = this.menuItems.find((item) => item.value === value[0]);
      this.displayLabel = checkedItem ? checkedItem.getTextLabel() : "";
      this.displayTags = [];
    }
  }
  syncValueFromItems() {
    const checkedItems = this.menuItems.filter((item) => item.checked);
    const checkedValues = checkedItems.map((item) => item.value);
    if (this.multiple) {
      this.value = this.value.filter((val) => checkedValues.includes(val));
    } else {
      this.value = checkedValues.length > 0 ? checkedValues[0] : "";
    }
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasSelection = this.multiple ? this.value.length > 0 : this.value !== "";
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && hasSelection;
    return $`
      <div
        part="form-control"
        class=${o({
      "lynk-form-control": true,
      "lynk-form-control--small": this.size === "small",
      "lynk-form-control--medium": this.size === "medium",
      "lynk-form-control--large": this.size === "large",
      "lynk-form-control--has-label": hasLabel,
      "lynk-form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="lynk-form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="lynk-form-control-input">
          <lynk-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${o({
      "lynk-select": true,
      "lynk-select--open": this.isOpen,
      "lynk-select--empty": !this.value,
      "lynk-select--focused": this.hasFocus,
      "lynk-select--clearable": this.clearable,
      "lynk-select--disabled": this.disabled,
      "lynk-select--multiple": this.multiple,
      "lynk-select--standard": !this.filled,
      "lynk-select--filled": this.filled,
      "lynk-select--has-tags": this.multiple && this.displayTags.length > 0,
      "lynk-select--placeholder-visible": this.displayLabel === "",
      "lynk-select--small": this.size === "small",
      "lynk-select--medium": this.size === "medium",
      "lynk-select--large": this.size === "large",
      "lynk-select--pill": this.pill,
      "lynk-select--invalid": this.invalid
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
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-expanded=${this.isOpen ? "true" : "false"}
              aria-controls="menu"
              tabindex=${this.disabled ? "-1" : "0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="lynk-select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="lynk-select__label">
                ${this.displayTags.length > 0 ? $` <span part="tags" class="lynk-select__tags"> ${this.displayTags} </span> ` : this.displayLabel.length > 0 ? this.displayLabel : this.placeholder}
              </div>

              ${hasClearIcon ? $`
                    <button
                      part="clear-button"
                      class="lynk-select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <lynk-icon name="x-circle-fill" library="system"></lynk-icon>
                      </slot>
                    </button>
                  ` : ""}

              <span part="suffix" class="lynk-select__suffix">
                <slot name="suffix"></slot>
              </span>

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
                .value=${hasSelection ? "1" : ""}
                tabindex="-1"
                @focus=${() => this.control.focus()}
              />
            </div>

            <lynk-menu part="menu" id="menu" class="lynk-select__menu" @lynk-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @on:label-change=${this.handleMenuItemLabelChange}></slot>
            </lynk-menu>
          </lynk-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="lynk-form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
LynkSelect.styles = select_styles_default;
__decorateClass([
  i(".lynk-select")
], LynkSelect.prototype, "dropdown", 2);
__decorateClass([
  i(".lynk-select__control")
], LynkSelect.prototype, "control", 2);
__decorateClass([
  i(".lynk-select__hidden-select")
], LynkSelect.prototype, "input", 2);
__decorateClass([
  i(".lynk-select__menu")
], LynkSelect.prototype, "menu", 2);
__decorateClass([
  t()
], LynkSelect.prototype, "hasFocus", 2);
__decorateClass([
  t()
], LynkSelect.prototype, "isOpen", 2);
__decorateClass([
  t()
], LynkSelect.prototype, "displayLabel", 2);
__decorateClass([
  t()
], LynkSelect.prototype, "displayTags", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSelect.prototype, "multiple", 2);
__decorateClass([
  e({ attribute: "max-tags-visible", type: Number })
], LynkSelect.prototype, "maxTagsVisible", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSelect.prototype, "disabled", 2);
__decorateClass([
  e()
], LynkSelect.prototype, "name", 2);
__decorateClass([
  e()
], LynkSelect.prototype, "placeholder", 2);
__decorateClass([
  e()
], LynkSelect.prototype, "size", 2);
__decorateClass([
  e({ type: Boolean })
], LynkSelect.prototype, "hoist", 2);
__decorateClass([
  e()
], LynkSelect.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSelect.prototype, "filled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSelect.prototype, "pill", 2);
__decorateClass([
  e()
], LynkSelect.prototype, "label", 2);
__decorateClass([
  e()
], LynkSelect.prototype, "placement", 2);
__decorateClass([
  e({ attribute: "help-text" })
], LynkSelect.prototype, "helpText", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSelect.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean })
], LynkSelect.prototype, "clearable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], LynkSelect.prototype, "invalid", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], LynkSelect.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("multiple")
], LynkSelect.prototype, "handleMultipleChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], LynkSelect.prototype, "handleValueChange", 1);
LynkSelect = __decorateClass([
  n("lynk-select")
], LynkSelect);

export {
  LynkSelect
};
