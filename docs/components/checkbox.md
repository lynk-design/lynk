# Checkbox

[component-header:lynk-checkbox]

```html preview
<lynk-checkbox></lynk-checkbox>
```
<lynk-alert> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.</lynk-alert>

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<lynk-checkbox checked>Checked</lynk-checkbox>
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<lynk-checkbox indeterminate>Indeterminate</lynk-checkbox>
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

## Sizes

Use the `size` attribute to change a checkbox's size.

```html preview
<lynk-checkbox size="small">Small</lynk-checkbox>
<br />
<lynk-checkbox size="medium">Medium</lynk-checkbox>
<br />
<lynk-checkbox size="large">Large</lynk-checkbox>
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <lynk-checkbox>Check me</lynk-checkbox>
  <br />
  <lynk-button type="submit" color="primary" style="margin-top: 1rem;">Submit</lynk-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('lynk-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('lynk-checkbox').then(() => {
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('on:change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

[component-metadata:lynk-checkbox]
