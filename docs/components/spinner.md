# Spinner

[component-header:l-spinner]

Spinners are used to show the progress of an indeterminate operation.

```html preview
<l-spinner></l-spinner>
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html preview
<l-spinner></l-spinner>
<l-spinner style="font-size: 2rem;"></l-spinner>
<l-spinner style="font-size: 3rem;"></l-spinner>
```

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html preview
<l-spinner style="font-size: 50px; --track-width: 10px;"></l-spinner>
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html preview
<l-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></l-spinner>
```

[component-metadata:l-spinner]
