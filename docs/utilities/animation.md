# Animation

[component-header:lynk-animation]

To animate an element, wrap it in `<lynk-animation>` and set an animation `name`. The animation will not start until you add the `play` attribute. Refer to the [properties table](#properties) for a list of all animation options.

```html preview
<div class="animation-overview">
  <lynk-animation name="bounce" duration="2000" play><div class="box"></div></lynk-animation>
  <lynk-animation name="jello" duration="2000" play><div class="box"></div></lynk-animation>
  <lynk-animation name="heartBeat" duration="2000" play><div class="box"></div></lynk-animation>
  <lynk-animation name="flip" duration="2000" play><div class="box"></div></lynk-animation>
</div>

<style>
  .animation-overview .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--lynk-color-primary-600);
    margin: 1.5rem;
  }
</style>
```

<lynk-alert open>The animation will only be applied to the first child element found in `<lynk-animation>`.</lynk-alert>

## Examples

### Animations & Easings

This example demonstrates all of the baked-in animations and easings. Animations are based on those found in the popular [Animate.css](https://animate.style/) library.

```html preview
<div class="animation-sandbox">
  <lynk-animation name="bounce" easing="ease-in-out" duration="2000" play>
    <div class="box"></div>
  </lynk-animation>

  <div class="controls">
    <lynk-select label="Animation" value="bounce"></lynk-select>
    <lynk-select label="Easing" value="linear"></lynk-select>
    <lynk-input label="Playback Rate" type="number" min="0" max="2" step=".25" value="1"></lynk-input>
  </div>
</div>

<script type="module">
  import { getAnimationNames, getEasingNames } from '/dist/utilities/animation.js';

  const container = document.querySelector('.animation-sandbox');
  const animation = container.querySelector('lynk-animation');
  const animationName = container.querySelector('.controls lynk-select:nth-child(1)');
  const easingName = container.querySelector('.controls lynk-select:nth-child(2)');
  const playbackRate = container.querySelector('lynk-input[type="number"]');
  const animations = getAnimationNames();
  const easings = getEasingNames();

  animations.map(name => {
    const menuItem = Object.assign(document.createElement('lynk-menu-item'), {
      textContent: name,
      value: name
    });
    animationName.appendChild(menuItem);
  });

  easings.map(name => {
    const menuItem = Object.assign(document.createElement('lynk-menu-item'), {
      textContent: name,
      value: name
    });
    easingName.appendChild(menuItem);
  });

  animationName.addEventListener('on:change', () => (animation.name = animationName.value));
  easingName.addEventListener('on:change', () => (animation.easing = easingName.value));
  playbackRate.addEventListener('on:input', () => (animation.playbackRate = playbackRate.value));
</script>

<style>
  .animation-sandbox .box {
    width: 100px;
    height: 100px;
    background-color: var(--lynk-color-primary-600);
  }

  .animation-sandbox .controls {
    max-width: 300px;
    margin-top: 2rem;
  }

  .animation-sandbox .controls lynk-select {
    margin-bottom: 1rem;
  }
</style>
```

### Using Intersection Observer

Use an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to control the animation when an element enters or exits the viewport. For example, scroll the box below in and out of your screen. The animation stops when the box exits the viewport and restarts each time it enters the viewport.

```html preview
<div class="animation-scroll">
  <lynk-animation name="jackInTheBox" duration="2000" iterations="1"><div class="box"></div></lynk-animation>
</div>

<script>
  const container = document.querySelector('.animation-scroll');
  const animation = container.querySelector('lynk-animation');
  const box = animation.querySelector('.box');

  // Watch for the box to enter and exit the viewport. Note that we're observing the box, not the animation element!
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      // Start the animation when the box enters the viewport
      animation.play = true;
    } else {
      animation.play = false;
      animation.currentTime = 0;
    }
  });
  observer.observe(box);
</script>

<style>
  .animation-scroll .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--lynk-color-primary-600);
  }
</style>
```

### Custom Keyframe Formats

Supply your own [keyframe formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) to build custom animations.

```html preview
<div class="animation-keyframes">
  <lynk-animation easing="ease-in-out" duration="2000" play>
    <div class="box"></div>
  </lynk-animation>
</div>

<script>
  const animation = document.querySelector('.animation-keyframes lynk-animation');
  animation.keyframes = [
    {
      offset: 0,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(0)'
    },
    {
      offset: 1,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(90deg)'
    }
  ];
</script>

<style>
  .animation-keyframes .box {
    width: 100px;
    height: 100px;
    background-color: var(--lynk-color-primary-600);
  }
</style>
```

### Playing Animations on Demand

Animations won't play until you apply the `play` attribute. You can omit it initially, then apply it on demand such as after a user interaction. In this example, the button will animate once every time the button is clicked.

```html preview
<div class="animation-form">
  <lynk-animation name="rubberBand" duration="1000" iterations="1">
    <lynk-button color="primary">Click me</lynk-button>
  </lynk-animation>
</div>

<script>
  const container = document.querySelector('.animation-form');
  const animation = container.querySelector('lynk-animation');
  const button = container.querySelector('lynk-button');

  button.addEventListener('click', () => {
    animation.play = true;
  });
</script>
```

[component-metadata:lynk-animation]
