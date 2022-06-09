# Include

[component-header:l-include]

Includes give you the power to embed external HTML files into the page.

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<l-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html preview
<l-include src="https://shoelace.style/assets/examples/include.html"></l-include>
```

```jsx react
import { SlInclude } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInclude src="https://shoelace.style/assets/examples/include.html" />;
```

## Examples

### Listening for Events

When an include file loads successfully, the `l-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `l-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<l-include src="https://shoelace.style/assets/examples/include.html"></l-include>

<script>
  const include = document.querySelector('l-include');

  include.addEventListener('l-load', () => {
    console.log('Success');
  });

  include.addEventListener('l-error', event => {
    console.log('Error', event.detail.status);
  });
</script>
```

[component-metadata:l-include]
