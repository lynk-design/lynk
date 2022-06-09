# Icon

[component-header:l-icon]

Icons are symbols that can be used to represent various options within an application.

Shoelace comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

?> Depending on how you're loading Shoelace, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so Shoelace knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<l-icon name="icon-name-here"></l-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <l-input placeholder="Search Icons" clearable>
      <l-icon slot="prefix" name="search"></l-icon>
    </l-input>
    <l-select value="outline">
      <l-menu-item value="outline">Outlined</l-menu-item>
      <l-menu-item value="fill">Filled</l-menu-item>
      <l-menu-item value="all">All icons</l-menu-item>
    </l-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<l-icon>` element or an ancestor to change the color.

```html preview
<div style="color: #4a90e2;">
  <l-icon name="exclamation-triangle"></l-icon>
  <l-icon name="archive"></l-icon>
  <l-icon name="battery-charging"></l-icon>
  <l-icon name="bell"></l-icon>
</div>
<div style="color: #9013fe;">
  <l-icon name="clock"></l-icon>
  <l-icon name="cloud"></l-icon>
  <l-icon name="download"></l-icon>
  <l-icon name="file-earmark"></l-icon>
</div>
<div style="color: #417505;">
  <l-icon name="flag"></l-icon>
  <l-icon name="heart"></l-icon>
  <l-icon name="image"></l-icon>
  <l-icon name="lightning"></l-icon>
</div>
<div style="color: #f5a623;">
  <l-icon name="mic"></l-icon>
  <l-icon name="search"></l-icon>
  <l-icon name="star"></l-icon>
  <l-icon name="trash"></l-icon>
</div>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <SlIcon name="exclamation-triangle"></SlIcon>
      <SlIcon name="archive"></SlIcon>
      <SlIcon name="battery-charging"></SlIcon>
      <SlIcon name="bell"></SlIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <SlIcon name="clock"></SlIcon>
      <SlIcon name="cloud"></SlIcon>
      <SlIcon name="download"></SlIcon>
      <SlIcon name="file-earmark"></SlIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <SlIcon name="flag"></SlIcon>
      <SlIcon name="heart"></SlIcon>
      <SlIcon name="image"></SlIcon>
      <SlIcon name="lightning"></SlIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <SlIcon name="mic"></SlIcon>
      <SlIcon name="search"></SlIcon>
      <SlIcon name="star"></SlIcon>
      <SlIcon name="trash"></SlIcon>
    </div>
  </>
);
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <l-icon name="exclamation-triangle"></l-icon>
  <l-icon name="archive"></l-icon>
  <l-icon name="battery-charging"></l-icon>
  <l-icon name="bell"></l-icon>
  <l-icon name="clock"></l-icon>
  <l-icon name="cloud"></l-icon>
  <l-icon name="download"></l-icon>
  <l-icon name="file-earmark"></l-icon>
  <l-icon name="flag"></l-icon>
  <l-icon name="heart"></l-icon>
  <l-icon name="image"></l-icon>
  <l-icon name="lightning"></l-icon>
  <l-icon name="mic"></l-icon>
  <l-icon name="search"></l-icon>
  <l-icon name="star"></l-icon>
  <l-icon name="trash"></l-icon>
