# Split Panel

[component-header:lynk-split-panel]

```html preview
<lynk-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</lynk-split-panel>
```

## Examples

### Initial Position

To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.

```html preview
<lynk-split-panel position="75">
  <div
    slot="start"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</lynk-split-panel>
```

### Initial Position in Pixels

To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.

```html preview
<lynk-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</lynk-split-panel>
```
### Vertical

Add the `vertical` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.

```html preview
<lynk-split-panel vertical style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</lynk-split-panel>
```

### Snapping

To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap="100px 50%"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.

```html preview
<div class="split-panel-snapping">
  <lynk-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </lynk-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--lynk-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

### Disabled

Add the `disabled` attribute to prevent the divider from being repositioned.

```html preview
<lynk-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</lynk-split-panel>
```

### Setting the Primary Panel

By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to `start` or `end` using the `primary` attribute.

Try resizing the example below with each option and notice how the panels respond.

```html preview
<div class="split-panel-primary">
  <lynk-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </lynk-split-panel>

  <sl-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
    <sl-option value="">None</sl-option>
    <sl-option value="start">Start</sl-option>
    <sl-option value="end">End</sl-option>
  </sl-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('lynk-split-panel');
  const select = container.querySelector('sl-select');

  select.addEventListener('sl-change', () => (splitPanel.primary = select.value));
</script>
```

### Min & Max

To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.

This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.

```html preview
<lynk-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</lynk-split-panel>
```

### Nested Split Panels

Create complex layouts that can be repositioned independently by nesting split panels.

```html preview
<lynk-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div slot="end">
    <lynk-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Top
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
      >
        Bottom
      </div>
    </lynk-split-panel>
  </div>
</lynk-split-panel>
```

### Customizing the Divider

You can target the `divider` part to apply CSS properties to the divider. To add a custom handle, slot an icon into the `divider` slot. When customizing the divider, make sure to think about focus styles for keyboard users.

```html preview
<lynk-split-panel style="--divider-width: 20px;">
  <lynk-icon slot="divider" name="grip-vertical"></lynk-icon>
  <div
    slot="start"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
  >
    End
  </div>
</lynk-split-panel>
```

Here's a more elaborate example that changes the divider's color and width and adds a styled handle.

```html preview
<div class="split-panel-divider">
  <lynk-split-panel>
    <lynk-icon slot="divider" name="grip-vertical"></lynk-icon>
    <div
      slot="start"
      style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--lynk-color-neutral-50); display: flex; align-items: center; justify-content: center;"
    >
      End
    </div>
  </lynk-split-panel>
</div>

<style>
  .split-panel-divider lynk-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider lynk-split-panel::part(divider) {
    background-color: var(--lynk-color-pink-600);
  }

  .split-panel-divider lynk-icon {
    position: absolute;
    border-radius: var(--lynk-border-radius-small);
    background: var(--lynk-color-pink-600);
    color: var(--lynk-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-divider lynk-split-panel::part(divider):focus-visible {
    background-color: var(--lynk-color-primary-600);
  }

  .split-panel-divider lynk-split-panel:focus-within lynk-icon {
    background-color: var(--lynk-color-primary-600);
    color: var(--lynk-color-neutral-0);
  }
</style>
```

[component-metadata:lynk-split-panel]
