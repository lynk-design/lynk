# Menu Item

[component-header:lynk-menu-item]

```html preview
<lynk-menu style="max-width: 200px;">
  <lynk-menu-item>Option 1</lynk-menu-item>
  <lynk-menu-item>Option 2</lynk-menu-item>
  <lynk-menu-item>Option 3</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-item checked>Checked</lynk-menu-item>
  <lynk-menu-item disabled>Disabled</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-item>
    Prefix Icon
    <lynk-icon slot="prefix" name="gift"></lynk-icon>
  </lynk-menu-item>
  <lynk-menu-item>
    Suffix Icon
    <lynk-icon slot="suffix" name="heart"></lynk-icon>
  </lynk-menu-item>
</lynk-menu>
```

## Examples

### Checked

Use the `checked` attribute to draw menu items in a checked state.

```html preview
<lynk-menu style="max-width: 200px;">
  <lynk-menu-item>Option 1</lynk-menu-item>
  <lynk-menu-item checked>Option 2</lynk-menu-item>
  <lynk-menu-item>Option 3</lynk-menu-item>
</lynk-menu>
```

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<lynk-menu style="max-width: 200px;">
  <lynk-menu-item>Option 1</lynk-menu-item>
  <lynk-menu-item disabled>Option 2</lynk-menu-item>
  <lynk-menu-item>Option 3</lynk-menu-item>
</lynk-menu>
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<lynk-menu style="max-width: 200px;">
  <lynk-menu-item>
    <lynk-icon slot="prefix" name="house"></lynk-icon>
    Home
  </lynk-menu-item>

  <lynk-menu-item>
    <lynk-icon slot="prefix" name="envelope"></lynk-icon>
    Messages
    <lynk-badge slot="suffix" color="primary" pill>12</lynk-badge>
  </lynk-menu-item>

  <lynk-divider></lynk-divider>

  <lynk-menu-item>
    <lynk-icon slot="prefix" name="gear"></lynk-icon>
    Settings
  </lynk-menu-item>
</lynk-menu>
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `l-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<lynk-menu class="menu-value" style="max-width: 200px;">
  <lynk-menu-item value="opt-1">Option 1</lynk-menu-item>
  <lynk-menu-item value="opt-2">Option 2</lynk-menu-item>
  <lynk-menu-item value="opt-3">Option 3</lynk-menu-item>
</lynk-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('on:select', event => {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  });
</script>
```

[component-metadata:lynk-menu-item]
