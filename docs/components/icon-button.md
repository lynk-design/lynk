# Icon Button

[component-header:lynk-icon-button]

Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.

For a full list of icons that come bundled with Lynk, refer to the [icon component](/components/icon).

```html preview
<lynk-icon-button name="gear" label="Settings"></lynk-icon-button>
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html preview
<lynk-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></lynk-icon-button>
<lynk-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></lynk-icon-button>
<lynk-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></lynk-icon-button>
```

### Colors

Use the `color` attribute to set the icon button's color. You can also customize the color by styling the `base` part.

```html preview
<lynk-icon-button name="question-circle-fill"></lynk-icon-button>
<lynk-icon-button color="primary" name="info-circle-fill"></lynk-icon-button>
<lynk-icon-button color="success" name="check-square-fill"></lynk-icon-button>
<lynk-icon-button color="warning" name="exclamation-triangle-fill"></lynk-icon-button>
<lynk-icon-button color="danger" name="exclamation-diamond-fill"></lynk-icon-button>

<lynk-icon-button class="icon-button-color" name="type-bold" label="Bold"></lynk-icon-button>
<lynk-icon-button class="icon-button-color" name="type-italic" label="Italic"></lynk-icon-button>
<lynk-icon-button class="icon-button-color" name="type-underline" label="Underline"></lynk-icon-button>

<style>
  lynk-icon-button.icon-button-color::part(base) {
    color: turquoise;
  }

  lynk-icon-button.icon-button-color::part(base):hover,
  lynk-icon-button.icon-button-color::part(base):focus {
    color: turquoise;
  }

  lynk-icon-button.icon-button-color::part(base):active {
    color: turquoise;
  }
</style>
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html preview
<lynk-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></lynk-icon-button>
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html preview
<lynk-tooltip content="Settings">
  <lynk-icon-button name="gear" label="Settings"></lynk-icon-button>
</lynk-tooltip>
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html preview
<lynk-icon-button name="gear" label="Settings" disabled></lynk-icon-button>
```

[component-metadata:lynk-icon-button]
