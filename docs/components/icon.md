# Icon

[component-header:lynk-icon]

Icons are symbols that can be used to represent various options within an application.

Lynk comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

<lynk-alert open>Depending on how you're loading Lynk, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so Lynk knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.</lynk-alert>

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<lynk-icon name="icon-name-here"></lynk-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <lynk-input placeholder="Search Icons" clearable>
      <lynk-icon slot="prefix" name="search"></lynk-icon>
    </lynk-input>
    <lynk-select value="outline">
      <lynk-menu-item value="outline">Outlined</lynk-menu-item>
      <lynk-menu-item value="fill">Filled</lynk-menu-item>
      <lynk-menu-item value="all">All icons</lynk-menu-item>
    </lynk-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<lynk-icon>` element or an ancestor to change the color.

```html preview
<div style="color: #4a90e2;">
  <lynk-icon name="exclamation-triangle"></lynk-icon>
  <lynk-icon name="archive"></lynk-icon>
  <lynk-icon name="battery-charging"></lynk-icon>
  <lynk-icon name="bell"></lynk-icon>
</div>
<div style="color: #9013fe;">
  <lynk-icon name="clock"></lynk-icon>
  <lynk-icon name="cloud"></lynk-icon>
  <lynk-icon name="download"></lynk-icon>
  <lynk-icon name="file-earmark"></lynk-icon>
</div>
<div style="color: #417505;">
  <lynk-icon name="flag"></lynk-icon>
  <lynk-icon name="heart"></lynk-icon>
  <lynk-icon name="image"></lynk-icon>
  <lynk-icon name="lightning"></lynk-icon>
</div>
<div style="color: #f5a623;">
  <lynk-icon name="mic"></lynk-icon>
  <lynk-icon name="search"></lynk-icon>
  <lynk-icon name="star"></lynk-icon>
  <lynk-icon name="trash"></lynk-icon>
</div>
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <lynk-icon name="exclamation-triangle"></lynk-icon>
  <lynk-icon name="archive"></lynk-icon>
  <lynk-icon name="battery-charging"></lynk-icon>
  <lynk-icon name="bell"></lynk-icon>
  <lynk-icon name="clock"></lynk-icon>
  <lynk-icon name="cloud"></lynk-icon>
  <lynk-icon name="download"></lynk-icon>
  <lynk-icon name="file-earmark"></lynk-icon>
  <lynk-icon name="flag"></lynk-icon>
  <lynk-icon name="heart"></lynk-icon>
  <lynk-icon name="image"></lynk-icon>
  <lynk-icon name="lightning"></lynk-icon>
  <lynk-icon name="mic"></lynk-icon>
  <lynk-icon name="search"></lynk-icon>
  <lynk-icon name="star"></lynk-icon>
  <lynk-icon name="trash"></lynk-icon>
</div>
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<lynk-icon name="star-fill" label="Add to favorites"></lynk-icon>
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<lynk-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 8rem;"></lynk-icon>
```

## Icon Libraries

You can register additional icons to use with the `<lynk-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Lynk ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Lynk components.

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

To display an icon, set the `library` and `name` attributes of an `<lynk-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<lynk-icon library="my-icons" name="smile"></lynk-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@materialynk-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <lynk-icon library="material" name="notifications"></lynk-icon>
  <lynk-icon library="material" name="email"></lynk-icon>
  <lynk-icon library="material" name="delete"></lynk-icon>
  <lynk-icon library="material" name="volume_up"></lynk-icon>
  <lynk-icon library="material" name="settings"></lynk-icon>
  <lynk-icon library="material" name="shopping_basket"></lynk-icon>
  <br />
  <lynk-icon library="material" name="notifications_round"></lynk-icon>
  <lynk-icon library="material" name="email_round"></lynk-icon>
  <lynk-icon library="material" name="delete_round"></lynk-icon>
  <lynk-icon library="material" name="volume_up_round"></lynk-icon>
  <lynk-icon library="material" name="settings_round"></lynk-icon>
  <lynk-icon library="material" name="shopping_basket_round"></lynk-icon>
  <br />
  <lynk-icon library="material" name="notifications_sharp"></lynk-icon>
  <lynk-icon library="material" name="email_sharp"></lynk-icon>
  <lynk-icon library="material" name="delete_sharp"></lynk-icon>
  <lynk-icon library="material" name="volume_up_sharp"></lynk-icon>
  <lynk-icon library="material" name="settings_sharp"></lynk-icon>
  <lynk-icon library="material" name="shopping_basket_sharp"></lynk-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<lynk-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

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

The system library contains only the icons used internally by Lynk components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Lynk uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Lynk.

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
      const input = container.querySelector('lynk-input');
      const select = container.querySelector('lynk-select');
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

        const tooltip = document.createElement('lynk-tooltip');
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
      input.addEventListener('lynk-input', () => {
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
      const iconType = localStorage.getItem('lynk-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('lynk-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('lynk-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--lynk-panel-border-color);
    border-radius: var(--lynk-border-radius-medium);
    padding: var(--lynk-spacing-medium);
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
    border-radius: var(--lynk-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--lynk-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--lynk-color-primary-50);
    color: var(--lynk-color-primary-600);
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

[component-metadata:lynk-icon]
