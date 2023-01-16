# Nav Group

[component-header:lynk-nav-group]

```html preview
<lynk-nav>
  <lynk-nav-group heading="Content">
    <lynk-nav-item>All Content</lynk-nav-item>
    <lynk-nav-item>Playlists <lynk-badge slot="suffix" type="warning" pulse>New</lynk-badge></lynk-nav-item>
    <lynk-nav-item selected>Libraries</lynk-nav-item>
  </lynk-nav-group>
  <lynk-nav-group heading="Channels">
    <lynk-nav-item>Live Channels</lynk-nav-item>
    <lynk-nav-item disabled>Audiences</lynk-nav-item>
    <lynk-nav-item>Rules</lynk-nav-item>
  </lynk-nav-group>
</lynk-nav>
```

## Examples

### Custom Header Content

Use the `header` slot to add custom functionality beyond just a text label

```html preview
<lynk-nav style="max-width: 200px;">
  <lynk-nav-group>
    <lynk-stack slot="heading" horizontal justify="between">
      <strong>Libraries</strong>
      <lynk-tooltip content="Create New Library">
        <lynk-button size="tiny" circle><lynk-icon name="plus-lg"></lynk-icon></lynk-button>
      </lynk-tooltip>
    </lynk-stack>
    <lynk-nav-item>Library A</lynk-nav-item>
    <lynk-nav-item>Library B</lynk-nav-item>
    <lynk-nav-item>Library C</lynk-nav-item>
  </lynk-nav-group>
</lynk-nav>
```

[component-metadata:lynk-nav-group]