</div>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <SlIcon name="exclamation-triangle" />
    <SlIcon name="archive" />
    <SlIcon name="battery-charging" />
    <SlIcon name="bell" />
    <SlIcon name="clock" />
    <SlIcon name="cloud" />
    <SlIcon name="download" />
    <SlIcon name="file-earmark" />
    <SlIcon name="flag" />
    <SlIcon name="heart" />
    <SlIcon name="image" />
    <SlIcon name="lightning" />
    <SlIcon name="mic" />
    <SlIcon name="search" />
    <SlIcon name="star" />
    <SlIcon name="trash" />
  </div>
);
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<l-icon name="star-fill" label="Add to favorites"></l-icon>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<l-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 8rem;"></l-icon>
```

```jsx react
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></SlIcon>;
```

## Icon Libraries

You can register additional icons to use with the `<l-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Shoelace ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Shoelace components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<l-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<l-icon library="my-icons" name="smile"></l-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="boxicons" name="bx-bot"></l-icon>
  <l-icon library="boxicons" name="bx-cookie"></l-icon>
  <l-icon library="boxicons" name="bx-joystick"></l-icon>
  <l-icon library="boxicons" name="bx-save"></l-icon>
  <l-icon library="boxicons" name="bx-server"></l-icon>
  <l-icon library="boxicons" name="bx-wine"></l-icon>
  <br />
  <l-icon library="boxicons" name="bxs-bot"></l-icon>
  <l-icon library="boxicons" name="bxs-cookie"></l-icon>
  <l-icon library="boxicons" name="bxs-joystick"></l-icon>
  <l-icon library="boxicons" name="bxs-save"></l-icon>
  <l-icon library="boxicons" name="bxs-server"></l-icon>
  <l-icon library="boxicons" name="bxs-wine"></l-icon>
  <br />
  <l-icon library="boxicons" name="bxl-apple"></l-icon>
  <l-icon library="boxicons" name="bxl-chrome"></l-icon>
  <l-icon library="boxicons" name="bxl-edge"></l-icon>
  <l-icon library="boxicons" name="bxl-firefox"></l-icon>
  <l-icon library="boxicons" name="bxl-opera"></l-icon>
  <l-icon library="boxicons" name="bxl-microsoft"></l-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <l-icon library="lucide" name="feather"></l-icon>
  <l-icon library="lucide" name="pie-chart"></l-icon>
  <l-icon library="lucide" name="settings"></l-icon>
  <l-icon library="lucide" name="map-pin"></l-icon>
  <l-icon library="lucide" name="printer"></l-icon>
  <l-icon library="lucide" name="shopping-cart"></l-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="fa" name="far-bell"></l-icon>
  <l-icon library="fa" name="far-comment"></l-icon>
  <l-icon library="fa" name="far-hand-point-right"></l-icon>
  <l-icon library="fa" name="far-hdd"></l-icon>
  <l-icon library="fa" name="far-heart"></l-icon>
  <l-icon library="fa" name="far-star"></l-icon>
  <br />
  <l-icon library="fa" name="fas-archive"></l-icon>
  <l-icon library="fa" name="fas-book"></l-icon>
  <l-icon library="fa" name="fas-chess-knight"></l-icon>
  <l-icon library="fa" name="fas-dice"></l-icon>
  <l-icon library="fa" name="fas-pizza-slice"></l-icon>
  <l-icon library="fa" name="fas-scroll"></l-icon>
  <br />
  <l-icon library="fa" name="fab-apple"></l-icon>
  <l-icon library="fa" name="fab-chrome"></l-icon>
  <l-icon library="fa" name="fab-edge"></l-icon>
  <l-icon library="fa" name="fab-firefox"></l-icon>
  <l-icon library="fa" name="fab-opera"></l-icon>
  <l-icon library="fa" name="fab-microsoft"></l-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="heroicons" name="chat"></l-icon>
  <l-icon library="heroicons" name="cloud"></l-icon>
  <l-icon library="heroicons" name="cog"></l-icon>
  <l-icon library="heroicons" name="document-text"></l-icon>
  <l-icon library="heroicons" name="gift"></l-icon>
  <l-icon library="heroicons" name="volume-up"></l-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="iconoir" name="check-circled-outline"></l-icon>
  <l-icon library="iconoir" name="drawer"></l-icon>
  <l-icon library="iconoir" name="keyframes"></l-icon>
  <l-icon library="iconoir" name="headset-help"></l-icon>
  <l-icon library="iconoir" name="color-picker"></l-icon>
  <l-icon library="iconoir" name="wifi"></l-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="ionicons" name="alarm"></l-icon>
  <l-icon library="ionicons" name="american-football"></l-icon>
  <l-icon library="ionicons" name="bug"></l-icon>
  <l-icon library="ionicons" name="chatbubble"></l-icon>
  <l-icon library="ionicons" name="settings"></l-icon>
  <l-icon library="ionicons" name="warning"></l-icon>
  <br />
  <l-icon library="ionicons" name="alarm-outline"></l-icon>
  <l-icon library="ionicons" name="american-football-outline"></l-icon>
  <l-icon library="ionicons" name="bug-outline"></l-icon>
  <l-icon library="ionicons" name="chatbubble-outline"></l-icon>
  <l-icon library="ionicons" name="settings-outline"></l-icon>
  <l-icon library="ionicons" name="warning-outline"></l-icon>
  <br />
  <l-icon library="ionicons" name="alarm-sharp"></l-icon>
  <l-icon library="ionicons" name="american-football-sharp"></l-icon>
  <l-icon library="ionicons" name="bug-sharp"></l-icon>
  <l-icon library="ionicons" name="chatbubble-sharp"></l-icon>
  <l-icon library="ionicons" name="settings-sharp"></l-icon>
  <l-icon library="ionicons" name="warning-sharp"></l-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="jam" name="calendar"></l-icon>
  <l-icon library="jam" name="camera"></l-icon>
  <l-icon library="jam" name="filter"></l-icon>
  <l-icon library="jam" name="leaf"></l-icon>
  <l-icon library="jam" name="picture"></l-icon>
  <l-icon library="jam" name="set-square"></l-icon>
  <br />
  <l-icon library="jam" name="calendar-f"></l-icon>
  <l-icon library="jam" name="camera-f"></l-icon>
  <l-icon library="jam" name="filter-f"></l-icon>
  <l-icon library="jam" name="leaf-f"></l-icon>
  <l-icon library="jam" name="picture-f"></l-icon>
  <l-icon library="jam" name="set-square-f"></l-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="material" name="notifications"></l-icon>
  <l-icon library="material" name="email"></l-icon>
  <l-icon library="material" name="delete"></l-icon>
  <l-icon library="material" name="volume_up"></l-icon>
  <l-icon library="material" name="settings"></l-icon>
  <l-icon library="material" name="shopping_basket"></l-icon>
  <br />
  <l-icon library="material" name="notifications_round"></l-icon>
  <l-icon library="material" name="email_round"></l-icon>
  <l-icon library="material" name="delete_round"></l-icon>
  <l-icon library="material" name="volume_up_round"></l-icon>
  <l-icon library="material" name="settings_round"></l-icon>
  <l-icon library="material" name="shopping_basket_round"></l-icon>
  <br />
  <l-icon library="material" name="notifications_sharp"></l-icon>
  <l-icon library="material" name="email_sharp"></l-icon>
  <l-icon library="material" name="delete_sharp"></l-icon>
  <l-icon library="material" name="volume_up_sharp"></l-icon>
  <l-icon library="material" name="settings_sharp"></l-icon>
  <l-icon library="material" name="shopping_basket_sharp"></l-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="remixicon" name="business/cloud-line"></l-icon>
  <l-icon library="remixicon" name="design/brush-line"></l-icon>
  <l-icon library="remixicon" name="business/pie-chart-line"></l-icon>
  <l-icon library="remixicon" name="development/bug-line"></l-icon>
  <l-icon library="remixicon" name="media/image-line"></l-icon>
  <l-icon library="remixicon" name="system/alert-line"></l-icon>
  <br />
  <l-icon library="remixicon" name="business/cloud-fill"></l-icon>
  <l-icon library="remixicon" name="design/brush-fill"></l-icon>
  <l-icon library="remixicon" name="business/pie-chart-fill"></l-icon>
  <l-icon library="remixicon" name="development/bug-fill"></l-icon>
  <l-icon library="remixicon" name="media/image-fill"></l-icon>
  <l-icon library="remixicon" name="system/alert-fill"></l-icon>
