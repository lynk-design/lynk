# Range

[component-header:lynk-range]

Ranges allow the user to select a single value within a given range using a slider.

```html preview
<lynk-range></lynk-range>
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-range label="Volume" min="0" max="100"></lynk-input>
```

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<lynk-range
  label="Volume"
  help-text="Controls the volume of the current song."
  min="0"
  max="100"
></lynk-input>
```

### Min, Max, and Step

Use the `min` and `max` attributes to set the range's minimum and maximum values, respectively. The `step` attribute determines the value's interval when increasing and decreasing.

```html preview
<lynk-range min="0" max="10" step="1"></lynk-range>
```

### Disabled

Use the `disabled` attribute to disable a slider.

```html preview
<lynk-range disabled></lynk-range>
```

### Tooltip Placement

By default, the tooltip is shown on top. Set `tooltip` to `bottom` to show it below the slider.

```html preview
<lynk-range tooltip="bottom"></lynk-range>
```

### Disable the Tooltip

To disable the tooltip, set `tooltip` to `none`.

```html preview
<lynk-range tooltip="none"></lynk-range>
```

### Custom Track Colors

You can customize the active and inactive portions of the track using the `--track-color-active` and `--track-color-inactive` custom properties.

```html preview
<lynk-range
  style="
  --track-color-active: var(--lynk-color-primary-600);
  --track-color-inactive: var(--lynk-color-primary-100);
"
></lynk-range>
```

### Custom Tooltip Formatter

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument.

```html preview
<lynk-range min="0" max="100" step="1" class="range-with-custom-formatter"></lynk-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

[component-metadata:lynk-range]
