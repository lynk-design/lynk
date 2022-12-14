# Form Controls

Every Lynk component makes use of a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate markup, styles, and behavior. One caveat of this approach is that native `<form>` elements do not recognize form controls located inside a shadow root.

Lynk solves this problem by using the [`formdata`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event) event, which is [available in all modern browsers](https://caniuse.com/mdn-api_htmlformelement_formdata_event). This means, when a form is submitted, Lynk form controls will automatically append their values to the `FormData` object that's used to submit the form. In most cases, things will "just work." However, if you're using a form serialization library, it might need to be adapted to recognize Lynk form controls.

?> Lynk uses event listeners to intercept the form's `formdata` and `submit` events. This allows it to inject data and trigger validation as necessary. If you're also attaching an event listener to the form, _you must attach it after Lynk form controls are connected to the DOM_, otherwise your logic will run before Lynk has a chance to inject form data and validate form controls.

## Data Serialization

Serialization is just a fancy word for collecting form data. If you're relying on standard form submissions, e.g. `<form action="...">`, you can probably skip this section. However, most modern apps use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or a library such as [axios](https://github.com/axios/axios) to submit forms using JavaScript.

The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) interface offers a standard way to serialize forms in the browser. You can create a `FormData` object from any `<form>` element like this.

```js
const form = document.querySelector('form');
const data = new FormData(form);

// All form control data is available in a FormData object
```

However, some folks find `FormData` tricky to work with or they need to pass a JSON payload to their server. To accommodate this, Lynk offers a serialization utility that gathers form data and returns a simple JavaScript object instead.

```js
import { serialize } from '@uplynk/lynk-design/dist/utilities/form.js';

const form = document.querySelector('form');
const data = serialize(form);

// All form control data is available in a plain object
```

This results in an object with name/value pairs that map to each form control. If more than one form control shares the same name, the values will be passed as an array, e.g. `{ name: ['value1', 'value2'] }`.

## Constraint Validation

Client-side validation can be enabled through the browser's [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) for Lynk form controls. You can activate it using attributes such as `required`, `pattern`, `minlength`, `maxlength`, etc. Lynk implements many of the same attributes as native form controls, but check the documentation for a list of supported properties for each component.

If you don't want to use client-side validation, you can suppress this behavior by adding `novalidate` to the surrounding `<form>` element.

?> If this syntax looks unfamiliar, don't worry! Most of what you're learning on this page is platform knowledge that applies to regular form controls, too.

!> Client-side validation can be used to improve the UX of forms, but it is not a replacement for server-side validation. **You should always validate and sanitize user input on the server!**

### Required Fields

To make a field required, use the `required` attribute. Required fields will automatically receive a `*` after their labels. This is configurable through the `--lynk-input-required-content` custom property.

The form will not be submitted if a required field is incomplete.

```html preview
<form class="input-validation-required">
  <lynk-input name="name" label="Name" required></lynk-input>
  <br />
  <lynk-select label="Favorite Animal" clearable required>
    <lynk-menu-item value="birds">Birds</lynk-menu-item>
    <lynk-menu-item value="cats">Cats</lynk-menu-item>
    <lynk-menu-item value="dogs">Dogs</lynk-menu-item>
    <lynk-menu-item value="other">Other</lynk-menu-item>
  </lynk-select>
  <br />
  <lynk-textarea name="comment" label="Comment" required></lynk-textarea>
  <br />
  <lynk-checkbox required>Check me before submitting</lynk-checkbox>
  <br /><br />
  <lynk-button type="submit" variant="primary">Submit</lynk-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-required');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

### Input Patterns

To restrict a value to a specific [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern), use the `pattern` attribute. This example only allows the letters A-Z, so the form will not submit if a number or symbol is entered. This only works with `<lynk-input>` elements.

```html preview
<form class="input-validation-pattern">
  <lynk-input name="letters" required label="Letters" pattern="[A-Za-z]+"></lynk-input>
  <br />
  <lynk-button type="submit" variant="primary">Submit</lynk-button>
  <lynk-button type="reset" variant="default">Reset</lynk-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-pattern');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

### Input Types

Some input types will automatically trigger constraints, such as `email` and `url`.

```html preview
<form class="input-validation-type">
  <lynk-input type="email" label="Email" placeholder="you@example.com" required></lynk-input>
  <br />
  <lynk-input type="url" label="URL" placeholder="https://example.com/" required></lynk-input>
  <br />
  <lynk-button type="submit" variant="primary">Submit</lynk-button>
  <lynk-button type="reset" variant="default">Reset</lynk-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-type');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```


