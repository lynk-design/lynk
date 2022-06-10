# Menu

[component-header:l-menu]

Menus provide a list of options for the user to choose from.

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html preview
<l-menu style="max-width: 200px;">
  <l-menu-item value="undo">Undo</l-menu-item>
  <l-menu-item value="redo">Redo</l-menu-item>
  <l-divider></l-divider>
  <l-menu-item value="cut">Cut</l-menu-item>
  <l-menu-item value="copy">Copy</l-menu-item>
  <l-menu-item value="paste">Paste</l-menu-item>
  <l-menu-item value="delete">Delete</l-menu-item>
</l-menu>
```

<l-alert open>Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.</l-alert>

[component-metadata:l-menu]
