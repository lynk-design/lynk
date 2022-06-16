# Tab

[component-header:lynk-tab]

Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

```html preview
<lynk-tab>Tab</lynk-tab>
<lynk-tab active>Active</lynk-tab>
<lynk-tab closable>Closable</lynk-tab>
<lynk-tab disabled>Disabled</lynk-tab>
```

```jsx react
import { SlTab } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTab>Tab</SlTab>
    <SlTab active>Active</SlTab>
    <SlTab closable>Closable</SlTab>
    <SlTab disabled>Disabled</SlTab>
  </>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:lynk-tab]
