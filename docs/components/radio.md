# Radio

[component-header:lynk-radio]

Radios allow the user to select a single option from a group.

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<lynk-radio-group label="Select an option">
  <lynk-radio name="option" value="1" checked>Option 1</lynk-radio>
  <lynk-radio name="option" value="2">Option 2</lynk-radio>
  <lynk-radio name="option" value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

<lynk-alert open>This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.</lynk-alert>

## Examples

### Checked

To set the initial checked state, use the `checked` attribute.

```html preview
<lynk-radio-group label="Select an option">
  <lynk-radio name="option" value="1" checked>Option 1</lynk-radio>
  <lynk-radio name="option" value="2">Option 2</lynk-radio>
  <lynk-radio name="option" value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<lynk-radio-group label="Select an option">
  <lynk-radio name="option" value="1" checked>Option 1</lynk-radio>
  <lynk-radio name="option" value="2">Option 2</lynk-radio>
  <lynk-radio name="option" value="3" disabled>Option 3</lynk-radio>
</lynk-radio-group>
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <lynk-radio-group label="Select an option">
    <lynk-radio name="a" value="1" checked>Not me</lynk-radio>
    <lynk-radio name="a" value="2">Me neither</lynk-radio>
    <lynk-radio name="a" value="3">Choose me</lynk-radio>
  </lynk-radio-group>
  <br />
  <lynk-button type="submit" variant="primary">Submit</lynk-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const radio = form.querySelectorAll('lynk-radio')[2];
  const errorMessage = 'You must choose this option';
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('lynk-radio').then(() => {
    radio.setCustomValidity(errorMessage);
  });
  // Update validity when a selection is made
  form.addEventListener('lynk-change', () => {
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

[component-metadata:lynk-radio]
