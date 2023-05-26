# Intersection Observer

[component-header:lynk-intersection-observer]

The intersection observer will report the elements it wraps enters and exits the viewport through the `on:enter` and `on:exit` events.

```html preview
<div class="observer-wrapper">
  Scroll down and watch the console...
  <lynk-intersection-observer>
    <div>Hello, I'm a div!</div>
    <div>Hello, I'm another div!</div>
  </lynk-intersection-observer>
</div>

<script>
  const container = document.querySelector('.observer-wrapper');
  const intersectionObserver = container.querySelector('lynk-intersection-observer');

  intersectionObserver.addEventListener('on:enter', event => {
    console.log('Div entered view', event);
  });
  intersectionObserver.addEventListener('on:exit', event => {
    console.log('Div exited view', event);
  });
</script>

<style>
  .observer-wrapper {
    height: 480px;
    overflow: auto;
    padding: 4rem 2rem;
  }

  .observer-wrapper div {
    height: 48px;
    margin-top: 768px;
    margin-bottom: 768px;
  }
</style>
```

[component-metadata:lynk-intersection-observer]