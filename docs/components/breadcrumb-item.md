# Breadcrumb Item

[component-header:lynk-breadcrumb-item]

Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.

```html preview
<lynk-breadcrumb>
  <lynk-breadcrumb-item>
    <lynk-icon slot="prefix" name="house"></lynk-icon>
    Home
  </lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Clothing</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Shirts</lynk-breadcrumb-item>
</lynk-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <SlIcon slot="prefix" name="house"></SlIcon>
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:lynk-breadcrumb-item]
