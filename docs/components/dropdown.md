# Dropdown

[component-header:l-dropdown]

Dropdowns expose additional content that "drops down" in a panel.

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<l-dropdown>
  <l-button slot="trigger" caret>Dropdown</l-button>
  <l-menu>
    <l-menu-item>Dropdown Item 1</l-menu-item>
    <l-menu-item>Dropdown Item 2</l-menu-item>
    <l-menu-item>Dropdown Item 3</l-menu-item>
    <l-divider></l-divider>
    <l-menu-item checked>Checked</l-menu-item>
    <l-menu-item disabled>Disabled</l-menu-item>
    <l-divider></l-divider>
    <l-menu-item>
      Prefix
      <l-icon slot="prefix" name="gift"></l-icon>
    </l-menu-item>
    <l-menu-item>
      Suffix Icon
      <l-icon slot="suffix" name="heart"></l-icon>
    </l-menu-item>
  </l-menu>
</l-dropdown>
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `l-select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <l-dropdown>
    <l-button slot="trigger" caret>Edit</l-button>
    <l-menu>
      <l-menu-item value="cut">Cut</l-menu-item>
      <l-menu-item value="copy">Copy</l-menu-item>
      <l-menu-item value="paste">Paste</l-menu-item>
    </l-menu>
  </l-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('l-dropdown');

  dropdown.addEventListener('le-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <l-dropdown>
    <l-button slot="trigger" caret>Edit</l-button>
    <l-menu>
      <l-menu-item value="cut">Cut</l-menu-item>
      <l-menu-item value="copy">Copy</l-menu-item>
      <l-menu-item value="paste">Paste</l-menu-item>
    </l-menu>
  </l-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('l-menu-item[value="cut"]');
  const copy = container.querySelector('l-menu-item[value="copy"]');
  const paste = container.querySelector('l-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<l-dropdown placement="top-start">
  <l-button slot="trigger" caret>Edit</l-button>
  <l-menu>
    <l-menu-item>Cut</l-menu-item>
    <l-menu-item>Copy</l-menu-item>
    <l-menu-item>Paste</l-menu-item>
    <l-divider></l-divider>
    <l-menu-item>Find</l-menu-item>
    <l-menu-item>Replace</l-menu-item>
  </l-menu>
</l-dropdown>
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<l-dropdown distance="30">
  <l-button slot="trigger" caret>Edit</l-button>
  <l-menu>
    <l-menu-item>Cut</l-menu-item>
    <l-menu-item>Copy</l-menu-item>
    <l-menu-item>Paste</l-menu-item>
    <l-divider></l-divider>
    <l-menu-item>Find</l-menu-item>
    <l-menu-item>Replace</l-menu-item>
  </l-menu>
</l-dropdown>
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<l-dropdown skidding="30">
  <l-button slot="trigger" caret>Edit</l-button>
  <l-menu>
    <l-menu-item>Cut</l-menu-item>
    <l-menu-item>Copy</l-menu-item>
    <l-menu-item>Paste</l-menu-item>
    <l-divider></l-divider>
    <l-menu-item>Find</l-menu-item>
    <l-menu-item>Replace</l-menu-item>
  </l-menu>
</l-dropdown>
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="l-dropdown-hoist">
  <l-dropdown>
    <l-button slot="trigger" caret>No Hoist</l-button>
    <l-menu>
      <l-menu-item>Item 1</l-menu-item>
      <l-menu-item>Item 2</l-menu-item>
      <l-menu-item>Item 3</l-menu-item>
    </l-menu>
  </l-dropdown>

  <l-dropdown hoist>
    <l-button slot="trigger" caret>Hoist</l-button>
    <l-menu>
      <l-menu-item>Item 1</l-menu-item>
      <l-menu-item>Item 2</l-menu-item>
      <l-menu-item>Item 3</l-menu-item>
    </l-menu>
  </l-dropdown>
</div>

<style>
  .l-dropdown-hoist {
    border: solid 2px var(--l-panel-border-color);
    padding: var(--l-spacing-medium);
    overflow: hidden;
  }
</style>
```

[component-metadata:l-dropdown]
