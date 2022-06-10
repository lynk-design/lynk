# Divider

[component-header:l-divider]

Dividers are used to visually separate or group elements.

```html preview
<l-divider></l-divider>
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<l-divider style="--width: 4px;"></l-divider>
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<l-divider style="--color: tomato;"></l-divider>
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <l-divider style="--spacing: 2rem;"></l-divider>
  Below
</div>
```


### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <l-divider vertical></l-divider>
  Middle
  <l-divider vertical></l-divider>
  Last
</div>
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<l-menu style="max-width: 200px;">
  <l-menu-item value="1">Option 1</l-menu-item>
  <l-menu-item value="2">Option 2</l-menu-item>
  <l-menu-item value="3">Option 3</l-menu-item>
  <l-divider></l-divider>
  <l-menu-item value="4">Option 4</l-menu-item>
  <l-menu-item value="5">Option 5</l-menu-item>
  <l-menu-item value="6">Option 6</l-menu-item>
</l-menu>
```

[component-metadata:l-divider]
