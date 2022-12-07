# Select

[component-header:lynk-select]

```html preview
<lynk-select>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-item value="option-4">Option 4</lynk-menu-item>
  <lynk-menu-item value="option-5">Option 5</lynk-menu-item>
  <lynk-menu-item value="option-6">Option 6</lynk-menu-item>
</lynk-select>
```

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-select label="Select one">
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

Use the `help-text` value to provide realtime validation and status feedback or other important information that will assist the user as they interact with the field.

```html preview
<lynk-select label="Experience" help-text="Please tell us your skill level.">
  <lynk-menu-item value="1">Novice</lynk-menu-item>
  <lynk-menu-item value="2">Intermediate</lynk-menu-item>
  <lynk-menu-item value="3">Advanced</lynk-menu-item>
</lynk-select>
```

### Help Tip

Add informative help text in a tooltip appended to the label with the `help-tip` attribute. For help tips that contain HTML, use the `help-tip` slot instead.

Use the `help-tip` value to share informative content that will help the user understand the purpose of the field or how the data will be used.

```html preview
<lynk-select label="Experience" help-tip="Additional form-fields will be customized based on your selected experience level.">
  <lynk-menu-item value="1">Novice</lynk-menu-item>
  <lynk-menu-item value="2">Intermediate</lynk-menu-item>
  <lynk-menu-item value="3">Advanced</lynk-menu-item>
</lynk-select>
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<lynk-select placeholder="Select one">
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Clearable

Use the `clearable` attribute to make the control clearable.

```html preview
<lynk-select placeholder="Clearable" clearable>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html preview
<lynk-select filled>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html preview
<lynk-select pill>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Disabled

Use the `disabled` attribute to disable a select.

```html preview
<lynk-select placeholder="Disabled" disabled>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Restricted

Use the `restricted` attribute to replace the select field with a plaintext value.

```html preview
<lynk-select label="Restricted" value="option-2" restricted>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
<lynk-divider style="--spacing: var(--lynk-spacing-small);"></lynk-divider>
<lynk-select id="multiple-restricted-example" label="Restricted w/ Multiple" multiple restricted>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>

<script>
  const select = document.querySelector('#multiple-restricted-example');
  select.value = ['option-2', 'option-3'];
</script>
```

### Setting the Selection

Use the `value` attribute to set the current selection. When users interact with the control, its `value` will update to reflect the newly selected menu item's value. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<lynk-select value="option-2">
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Setting the Selection Imperatively

To programmatically set the selection, update the `value` property as shown below. Note that the value must be an array when using the [`multiple`](#multiple) option.

```html preview
<div class="selecting-example">
  <lynk-select>
    <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
    <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
    <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
  </lynk-select>

  <br />

  <lynk-button data-option="option-1">Set 1</lynk-button>
  <lynk-button data-option="option-2">Set 2</lynk-button>
  <lynk-button data-option="option-3">Set 3</lynk-button>
</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('lynk-select');

  [...container.querySelectorAll('lynk-button')].map(button => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option;
    });
  });
</script>
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. With this option, `value` will be an array of strings instead of a string. It's a good practice to use `clearable` when this option is enabled.

```html preview
<lynk-select placeholder="Select a few" multiple clearable>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-item value="option-4">Option 4</lynk-menu-item>
  <lynk-menu-item value="option-5">Option 5</lynk-menu-item>
  <lynk-menu-item value="option-6">Option 6</lynk-menu-item>
</lynk-select>
```


<lynk-alert open>When using the `multiple` option, the value will be an array instead of a string. You may need to [set the selection imperatively](#setting-the-selection-imperatively) unless you're using a framework that supports binding properties declaratively.</lynk-alert>

### Grouping Options

Options can be grouped visually using menu labels and dividers.

```html preview
<lynk-select placeholder="Select one">
  <lynk-menu-label>Group 1</lynk-menu-label>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-label>Group 2</lynk-menu-label>
  <lynk-menu-item value="option-4">Option 4</lynk-menu-item>
  <lynk-menu-item value="option-5">Option 5</lynk-menu-item>
  <lynk-menu-item value="option-6">Option 6</lynk-menu-item>
</lynk-select>
```

### Sizes

Use the `size` attribute to change a select's size.

```html preview
<lynk-select placeholder="Small" size="small" multiple>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>

<br />

<lynk-select placeholder="Medium" size="medium" multiple>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>

<br />

<lynk-select placeholder="Large" size="large" multiple>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Placement

The preferred placement of the select's menu can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html preview
<lynk-select placement="top">
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
</lynk-select>
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<lynk-select placeholder="Small" size="small">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-select>
<br />
<lynk-select placeholder="Medium" size="medium">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-select>
<br />
<lynk-select placeholder="Large" size="large">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-menu-item value="option-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="option-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="option-3">Option 3</lynk-menu-item>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-select>
```

[component-metadata:lynk-select]
