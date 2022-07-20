# Usage

Lynk's components are just regular HTML elements, or [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) to be precise. You can use them like any other element. Each component has detailed documentation that describes its full API, including properties, events, methods, and more.

If you're new to custom elements, often referred to as "web components," this section will familiarize you with how to use them.

## Properties

Most components have properties that can be set using attributes. For example, buttons accept a `size` attribute that maps to the `size` property which dictates the button's size.

```html
<lynk-button size="small">Click me</lynk-button>
```

Some properties are boolean, so they only have true/false values. To activate a boolean property, add the corresponding attribute without a value.

```html
<lynk-button disabled>Click me</lynk-button>
```

Refer to a component's documentation for a complete list of its properties.

## Events

You can listen for standard events such as `click`, `mouseover`, etc. as you normally would. In addition, some components emit custom events. These work the same way as standard events, but use a custom naming convention by prefixing `on:` `before:` or `after:` to prevent collisions with standard events and other libraries.

```html
<lynk-checkbox>Check me</lynk-checkbox>

<script>
  const checkbox = document.querySelector('lynk-checkbox');
  checkbox.addEventListener('on:change', event => {
    console.log(event.target.checked ? 'checked' : 'not checked');
  });
</script>
```

Refer to a component's documentation for a complete list of its custom events.

## Methods

Some components have methods you can call to trigger various behaviors. For example, you can set focus on a Lynk input using the `focus()` method.

```html
<lynk-input></lynk-input>

<script>
  const input = document.querySelector('lynk-input');
  input.focus();
</script>
```

Refer to a component's documentation for a complete list of its methods and their arguments.

## Slots

Many components use slots to accept content inside of them. The most common slot is the _default_ slot, which includes any content inside the component that doesn't have a `slot` attribute.

For example, a button's default slot is used to populate its label.

```html
<lynk-button>Click me</lynk-button>
```

Some components also have _named_ slots. A named slot can be populated by adding a child element with the appropriate `slot` attribute. Notice how the icon below has the `slot="prefix"` attribute? This tells the component to place the icon into its `prefix` slot.

```html
<lynk-button>
  <lynk-icon slot="prefix" name="gear"></lynk-icon>
  Settings
</lynk-button>
```

The location of a named slot doesn't matter. You can put it anywhere inside the component and the browser will move it to the right place automatically!

Refer to a component's documentation for a complete list of available slots.

## Don't Use Self-closing Tags

Custom elements cannot have self-closing tags. Similar to `<script>` and `<textarea>`, you must always include the full closing tag.

```html
<!-- Don't do this -->
<lynk-input />

<!-- Always do this -->
<lynk-input></lynk-input>
```

## Differences from Native Elements

You might expect similarly named elements to share the same API as native HTML elements. This is not always the case. Lynk components **are not** designed to be one-to-one replacements for their HTML counterparts.

<lynk-alert type="warning" open><strong>Don't make assumptions about a component's API!</strong> To prevent unexpected behaviors, please take the time to review the documentation and make sure you understand what each attribute, property, method, and event is intended to do.</lynk-alert>

## Waiting for Components to Load

Web components are registered with JavaScript, so depending on how and when you load Lynk, you may notice a [Flash of Undefined Custom Elements (FOUCE)](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/) when the page loads. There are a couple ways to prevent this, both of which are described in the linked article.

One option is to use the [`:defined`](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined) CSS pseudo-class to "hide" custom elements that haven't been registered yet. You can scope it to specific tags or you can hide all undefined custom elements as shown below.

```css
:not(:defined) {
  visibility: hidden;
}
```

As soon as a custom element is registered, it will immediately appear with all of its styles, effectively eliminating FOUCE. Note the use of `visibility: hidden` instead of `display: none` to reduce shifting as elements are registered. The drawback to this approach is that custom elements can potentially appear one by one instead of all at the same time.

Another option is to use [`customElements.whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined), which returns a promise that resolves when the specified element gets registered. You'll probably want to use it with [`Promise.allSettled()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) in case an element fails to load for some reason.

A clever way to use this method is to hide the `<body>` with `opacity: 0` and add a class that fades it in as soon as all your custom elements are defined.

```html
<style>
  body {
    opacity: 0;
  }

  body.ready {
    opacity: 1;
    transition: 0.25s opacity;
  }
</style>

<script type="module">
  await Promise.allSettled([customElements.whenDefined('lynk-button'), customElements.whenDefined('lynk-alert')]);

  // Button, card, and rating are registered now! Add
  // the `ready` class so the UI fades in.
  document.body.classList.add('ready');
</script>
```
