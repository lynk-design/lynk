# Radio Group

[component-header:lynk-radio-group]

Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

```html preview
<lynk-radio-group label="Select an option">
  <lynk-radio name="option" value="1" checked>Option 1</lynk-radio>
  <lynk-radio name="option" value="2">Option 2</lynk-radio>
  <lynk-radio name="option" value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

## Examples

### Showing the Label

You can show the fieldset and legend that wraps the radio group using the `fieldset` attribute. If you don't use this option, you should still provide a label so screen readers announce the control correctly.

```html preview
<lynk-radio-group label="Select an option" fieldset>
  <lynk-radio name="option" value="1" checked>Option 1</lynk-radio>
  <lynk-radio name="option" value="2">Option 2</lynk-radio>
  <lynk-radio name="option" value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html preview
<lynk-radio-group label="Select an option">
  <lynk-radio-button name="option" value="1" checked>Option 1</lynk-radio-button>
  <lynk-radio-button name="option" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button name="option" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>
```

[component-metadata:lynk-radio-group]
