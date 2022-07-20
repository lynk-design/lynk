# Tab Group

[component-header:lynk-tab-group]

Tab groups organize content into a container that shows one section at a time.

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

```html preview
<lynk-tab-group>
  <lynk-tab slot="nav" panel="general">General</lynk-tab>
  <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
  <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
  <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>

  <lynk-tab-panel name="general">This is the general tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="custom">This is the custom tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="advanced">This is the advanced tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="disabled">This is a disabled tab panel.</lynk-tab-panel>
</lynk-tab-group>
```

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html preview
<lynk-tab-group placement="bottom">
  <lynk-tab slot="nav" panel="general">General</lynk-tab>
  <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
  <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
  <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>

  <lynk-tab-panel name="general">This is the general tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="custom">This is the custom tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="advanced">This is the advanced tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="disabled">This is a disabled tab panel.</lynk-tab-panel>
</lynk-tab-group>
```

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html preview
<lynk-tab-group placement="start">
  <lynk-tab slot="nav" panel="general">General</lynk-tab>
  <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
  <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
  <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>

  <lynk-tab-panel name="general">This is the general tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="custom">This is the custom tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="advanced">This is the advanced tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="disabled">This is a disabled tab panel.</lynk-tab-panel>
</lynk-tab-group>
```

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html preview
<lynk-tab-group placement="end">
  <lynk-tab slot="nav" panel="general">General</lynk-tab>
  <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
  <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
  <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>

  <lynk-tab-panel name="general">This is the general tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="custom">This is the custom tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="advanced">This is the advanced tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="disabled">This is a disabled tab panel.</lynk-tab-panel>
</lynk-tab-group>
```

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html preview
<lynk-tab-group class="tabs-closable">
  <lynk-tab slot="nav" panel="general">General</lynk-tab>
  <lynk-tab slot="nav" panel="closable-1" closable>Closable 1</lynk-tab>
  <lynk-tab slot="nav" panel="closable-2" closable>Closable 2</lynk-tab>
  <lynk-tab slot="nav" panel="closable-3" closable>Closable 3</lynk-tab>

  <lynk-tab-panel name="general">This is the general tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="closable-1">This is the first closable tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="closable-2">This is the second closable tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="closable-3">This is the third closable tab panel.</lynk-tab-panel>
</lynk-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('lynk-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`l-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html preview
<lynk-tab-group>
  <lynk-tab slot="nav" panel="tab-1">Tab 1</lynk-tab>
  <lynk-tab slot="nav" panel="tab-2">Tab 2</lynk-tab>
  <lynk-tab slot="nav" panel="tab-3">Tab 3</lynk-tab>
  <lynk-tab slot="nav" panel="tab-4">Tab 4</lynk-tab>
  <lynk-tab slot="nav" panel="tab-5">Tab 5</lynk-tab>
  <lynk-tab slot="nav" panel="tab-6">Tab 6</lynk-tab>
  <lynk-tab slot="nav" panel="tab-7">Tab 7</lynk-tab>
  <lynk-tab slot="nav" panel="tab-8">Tab 8</lynk-tab>
  <lynk-tab slot="nav" panel="tab-9">Tab 9</lynk-tab>
  <lynk-tab slot="nav" panel="tab-10">Tab 10</lynk-tab>
  <lynk-tab slot="nav" panel="tab-11">Tab 11</lynk-tab>
  <lynk-tab slot="nav" panel="tab-12">Tab 12</lynk-tab>
  <lynk-tab slot="nav" panel="tab-13">Tab 13</lynk-tab>
  <lynk-tab slot="nav" panel="tab-14">Tab 14</lynk-tab>
  <lynk-tab slot="nav" panel="tab-15">Tab 15</lynk-tab>
  <lynk-tab slot="nav" panel="tab-16">Tab 16</lynk-tab>
  <lynk-tab slot="nav" panel="tab-17">Tab 17</lynk-tab>
  <lynk-tab slot="nav" panel="tab-18">Tab 18</lynk-tab>
  <lynk-tab slot="nav" panel="tab-19">Tab 19</lynk-tab>
  <lynk-tab slot="nav" panel="tab-20">Tab 20</lynk-tab>

  <lynk-tab-panel name="tab-1">Tab panel 1</lynk-tab-panel>
  <lynk-tab-panel name="tab-2">Tab panel 2</lynk-tab-panel>
  <lynk-tab-panel name="tab-3">Tab panel 3</lynk-tab-panel>
  <lynk-tab-panel name="tab-4">Tab panel 4</lynk-tab-panel>
  <lynk-tab-panel name="tab-5">Tab panel 5</lynk-tab-panel>
  <lynk-tab-panel name="tab-6">Tab panel 6</lynk-tab-panel>
  <lynk-tab-panel name="tab-7">Tab panel 7</lynk-tab-panel>
  <lynk-tab-panel name="tab-8">Tab panel 8</lynk-tab-panel>
  <lynk-tab-panel name="tab-9">Tab panel 9</lynk-tab-panel>
  <lynk-tab-panel name="tab-10">Tab panel 10</lynk-tab-panel>
  <lynk-tab-panel name="tab-11">Tab panel 11</lynk-tab-panel>
  <lynk-tab-panel name="tab-12">Tab panel 12</lynk-tab-panel>
  <lynk-tab-panel name="tab-13">Tab panel 13</lynk-tab-panel>
  <lynk-tab-panel name="tab-14">Tab panel 14</lynk-tab-panel>
  <lynk-tab-panel name="tab-15">Tab panel 15</lynk-tab-panel>
  <lynk-tab-panel name="tab-16">Tab panel 16</lynk-tab-panel>
  <lynk-tab-panel name="tab-17">Tab panel 17</lynk-tab-panel>
  <lynk-tab-panel name="tab-18">Tab panel 18</lynk-tab-panel>
  <lynk-tab-panel name="tab-19">Tab panel 19</lynk-tab-panel>
  <lynk-tab-panel name="tab-20">Tab panel 20</lynk-tab-panel>
</lynk-tab-group>
```

### Manual Activation

When focused, keyboard users can press <kbd>Left</kbd> or <kbd>Right</kbd> to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press <kbd>Space</kbd> or <kbd>Enter</kbd> before showing the tab panel (manual activation).

```html preview
<lynk-tab-group activation="manual">
  <lynk-tab slot="nav" panel="general">General</lynk-tab>
  <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
  <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
  <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>

  <lynk-tab-panel name="general">This is the general tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="custom">This is the custom tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="advanced">This is the advanced tab panel.</lynk-tab-panel>
  <lynk-tab-panel name="disabled">This is a disabled tab panel.</lynk-tab-panel>
</lynk-tab-group>
```

[component-metadata:lynk-tab-group]
