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

[component-metadata:lynk-popover]
