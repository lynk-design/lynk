# Tab Panel

[component-header:lynk-tab-panel]

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

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

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:lynk-tab-panel]
