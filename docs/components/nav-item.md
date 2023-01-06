# Nav Item

[component-header:lynk-nav-item]

```html preview
<lynk-nav>
  <lynk-nav-item>Getting Started</lynk-nav-item>
  <lynk-nav-item>Usage</lynk-nav-item>
  <lynk-nav-item>Contributing</lynk-nav-item>
  <lynk-nav-item selected>Components</lynk-nav-item>
</lynk-nav>
```

## Examples

### Disabled

Add the `disabled` attribute to disable the nav item so it cannot be selected.

```html preview
<lynk-nav style="max-width: 200px;">
  <lynk-nav-item>Getting Started</lynk-nav-item>
  <lynk-nav-item>Usage</lynk-nav-item>
  <lynk-nav-item>Contributing</lynk-nav-item>
  <lynk-nav-item disabled>Components</lynk-nav-item>
</lynk-nav>
```

### Prefix & Suffix

Add content to the start and end of nav items using the `prefix` and `suffix` slots.

```html preview
<lynk-nav style="max-width: 200px;">
  <lynk-nav-item>
    <lynk-icon slot="prefix" name="house"></lynk-icon>
    Home
  </lynk-nav-item>

  <lynk-nav-item>
    <lynk-icon slot="prefix" name="envelope"></lynk-icon>
    Messages
    <lynk-badge slot="suffix" color="primary" pill>12</lynk-badge>
  </lynk-nav-item>

  <lynk-nav-item>
    <lynk-icon slot="prefix" name="gear"></lynk-icon>
    Settings
  </lynk-nav-item>
</lynk-nav>
```

### Nested Nav Items

Add additional nav items into the `children` slot of a nav item to enable nested lists. For best usability, nested navs should never be more than 2 levels deep.

```html preview
<lynk-nav style="max-width: 200px;">
  <lynk-nav-item>
    <lynk-icon slot="prefix" name="house"></lynk-icon>
    Home
  </lynk-nav-item>

  <lynk-nav-item>
    <lynk-icon slot="prefix" name="envelope"></lynk-icon>
    Messages
    <lynk-badge slot="suffix" color="primary" pill>12</lynk-badge>
  </lynk-nav-item>

  <lynk-nav-item expanded>
    <lynk-icon slot="prefix" name="gear"></lynk-icon>
    Settings
    <lynk-nav-item slot="children">Personal Settings</lynk-nav-item>
    <lynk-nav-item slot="children" expanded>
      Workspace Settings
      <lynk-nav-item slot="children">Roles & Permissions</lynk-nav-item>
      <lynk-nav-item slot="children" selected>Integrations</lynk-nav-item>
    </lynk-nav-item>
  </lynk-nav-item>
</lynk-nav>
```

[component-metadata:lynk-nav-item]
