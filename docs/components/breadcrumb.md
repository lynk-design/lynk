# Breadcrumb

[component-header:lynk-breadcrumb]

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<lynk-breadcrumb>
  <lynk-breadcrumb-item>Catalog</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Clothing</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Women's</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Shirts &amp; Tops</lynk-breadcrumb-item>
</lynk-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Catalog</SlBreadcrumbItem>
    <SlBreadcrumbItem>Clothing</SlBreadcrumbItem>
    <SlBreadcrumbItem>Women's</SlBreadcrumbItem>
    <SlBreadcrumbItem>Shirts &amp; Tops</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html preview
<lynk-breadcrumb>
  <lynk-breadcrumb-item href="https://example.com/home">Homepage</lynk-breadcrumb-item>

  <lynk-breadcrumb-item href="https://example.com/home/services">Our Services</lynk-breadcrumb-item>

  <lynk-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</lynk-breadcrumb-item>

  <lynk-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</lynk-breadcrumb-item>
</lynk-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem href="https://example.com/home">Homepage</SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services">Our Services</SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</SlBreadcrumbItem>

    <SlBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html preview
<lynk-breadcrumb>
  <lynk-icon name="dot" slot="separator"></lynk-icon>
  <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
</lynk-breadcrumb>

<br />

<lynk-breadcrumb>
  <lynk-icon name="arrow-right" slot="separator"></lynk-icon>
  <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
</lynk-breadcrumb>

<br />

<lynk-breadcrumb>
  <span slot="separator">/</span>
  <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
</lynk-breadcrumb>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBreadcrumb>
      <lynk-icon name="dot" slot="separator" />
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem>
    </SlBreadcrumb>

    <br />

    <SlBreadcrumb>
      <lynk-icon name="arrow-right" slot="separator" />
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem>
    </SlBreadcrumb>

    <br />

    <SlBreadcrumb>
      <span slot="separator">/</span>
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem>
    </SlBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html preview
<lynk-breadcrumb>
  <lynk-breadcrumb-item>
    <lynk-icon slot="prefix" name="house"></lynk-icon>
    Home
  </lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Articles</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Traveling</lynk-breadcrumb-item>
</lynk-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>
      <SlIcon slot="prefix" name="house" />
      Home
    </SlBreadcrumbItem>
    <SlBreadcrumbItem>Articles</SlBreadcrumbItem>
    <SlBreadcrumbItem>Traveling</SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html preview
<lynk-breadcrumb>
  <lynk-breadcrumb-item>Documents</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Policies</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>
    Security
    <lynk-icon slot="suffix" name="shield-lock"></lynk-icon>
  </lynk-breadcrumb-item>
</lynk-breadcrumb>
```

```jsx react
import { SlBreadcrumb, SlBreadcrumbItem, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Documents</SlBreadcrumbItem>
    <SlBreadcrumbItem>Policies</SlBreadcrumbItem>
    <SlBreadcrumbItem>
      Security
      <SlIcon slot="suffix" name="shield-lock"></SlIcon>
    </SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html preview
<lynk-breadcrumb>
  <lynk-breadcrumb-item>Homepage</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Our Services</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>Digital Media</lynk-breadcrumb-item>
  <lynk-breadcrumb-item>
    Web Design
    <lynk-dropdown slot="suffix">
      <lynk-button slot="trigger" size="small" circle>
        <lynk-icon label="More options" name="three-dots"></lynk-icon>
      </lynk-button>
      <lynk-menu>
        <lynk-menu-item checked>Web Design</lynk-menu-item>
        <lynk-menu-item>Web Development</lynk-menu-item>
        <lynk-menu-item>Marketing</lynk-menu-item>
      </lynk-menu>
    </lynk-dropdown>
  </lynk-breadcrumb-item>
</lynk-breadcrumb>
```

```jsx react
import {
  SlBreadcrumb,
  SlBreadcrumbItem,
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBreadcrumb>
    <SlBreadcrumbItem>Homepage</SlBreadcrumbItem>
    <SlBreadcrumbItem>Our Services</SlBreadcrumbItem>
    <SlBreadcrumbItem>Digital Media</SlBreadcrumbItem>
    <SlBreadcrumbItem>
      Web Design
      <SlDropdown slot="suffix">
        <SlButton slot="trigger" size="small" circle>
          <SlIcon label="More options" name="three-dots"></SlIcon>
        </SlButton>
        <SlMenu>
          <SlMenuItem checked>Web Design</SlMenuItem>
          <SlMenuItem>Web Development</SlMenuItem>
          <SlMenuItem>Marketing</SlMenuItem>
        </SlMenu>
      </SlDropdown>
    </SlBreadcrumbItem>
  </SlBreadcrumb>
);
```

[component-metadata:lynk-breadcrumb]
