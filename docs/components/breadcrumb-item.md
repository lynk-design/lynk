# Breadcrumb Item

[component-header:l-breadcrumb-item]

Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.

```html preview
<l-breadcrumb>
  <l-breadcrumb-item>
    <l-icon slot="prefix" name="house"></l-icon>
    Home
  </l-breadcrumb-item>
  <l-breadcrumb-item>Clothing</l-breadcrumb-item>
  <l-breadcrumb-item>Shirts</l-breadcrumb-item>
</l-breadcrumb>
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

[component-metadata:l-breadcrumb-item]
