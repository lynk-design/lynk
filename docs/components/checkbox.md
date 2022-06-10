# Checkbox

[component-header:l-checkbox]

Checkboxes allow the user to toggle an option on or off.

```html preview
<l-checkbox>Checkbox</l-checkbox>
```

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<l-checkbox checked>Checked</l-checkbox>
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<l-checkbox indeterminate>Indeterminate</l-checkbox>
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <l-checkbox>Check me</l-checkbox>
  <br />
  <l-button type="submit" color="primary" style="margin-top: 1rem;">Submit</l-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('l-checkbox');
  const errorMessage = `Don't forget to check me!`;
  // Set initial validity as soon as the element is defined
  customElements.whenDefined('l-checkbox').then(() => {
    checkbox.setCustomValidity(errorMessage);
  });
  // Update validity on change
  checkbox.addEventListener('le-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });
  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

[component-metadata:l-checkbox]
