# Switch

[component-header:lynk-switch]

```html preview
<lynk-switch>Switch</lynk-switch>
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<lynk-switch checked>Checked</lynk-switch>
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<lynk-switch disabled>Disabled</lynk-switch>
```

## Sizes

Use the `size` attribute to change a switch's size.

```html preview
<lynk-switch size="small">Small</lynk-switch>
<br />
<lynk-switch size="medium">Medium</lynk-switch>
<br />
<lynk-switch size="large">Large</lynk-switch>
```

## Colors

Use the `color` attribute to change a switch's checked color.

```html preview
<lynk-switch color="default" checked>Default</lynk-switch>
<br />
<lynk-switch color="success" checked>Success</lynk-switch>
<br />
<lynk-switch color="warning" checked>Warning</lynk-switch>
<br />
<lynk-switch color="danger" checked>Danger</lynk-switch>
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html preview
<lynk-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</lynk-switch>
```

[component-metadata:lynk-switch]
