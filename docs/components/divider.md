# Divider

[component-header:lynk-divider]

```html preview
<lynk-divider></lynk-divider>
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<lynk-divider style="--width: 4px;"></lynk-divider>
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<lynk-divider style="--color: tomato;"></lynk-divider>
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <lynk-divider style="--spacing: 2rem;"></lynk-divider>
  Below
</div>
```

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <lynk-divider vertical></lynk-divider>
  Middle
  <lynk-divider vertical></lynk-divider>
  Last
</div>
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<lynk-menu style="max-width: 200px;">
  <lynk-menu-item value="1">Option 1</lynk-menu-item>
  <lynk-menu-item value="2">Option 2</lynk-menu-item>
  <lynk-menu-item value="3">Option 3</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-item value="4">Option 4</lynk-menu-item>
  <lynk-menu-item value="5">Option 5</lynk-menu-item>
  <lynk-menu-item value="6">Option 6</lynk-menu-item>
</lynk-menu>
```

[component-metadata:lynk-divider]
