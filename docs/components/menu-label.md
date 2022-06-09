# Menu Label

[component-header:l-menu-label]

Menu labels are used to describe a group of menu items.

```html preview
<l-menu style="max-width: 200px;">
  <l-menu-label>Fruits</l-menu-label>
  <l-menu-item value="apple">Apple</l-menu-item>
  <l-menu-item value="banana">Banana</l-menu-item>
  <l-menu-item value="orange">Orange</l-menu-item>
  <l-divider></l-divider>
  <l-menu-label>Vegetables</l-menu-label>
  <l-menu-item value="broccoli">Broccoli</l-menu-item>
  <l-menu-item value="carrot">Carrot</l-menu-item>
  <l-menu-item value="zucchini">Zucchini</l-menu-item>
</l-menu>
```

```jsx react
import { SlDivider, SlMenu, SlMenuLabel, SlMenuItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu style={{ maxWidth: '200px' }}>
    <SlMenuLabel>Fruits</SlMenuLabel>
    <SlMenuItem value="apple">Apple</SlMenuItem>
    <SlMenuItem value="banana">Banana</SlMenuItem>
    <SlMenuItem value="orange">Orange</SlMenuItem>
    <SlDivider />
    <SlMenuLabel>Vegetables</SlMenuLabel>
    <SlMenuItem value="broccoli">Broccoli</SlMenuItem>
    <SlMenuItem value="carrot">Carrot</SlMenuItem>
    <SlMenuItem value="zucchini">Zucchini</SlMenuItem>
  </SlMenu>
);
```

[component-metadata:l-menu-label]
