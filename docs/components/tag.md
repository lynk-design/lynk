# Tag

[component-header:lynk-tag]

Tags are used as labels to organize things or to indicate a selection.

```html preview
<lynk-tag variant="primary">Primary</lynk-tag>
<lynk-tag variant="success">Success</lynk-tag>
<lynk-tag variant="neutral">Neutral</lynk-tag>
<lynk-tag variant="warning">Warning</lynk-tag>
<lynk-tag variant="danger">Danger</lynk-tag>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTag variant="primary">Primary</SlTag>
    <SlTag variant="success">Success</SlTag>
    <SlTag variant="neutral">Neutral</SlTag>
    <SlTag variant="warning">Warning</SlTag>
    <SlTag variant="danger">Danger</SlTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<lynk-tag size="small">Small</lynk-tag>
<lynk-tag size="medium">Medium</lynk-tag>
<lynk-tag size="large">Large</lynk-tag>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTag size="small">Small</SlTag>
    <SlTag size="medium">Medium</SlTag>
    <SlTag size="large">Large</SlTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<lynk-tag size="small" pill>Small</lynk-tag>
<lynk-tag size="medium" pill>Medium</lynk-tag>
<lynk-tag size="large" pill>Large</lynk-tag>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlTag size="small" pill>
      Small
    </SlTag>
    <SlTag size="medium" pill>
      Medium
    </SlTag>
    <SlTag size="large" pill>
      Large
    </SlTag>
  </>
);
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

  div.addEventListener('lynk-remove', event => {
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

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tags-removable l-tag {
    transition: var(--lynk-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <SlTag size="small" removable onSlRemove={handleRemove}>
          Small
        </SlTag>

        <SlTag size="medium" removable onSlRemove={handleRemove}>
          Medium
        </SlTag>

        <SlTag size="large" removable onSlRemove={handleRemove}>
          Large
        </SlTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:lynk-tag]
