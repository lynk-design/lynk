# Spinner

[component-header:lynk-spinner]

```html preview
<lynk-spinner></lynk-spinner>
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html preview
<lynk-spinner></lynk-spinner>
<lynk-spinner style="font-size: 2rem;"></lynk-spinner>
<lynk-spinner style="font-size: 3rem;"></lynk-spinner>
```

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html preview
<lynk-spinner style="font-size: 50px; --track-width: 10px;"></lynk-spinner>
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html preview
<lynk-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></lynk-spinner>
```

[component-metadata:lynk-spinner]
