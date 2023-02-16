# Page Layout

[component-header:lynk-page-layout]

The `lynk-page-layout` component is intended to be used with `lynk-page-header`, `lynk-page-sidebar`, `lynk-page-content`, and `lynk-page-footer` components.

```html preview
<lynk-page-layout>
    <lynk-page-sidebar heading="Page Sidebar">
        <lynk-nav>
            <lynk-nav-item selected>Nav Item</lynk-nav-item>
            <lynk-nav-item>Nav Item</lynk-nav-item>
        </lynk-nav>
    </lynk-page-sidebar>
    <lynk-page-header>
        <h1>Page Header</h1>
    </lynk-page-header>
    <lynk-page-content>
        Page Content
    </lynk-page-content>
    <lynk-page-footer>
        Page Footer
    </lynk-page-footer>
</lynk-page-layout>
```

## Examples

### Page Layout with Right Sidebar

```html preview
<lynk-page-layout>
    <lynk-page-sidebar placement="right" heading="Right Sidebar">
        <lynk-nav>
            <lynk-nav-item selected>Nav Item</lynk-nav-item>
            <lynk-nav-item>Nav Item</lynk-nav-item>
        </lynk-nav>
    </lynk-page-sidebar>
    <lynk-page-header>
        <h1>Page Header</h1>
    </lynk-page-header>
    <lynk-page-content>
        Page Content
    </lynk-page-content>
    <lynk-page-footer>
        Page Footer
    </lynk-page-footer>
</lynk-page-layout>
```

### Page Layout with Nested Right Sidebar

```html preview
<lynk-page-layout>
    <lynk-page-sidebar placement="right-inset" heading="Right Inset Sidebar">
        Right Sidebar Contents
    </lynk-page-sidebar>
    <lynk-page-header>
        <h1>Page Header</h1>
    </lynk-page-header>
    <lynk-page-content>
        Page Content
    </lynk-page-content>
    <lynk-page-footer>
        Page Footer
    </lynk-page-footer>
</lynk-page-layout>
```

[component-metadata:lynk-page-layout]
