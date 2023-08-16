<!-- cspell:dictionaries lorem-ipsum -->

# Auto Grid

[component-header:lynk-auto-grid]

```html preview
<lynk-auto-grid>
  <lynk-card>First Item</lynk-card>
  <lynk-card>Second Item</lynk-card>
  <lynk-card>Third Item</lynk-card>
  <lynk-card>Fourth Item</lynk-card>
  <lynk-card>Fifth Item</lynk-card>
</lynk-auto-grid>
```

## Examples

## Min Size

Adjust the allowed minimum width of the grid items using the `min-size` attribute.

```html preview
<lynk-auto-grid min-size="10rem">
  <lynk-card>First Item</lynk-card>
  <lynk-card>Second Item</lynk-card>
  <lynk-card>Third Item</lynk-card>
  <lynk-card>Fourth Item</lynk-card>
  <lynk-card>Fifth Item</lynk-card>
</lynk-auto-grid>
```

## Grid Gap

Adjust the spacing between grid items using the `gap` attribute.

```html preview
<lynk-auto-grid min-size="10rem" gap="var(--lynk-spacing-x-small)">
  <lynk-card>First Item</lynk-card>
  <lynk-card>Second Item</lynk-card>
  <lynk-card>Third Item</lynk-card>
  <lynk-card>Fourth Item</lynk-card>
  <lynk-card>Fifth Item</lynk-card>
</lynk-auto-grid>
```

## Auto Sizing

Set how you want to fill extra space on a grid row using the `auto-size="fit"` or `auto-size="fill` attributes. 'fill' will fill the extra space with blank slots whereas `fit` will collapse extra slots and allow others to fill the empty space.

```html preview
<lynk-stack gap="24px">
  <lynk-auto-grid min-size="10rem" gap="var(--lynk-spacing-x-small)" auto-size="fit">
    <lynk-card>First Fit Item</lynk-card>
    <lynk-card>Second Fit Item</lynk-card>
    <lynk-card>Third Fit Item</lynk-card>
  </lynk-auto-grid>
  <lynk-auto-grid min-size="10rem" gap="var(--lynk-spacing-x-small)" auto-size="fill">
    <lynk-card>First Fill Item</lynk-card>
    <lynk-card>Second Fill Item</lynk-card>
    <lynk-card>Third Fill Item</lynk-card>
  </lynk-auto-grid>
</lynk-stack>
```

[component-metadata:lynk-auto-grid]
