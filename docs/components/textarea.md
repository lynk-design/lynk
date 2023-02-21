# Textarea

[component-header:lynk-textarea]

```html preview
<lynk-textarea></lynk-textarea>
```

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-textarea label="Comments"></lynk-textarea>
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

Use the `help-text` value to provide realtime validation and status feedback or other important information that will assist the user as they interact with the field.

```html preview
<lynk-textarea label="Feedback" help-text="0/500 Characters."> </lynk-textarea>
```

### Help Tip

Add informative help text in a tooltip appended to the label with the `help-tip` attribute. For help tips that contain HTML, use the `help-tip` slot instead.

Use the `help-tip` value to share informative content that will help the user understand the purpose of the field or how the data will be used.

```html preview
<lynk-textarea
  label="Feedback"
  help-tip="Help us make our product better! Please don't include any personally identifiable information."
></lynk-textarea>
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

### Restricted

Use the `resticted` attribute to convert a textarea value to preformatted plain text.

```html preview
<lynk-textarea label="Restricted" id="restricted-textarea" restricted></lynk-textarea>

<script>
  const textarea = document.getElementById('restricted-textarea');

  textarea.value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negat esse eam, inquit, propter se expetendam. An hoc usque quaque, aliter in vita? Pauca mutat vel plura sane; Sit enim idem caecus, debilis.

Duo enim genera quae erant, fecit tria. Sullae consulatum? Quis hoc dicit?

Duo Reges: constructio interrete. In schola desinis. Age, inquies, ista parva sunt.
`;
</script>
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
