# Tab

[component-header:l-tab]

Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

```html preview
<l-tab>Tab</l-tab>
<l-tab active>Active</l-tab>
<l-tab closable>Closable</l-tab>
<l-tab disabled>Disabled</l-tab>
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

[component-metadata:l-tab]
