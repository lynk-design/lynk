<!-- cspell:dictionaries lorem-ipsum -->

# Panel

[component-header:lynk-panel]

```html preview
<lynk-panel heading="Panel Heading">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-panel>
```

## Examples

### Prefix & Suffix

Use the `prefix` and `suffix` slots to add additional controls to the panel header.

```html preview
<lynk-panel heading="Encoding Profile">
  <lynk-checkbox slot="prefix" checked></lynk-checkbox>
  <lynk-button slot="suffix" square size="small"><lynk-icon name="three-dots-vertical"></lynk-icon></lynk-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-panel>
```

### Footer

Use the `footer` slots to add additional controls to the panel body that are hidden when the panel is collapsed.

```html preview
<lynk-panel heading="Encoding Profile">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <lynk-button color="primary" slot="footer">Save</lynk-button>
</lynk-panel>
```

### No Header

Use the `no-header` attribute to remove the panel header. This will also remove the default toggle icon and controls, so please ensure you provide an easy, accessible way for users to toggle the panel if used within an accordion.

```html preview
<lynk-panel no-header>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <lynk-button color="primary" slot="footer">Save</lynk-button>
</lynk-panel>
```

### Singluar Accordion Style Panel

Use the `accordion` attribute to enable the Panel's expand/contract controls so that the Panel can function like an single accordion panel. When embedded within an `<lynk-accordion>` component the Panel's `accordion` attribute is automatically enabled.

```html preview
<lynk-panel heading="Accordion Panel" accordion>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-panel>
```

### Disabled Accordion Panel

Use the `disabled` and `accordion` attributes in combination to prevent the Panel from expanding/collapsing from it's initial render state.

```html preview
<lynk-panel heading="Disabled" accordion disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-panel>
```

### Toggle Trigger & Toggle Icon Placment

Use the `toggle-trigger` property to determine which header elements will trigger the expand/collapse of the content. In this example, setting `toggle-trigger="icon"` will toggle the panel contents only for clicks on the expand/collapse icon.

```html preview
<lynk-panel accordion heading="Heading Trigger" toggle-trigger="icon" toggle-icon-placement="start">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-panel>
```

### Hide Suffix on Collapse

Add the `toggle-suffix` attribute to also hide the contents of the suffix slot when the panel is collapsed.

```html preview
<lynk-panel accordion heading="Toggle Suffix" toggle-icon-placement="start" toggle-suffix>
  <lynk-button slot="suffix" square size="small"><lynk-icon name="three-dots-vertical"></lynk-icon></lynk-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-panel>
```

### Accordion Group

Panels are designed to function independently, but you can group multiple Panel components where only one is shown at a time by wrapping the panels in an `<lynk-accordion>` component.

```html preview
<lynk-accordion>
  <lynk-panel heading="First" expanded>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </lynk-panel>

  <lynk-panel heading="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </lynk-panel>

  <lynk-panel heading="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </lynk-panel>
</lynk-accordion>
```

[component-metadata:lynk-panel]
