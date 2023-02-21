# Page Sidebar

[component-header:lynk-page-sidebar]

```html preview
<lynk-page-sidebar> This is a sidebar </lynk-page-sidebar>
```

## Examples

### Placement

Use the `placement` attribute to set where you want the sidebar to render within the [Page Layout](/components/page-layout) grid and slot structure.

```html preview
<lynk-page-layout>
  <lynk-page-sidebar placement="left"> This is a left sidebar (default) </lynk-page-sidebar>
</lynk-page-layout>
```

```html preview
<lynk-page-layout>
  <lynk-page-sidebar placement="left-inset"> This is a left inset sidebar </lynk-page-sidebar>
</lynk-page-layout>
```

```html preview
<lynk-page-layout>
  <lynk-page-sidebar placement="right-inset"> This is a right inset sidebar </lynk-page-sidebar>
</lynk-page-layout>
```

```html preview
<lynk-page-layout>
  <lynk-page-sidebar placement="right"> This is a right sidebar </lynk-page-sidebar>
</lynk-page-layout>
```

Multiple sidebars may be used in a single layout.

```html preview
<lynk-page-layout>
  <lynk-page-sidebar placement="left"> This is a left sidebar </lynk-page-sidebar>
  <lynk-page-sidebar placement="right-inset"> This is a right inset sidebar </lynk-page-sidebar>
  <lynk-page-content> This is the content area </lynk-page-content>
</lynk-page-layout>
```

### Headings, Headers, and Header Actions

Use the `heading` attribute with a string to render a header in the sidebar with a title.

```html preview
<lynk-page-layout>
  <lynk-page-sidebar heading="Left Sidebar"> This is a left sidebar </lynk-page-sidebar>
</lynk-page-layout>
```

Alternatively, you can use the `heading` and `header-actions` slots to render custom content into the heading title area and action area respectively.

```html preview
<lynk-page-layout>
  <lynk-page-sidebar>
    <lynk-tag slot="heading">Custom Heading</lynk-tag>
    <lynk-button slot="header-actions" circle size="small">
      <lynk-icon name="gear"></lynk-icon>
    </lynk-button>
    This is a left sidebar
  </lynk-page-sidebar>
</lynk-page-layout>
```

In rare instances, you can even replace and render your own content into the entire `header` slot.

```html preview
<lynk-page-layout>
  <lynk-page-sidebar>
    <lynk-stack slot="header" style="--width: 100%;">
      <lynk-input type="search" placeholder="Search" clearable>
        <lynk-icon slot="prefix" name="search" library="default"></lynk-icon>
      </lynk-input>
      <lynk-nav>
        <lynk-nav-item selected>Option A</lynk-nav-item>
        <lynk-nav-item>Option B</lynk-nav-item>
      </lynk-nav>
    </lynk-stack>

    This is a left sidebar
  </lynk-page-sidebar>
</lynk-page-layout>
```

### Toggle

Use the `toggle="visibility"` property to enable hiding the sidebar entirely. The visibility toggle control is rendered into the `header-actions` slot by default, so once hidden, you will need to provide an alternative way to show the sidebar again using the `show()` method.

```html preview
<lynk-page-layout>
  <lynk-page-sidebar class="toggle-visibility-sidebar" heading="Left Sidebar" toggle="visibility" open>
    This is a left sidebar
  </lynk-page-sidebar>
  <lynk-page-content> Page Content </lynk-page-content>
</lynk-page-layout>

<script>
  const sidebar = document.querySelector('.toggle-visibility-sidebar');
  sidebar.addEventListener('after:hide', () => {
    setTimeout(() => (sidebar.open = true), 3000);
  });
</script>
```

Alternately, use the `toggle="contents"` property to enable hiding just the sidebar contents. The visibility toggle control is always visible when using the `toggle="contents"` property for accessibility and convenience.

```html preview
<lynk-page-layout>
  <lynk-page-sidebar class="toggle-contents-sidebar" heading="Left Sidebar" toggle="contents" open>
    This is a left sidebar
  </lynk-page-sidebar>
  <lynk-page-content> Page Content </lynk-page-content>
</lynk-page-layout>
```

[component-metadata:lynk-page-sidebar]
