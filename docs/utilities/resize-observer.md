# Resize Observer

[component-header:lynk-resize-observer]

The resize observer will report changes to the dimensions of the elements it wraps through the `lynk-resize` event. When emitted, a collection of [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects will be attached to `event.detail` that contains the target element and information about its dimensions.

```html preview
<div class="resize-observer-overview">
  <lynk-resize-observer>
    <div>Resize this box and watch the console 👉</div>
  </lynk-resize-observer>
</div>

<script>
  const container = document.querySelector('.resize-observer-overview');
  const resizeObserver = container.querySelector('lynk-resize-observer');

  resizeObserver.addEventListener('on:resize', event => {
    console.log(event.detail);
  });
</script>

<style>
  .resize-observer-overview div {
    display: flex;
    border: solid 2px var(--lynk-input-border-color);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
</style>
```

[component-metadata:lynk-resize-observer]
