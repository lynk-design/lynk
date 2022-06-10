# Button Group

[component-header:l-button-group]

Button groups can be used to group related buttons into sections.

```html preview
<l-button-group>
  <l-button>Left</l-button>
  <l-button>Center</l-button>
  <l-button>Right</l-button>
</l-button-group>
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<l-button-group>
  <l-button size="small">Left</l-button>
  <l-button size="small">Center</l-button>
  <l-button size="small">Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button size="medium">Left</l-button>
  <l-button size="medium">Center</l-button>
  <l-button size="medium">Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button size="large">Left</l-button>
  <l-button size="large">Center</l-button>
  <l-button size="large">Right</l-button>
</l-button-group>
```

### Theme Buttons

Theme buttons are supported through the button's `type` attribute.

```html preview
<l-button-group>
  <l-button variant="primary">Left</l-button>
  <l-button variant="primary">Center</l-button>
  <l-button variant="primary">Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button variant="success">Left</l-button>
  <l-button variant="success">Center</l-button>
  <l-button variant="success">Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button variant="neutral">Left</l-button>
  <l-button variant="neutral">Center</l-button>
  <l-button variant="neutral">Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button variant="warning">Left</l-button>
  <l-button variant="warning">Center</l-button>
  <l-button variant="warning">Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button variant="danger">Left</l-button>
  <l-button variant="danger">Center</l-button>
  <l-button variant="danger">Right</l-button>
</l-button-group>
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<l-button-group>
  <l-button size="small" pill>Left</l-button>
  <l-button size="small" pill>Center</l-button>
  <l-button size="small" pill>Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button size="medium" pill>Left</l-button>
  <l-button size="medium" pill>Center</l-button>
  <l-button size="medium" pill>Right</l-button>
</l-button-group>

<br /><br />

<l-button-group>
  <l-button size="large" pill>Left</l-button>
  <l-button size="large" pill>Center</l-button>
  <l-button size="large" pill>Right</l-button>
</l-button-group>
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<l-button>` element.

```html preview
<l-button-group>
  <l-button>Button</l-button>
  <l-button>Button</l-button>
  <l-dropdown>
    <l-button slot="trigger" caret>Dropdown</l-button>
    <l-menu>
      <l-menu-item>Item 1</l-menu-item>
      <l-menu-item>Item 2</l-menu-item>
      <l-menu-item>Item 3</l-menu-item>
    </l-menu>
  </l-dropdown>
</l-button-group>
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<l-button-group>
  <l-button variant="primary">Save</l-button>
  <l-dropdown placement="bottom-end">
    <l-button slot="trigger" variant="primary" caret>
      <l-visually-hidden>More options</l-visually-hidden>
    </l-button>
    <l-menu>
      <l-menu-item>Save</l-menu-item>
      <l-menu-item>Save as&hellip;</l-menu-item>
      <l-menu-item>Save all</l-menu-item>
    </l-menu>
  </l-dropdown>
</l-button-group>
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<l-button-group>
  <l-tooltip content="I'm on the left">
    <l-button>Left</l-button>
  </l-tooltip>

  <l-tooltip content="I'm in the middle">
    <l-button>Center</l-button>
  </l-tooltip>

  <l-tooltip content="I'm on the right">
    <l-button>Right</l-button>
  </l-tooltip>
</l-button-group>
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <l-button-group label="History">
    <l-tooltip content="Undo">
      <l-button><l-icon name="arrow-counterclockwise" label="Undo"></l-icon></l-button>
    </l-tooltip>
    <l-tooltip content="Redo">
      <l-button><l-icon name="arrow-clockwise" label="Redo"></l-icon></l-button>
    </l-tooltip>
  </l-button-group>

  <l-button-group label="Formatting">
    <l-tooltip content="Bold">
      <l-button><l-icon name="type-bold" label="Bold"></l-icon></l-button>
    </l-tooltip>
    <l-tooltip content="Italic">
      <l-button><l-icon name="type-italic" label="Italic"></l-icon></l-button>
    </l-tooltip>
    <l-tooltip content="Underline">
      <l-button><l-icon name="type-underline" label="Underline"></l-icon></l-button>
    </l-tooltip>
  </l-button-group>

  <l-button-group label="Alignment">
    <l-tooltip content="Align Left">
      <l-button><l-icon name="justify-left" label="Align Left"></l-icon></l-button>
    </l-tooltip>
    <l-tooltip content="Align Center">
      <l-button><l-icon name="justify" label="Align Center"></l-icon></l-button>
    </l-tooltip>
    <l-tooltip content="Align Right">
      <l-button><l-icon name="justify-right" label="Align Right"></l-icon></l-button>
    </l-tooltip>
  </l-button-group>
</div>

<style>
  .button-group-toolbar l-button-group:not(:last-of-type) {
    margin-right: var(--l-spacing-x-small);
  }
</style>
```

[component-metadata:l-button-group]
