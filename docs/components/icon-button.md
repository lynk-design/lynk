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

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html preview
<div class="icon-button-color">
  <lynk-icon-button name="type-bold" label="Bold"></lynk-icon-button>
  <lynk-icon-button name="type-italic" label="Italic"></lynk-icon-button>
  <lynk-icon-button name="type-underline" label="Underline"></lynk-icon-button>
</div>

<style>
  .icon-button-color lynk-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color lynk-icon-button::part(base):hover,
  .icon-button-color lynk-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color lynk-icon-button::part(base):active {
    color: #960077;
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
