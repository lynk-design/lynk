# Tag

[component-header:lynk-tag]

```html preview
<lynk-tag type="primary">Primary</lynk-tag>
<lynk-tag type="success">Success</lynk-tag>
<lynk-tag type="neutral">Neutral</lynk-tag>
<lynk-tag type="warning">Warning</lynk-tag>
<lynk-tag type="danger">Danger</lynk-tag>
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

[component-metadata:lynk-tag]
