# Form Field

[component-header:lynk-form-field]

```html preview
<lynk-form-field label="Upload Cat Pictures" help-text="Accepted formats are .tiff and .meow" help-tip="Lolz cats.">
  <input type="file" accept="image/tiff,.meow"/>
</lynk-form-field>
```

## Examples

### Labels

Use the `label` attribute to give the form fiel an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-form-field label="What are your preferred snack options?" help-text="Choose all that apply">
  <lynk-stack horizontal aligne="center">
    <lynk-checkbox>Fruit</lynk-checkbox>
    <lynk-checkbox>Chips</lynk-checkbox>
    <lynk-checkbox>Cheese</lynk-checkbox>
    <lynk-checkbox>Other</lynk-checkbox>
  </lynk-stack>
</lynk-form-field>
```

### Help Text

Add descriptive help text to a form field with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<lynk-form-field label="Nickname" help-text="What would you like people to call you?">
  <input />
</lynk-form-field>
```

### Help Tip

Add descriptive help tooltip to a form field's label with the `help-tip` attribute. For help tips that contain HTML, use the `help-tip` slot instead.

```html preview
<lynk-form-field label="Nickname" help-tip="What would you like people to call you?">
  <lynk-switch>Text</lynk-switch>
</lynk-form-field>
```

### Required Indicator

Use the `required` attribute to visually indicate a required field.

```html preview
<lynk-form-field label="Name" required>
  <input required/>
</lynk-form-field>
```

### Custom Validation States

Use the `state` attribute to manually add an error, warning, or success state.

```html preview
<lynk-form-field label="State" state="error" help-text="That dog aint gonna hunt!">
  <input value="Error"/>
</lynk-form-field>
<lynk-form-field label="State" state="warning" help-text="Proceed with caution...">
  <input value="Warning"/>
</lynk-form-field>
<lynk-form-field label="State" state="success" help-text="Noice!">
  <input value="Success"/>
</lynk-form-field>
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<lynk-form-field placeholder="Small" size="small" label="Size" help-text="Small">
  <input />
</lynk-form-field>
<br />
<lynk-form-field placeholder="Medium" size="medium" label="Size" help-text="Medium">
  <input />
</lynk-form-field>
<br />
<lynk-form-field placeholder="Large" size="large" label="Size" help-text="Large">
  <input />
</lynk-form-field>
```

[component-metadata:lynk-form-field]
