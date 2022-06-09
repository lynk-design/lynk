# Breadcrumb

[component-header:l-breadcrumb]

Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<l-breadcrumb>
  <l-breadcrumb-item>Catalog</l-breadcrumb-item>
  <l-breadcrumb-item>Clothing</l-breadcrumb-item>
  <l-breadcrumb-item>Women's</l-breadcrumb-item>
  <l-breadcrumb-item>Shirts &amp; Tops</l-breadcrumb-item>
</l-breadcrumb>
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
<l-breadcrumb>
  <l-breadcrumb-item href="https://example.com/home">Homepage</l-breadcrumb-item>

  <l-breadcrumb-item href="https://example.com/home/services">Our Services</l-breadcrumb-item>

  <l-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</l-breadcrumb-item>

  <l-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</l-breadcrumb-item>
</l-breadcrumb>
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
<l-breadcrumb>
  <l-icon name="dot" slot="separator"></l-icon>
  <l-breadcrumb-item>First</l-breadcrumb-item>
  <l-breadcrumb-item>Second</l-breadcrumb-item>
  <l-breadcrumb-item>Third</l-breadcrumb-item>
</l-breadcrumb>

<br />

<l-breadcrumb>
  <l-icon name="arrow-right" slot="separator"></l-icon>
  <l-breadcrumb-item>First</l-breadcrumb-item>
  <l-breadcrumb-item>Second</l-breadcrumb-item>
  <l-breadcrumb-item>Third</l-breadcrumb-item>
</l-breadcrumb>

<br />

<l-breadcrumb>
  <span slot="separator">/</span>
  <l-breadcrumb-item>First</l-breadcrumb-item>
  <l-breadcrumb-item>Second</l-breadcrumb-item>
  <l-breadcrumb-item>Third</l-breadcrumb-item>
</l-breadcrumb>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { SlBreadcrumb, SlBreadcrumbItem } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBreadcrumb>
      <l-icon name="dot" slot="separator" />
      <SlBreadcrumbItem>First</SlBreadcrumbItem>
      <SlBreadcrumbItem>Second</SlBreadcrumbItem>
      <SlBreadcrumbItem>Third</SlBreadcrumbItem>
    </SlBreadcrumb>

    <br />

    <SlBreadcrumb>
      <l-icon name="arrow-right" slot="separator" />
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
<l-breadcrumb>
  <l-breadcrumb-item>
    <l-icon slot="prefix" name="house"></l-icon>
    Home
  </l-breadcrumb-item>
  <l-breadcrumb-item>Articles</l-breadcrumb-item>
  <l-breadcrumb-item>Traveling</l-breadcrumb-item>
</l-breadcrumb>
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
<l-breadcrumb>
  <l-breadcrumb-item>Documents</l-breadcrumb-item>
  <l-breadcrumb-item>Policies</l-breadcrumb-item>
  <l-breadcrumb-item>
    Security
    <l-icon slot="suffix" name="shield-lock"></l-icon>
  </l-breadcrumb-item>
</l-breadcrumb>
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
<l-breadcrumb>
  <l-breadcrumb-item>Homepage</l-breadcrumb-item>
  <l-breadcrumb-item>Our Services</l-breadcrumb-item>
  <l-breadcrumb-item>Digital Media</l-breadcrumb-item>
  <l-breadcrumb-item>
    Web Design
    <l-dropdown slot="suffix">
      <l-button slot="trigger" size="small" circle>
        <l-icon label="More options" name="three-dots"></l-icon>
      </l-button>
      <l-menu>
        <l-menu-item checked>Web Design</l-menu-item>
        <l-menu-item>Web Development</l-menu-item>
        <l-menu-item>Marketing</l-menu-item>
      </l-menu>
    </l-dropdown>
  </l-breadcrumb-item>
</l-breadcrumb>
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

[component-metadata:l-breadcrumb]
