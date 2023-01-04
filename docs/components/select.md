# Select

[component-header:lynk-select]

```html preview
<lynk-select>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
  <lynk-divider></lynk-divider>
  <lynk-option value="option-4">Option 4</lynk-option>
  <lynk-option value="option-5">Option 5</lynk-option>
  <lynk-option value="option-6">Option 6</lynk-option>
</lynk-select>
```


<lynk-alert type="info" open>This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.</lynk-alert>

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-select label="Select one">
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

Use the `help-text` value to provide realtime validation and status feedback or other important information that will assist the user as they interact with the field.

```html preview
<lynk-select label="Experience" help-text="Please tell us your skill level.">
  <lynk-option value="1">Novice</lynk-option>
  <lynk-option value="2">Intermediate</lynk-option>
  <lynk-option value="3">Advanced</lynk-option>
</lynk-select>
```

### Help Tip

Add informative help text in a tooltip appended to the label with the `help-tip` attribute. For help tips that contain HTML, use the `help-tip` slot instead.

Use the `help-tip` value to share informative content that will help the user understand the purpose of the field or how the data will be used.

```html preview
<lynk-select label="Experience" help-tip="Additional form-fields will be customized based on your selected experience level.">
  <lynk-option value="1">Novice</lynk-option>
  <lynk-option value="2">Intermediate</lynk-option>
  <lynk-option value="3">Advanced</lynk-option>
</lynk-select>
```

### Required Indicator

Use the `required` attribute to visually indicate a required field.

```html preview
<lynk-select label="Experience" placeholder="Select One" help-text="Please tell us your skill level." required >
  <lynk-option value="1">Novice</lynk-option>
  <lynk-option value="2">Intermediate</lynk-option>
  <lynk-option value="3">Advanced</lynk-option>
</lynk-select>
```

### Custom Validation States

Use the `state` attribute to manually add an error, warning, or success state.

```html preview
<lynk-select label="Experience" value="1" state="error" help-text="This level is not preferable." required >
  <lynk-option value="1">Novice</lynk-option>
  <lynk-option value="2">Intermediate</lynk-option>
  <lynk-option value="3">Advanced</lynk-option>
</lynk-select>
<lynk-select label="Experience" value="2" state="warning" help-text="This level is acceptable." required >
  <lynk-option value="1">Novice</lynk-option>
  <lynk-option value="2">Intermediate</lynk-option>
  <lynk-option value="3">Advanced</lynk-option>
</lynk-select>
<lynk-select label="Experience" value="3" state="success" help-text="Congratulations Chad!" required >
  <lynk-option value="1">Novice</lynk-option>
  <lynk-option value="2">Intermediate</lynk-option>
  <lynk-option value="3">Advanced</lynk-option>
</lynk-select>
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<lynk-select placeholder="Select one">
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Clearable

Use the `clearable` attribute to make the control clearable.

```html preview
<lynk-select placeholder="Clearable" clearable value="option-1">
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html preview
<lynk-select filled>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html preview
<lynk-select pill>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Disabled

Use the `disabled` attribute to disable a select.

```html preview
<lynk-select placeholder="Disabled" disabled>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Restricted

Use the `restricted` attribute to replace the select field with a plaintext value.

```html preview
<lynk-select label="Restricted" value="option-2" restricted>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
<lynk-divider style="--spacing: var(--lynk-spacing-small);"></lynk-divider>
<lynk-select id="multiple-restricted-example" label="Restricted w/ Multiple" multiple restricted>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>

<script>
  const select = document.querySelector('#multiple-restricted-example');
  select.value = ['option-2', 'option-3'];
</script>
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. With this option, `value` will be an array of strings instead of a string. It's a good practice to use `clearable` when this option is enabled.

```html preview
<lynk-select placeholder="Select a few" value="option-1 option-2 option-3" multiple clearable>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
  <lynk-option value="option-4">Option 4</lynk-option>
  <lynk-option value="option-5">Option 5</lynk-option>
  <lynk-option value="option-6">Option 6</lynk-option>
</lynk-select>
```

<lynk-alert open>Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.</lynk-alert>

### Setting Initial Values

Use the `value` attribute to set the initial selection. When using `multiple`, use space-delimited values to select more than one option.

```html preview
<lynk-select value="option-1 option-2" multiple clearable>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
  <lynk-option value="option-4">Option 4</lynk-option>
</lynk-select>
```

### Grouping Options

Use `<lynk-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html preview
<lynk-select>
  <small>Section 1</small>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
  <lynk-divider></lynk-divider>
  <small>Section 2</small>
  <lynk-option value="option-4">Option 4</lynk-option>
  <lynk-option value="option-5">Option 5</lynk-option>
  <lynk-option value="option-6">Option 6</lynk-option>
</lynk-select>
```

### Sizes

Use the `size` attribute to change a select's size.

```html preview
<lynk-select placeholder="Small" size="small" multiple>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>

<br />

<lynk-select placeholder="Medium" size="medium" multiple>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>

<br />

<lynk-select placeholder="Large" size="large" multiple>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html preview
<lynk-select placement="top">
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Prefix & Suffix Icons

Use the `prefix` slot to prepend an icon to the control.

```html preview
<lynk-select placeholder="Small" size="small" clearable>
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
<br />
<lynk-select placeholder="Medium" size="medium" clearable>
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
<br />
<lynk-select placeholder="Large" size="large" clearable>
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

[component-metadata:lynk-select]
