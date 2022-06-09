# Button

[component-header:l-button]

Buttons represent actions that are available to the user.

```html preview
<l-button>Button</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlButton>Button</SlButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<l-button variant="default">Default</l-button>
<l-button variant="primary">Primary</l-button>
<l-button variant="success">Success</l-button>
<l-button variant="neutral">Neutral</l-button>
<l-button variant="warning">Warning</l-button>
<l-button variant="danger">Danger</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default">Default</SlButton>
    <SlButton variant="primary">Primary</SlButton>
    <SlButton variant="success">Success</SlButton>
    <SlButton variant="neutral">Neutral</SlButton>
    <SlButton variant="warning">Warning</SlButton>
    <SlButton variant="danger">Danger</SlButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<l-button size="small">Small</l-button>
<l-button size="medium">Medium</l-button>
<l-button size="large">Large</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton size="small">Small</SlButton>
    <SlButton size="medium">Medium</SlButton>
    <SlButton size="large">Large</SlButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<l-button variant="default" outline>Default</l-button>
<l-button variant="primary" outline>Primary</l-button>
<l-button variant="success" outline>Success</l-button>
<l-button variant="neutral" outline>Neutral</l-button>
<l-button variant="warning" outline>Warning</l-button>
<l-button variant="danger" outline>Danger</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" outline>
      Default
    </SlButton>
    <SlButton variant="primary" outline>
      Primary
    </SlButton>
    <SlButton variant="success" outline>
      Success
    </SlButton>
    <SlButton variant="neutral" outline>
      Neutral
    </SlButton>
    <SlButton variant="warning" outline>
      Warning
    </SlButton>
    <SlButton variant="danger" outline>
      Danger
    </SlButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<l-button size="small" pill>Small</l-button>
<l-button size="medium" pill>Medium</l-button>
<l-button size="large" pill>Large</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton size="small" pill>
      Small
    </SlButton>
    <SlButton size="medium" pill>
      Medium
    </SlButton>
    <SlButton size="large" pill>
      Large
    </SlButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons.

```html preview
<l-button variant="default" size="small" circle>
  <l-icon name="gear" label="Settings"></l-icon>
</l-button>

<l-button variant="default" size="medium" circle>
  <l-icon name="gear" label="Settings"></l-icon>
</l-button>

<l-button variant="default" size="large" circle>
  <l-icon name="gear" label="Settings"></l-icon>
</l-button>
```

```jsx react
import { SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" size="small" circle>
      <SlIcon name="gear" />
    </SlButton>
    <SlButton variant="default" size="medium" circle>
      <SlIcon name="gear" />
    </SlButton>
    <SlButton variant="default" size="large" circle>
      <SlIcon name="gear" />
    </SlButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<l-button variant="text" size="small">Text</l-button>
<l-button variant="text" size="medium">Text</l-button>
<l-button variant="text" size="large">Text</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="text" size="small">
      Text
    </SlButton>
    <SlButton variant="text" size="medium">
      Text
    </SlButton>
    <SlButton variant="text" size="large">
      Text
    </SlButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<l-button href="https://example.com/">Link</l-button>
<l-button href="https://example.com/" target="_blank">New Window</l-button>
<l-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</l-button>
<l-button href="https://example.com/" disabled>Disabled</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton href="https://example.com/">Link</SlButton>
    <SlButton href="https://example.com/" target="_blank">
      New Window
    </SlButton>
    <SlButton href="/assets/images/wordmark.svg" download="shoelace.svg">
      Download
    </SlButton>
    <SlButton href="https://example.com/" disabled>
      Disabled
    </SlButton>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<l-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</l-button>
<l-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</l-button>
<l-button variant="default" size="large" style="width: 100%;">Large</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </SlButton>
    <SlButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </SlButton>
    <SlButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </SlButton>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<l-button variant="default" size="small">
  <l-icon slot="prefix" name="gear"></l-icon>
  Settings
</l-button>

<l-button variant="default" size="small">
  <l-icon slot="suffix" name="arrow-counterclockwise"></l-icon>
  Refresh
</l-button>

<l-button variant="default" size="small">
  <l-icon slot="prefix" name="link-45deg"></l-icon>
  <l-icon slot="suffix" name="box-arrow-up-right"></l-icon>
  Open
</l-button>

<br /><br />

<l-button variant="default">
  <l-icon slot="prefix" name="gear"></l-icon>
  Settings
</l-button>

<l-button variant="default">
  <l-icon slot="suffix" name="arrow-counterclockwise"></l-icon>
  Refresh
</l-button>

<l-button variant="default">
  <l-icon slot="prefix" name="link-45deg"></l-icon>
  <l-icon slot="suffix" name="box-arrow-up-right"></l-icon>
  Open
</l-button>

<br /><br />

<l-button variant="default" size="large">
  <l-icon slot="prefix" name="gear"></l-icon>
  Settings
</l-button>

<l-button variant="default" size="large">
  <l-icon slot="suffix" name="arrow-counterclockwise"></l-icon>
  Refresh
</l-button>

<l-button variant="default" size="large">
  <l-icon slot="prefix" name="link-45deg"></l-icon>
  <l-icon slot="suffix" name="box-arrow-up-right"></l-icon>
  Open
</l-button>
```

```jsx react
import { SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" size="small">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default" size="small">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default" size="small">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br />
    <br />

    <SlButton variant="default">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br />
    <br />

    <SlButton variant="default" size="large">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton variant="default" size="large">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton variant="default" size="large">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<l-button size="small" caret>Small</l-button>
<l-button size="medium" caret>Medium</l-button>
<l-button size="large" caret>Large</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton size="small" caret>
      Small
    </SlButton>
    <SlButton size="medium" caret>
      Medium
    </SlButton>
    <SlButton size="large" caret>
      Large
    </SlButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<l-button variant="default" loading>Default</l-button>
<l-button variant="primary" loading>Primary</l-button>
<l-button variant="success" loading>Success</l-button>
<l-button variant="neutral" loading>Neutral</l-button>
<l-button variant="warning" loading>Warning</l-button>
<l-button variant="danger" loading>Danger</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" loading>
      Default
    </SlButton>
    <SlButton variant="primary" loading>
      Primary
    </SlButton>
    <SlButton variant="success" loading>
      Success
    </SlButton>
    <SlButton variant="neutral" loading>
      Neutral
    </SlButton>
    <SlButton variant="warning" loading>
      Warning
    </SlButton>
    <SlButton variant="danger" loading>
      Danger
    </SlButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<l-button variant="default" disabled>Default</l-button>
<l-button variant="primary" disabled>Primary</l-button>
<l-button variant="success" disabled>Success</l-button>
<l-button variant="neutral" disabled>Neutral</l-button>
<l-button variant="warning" disabled>Warning</l-button>
<l-button variant="danger" disabled>Danger</l-button>
```

```jsx react
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton variant="default" disabled>
      Default
    </SlButton>

    <SlButton variant="primary" disabled>
      Primary
    </SlButton>

    <SlButton variant="success" disabled>
      Success
    </SlButton>

    <SlButton variant="neutral" disabled>
      Neutral
    </SlButton>

    <SlButton variant="warning" disabled>
      Warning
    </SlButton>

    <SlButton variant="danger" disabled>
      Danger
    </SlButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `l-button[variant="primary"]`).

```html preview
<l-button class="pink">Pink Button</l-button>

<style>
  l-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --l-input-height-medium: 48px;
    --l-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--l-transition-medium) transform ease, var(--l-transition-medium) border ease;
  }

  l-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  l-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  l-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:l-button]
