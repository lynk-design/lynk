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

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<lynk-radio-group label="Select an option" name="a" value="3">
  <lynk-radio value="1">Option 1</lynk-radio>
  <lynk-radio value="2">Option 2</lynk-radio>
  <lynk-radio value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio value="1">Option 1</lynk-radio>
  <lynk-radio value="2" disabled>Option 2</lynk-radio>
  <lynk-radio value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

## Sizes

Use the `size` attribute to change a radio's size.

```html preview
<lynk-radio size="small">Small</lynk-radio>
<lynk-radio size="medium">Medium</lynk-radio>
<lynk-radio size="large">Large</lynk-radio>
```

[component-metadata:lynk-radio]
