# Input

[component-header:lynk-input]

```html preview
<lynk-input></lynk-input>
```

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-input label="What is your name?"></lynk-input>
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<lynk-input label="Nickname" help-text="What would you like people to call you?"></lynk-input>
```

### Help Tip

Add descriptive help tooltip to an input's label with the `help-tip` attribute. For help tips that contain HTML, use the `help-tip` slot instead.

```html preview
<lynk-input label="Nickname" help-tip="What would you like people to call you?"></lynk-input>
```

### Required Indicator

Use the `required` attribute to visually indicate a required field.

```html preview
<lynk-input label="Name" required></lynk-input>
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<lynk-input placeholder="Type something"></lynk-input>
```

### Custom Validation States

Use the `state` attribute to manually add an error, warning, or success state.

```html preview
<lynk-input value="Error" label="State" state="error" help-text="That dog aint gonna hunt!"></lynk-input>
<lynk-input value="Warning" label="State" state="warning" help-text="Proceed with caution..."></lynk-input>
<lynk-input value="Success" label="State" state="success" help-text="Noice!"></lynk-input>
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<lynk-input placeholder="Clearable" clearable></lynk-input>
```

### Toggle Password

Add the `toggle-password` attribute to add a toggle button that will show the password when activated.

```html preview
<lynk-input type="password" placeholder="Password Toggle" size="small" toggle-password></lynk-input>
<br />
<lynk-input type="password" placeholder="Password Toggle" size="medium" toggle-password></lynk-input>
<br />
<lynk-input type="password" placeholder="Password Toggle" size="large" toggle-password></lynk-input>
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<lynk-input placeholder="Type something" filled></lynk-input>
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<lynk-input placeholder="Small" size="small" pill></lynk-input>
<br />
<lynk-input placeholder="Medium" size="medium" pill></lynk-input>
<br />
<lynk-input placeholder="Large" size="large" pill></lynk-input>
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<lynk-input type="email" placeholder="Email"></lynk-input>
<br />
<lynk-input type="number" placeholder="Number" readonly></lynk-input>
<br />
<lynk-input type="date" placeholder="Date"></lynk-input>
<br />
<lynk-input type="datetime-local" placeholder="Date"></lynk-input>
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<lynk-input placeholder="Disabled" size="small" disabled></lynk-input>
<br />
<lynk-input placeholder="Disabled" size="medium" disabled></lynk-input>
<br />
<lynk-input placeholder="Disabled" size="large" disabled></lynk-input>
```

### Readonly

Use the `readonly` attribute to make an input non-editable.

```html preview
<lynk-input value="Readonly" size="small" readonly></lynk-input>
<br />
<lynk-input value="Readonly" size="medium" readonly></lynk-input>
<br />
<lynk-input value="Readonly" size="large" readonly></lynk-input>
```

### Restricted

Use the `restricted` attribute to replace the input with a plain text string.

```html preview
<lynk-input label="Label" value="Restricted" restricted></lynk-input>
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<lynk-input placeholder="Small" size="small" label="Size"></lynk-input>
<br />
<lynk-input placeholder="Medium" size="medium" label="Size"></lynk-input>
<br />
<lynk-input placeholder="Large" size="large" label="Size"></lynk-input>
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<lynk-input placeholder="Small" size="small">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-input>
<br />
<lynk-input placeholder="Medium" size="medium">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-input>
<br />
<lynk-input placeholder="Large" size="large">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-input>
```

### Using the Action Slot for Custom Button Controls

Use the `action` slot to append a button next to the input. Alternatively, the `prefix` and `suffix` slots can be used to place an icon button inside the input container.

```html preview
<lynk-input type="search" placeholder="Search" clearable>
  <lynk-icon slot="prefix" name="search" library="default"></lynk-icon>
  <lynk-button slot="action" color="primary">Go</lynk-button>
</lynk-input>
```

### Customizing Label Position

Use parts to customize the label's position.

```html preview
<lynk-input class="label-on-left" label="Name"></lynk-input><br />
<lynk-input class="label-on-left" label="Email" type="email"></lynk-input>

<style>
  .label-on-left::part(form-control) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label-on-left::part(form-control-label) {
    flex: 0 0 auto;
    width: 60px;
    text-align: right;
  }

  .label-on-left::part(form-control-input) {
    flex: 1 1 auto;
  }
</style>
```

[component-metadata:lynk-input]