</div>
```

## Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="tabler" name="alert-triangle"></l-icon>
  <l-icon library="tabler" name="arrow-back"></l-icon>
  <l-icon library="tabler" name="at"></l-icon>
  <l-icon library="tabler" name="ball-baseball"></l-icon>
  <l-icon library="tabler" name="cake"></l-icon>
  <l-icon library="tabler" name="files"></l-icon>
  <br />
  <l-icon library="tabler" name="keyboard"></l-icon>
  <l-icon library="tabler" name="moon"></l-icon>
  <l-icon library="tabler" name="pig"></l-icon>
  <l-icon library="tabler" name="printer"></l-icon>
  <l-icon library="tabler" name="ship"></l-icon>
  <l-icon library="tabler" name="toilet-paper"></l-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <l-icon library="unicons" name="clock"></l-icon>
  <l-icon library="unicons" name="graph-bar"></l-icon>
  <l-icon library="unicons" name="padlock"></l-icon>
  <l-icon library="unicons" name="polygon"></l-icon>
  <l-icon library="unicons" name="rocket"></l-icon>
  <l-icon library="unicons" name="star"></l-icon>
  <br />
  <l-icon library="unicons" name="clock-s"></l-icon>
  <l-icon library="unicons" name="graph-bar-s"></l-icon>
  <l-icon library="unicons" name="padlock-s"></l-icon>
  <l-icon library="unicons" name="polygon-s"></l-icon>
  <l-icon library="unicons" name="rocket-s"></l-icon>
  <l-icon library="unicons" name="star-s"></l-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<l-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by Shoelace components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Shoelace uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Shoelace.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())  
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('l-input');
      const select = container.querySelector('l-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/icons/sprite.svg#${i.name}"></use>
          </svg>      
        `;

        const tooltip = document.createElement('l-tooltip');
        tooltip.content = i.name;
        
        tooltip.appendChild(item);
        list.appendChild(tooltip);

        item.addEventListener('click', () => {
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');
          tooltip.content = 'Copied!';
          setTimeout(() => tooltip.content = i.name, 1000);
        });
      });

      // Filter as the user types
      input.addEventListener('l-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('l-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('l-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('l-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--l-panel-border-color);
    border-radius: var(--l-border-radius-medium);
    padding: var(--l-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls l-input {
    flex: 1 1 auto;
  }

  .icon-search-controls l-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--l-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--l-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--l-color-primary-50);
    color: var(--l-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls l-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }    
  }
</style>

[component-metadata:l-icon]
