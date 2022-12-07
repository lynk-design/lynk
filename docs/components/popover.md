# Popover

[component-header:lynk-popover]

Popover's display rich content in a "pop over" panel to add additional information or functionality when a user interacts with a triggering element.

Unlike a tooltip, users can interact with popover content. However, popover's should be used sparingly and only to expose a small amount of information or functionality that is immediately relevant but temporary to the current workflow.

<strong>Always save work when automatically closing a popover.</strong> Users may unintentionally dismiss a popover by clicking or tapping another part of the screen. Discard work only when people click or tap an explicit Cancel button.

<strong>Show one popover at a time.</strong> Displaying multiple popovers clutters the interface and causes confusion. Never show a cascade or hierarchy of popovers, in which one emerges from another. If you need to show a new popover, close the open one first.

```html preview
<lynk-popover label="Pardon me...">
  <lynk-button slot="trigger">Click Me</lynk-button>

    Could you have any Grey Poupon?
    <lynk-select size="small" placeholder="Select one">
      <lynk-menu-item value="option-1">Yes</lynk-menu-item>
      <lynk-menu-item value="option-2">No</lynk-menu-item>
      <lynk-menu-item value="option-3">Ignore</lynk-menu-item>
    </lynk-select>

    <lynk-button slot="footer" size="small">Driver</lynk-button>
</lynk-popover>
```

## Examples

### Placement

The preferred placement of the popover can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<lynk-popover label="Pardon me..." placement="top-start">
  <lynk-button slot="trigger">Click Me</lynk-button>

    Could you have any Grey Poupon?
    <lynk-select size="small" placeholder="Select one">
      <lynk-menu-item value="option-1">Yes</lynk-menu-item>
      <lynk-menu-item value="option-2">No</lynk-menu-item>
      <lynk-menu-item value="option-3">Ignore</lynk-menu-item>
    </lynk-select>

    <lynk-button slot="footer" size="small">Driver</lynk-button>
</lynk-popover>
```

### Disabled

Disable a popover from opening using the `disabled` attribute.

```html preview
<lynk-popover disabled>
  <lynk-button slot="trigger">Click Me</lynk-button>

    Could you have any Grey Poupon?
    <lynk-select size="small" placeholder="Select one">
      <lynk-menu-item value="option-1">Yes</lynk-menu-item>
      <lynk-menu-item value="option-2">No</lynk-menu-item>
      <lynk-menu-item value="option-3">Ignore</lynk-menu-item>
    </lynk-select>

    <lynk-button slot="footer" size="small">Driver</lynk-button>
</lynk-popover>
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<lynk-popover label="Pardon me..." distance="30">
  <lynk-button slot="trigger">Click Me</lynk-button>

    Could you have any Grey Poupon?
    <lynk-select size="small" placeholder="Select one">
      <lynk-menu-item value="option-1">Yes</lynk-menu-item>
      <lynk-menu-item value="option-2">No</lynk-menu-item>
      <lynk-menu-item value="option-3">Ignore</lynk-menu-item>
    </lynk-select>

    <lynk-button slot="footer" size="small">Driver</lynk-button>
</lynk-popover>
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<lynk-popover label="Pardon me..." skidding="30">
  <lynk-button slot="trigger">Click Me</lynk-button>

    Could you have any Grey Poupon?
    <lynk-select size="small" placeholder="Select one">
      <lynk-menu-item value="option-1">Yes</lynk-menu-item>
      <lynk-menu-item value="option-2">No</lynk-menu-item>
      <lynk-menu-item value="option-3">Ignore</lynk-menu-item>
    </lynk-select>

    <lynk-button slot="footer" size="small">Driver</lynk-button>
</lynk-popover>
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="popover-hoist">
  <lynk-popover label="Pardon me...">
    <lynk-button slot="trigger">No Hoist</lynk-button>

      Could you have any Grey Poupon?
      <lynk-select size="small" placeholder="Select one">
        <lynk-menu-item value="option-1">Yes</lynk-menu-item>
        <lynk-menu-item value="option-2">No</lynk-menu-item>
        <lynk-menu-item value="option-3">Ignore</lynk-menu-item>
      </lynk-select>

      <lynk-button slot="footer" size="small">Driver</lynk-button>
  </lynk-popover>

  <lynk-popover label="Pardon me..." hoist>
    <lynk-button slot="trigger">Hoist</lynk-button>

      Could you have any Grey Poupon?
      <lynk-select size="small" placeholder="Select one">
        <lynk-menu-item value="option-1">Yes</lynk-menu-item>
        <lynk-menu-item value="option-2">No</lynk-menu-item>
        <lynk-menu-item value="option-3">Ignore</lynk-menu-item>
      </lynk-select>

      <lynk-button slot="footer" size="small">Driver</lynk-button>
  </lynk-popover>
</div>

<style>
  .popover-hoist {
    position: relative;
    border: solid 2px var(--lynk-panel-border-color);
    padding: var(--lynk-spacing-medium);
    overflow: hidden;
  }
</style>
```

[component-metadata:lynk-popover]
