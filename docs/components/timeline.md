# Timeline

[component-header:lynk-timeline]

Timeline component.

```html preview
<lynk-timeline></lynk-timeline>
```

## Examples

### 24 Hour Clock

Use the `use24Hour` attribute to use 24 Hour Clock.

```html preview
<lynk-timeline
  use24Hour=true
></lynk-timeline>
```

### Custom Start Date
```html preview

<script>
  const timeline = document.querySelector('.interactive-timeline');
  timeline.addEventListener('on:click', e => {
    const path = e.composedPath()[0]
    console.log('event:', e);
    console.log('path:', path);
  });

  function drag(e) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
</script>

<lynk-timeline
  class="interactive-timeline"
  date='1999-12-31'
>
  <lynk-button slot='column_6' data-id="1" draggable="true" ondragstart="drag(e)">Button</lynk-button>
  <lynk-button slot='column_0' data-id="2" draggable="true" ondragstart="drag(e)">Button</lynk-button>
  <lynk-button slot='column_3' data-id="3" draggable="true" ondragstart="drag(e)">Button</lynk-button>
  <lynk-button slot='column_3' data-id="4" draggable="true" ondragstart="drag(e)">Button</lynk-button>
</lynk-timeline>
```

[component-metadata:lynk-timeline]
