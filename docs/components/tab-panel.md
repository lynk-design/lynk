# Tab Panel

[component-header:l-tab-panel]

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

```html preview
<l-tab-group>
  <l-tab slot="nav" panel="general">General</l-tab>
  <l-tab slot="nav" panel="custom">Custom</l-tab>
  <l-tab slot="nav" panel="advanced">Advanced</l-tab>
  <l-tab slot="nav" panel="disabled" disabled>Disabled</l-tab>

  <l-tab-panel name="general">This is the general tab panel.</l-tab-panel>
  <l-tab-panel name="custom">This is the custom tab panel.</l-tab-panel>
  <l-tab-panel name="advanced">This is the advanced tab panel.</l-tab-panel>
  <l-tab-panel name="disabled">This is a disabled tab panel.</l-tab-panel>
</l-tab-group>
```

```jsx react
import { SlTab, SlTabGroup, SlTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlTabGroup>
    <SlTab slot="nav" panel="general">
      General
    </SlTab>
    <SlTab slot="nav" panel="custom">
      Custom
    </SlTab>
    <SlTab slot="nav" panel="advanced">
      Advanced
    </SlTab>
    <SlTab slot="nav" panel="disabled" disabled>
      Disabled
    </SlTab>

    <SlTabPanel name="general">This is the general tab panel.</SlTabPanel>
    <SlTabPanel name="custom">This is the custom tab panel.</SlTabPanel>
    <SlTabPanel name="advanced">This is the advanced tab panel.</SlTabPanel>
    <SlTabPanel name="disabled">This is a disabled tab panel.</SlTabPanel>
  </SlTabGroup>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:l-tab-panel]
