# Nav

[component-header:lynk-nav]

A description of the component goes here.

```html preview
<lynk-nav style="max-width: 200px;">
  <lynk-nav-item><lynk-icon slot="prefix" name="house-door"></lynk-icon> Home</lynk-nav-item>
  <lynk-nav-item>
    <lynk-icon slot="prefix" name="app-indicator"></lynk-icon> Apps
    <lynk-nav-item>CDN</lynk-nav-item>
    <lynk-nav-item>Sites</lynk-nav-item>
    <lynk-nav-item>Security</lynk-nav-item>
  </lynk-nav-item>
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

### Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a nav item. When an item is selected, the `on:select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value and other properties.

```html preview
<lynk-nav class="nav-value" style="max-width: 200px;">
  <lynk-nav-item value="nav-1">Nav Item 1</lynk-nav-item>
  <lynk-nav-item value="nav-2">Nav Item 2</lynk-nav-item>
  <lynk-nav-item value="nav-disabled" disabled>Nav Item 3</lynk-nav-item>
  <lynk-nav-item value="nav-parent" expanded>
    Nav Sublist
    <lynk-nav-item value="nav-4">Nav Item 4</lynk-nav-item>
  </lynk-nav-item>
</lynk-nav>

<script>
  const nav = document.querySelector('.nav-value');

  nav.addEventListener('on:select', event => {
    const item = event.detail.item;

    console.log(`Selected value: ${item.value}`);
  });
</script>
```

[component-metadata:lynk-nav]
