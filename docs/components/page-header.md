# Page Header

[component-header:lynk-page-header]


```html preview
<lynk-page-header>
    <h1>This is a Page Header</h1>
</lynk-page-header>
```

## Examples

### Fully Slotted Header

```html preview
<lynk-page-header>
    <lynk-button slot="aux" size="tiny" square></lynk-button>
    <lynk-button slot="aux" size="tiny" circle></lynk-button>
    <lynk-input slot="controls" type="search" placeholder="Search" clearable>
        <lynk-icon slot="prefix" name="search"></lynk-icon>
        <lynk-button slot="suffix" size="tiny" square>
            <lynk-icon name="arrow-return-left" label="Settings"></lynk-icon>
        </lynk-button>
    </lynk-input>
    <lynk-dropdown slot="controls" placement="bottom-end">
        <lynk-button slot="trigger">
            <lynk-icon slot="prefix" name="filter"></lynk-icon>
        </lynk-button>
        <lynk-menu>
            <lynk-menu-label>Source</lynk-menu-label>
            <lynk-menu-item>Test</lynk-menu-item>
        </lynk-menu>
    </lynk-dropdown>
    <lynk-breadcrumb slot="breadcrumb">
        <span slot="separator">/</span>
        <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
        <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
        <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
    </lynk-breadcrumb>
    <h1>Header Title</h1>
    <lynk-tab-group slot="tabs">
      <lynk-tab slot="nav" panel="general">General</lynk-tab>
      <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
      <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
      <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>
    </lynk-tab-group>
</lynk-page-header>
```

### Width

Like the [Page Content](/components/page-content) component, the Page Header's max-width and breakpoint can be set with the `width` property.

```html preview
<lynk-page-header width="small">
    <lynk-button slot="aux" size="tiny" square></lynk-button>
    <lynk-button slot="aux" size="tiny" circle></lynk-button>
    <lynk-dropdown slot="controls" placement="bottom-end">
        <lynk-button slot="trigger" caret>
            Action
        </lynk-button>
        <lynk-menu>
            <lynk-menu-label>Option 1</lynk-menu-label>
            <lynk-menu-item>Option 2</lynk-menu-item>
        </lynk-menu>
    </lynk-dropdown>
    <lynk-breadcrumb slot="breadcrumb">
        <span slot="separator">/</span>
        <lynk-breadcrumb-item>First</lynk-breadcrumb-item>
        <lynk-breadcrumb-item>Second</lynk-breadcrumb-item>
        <lynk-breadcrumb-item>Third</lynk-breadcrumb-item>
    </lynk-breadcrumb>
    <h1>Header Title</h1>
    <lynk-tab-group slot="tabs">
      <lynk-tab slot="nav" panel="general">General</lynk-tab>
      <lynk-tab slot="nav" panel="custom">Custom</lynk-tab>
      <lynk-tab slot="nav" panel="advanced">Advanced</lynk-tab>
      <lynk-tab slot="nav" panel="disabled" disabled>Disabled</lynk-tab>
    </lynk-tab-group>
</lynk-page-header>
```

[component-metadata:lynk-page-header]
