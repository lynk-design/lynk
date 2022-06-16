# Button Group

[component-header:lynk-button-group]

Button groups can be used to group related buttons into sections.

```html preview
<lynk-button-group>
  <lynk-button>Left</lynk-button>
  <lynk-button>Center</lynk-button>
  <lynk-button>Right</lynk-button>
</lynk-button-group>
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<lynk-button-group>
  <lynk-button size="small">Left</lynk-button>
  <lynk-button size="small">Center</lynk-button>
  <lynk-button size="small">Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button size="medium">Left</lynk-button>
  <lynk-button size="medium">Center</lynk-button>
  <lynk-button size="medium">Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button size="large">Left</lynk-button>
  <lynk-button size="large">Center</lynk-button>
  <lynk-button size="large">Right</lynk-button>
</lynk-button-group>
```

### Theme Buttons

Theme buttons are supported through the button's `type` attribute.

```html preview
<lynk-button-group>
  <lynk-button variant="primary">Left</lynk-button>
  <lynk-button variant="primary">Center</lynk-button>
  <lynk-button variant="primary">Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button variant="success">Left</lynk-button>
  <lynk-button variant="success">Center</lynk-button>
  <lynk-button variant="success">Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button variant="neutral">Left</lynk-button>
  <lynk-button variant="neutral">Center</lynk-button>
  <lynk-button variant="neutral">Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button variant="warning">Left</lynk-button>
  <lynk-button variant="warning">Center</lynk-button>
  <lynk-button variant="warning">Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button variant="danger">Left</lynk-button>
  <lynk-button variant="danger">Center</lynk-button>
  <lynk-button variant="danger">Right</lynk-button>
</lynk-button-group>
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<lynk-button-group>
  <lynk-button size="small" pill>Left</lynk-button>
  <lynk-button size="small" pill>Center</lynk-button>
  <lynk-button size="small" pill>Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button size="medium" pill>Left</lynk-button>
  <lynk-button size="medium" pill>Center</lynk-button>
  <lynk-button size="medium" pill>Right</lynk-button>
</lynk-button-group>

<br /><br />

<lynk-button-group>
  <lynk-button size="large" pill>Left</lynk-button>
  <lynk-button size="large" pill>Center</lynk-button>
  <lynk-button size="large" pill>Right</lynk-button>
</lynk-button-group>
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<lynk-button>` element.

```html preview
<lynk-button-group>
  <lynk-button>Button</lynk-button>
  <lynk-button>Button</lynk-button>
  <lynk-dropdown>
    <lynk-button slot="trigger" caret>Dropdown</lynk-button>
    <lynk-menu>
      <lynk-menu-item>Item 1</lynk-menu-item>
      <lynk-menu-item>Item 2</lynk-menu-item>
      <lynk-menu-item>Item 3</lynk-menu-item>
    </lynk-menu>
  </lynk-dropdown>
</lynk-button-group>
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<lynk-button-group>
  <lynk-button variant="primary">Save</lynk-button>
  <lynk-dropdown placement="bottom-end">
    <lynk-button slot="trigger" variant="primary" caret>
      <lynk-visually-hidden>More options</lynk-visually-hidden>
    </lynk-button>
    <lynk-menu>
      <lynk-menu-item>Save</lynk-menu-item>
      <lynk-menu-item>Save as&hellip;</lynk-menu-item>
      <lynk-menu-item>Save all</lynk-menu-item>
    </lynk-menu>
  </lynk-dropdown>
</lynk-button-group>
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<lynk-button-group>
  <lynk-tooltip content="I'm on the left">
    <lynk-button>Left</lynk-button>
  </lynk-tooltip>

  <lynk-tooltip content="I'm in the middle">
    <lynk-button>Center</lynk-button>
  </lynk-tooltip>

  <lynk-tooltip content="I'm on the right">
    <lynk-button>Right</lynk-button>
  </lynk-tooltip>
</lynk-button-group>
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <lynk-button-group label="History">
    <lynk-tooltip content="Undo">
      <lynk-button><lynk-icon name="arrow-counterclockwise" label="Undo"></lynk-icon></lynk-button>
    </lynk-tooltip>
    <lynk-tooltip content="Redo">
      <lynk-button><lynk-icon name="arrow-clockwise" label="Redo"></lynk-icon></lynk-button>
    </lynk-tooltip>
  </lynk-button-group>

  <lynk-button-group label="Formatting">
    <lynk-tooltip content="Bold">
      <lynk-button><lynk-icon name="type-bold" label="Bold"></lynk-icon></lynk-button>
    </lynk-tooltip>
    <lynk-tooltip content="Italic">
      <lynk-button><lynk-icon name="type-italic" label="Italic"></lynk-icon></lynk-button>
    </lynk-tooltip>
    <lynk-tooltip content="Underline">
      <lynk-button><lynk-icon name="type-underline" label="Underline"></lynk-icon></lynk-button>
    </lynk-tooltip>
  </lynk-button-group>

  <lynk-button-group label="Alignment">
    <lynk-tooltip content="Align Left">
      <lynk-button><lynk-icon name="justify-left" label="Align Left"></lynk-icon></lynk-button>
    </lynk-tooltip>
    <lynk-tooltip content="Align Center">
      <lynk-button><lynk-icon name="justify" label="Align Center"></lynk-icon></lynk-button>
    </lynk-tooltip>
    <lynk-tooltip content="Align Right">
      <lynk-button><lynk-icon name="justify-right" label="Align Right"></lynk-icon></lynk-button>
    </lynk-tooltip>
  </lynk-button-group>
</div>

<style>
  .button-group-toolbar lynk-button-group:not(:last-of-type) {
    margin-right: var(--lynk-spacing-x-small);
  }
</style>
```

[component-metadata:lynk-button-group]
