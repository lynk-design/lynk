# Radio Group

[component-header:lynk-radio-group]

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio value="1">Option 1</lynk-radio>
  <lynk-radio value="2">Option 2</lynk-radio>
  <lynk-radio value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<lynk-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <lynk-radio value="1">Option 1</lynk-radio>
  <lynk-radio value="2">Option 2</lynk-radio>
  <lynk-radio value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html preview
<lynk-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
  <lynk-radio-button value="1">Option 1</lynk-radio-button>
  <lynk-radio-button value="2">Option 2</lynk-radio-button>
  <lynk-radio-button value="3">Option 3</lynk-radio-button>
</lynk-radio-group>
```

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio value="1">Option 1</lynk-radio>
  <lynk-radio value="2" disabled>Option 2</lynk-radio>
  <lynk-radio value="3">Option 3</lynk-radio>
</lynk-radio-group>
```

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html preview
<form class="validation">
  <lynk-radio-group label="Select an option" name="a" required>
    <lynk-radio value="1">Option 1</lynk-radio>
    <lynk-radio value="2">Option 2</lynk-radio>
    <lynk-radio value="3">Option 3</lynk-radio>
  </lynk-radio-group>
  <br />
  <lynk-button type="submit" variant="primary">Submit</lynk-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <lynk-radio-group label="Select an option" name="a" value="1">
    <lynk-radio value="1">Not me</lynk-radio>
    <lynk-radio value="2">Me neither</lynk-radio>
    <lynk-radio value="3">Choose me</lynk-radio>
  </lynk-radio-group>
  <br />
  <lynk-button type="submit" variant="primary">Submit</lynk-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('lynk-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('lynk-radio-group').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('on:change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

[component-metadata:lynk-radio-group]
