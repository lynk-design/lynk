# Menu Label

[component-header:lynk-menu-label]

Menu labels are used to describe a group of menu items.

```html preview
<lynk-menu style="max-width: 200px;">
  <lynk-menu-label>Fruits</lynk-menu-label>
  <lynk-menu-item value="apple">Apple</lynk-menu-item>
  <lynk-menu-item value="banana">Banana</lynk-menu-item>
  <lynk-menu-item value="orange">Orange</lynk-menu-item>
  <lynk-divider></lynk-divider>
  <lynk-menu-label>Vegetables</lynk-menu-label>
  <lynk-menu-item value="broccoli">Broccoli</lynk-menu-item>
  <lynk-menu-item value="carrot">Carrot</lynk-menu-item>
  <lynk-menu-item value="zucchini">Zucchini</lynk-menu-item>
</lynk-menu>
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

[component-metadata:lynk-menu-label]
