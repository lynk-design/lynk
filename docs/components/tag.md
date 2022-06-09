# Tag

[component-header:l-tag]

Tags are used as labels to organize things or to indicate a selection.

```html preview
<l-tag variant="primary">Primary</l-tag>
<l-tag variant="success">Success</l-tag>
<l-tag variant="neutral">Neutral</l-tag>
<l-tag variant="warning">Warning</l-tag>
<l-tag variant="danger">Danger</l-tag>
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
<l-tag size="small">Small</l-tag>
<l-tag size="medium">Medium</l-tag>
<l-tag size="large">Large</l-tag>
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
<l-tag size="small" pill>Small</l-tag>
<l-tag size="medium" pill>Medium</l-tag>
<l-tag size="large" pill>Large</l-tag>
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
  <l-tag size="small" removable>Small</l-tag>
  <l-tag size="medium" removable>Medium</l-tag>
  <l-tag size="large" removable>Large</l-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('l-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable l-tag {
    transition: var(--l-transition-medium) opacity;
  }
</style>
```

```jsx react
import { SlTag } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tags-removable l-tag {
    transition: var(--l-transition-medium) opacity;
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

[component-metadata:l-tag]
