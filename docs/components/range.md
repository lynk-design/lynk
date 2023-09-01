# Range

[component-header:lynk-range]

```html preview
<lynk-range></lynk-range>
```

<lynk-alert open> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.</lynk-alert>

## Examples

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-range label="Volume" min="0" max="100"></lynk-range>
```

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<lynk-range label="Volume" help-text="Controls the volume of the current song." min="0" max="100"></lynk-range>
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

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument. Alternatively, you may also pass in a custom tooltip value by using the `tooltip` slot.

```html preview
<lynk-range min="0" max="100" step="1" class="range-with-custom-formatter"></lynk-range>

<lynk-range min="0" max="100" step="1">
  <span slot="tooltip">Hotdogs</span>
</lynk-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

### Custom Markers

You can add custom marker ticks to the range by passing in a rich array to the `markers` property. Each marker is required to have a `value` key/value pair that maps to the corresponding value on the range input, and an optional `label` key/value pair.

```html preview
<lynk-stack>
  <lynk-range min="10" max="20" markers='[{"value": 5},{"value": 10},{"value": 17},{"value": 20},{"value": 25}]'></lynk-range>

  <lynk-stack>
  <lynk-range step="25" markers='[{"value": 0},{"value": 25},{"value": 50},{"value": 75},{"value": 100}]'></lynk-range>

  <lynk-range class="range-with-markers" min="0" max="50"></lynk-range>
</lynk-stack>

<script>
  const range = document.querySelector('.range-with-markers');
  const button = document.querySelector('.add-marker');

  range.markers = [
    {value: 0, label: '0'},
    {value: 22, label: '22'},
    {value: 31, label: '31'},
    {value: 46, label: '46', selected: true},
    {value: 50, label: '50'}
  ];
</script>
```

[component-metadata:lynk-range]
