# Menu Item

[component-header:l-menu-item]

Menu items provide options for the user to pick from in a menu.

```html preview
<l-menu style="max-width: 200px;">
  <l-menu-item>Option 1</l-menu-item>
  <l-menu-item>Option 2</l-menu-item>
  <l-menu-item>Option 3</l-menu-item>
  <l-divider></l-divider>
  <l-menu-item checked>Checked</l-menu-item>
  <l-menu-item disabled>Disabled</l-menu-item>
  <l-divider></l-divider>
  <l-menu-item>
    Prefix Icon
    <l-icon slot="prefix" name="gift"></l-icon>
  </l-menu-item>
  <l-menu-item>
    Suffix Icon
    <l-icon slot="suffix" name="heart"></l-icon>
  </l-menu-item>
</l-menu>
```

## Examples

### Checked

Use the `checked` attribute to draw menu items in a checked state.

```html preview
<l-menu style="max-width: 200px;">
  <l-menu-item>Option 1</l-menu-item>
  <l-menu-item checked>Option 2</l-menu-item>
  <l-menu-item>Option 3</l-menu-item>
</l-menu>
```

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<l-menu style="max-width: 200px;">
  <l-menu-item>Option 1</l-menu-item>
  <l-menu-item disabled>Option 2</l-menu-item>
  <l-menu-item>Option 3</l-menu-item>
</l-menu>
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<l-menu style="max-width: 200px;">
  <l-menu-item>
    <l-icon slot="prefix" name="house"></l-icon>
    Home
  </l-menu-item>

  <l-menu-item>
    <l-icon slot="prefix" name="envelope"></l-icon>
    Messages
    <l-badge slot="suffix" variant="primary" pill>12</l-badge>
  </l-menu-item>

  <l-divider></l-divider>

  <l-menu-item>
    <l-icon slot="prefix" name="gear"></l-icon>
    Settings
  </l-menu-item>
</l-menu>
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `l-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<l-menu class="menu-value" style="max-width: 200px;">
  <l-menu-item value="opt-1">Option 1</l-menu-item>
  <l-menu-item value="opt-2">Option 2</l-menu-item>
  <l-menu-item value="opt-3">Option 3</l-menu-item>
</l-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('l-select', event => {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  });
</script>
```

[component-metadata:l-menu-item]
