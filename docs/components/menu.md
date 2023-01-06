# Menu

[component-header:lynk-menu]

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions.

```html preview
<lynk-menu style="max-width: 200px;">
  <lynk-menu-item value="undo">Undo</lynk-menu-item>
  <lynk-menu-item value="redo">Redo</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-item value="cut">Cut</lynk-menu-item>
  <lynk-menu-item value="copy">Copy</lynk-menu-item>
  <lynk-menu-item value="paste">Paste</lynk-menu-item>
  <lynk-menu-item value="delete">Delete</lynk-menu-item>
</lynk-menu>
```

<lynk-alert type="warning" open>Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.</lynk-alert>

[component-metadata:lynk-menu]
