# Page Footer

[component-header:lynk-page-footer]

```html preview
<lynk-page-footer>
    <lynk-button color="primary">Save</lynk-button>
    <lynk-button>Cancel</lynk-button>
</lynk-page-footer>
```

## Examples

### Additonal Layout Slots

Pre-determined `secondary` and `center` slots can be used to render typical page level secondary or destructive actions and other relevant metadata like pagination information.

```html preview
<lynk-page-footer>
    <lynk-button color="primary">Save</lynk-button>
    <lynk-button>Cancel</lynk-button>
    <span slot="center">3 of 5</span>
    <lynk-button slot="secondary" square></lynk-button>
    <lynk-button slot="secondary" square></lynk-button>
    <lynk-button slot="secondary" color="danger"">Delete</lynk-button>
</lynk-page-footer>
```

### Width

Like the [Page Layout](/components/page-layout) component, the Page Footer's max-width and breakpoint can be set with the `width` property.

```html preview
<lynk-page-footer width="small">
    <lynk-button color="primary">Save</lynk-button>
    <lynk-button>Cancel</lynk-button>
</lynk-page-footer>
```

[component-metadata:lynk-page-footer]
