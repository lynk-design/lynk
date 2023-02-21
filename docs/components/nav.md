# Nav

[component-header:lynk-nav]

```html preview
<lynk-nav style="max-width: 200px;">
  <lynk-nav-item><lynk-icon slot="prefix" name="house-door"></lynk-icon> Home</lynk-nav-item>
  <lynk-nav-item>
    <lynk-icon slot="prefix" name="app-indicator"></lynk-icon> Apps
    <lynk-nav-item selected>CDN</lynk-nav-item>
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

### Nested

Use a multi-level side navigation when there are multiple layers of hierarchical navigation. Clicking on a header opens or collapses the sub-level navigation items, and in some cases also sends the user to the top-level location.

```html preview
<lynk-nav style="max-width: 200px;">
  <lynk-nav-item>Getting Started</lynk-nav-item>
  <lynk-nav-item>Integrations</lynk-nav-item>
  <lynk-nav-item disabled>Coming Soon</lynk-nav-item>
  <lynk-nav-item expanded selected>
    Tokens
    <lynk-nav-item>Radius</lynk-nav-item>
    <lynk-nav-item expanded selected>
      Color
      <lynk-nav-item selected>Theme Tokens</lynk-nav-item>
      <lynk-nav-item>Primitives</lynk-nav-item>
    </lynk-nav-item>
    <lynk-nav-item>Elevation</lynk-nav-item>
    <lynk-nav-item>Spacing</lynk-nav-item>
    <lynk-nav-item>
      Typography
      <lynk-nav-item>Font Family</lynk-nav-item>
      <lynk-nav-item>Font Size</lynk-nav-item>
      <lynk-nav-item>Font Weight</lynk-nav-item>
      <lynk-nav-item>Letter Spacing</lynk-nav-item>
      <lynk-nav-item>Line Height</lynk-nav-item>
    </lynk-nav-item>
  </lynk-nav-item>
</lynk-nav>
```

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

### Squished

The `squished` property can be used to render the entire nav in a simplified narrow style. Nested nav items are hidden, as are nav item labels, which are instead shown via tooltip.

```html preview
<lynk-nav
  style="width: 96px; --background: var(--lynk-color-gray-a10); --padding: var(--lynk-spacing-x-small);"
  squished
>
  <lynk-nav-item>
    <lynk-icon slot="prefix" name="file-earmark-play"></lynk-icon> Content
    <lynk-nav-item selected>All Content</lynk-nav-item>
    <lynk-nav-item>Playlists</lynk-nav-item>
    <lynk-nav-item>Libraries</lynk-nav-item>
  </lynk-nav-item>
  <lynk-nav-item>
    <lynk-icon slot="prefix" name="tv"></lynk-icon> Channels
    <lynk-nav-item>Live Channels</lynk-nav-item>
    <lynk-nav-item>Audiences</lynk-nav-item>
    <lynk-nav-item>Rules</lynk-nav-item>
  </lynk-nav-item>
  <lynk-nav-item>
    <lynk-icon slot="prefix" name="camera-reels"></lynk-icon> Events
    <lynk-nav-item>Live Events</lynk-nav-item>
    <lynk-nav-item>Real Time Events</lynk-nav-item>
    <lynk-nav-item>Event Calendar</lynk-nav-item>
  </lynk-nav-item>
  <lynk-nav-item><lynk-icon slot="prefix" name="film"></lynk-icon> Slicers</lynk-nav-item>
  <lynk-nav-item><lynk-icon slot="prefix" name="speedometer"></lynk-icon> Monitoring</lynk-nav-item>
  <lynk-nav-item><lynk-icon slot="prefix" name="bar-chart"></lynk-icon> Analytics</lynk-nav-item>
  <lynk-nav-item><lynk-icon slot="prefix" name="database-gear"></lynk-icon> Ad Server Debug</lynk-nav-item>
  <lynk-nav-item><lynk-icon slot="prefix" name="gear"></lynk-icon> Settings</lynk-nav-item>
  <lynk-nav-item><lynk-icon slot="prefix" name="house-gear"></lynk-icon> Admin</lynk-nav-item></lynk-nav
>
```

Squished navs can also utilize nav groups and tooltips in place of labels for individual nav items. For best usability practices, avoid using nested nav items and icons that are not easily identifiable with this style of nav.

```html preview
<lynk-nav style="width: 88px; --padding: var(--lynk-spacing-small);" squished>
  <lynk-nav-group heading="Content">
    <lynk-tooltip content="All content" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="file-earmark-play"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
    <lynk-tooltip content="Playlists" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="music-note-list"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
    <lynk-tooltip content="Playlists" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="folder2-open"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
  </lynk-nav-group>
  <lynk-nav-group heading="Channels">
    <lynk-tooltip content="Live Channels" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="tv"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
    <lynk-tooltip content="Audiences" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="people"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
    <lynk-tooltip content="Rules" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="eye"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
  </lynk-nav-group>
  <lynk-nav-group heading="Events">
    <lynk-tooltip content="Live Events" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="camera-reels"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
    <lynk-tooltip content="Real Time Events" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="camera-video"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
    <lynk-tooltip content="Calendar" placement="right">
      <lynk-nav-item no-label>
        <lynk-icon slot="prefix" name="calendar2-range"></lynk-icon>
      </lynk-nav-item>
    </lynk-tooltip>
  </lynk-nav-group>
</lynk-nav>
```

[component-metadata:lynk-nav]
