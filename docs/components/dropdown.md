# Dropdown

[component-header:lynk-dropdown]

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<lynk-dropdown>
  <lynk-button slot="trigger" caret>Dropdown</lynk-button>
  <lynk-menu>
    <lynk-menu-item>Dropdown Item 1</lynk-menu-item>
    <lynk-menu-item>Dropdown Item 2</lynk-menu-item>
    <lynk-menu-item>Dropdown Item 3</lynk-menu-item>
    <lynk-divider></lynk-divider>
    <lynk-menu-item type="checkbox" checked>Checked</lynk-menu-item>
    <lynk-menu-item disabled>Disabled</lynk-menu-item>
    <lynk-divider></lynk-divider>
    <lynk-menu-item>
      Prefix
      <lynk-icon slot="prefix" name="gift"></lynk-icon>
    </lynk-menu-item>
    <lynk-menu-item>
      Suffix Icon
      <lynk-icon slot="suffix" name="heart"></lynk-icon>
    </lynk-menu-item>
  </lynk-menu>
</lynk-dropdown>
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `on:select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <lynk-dropdown>
    <lynk-button slot="trigger" caret>Edit</lynk-button>
    <lynk-menu>
      <lynk-menu-item value="cut">Cut</lynk-menu-item>
      <lynk-menu-item value="copy">Copy</lynk-menu-item>
      <lynk-menu-item value="paste">Paste</lynk-menu-item>
    </lynk-menu>
  </lynk-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('lynk-dropdown');

  dropdown.addEventListener('on:select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <lynk-dropdown>
    <lynk-button slot="trigger" caret>Edit</lynk-button>
    <lynk-menu>
      <lynk-menu-item value="cut">Cut</lynk-menu-item>
      <lynk-menu-item value="copy">Copy</lynk-menu-item>
      <lynk-menu-item value="paste">Paste</lynk-menu-item>
    </lynk-menu>
  </lynk-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('lynk-menu-item[value="cut"]');
  const copy = container.querySelector('lynk-menu-item[value="copy"]');
  const paste = container.querySelector('lynk-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<lynk-dropdown placement="top-start">
  <lynk-button slot="trigger" caret>Edit</lynk-button>
  <lynk-menu>
    <lynk-menu-item>Cut</lynk-menu-item>
    <lynk-menu-item>Copy</lynk-menu-item>
    <lynk-menu-item>Paste</lynk-menu-item>
    <lynk-divider></lynk-divider>
    <lynk-menu-item>Find</lynk-menu-item>
    <lynk-menu-item>Replace</lynk-menu-item>
  </lynk-menu>
</lynk-dropdown>
```

### Disabled

Disable a menu from opening using the `disabled` attribute.

```html preview
<lynk-dropdown disabled>
  <lynk-button slot="trigger" caret>Edit</lynk-button>
  <lynk-menu>
    <lynk-menu-item>Cut</lynk-menu-item>
    <lynk-menu-item>Copy</lynk-menu-item>
    <lynk-menu-item>Paste</lynk-menu-item>
    <lynk-divider></lynk-divider>
    <lynk-menu-item>Find</lynk-menu-item>
    <lynk-menu-item>Replace</lynk-menu-item>
  </lynk-menu>
</lynk-dropdown>
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<lynk-dropdown distance="30">
  <lynk-button slot="trigger" caret>Edit</lynk-button>
  <lynk-menu>
    <lynk-menu-item>Cut</lynk-menu-item>
    <lynk-menu-item>Copy</lynk-menu-item>
    <lynk-menu-item>Paste</lynk-menu-item>
    <lynk-divider></lynk-divider>
    <lynk-menu-item>Find</lynk-menu-item>
    <lynk-menu-item>Replace</lynk-menu-item>
  </lynk-menu>
</lynk-dropdown>
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<lynk-dropdown skidding="30">
  <lynk-button slot="trigger" caret>Edit</lynk-button>
  <lynk-menu>
    <lynk-menu-item>Cut</lynk-menu-item>
    <lynk-menu-item>Copy</lynk-menu-item>
    <lynk-menu-item>Paste</lynk-menu-item>
    <lynk-divider></lynk-divider>
    <lynk-menu-item>Find</lynk-menu-item>
    <lynk-menu-item>Replace</lynk-menu-item>
  </lynk-menu>
</lynk-dropdown>
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="dropdown-hoist">
  <lynk-dropdown>
    <lynk-button slot="trigger" caret>No Hoist</lynk-button>
    <lynk-menu>
      <lynk-menu-item>Item 1</lynk-menu-item>
      <lynk-menu-item>Item 2</lynk-menu-item>
      <lynk-menu-item>Item 3</lynk-menu-item>
    </lynk-menu>
  </lynk-dropdown>

  <lynk-dropdown hoist>
    <lynk-button slot="trigger" caret>Hoist</lynk-button>
    <lynk-menu>
      <lynk-menu-item>Item 1</lynk-menu-item>
      <lynk-menu-item>Item 2</lynk-menu-item>
      <lynk-menu-item>Item 3</lynk-menu-item>
    </lynk-menu>
  </lynk-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--lynk-panel-border-color);
    padding: var(--lynk-spacing-medium);
    overflow: hidden;
  }
</style>
```

### Using a search input within the menu

```html preview
<lynk-dropdown class="dropdown-selection-search">
  <lynk-button slot="trigger" caret>Dropdown</lynk-button>
  <lynk-menu>
    <lynk-input type="search" placeholder="Search" autocomplete="off" clearable>
      <lynk-icon slot="prefix" name="search"></lynk-icon>
    </lynk-input>
    <lynk-menu-label>Category A</lynk-menu-label>
    <lynk-menu-item value="one">Item 1</lynk-menu-item>
    <lynk-menu-item value="two">Item 2</lynk-menu-item>
    <lynk-menu-item value="three">Item 3</lynk-menu-item>
    <lynk-menu-label>Category B</lynk-menu-label>
    <lynk-menu-item value="one">Item 4</lynk-menu-item>
    <lynk-menu-item value="two">Item 5</lynk-menu-item>
    <lynk-menu-item value="three">Item 6</lynk-menu-item>
  </lynk-menu>
</lynk-dropdown>

<script>
  const dropdown = document.querySelector('.dropdown-selection-search');
  const search = dropdown.querySelector('lynk-input');

  dropdown.addEventListener('after:show', () => search.focus());
</script>
```

[component-metadata:lynk-dropdown]
