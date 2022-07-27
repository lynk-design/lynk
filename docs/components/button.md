# Button

[component-header:lynk-button]

A button initiates an instantaneous action. Instantly recognizable buttons give users a simple, intuitive way to perform tasks in your UI.

```html preview
<lynk-button>Button</lynk-button>
```

## Examples

### Variants

Use the `color` attribute to set the button's color.

```html preview
<lynk-button color="default">Default</lynk-button>
<lynk-button color="primary">Primary</lynk-button>
<lynk-button color="success">Success</lynk-button>
<lynk-button color="neutral">Neutral</lynk-button>
<lynk-button color="warning">Warning</lynk-button>
<lynk-button color="danger">Danger</lynk-button>
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<lynk-button size="small">Small</lynk-button>
<lynk-button size="medium">Medium</lynk-button>
<lynk-button size="large">Large</lynk-button>
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<lynk-button color="default" outline>Default</lynk-button>
<lynk-button color="primary" outline>Primary</lynk-button>
<lynk-button color="success" outline>Success</lynk-button>
<lynk-button color="neutral" outline>Neutral</lynk-button>
<lynk-button color="warning" outline>Warning</lynk-button>
<lynk-button color="danger" outline>Danger</lynk-button>
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<lynk-button size="small" pill>Small</lynk-button>
<lynk-button size="medium" pill>Medium</lynk-button>
<lynk-button size="large" pill>Large</lynk-button>
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons.

```html preview
<lynk-button color="default" size="small" circle>
  <lynk-icon name="gear" label="Settings"></lynk-icon>
</lynk-button>

<lynk-button color="default" size="medium" circle>
  <lynk-icon name="gear" label="Settings"></lynk-icon>
</lynk-button>

<lynk-button color="default" size="large" circle>
  <lynk-icon name="gear" label="Settings"></lynk-icon>
</lynk-button>
```

### Square Buttons

Use the `square` attribute to create square icon buttons.

```html preview
<lynk-button color="default" size="small" square>
  <lynk-icon name="gear" label="Settings"></lynk-icon>
</lynk-button>

<lynk-button color="default" size="medium" square>
  <lynk-icon name="gear" label="Settings"></lynk-icon>
</lynk-button>

<lynk-button color="default" size="large" square>
  <lynk-icon name="gear" label="Settings"></lynk-icon>
</lynk-button>
```

### Text Buttons

Use the `text` color to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<lynk-button color="text" size="small">Text</lynk-button>
<lynk-button color="text" size="medium">Text</lynk-button>
<lynk-button color="text" size="large">Text</lynk-button>
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<lynk-button href="https://example.com/">Link</lynk-button>
<lynk-button href="https://example.com/" target="_blank">New Window</lynk-button>
<lynk-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</lynk-button>
<lynk-button href="https://example.com/" disabled>Disabled</lynk-button>
```

<lynk-alert open>When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).</lynk-alert>

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<lynk-button color="default" size="small" style="width: 25%; margin-bottom: 1rem;">Small (25%)</lynk-button><br />
<lynk-button color="default" size="medium" style="width: 50%; margin-bottom: 1rem;">Medium (50%)</lynk-button><br />
<lynk-button color="default" size="large" style="width: 75%;">Large (75%)</lynk-button>
```

You can also force the button to display as a block element instead of inline by passing the `block` attribute.

```html preview
<lynk-button color="default" block>Block Baby!</lynk-button>
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<lynk-button color="default" size="small">
  <lynk-icon slot="prefix" name="gear"></lynk-icon>
  Settings
</lynk-button>

<lynk-button color="default" size="small">
  <lynk-icon slot="suffix" name="arrow-counterclockwise"></lynk-icon>
  Refresh
</lynk-button>

<lynk-button color="default" size="small">
  <lynk-icon slot="prefix" name="link-45deg"></lynk-icon>
  <lynk-icon slot="suffix" name="box-arrow-up-right"></lynk-icon>
  Open
</lynk-button>

<br /><br />

<lynk-button color="default">
  <lynk-icon slot="prefix" name="gear"></lynk-icon>
  Settings
</lynk-button>

<lynk-button color="default">
  <lynk-icon slot="suffix" name="arrow-counterclockwise"></lynk-icon>
  Refresh
</lynk-button>

<lynk-button color="default">
  <lynk-icon slot="prefix" name="link-45deg"></lynk-icon>
  <lynk-icon slot="suffix" name="box-arrow-up-right"></lynk-icon>
  Open
</lynk-button>

<br /><br />

<lynk-button color="default" size="large">
  <lynk-icon slot="prefix" name="gear"></lynk-icon>
  Settings
</lynk-button>

<lynk-button color="default" size="large">
  <lynk-icon slot="suffix" name="arrow-counterclockwise"></lynk-icon>
  Refresh
</lynk-button>

<lynk-button color="default" size="large">
  <lynk-icon slot="prefix" name="link-45deg"></lynk-icon>
  <lynk-icon slot="suffix" name="box-arrow-up-right"></lynk-icon>
  Open
</lynk-button>
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<lynk-button size="small" caret>Small</lynk-button>
<lynk-button size="medium" caret>Medium</lynk-button>
<lynk-button size="large" caret>Large</lynk-button>
```

### Thinking

Use the `thinking` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the thinking state is removed.

```html preview
<lynk-button color="default" thinking>Default</lynk-button>
<lynk-button color="primary" thinking>Primary</lynk-button>
<lynk-button color="success" thinking>Success</lynk-button>
<lynk-button color="neutral" thinking>Neutral</lynk-button>
<lynk-button color="warning" thinking>Warning</lynk-button>
<lynk-button color="danger" thinking>Danger</lynk-button>
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<lynk-button color="default" disabled>Default</lynk-button>
<lynk-button color="primary" disabled>Primary</lynk-button>
<lynk-button color="success" disabled>Success</lynk-button>
<lynk-button color="neutral" disabled>Neutral</lynk-button>
<lynk-button color="warning" disabled>Warning</lynk-button>
<lynk-button color="danger" disabled>Danger</lynk-button>
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `color` attribute instead of a class (e.g. `lynk-button[color="primary"]`).

```html preview
<lynk-button class="pink">Pink Button</lynk-button>

<style>
  lynk-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --lynk-input-height-medium: 48px;
    --lynk-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--lynk-transition-medium) transform ease, var(--lynk-transition-medium) border ease;
  }

  lynk-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  lynk-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  lynk-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:lynk-button]