### Custom Error Messages

To create a custom validation error, pass a non-empty string to the `setCustomValidity()` method. This will override any existing validation constraints. The form will not be submitted when a custom validity is set and the browser will show a validation error when the containing form is submitted. To make the input valid again, call `setCustomValidity()` again with an empty string.

```html preview
<form class="input-validation-custom">
  <lynk-input label="Type “lynk-design”" required></lynk-input>
  <br />
  <lynk-button type="submit" variant="primary">Submit</lynk-button>
  <lynk-button type="reset" variant="default">Reset</lynk-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-custom');
  const input = form.querySelector('lynk-input');

  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });

  input.addEventListener('on:input', () => {
    if (input.value === 'lynk-design') {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity("Hey, you're supposed to type 'lynk-design' before submitting this!");
    }
  });
</script>
```

?> Custom validation can be applied to any form control that supports the `setCustomValidity()` method. It is not limited to inputs and textareas.

## Custom Validation Styles

Due to the many ways form controls are used, Lynk doesn't provide out of the box validation styles for form controls as part of its default theme. Instead, the following attributes will be applied to reflect a control's validity as users interact with it. You can use them to create custom styles for any of the validation states you're interested in.

- `data-required` - the form control is required
- `data-optional` - the form control is optional
- `data-invalid` - the form control is currently invalid
- `data-valid` - the form control is currently valid
- `data-user-invalid` - the form control is currently invalid and the user has interacted with it
- `data-user-valid` - the form control is currently valid and the user has interacted with it

These attributes map to the browser's built-in pseudo classes for validation: [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required), [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional), [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid), [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid), and the proposed [`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) and [`:user-valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid).

?> In the future, data attributes will be replaced with custom pseudo classes such as `:--valid` and `:--invalid`. Lynk is using data attributes as a workaround until browsers support custom states through [`ElementInternals.states`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/states).

### Styling Invalid Form Controls

You can target validity using any of the aforementioned data attributes, but it's usually preferable to target `data-user-invalid` and `data-user-valid` since they get applied only after a user interaction such as typing or submitting. This prevents empty form controls from appearing invalid immediately, which often results in a poor user experience.

This example demonstrates custom validation styles using `data-user-invalid` and `data-user-valid`. Try Typing in the fields to see how validity changes with user input.

```html preview
<form class="validity-styles">
  <lynk-input
    name="name"
    label="Name"
    help-text="What would you like people to call you?"
    autocomplete="off"
    required
  ></lynk-input>

  <lynk-select label="Favorite Animal" help-text="Select the best option." clearable required>
    <lynk-menu value="birds">Birds</lynk-menu>
    <lynk-menu value="cats">Cats</lynk-menu>
    <lynk-menu value="dogs">Dogs</lynk-menu>
    <lynk-menu value="other">Other</lynk-menu>
  </lynk-select>

  <lynk-button type="submit" variant="primary">Submit</lynk-button>
  <lynk-button type="reset" variant="default">Reset</lynk-button>
</form>

<script type="module">
  const form = document.querySelector('.validity-styles');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>

<style>
  .validity-styles lynk-input,
  .validity-styles lynk-select {
    margin-bottom: var(--sl-spacing-medium);
  }

  /* user invalid styles */
  .validity-styles lynk-input[data-user-invalid]::part(base),
  .validity-styles lynk-select[data-user-invalid]::part(control) {
    border-color: var(--sl-color-danger-600);
  }

  .validity-styles [data-user-invalid]::part(form-control-label),
  .validity-styles [data-user-invalid]::part(form-control-help-text) {
    color: var(--sl-color-danger-700);
  }

  .validity-styles lynk-input:focus-within[data-user-invalid]::part(base),
  .validity-styles lynk-select:focus-within[data-user-invalid]::part(control) {
    border-color: var(--sl-color-danger-600);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-color-danger-300);
  }

  /* User valid styles */
  .validity-styles lynk-input[data-user-valid]::part(base),
  .validity-styles lynk-select[data-user-valid]::part(control) {
    border-color: var(--sl-color-success-600);
  }

  .validity-styles [data-user-valid]::part(form-control-label),
  .validity-styles [data-user-valid]::part(form-control-help-text) {
    color: var(--sl-color-success-700);
  }

  .validity-styles lynk-input:focus-within[data-user-valid]::part(base),
  .validity-styles lynk-select:focus-within[data-user-valid]::part(control) {
    border-color: var(--sl-color-success-600);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-color-success-300);
  }
</style>
```
