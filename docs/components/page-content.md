# Page Content

[component-header:lynk-page-content]

Page Content is typically used within a [Page Layout](/components/page-layout) and is the most basic layout component, often called `containers` in other frameworks.

By default, Lynk's page content container is set to be a fluid `width: 100%` at all breakpoints.

```html preview
<lynk-page-content>Page content goes here.</lynk-page-content>
```

The table below shows how the Page Conent component's `max-width` changes across each breakpoint for each `width` property option.

<lynk-table>
    <lynk-thead>
        <lynk-tr>
            <lynk-th></lynk-th>
            <lynk-th>x-small (<588px)</lynk-th>
            <lynk-th>small (≥588px)</lynk-th>
            <lynk-th>medium (≥768px)</lynk-th>
            <lynk-th>large (≥992px)</lynk-th>
            <lynk-th>x-large (≥1200px)</lynk-th>
            <lynk-th>2x-large (≥1400px)</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody>
        <lynk-tr>
            <lynk-td>`width="fluid"`</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>`width="auto"`</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>540px</lynk-td>
            <lynk-td>720px</lynk-td>
            <lynk-td>968px</lynk-td>
            <lynk-td>1144px</lynk-td>
            <lynk-td>1328px</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>`width="small"`</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>540px</lynk-td>
            <lynk-td>540px</lynk-td>
            <lynk-td>540px</lynk-td>
            <lynk-td>540px</lynk-td>
            <lynk-td>540px</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>`width="medium"`</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>720px</lynk-td>
            <lynk-td>720px</lynk-td>
            <lynk-td>720px</lynk-td>
            <lynk-td>720px</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>`width="large"`</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>968px</lynk-td>
            <lynk-td>968px</lynk-td>
            <lynk-td>968px</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>`width="x-large"`</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>1144px</lynk-td>
            <lynk-td>1144px</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>`size="2x-large"`</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>100%</lynk-td>
            <lynk-td>1328px</lynk-td>
        </lynk-tr>
    </lynk-tbody>
</lynk-table>

[component-metadata:lynk-page-content]
