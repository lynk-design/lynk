# Textarea

[component-header:lynk-textarea]

Textareas collect data from the user and allow multiple lines of text.

```html preview
<lynk-textarea></lynk-textarea>
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-textarea label="Comments"></lynk-textarea>
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<lynk-textarea label="Feedback" help-text="Please tell us what you think."> </lynk-textarea>
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html preview
<lynk-textarea rows="2"></lynk-textarea>
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<lynk-textarea placeholder="Type something"></lynk-textarea>
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html preview
<lynk-textarea placeholder="Type something" filled></lynk-textarea>
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html preview
<lynk-textarea placeholder="Textarea" disabled></lynk-textarea>
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html preview
<lynk-textarea placeholder="Small" size="small"></lynk-textarea>
<br />
<lynk-textarea placeholder="Medium" size="medium"></lynk-textarea>
<br />
<lynk-textarea placeholder="Large" size="large"></lynk-textarea>
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html preview
<lynk-textarea resize="none"></lynk-textarea>
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html preview
<lynk-textarea resize="auto"></lynk-textarea>
```

[component-metadata:lynk-textarea]
