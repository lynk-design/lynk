# Button

[component-header:l-button]

A button initiates an instantaneous action. Instantly recognizable buttons give users a simple, intuitive way to perform tasks in your UI.

```html preview
<l-button>Button</l-button>
```

## Examples

### Variants

Use the `color` attribute to set the button's color.

```html preview
<l-button color="default">Default</l-button>
<l-button color="primary">Primary</l-button>
<l-button color="success">Success</l-button>
<l-button color="neutral">Neutral</l-button>
<l-button color="warning">Warning</l-button>
<l-button color="danger">Danger</l-button>
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<l-button size="small">Small</l-button>
<l-button size="medium">Medium</l-button>
<l-button size="large">Large</l-button>
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<l-button color="default" outline>Default</l-button>
<l-button color="primary" outline>Primary</l-button>
<l-button color="success" outline>Success</l-button>
<l-button color="neutral" outline>Neutral</l-button>
<l-button color="warning" outline>Warning</l-button>
<l-button color="danger" outline>Danger</l-button>
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<l-button size="small" pill>Small</l-button>
<l-button size="medium" pill>Medium</l-button>
<l-button size="large" pill>Large</l-button>
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons.

```html preview
<l-button color="default" size="small" circle>
  <l-icon name="gear" label="Settings"></l-icon>
</l-button>

<l-button color="default" size="medium" circle>
  <l-icon name="gear" label="Settings"></l-icon>
</l-button>

<l-button color="default" size="large" circle>
  <l-icon name="gear" label="Settings"></l-icon>
</l-button>
```

### Text Buttons

Use the `text` color to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<l-button color="text" size="small">Text</l-button>
<l-button color="text" size="medium">Text</l-button>
<l-button color="text" size="large">Text</l-button>
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<l-button href="https://example.com/">Link</l-button>
<l-button href="https://example.com/" target="_blank">New Window</l-button>
<l-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</l-button>
<l-button href="https://example.com/" disabled>Disabled</l-button>
```

<l-alert open>When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).</l-alert>

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<l-button color="default" size="small" style="width: 25%; margin-bottom: 1rem;">Small (25%)</l-button><br>
<l-button color="default" size="medium" style="width: 50%; margin-bottom: 1rem;">Medium (50%)</l-button><br>
<l-button color="default" size="large" style="width: 75%;">Large (75%)</l-button>
```

You can also force the button to display as a block element instead of inline by passing the `block` attribute.

```html preview
<l-button color="default" block>Block Baby!</l-button>
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<l-button color="default" size="small">
  <l-icon slot="prefix" name="gear"></l-icon>
  Settings
</l-button>

<l-button color="default" size="small">
  <l-icon slot="suffix" name="arrow-counterclockwise"></l-icon>
  Refresh
</l-button>

<l-button color="default" size="small">
  <l-icon slot="prefix" name="link-45deg"></l-icon>
  <l-icon slot="suffix" name="box-arrow-up-right"></l-icon>
  Open
</l-button>

<br /><br />

<l-button color="default">
  <l-icon slot="prefix" name="gear"></l-icon>
  Settings
</l-button>

<l-button color="default">
  <l-icon slot="suffix" name="arrow-counterclockwise"></l-icon>
  Refresh
</l-button>

<l-button color="default">
  <l-icon slot="prefix" name="link-45deg"></l-icon>
  <l-icon slot="suffix" name="box-arrow-up-right"></l-icon>
  Open
</l-button>

<br /><br />

<l-button color="default" size="large">
  <l-icon slot="prefix" name="gear"></l-icon>
  Settings
</l-button>

<l-button color="default" size="large">
  <l-icon slot="suffix" name="arrow-counterclockwise"></l-icon>
  Refresh
</l-button>

<l-button color="default" size="large">
  <l-icon slot="prefix" name="link-45deg"></l-icon>
  <l-icon slot="suffix" name="box-arrow-up-right"></l-icon>
  Open
</l-button>
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<l-button size="small" caret>Small</l-button>
<l-button size="medium" caret>Medium</l-button>
<l-button size="large" caret>Large</l-button>
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<l-button color="default" loading>Default</l-button>
<l-button color="primary" loading>Primary</l-button>
<l-button color="success" loading>Success</l-button>
<l-button color="neutral" loading>Neutral</l-button>
<l-button color="warning" loading>Warning</l-button>
<l-button color="danger" loading>Danger</l-button>
```


### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<l-button color="default" disabled>Default</l-button>
<l-button color="primary" disabled>Primary</l-button>
<l-button color="success" disabled>Success</l-button>
<l-button color="neutral" disabled>Neutral</l-button>
<l-button color="warning" disabled>Warning</l-button>
<l-button color="danger" disabled>Danger</l-button>
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `color` attribute instead of a class (e.g. `l-button[color="primary"]`).

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
