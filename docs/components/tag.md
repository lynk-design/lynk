# Tag

[component-header:lynk-tag]

```html preview
<lynk-tag type="primary">Primary</lynk-tag>
<lynk-tag type="success">Success</lynk-tag>
<lynk-tag type="neutral">Neutral</lynk-tag>
<lynk-tag type="warning">Warning</lynk-tag>
<lynk-tag type="danger">Danger</lynk-tag>
<lynk-tag type="text">Text</lynk-tag>
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<lynk-tag size="small">Small</lynk-tag>
<lynk-tag size="medium">Medium</lynk-tag>
<lynk-tag size="large">Large</lynk-tag>
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<lynk-tag size="small" pill>Small</lynk-tag>
<lynk-tag size="medium" pill>Medium</lynk-tag>
<lynk-tag size="large" pill>Large</lynk-tag>
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <lynk-tag size="small" removable>Small</lynk-tag>
  <lynk-tag size="medium" removable>Medium</lynk-tag>
  <lynk-tag size="large" removable>Large</lynk-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('on:remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable l-tag {
    transition: var(--lynk-transition-medium) opacity;
  }
</style>
```

### Pulsating Tags

Use the `pulse` attribute to draw attention to the tag with a subtle animation.

```html preview
<lynk-stack horizontal>
  <lynk-tag type="primary" size="small" badge pill pulse>1</lynk-tag>
  <lynk-tag type="success" size="small" badge pill pulse>1</lynk-tag>
  <lynk-tag type="neutral" size="small" badge pill pulse>1</lynk-tag>
  <lynk-tag type="warning" size="small" badge pill pulse>1</lynk-tag>
  <lynk-tag type="danger" size="small" badge pill pulse>1</lynk-tag>
  <lynk-tag type="text" size="small" badge pill pulse>1</lynk-tag>
</lynk-stack>
```

Customize the pulse speed by defining a custom `--pulse-speed` css variable.

```html preview
<lynk-stack horizontal>
  <lynk-tag type="success" size="small" badge pill pulse style="--pulse-speed: 3s">Slow</lynk-tag>
  <lynk-tag type="warning" size="small" badge pill pulse>Default</lynk-tag>
  <lynk-tag type="danger" size="small" badge pill pulse style="--pulse-speed: 750ms">Fast</lynk-tag>
</lynk-stack>
```

### Custom Color Badges

Use the `--background-color`, `--border-color` and `--color` css properties to customize the tag colors.

```html preview
<lynk-tag
  pill
  pulse
  removable
  size="small"
  style="--background-color: deeppink; --color: black; --border-color: lightpink;"
  >Deep Pink</lynk-tag
>
```

[component-metadata:lynk-tag]
