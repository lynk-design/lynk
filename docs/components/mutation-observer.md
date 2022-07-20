# Mutation Observer

[component-header:lynk-mutation-observer]

The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

The mutation observer will report changes to the content it wraps through the `lynk-mutation` event. When emitted, a collection of [MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) objects will be attached to `event.detail` that contains information about how it changed.

```html preview
<div class="mutation-overview">
  <lynk-mutation-observer attr="variant">
    <lynk-button color="primary">Click to mutate</lynk-button>
  </lynk-mutation-observer>

  <br />
  👆 Click the button and watch the console

  <script>
    const container = document.querySelector('.mutation-overview');
    const mutationObserver = container.querySelector('lynk-mutation-observer');
    const button = container.querySelector('lynk-button');
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];
    let clicks = 0;

    // Change the button's variant attribute
    button.addEventListener('click', () => {
      clicks++;
      button.setAttribute('variant', variants[clicks % variants.length]);
    });

    // Log mutations
    mutationObserver.addEventListener('lynk-mutation', event => {
      console.log(event.detail);
    });
  </script>

  <style>
    .mutation-overview lynk-button {
      margin-bottom: 1rem;
    }
  </style>
</div>
```

<lunk-alert open>When you create a mutation observer, you must indicate what changes it should respond to by including at least one of `attr`, `child-list`, or `char-data`. If you don't specify at least one of these attributes, no mutation events will be emitted.</lynk-alert>

## Examples

### Child List

Use the `child-list` attribute to watch for new child elements that are added or removed.

```html preview
<div class="mutation-child-list">
  <lynk-mutation-observer child-list>
    <div class="buttons">
      <lynk-button color="primary">Add button</lynk-button>
    </div>
  </lynk-mutation-observer>

  👆 Add and remove buttons and watch the console

  <script>
    const container = document.querySelector('.mutation-child-list');
    const mutationObserver = container.querySelector('lynk-mutation-observer');
    const buttons = container.querySelector('.buttons');
    const button = container.querySelector('lynk-button[color="primary"]');
    let i = 0;

    // Add a button
    button.addEventListener('click', () => {
      const button = document.createElement('lynk-button');
      button.textContent = ++i;
      buttons.append(button);
    });

    // Remove a button
    buttons.addEventListener('click', event => {
      const target = event.target.closest('lynk-button:not([color="primary"])');
      event.stopPropagation();

      if (target) {
        target.remove();
      }
    });

    // Log mutations
    mutationObserver.addEventListener('lynk-mutation', event => {
      console.log(event.detail);
    });
  </script>

  <style>
    .mutation-child-list .buttons {
      display: flex;
      gap: 0.25rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
  </style>
</div>
```

[component-metadata:lynk-mutation-observer]
