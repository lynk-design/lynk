# Radio

[component-header:lynk-radio]

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio name="option" value="1" checked>Option 1</lynk-radio>
  <lynk-radio name="option" value="2">Option 2</lynk-radio>
  <lynk-radio name="option" value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

<lynk-alert open>This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.</lynk-alert>

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

```html preview
<lynk-radio-group label="Select an option" name="a" value="3">
  <lynk-radio name="option" value="1">Option 1</lynk-radio>
  <lynk-radio name="option" value="2">Option 2</lynk-radio>
  <lynk-radio name="option" value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio name="option" value="1">Option 1</lynk-radio>
  <lynk-radio name="option" value="2" disabled>Option 2</lynk-radio>
  <lynk-radio name="option" value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

[component-metadata:lynk-radio]
