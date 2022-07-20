# Progress Bar

[component-header:lynk-progress-bar]

Progress bars are used to show the status of an ongoing operation.

```html preview
<lynk-progress-bar value="50"></lynk-progress-bar>
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html preview
<lynk-progress-bar value="50" label="Upload progress"></lynk-progress-bar>
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html preview
<lynk-progress-bar value="50" style="--height: 6px;"></lynk-progress-bar>
```

### Showing Values

Use the default slot to show a value.

```html preview
<lynk-progress-bar value="50" class="progress-bar-values">50%</lynk-progress-bar>

<br />

<lynk-button circle><lynk-icon name="dash" label="Decrease"></lynk-icon></lynk-button>
<lynk-button circle><lynk-icon name="plus" label="Increase"></lynk-icon></lynk-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html preview
<lynk-progress-bar indeterminate></lynk-progress-bar>
```

[component-metadata:lynk-progress-bar]
