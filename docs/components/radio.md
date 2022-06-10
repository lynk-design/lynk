# Radio

[component-header:l-radio]

Radios allow the user to select a single option from a group.

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<l-radio-group label="Select an option">
  <l-radio name="option" value="1" checked>Option 1</l-radio>
  <l-radio name="option" value="2">Option 2</l-radio>
  <l-radio name="option" value="3">Option 3</l-radio>
</l-radio-group>
```

<l-alert open>This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.</l-alert>

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

```html preview
<l-radio-group label="Select an option">
  <l-radio name="option" value="1" checked>Option 1</l-radio>
  <l-radio name="option" value="2">Option 2</l-radio>
  <l-radio name="option" value="3">Option 3</l-radio>
</l-radio-group>
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<l-radio-group label="Select an option">
  <l-radio name="option" value="1" checked>Option 1</l-radio>
  <l-radio name="option" value="2">Option 2</l-radio>
  <l-radio name="option" value="3" disabled>Option 3</l-radio>
</l-radio-group>
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <l-radio-group label="Select an option">
    <l-radio name="a" value="1" checked>Not me</l-radio>
    <l-radio name="a" value="2">Me neither</l-radio>
    <l-radio name="a" value="3">Choose me</l-radio>
  </l-radio-group>
  <br />
  <l-button type="submit" variant="primary">Submit</l-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radio = form.querySelectorAll('l-radio')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('l-radio').then(() => {
    radio.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('l-change', () => {
    const isValid = radio.checked;
    radio.setCustomValidity(isValid ? '' : errorMessage);
  });
  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

[component-metadata:l-radio]
