# Mutation Observer

[component-header:l-mutation-observer]

The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

The mutation observer will report changes to the content it wraps through the `l-mutation` event. When emitted, a collection of [MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) objects will be attached to `event.detail` that contains information about how it changed.

```html preview
<div class="mutation-overview">
  <l-mutation-observer attr="variant">
    <l-button variant="primary">Click to mutate</l-button>
  </l-mutation-observer>

  <br />
  👆 Click the button and watch the console

  <script>
    const container = document.querySelector('.mutation-overview');
    const mutationObserver = container.querySelector('l-mutation-observer');
    const button = container.querySelector('l-button');
    const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];
    let clicks = 0;

    // Change the button's variant attribute
    button.addEventListener('click', () => {
      clicks++;
      button.setAttribute('variant', variants[clicks % variants.length]);
    });

    // Log mutations
    mutationObserver.addEventListener('l-mutation', event => {
      console.log(event.detail);
    });
  </script>

  <style>
    .mutation-overview l-button {
      margin-bottom: 1rem;
    }
  </style>
</div>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlMutationObserver } from '@shoelace-style/shoelace/dist/react';

const css = `
  .resize-observer-overview div {
    display: flex; 
    border: solid 2px var(--l-input-border-color); 
    align-items: center; 
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const variants = ['primary', 'success', 'neutral', 'warning', 'danger'];
let clicks = 0;

const App = () => {
  const [variant, setVariant] = useState('primary');

  function handleClick() {
    clicks++;
    setVariant(variants[clicks % variants.length]);
  }

  return (
    <>
      <SlMutationObserver attr="*" onSlMutation={event => console.log(event.detail)}>
        <SlButton variant={variant} onClick={handleClick}>
          Click to mutate
        </SlButton>
      </SlMutationObserver>

      <style>{css}</style>
    </>
  );
};
```

?> When you create a mutation observer, you must indicate what changes it should respond to by including at least one of `attr`, `child-list`, or `char-data`. If you don't specify at least one of these attributes, no mutation events will be emitted.

## Examples

### Child List

Use the `child-list` attribute to watch for new child elements that are added or removed.

```html preview
<div class="mutation-child-list">
  <l-mutation-observer child-list>
    <div class="buttons">
      <l-button variant="primary">Add button</l-button>
    </div>
  </l-mutation-observer>

  👆 Add and remove buttons and watch the console

  <script>
    const container = document.querySelector('.mutation-child-list');
    const mutationObserver = container.querySelector('l-mutation-observer');
    const buttons = container.querySelector('.buttons');
    const button = container.querySelector('l-button[variant="primary"]');
    let i = 0;

    // Add a button
    button.addEventListener('click', () => {
      const button = document.createElement('l-button');
      button.textContent = ++i;
      buttons.append(button);
    });

    // Remove a button
    buttons.addEventListener('click', event => {
      const target = event.target.closest('l-button:not([variant="primary"])');
      event.stopPropagation();

      if (target) {
        target.remove();
      }
    });

    // Log mutations
    mutationObserver.addEventListener('l-mutation', event => {
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

```jsx react
import { useState } from 'react';
import { SlButton, SlMutationObserver } from '@shoelace-style/shoelace/dist/react';

const css = `
  .mutation-child-list .buttons {
    display: flex;
    gap: .25rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
`;

let buttonCount = 0;

const App = () => {
  const [buttonIds, setButtonIds] = useState([]);

  function addButton() {
    setButtonIds([...buttonIds, ++buttonCount]);
  }

  function removeButton(id) {
    setButtonIds(buttonIds.filter(i => i !== id));
  }

  return (
    <>
      <div className="mutation-child-list">
        <SlMutationObserver child-list onSlMutation={event => console.log(event.detail)}>
          <div className="buttons">
            <SlButton variant="primary" onClick={addButton}>
              Add button
            </SlButton>
            {buttonIds.map(id => (
              <SlButton key={id} variant="default" onClick={() => removeButton(id)}>
                {id}
              </SlButton>
            ))}
          </div>
        </SlMutationObserver>
      </div>
      👆 Add and remove buttons and watch the console
      <style>{css}</style>
    </>
  );
};
```

[component-metadata:l-mutation-observer]
