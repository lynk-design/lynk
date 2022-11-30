# Table Header

[component-header:lynk-th]

These elements are intended to behave like `<th>` HTML elements.

```html preview
<lynk-table custom>
    <lynk-thead>
        <lynk-tr>
            <lynk-th key="colA" sort-enabled>Column A</lynk-th>
            <lynk-th key="colB" sort-enabled>Column B</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody>
        <lynk-tr>
            <lynk-td>A1</lynk-td>
            <lynk-td>B1</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>A2</lynk-td>
            <lynk-td>B2</lynk-td>
        </lynk-tr>
    </lynk-tbody>
</lynk-table>
```

## Examples

### Resize Enabled

```html preview
<lynk-table id="resizeTable"></lynk-table>

<lynk-grid container id="resizeTableOptions">
    <lynk-grid item>
        <lynk-radio-group label="Table Layout" fieldset>
        <lynk-radio name="layout" value="auto" checked>Auto</lynk-radio>
        <lynk-radio name="layout" value="fixed">Fixed</lynk-radio>
        </lynk-radio-group>
    </lynk-grid>
</lynk-grid>

<script>
    const resizeTable = document.getElementById('resizeTable');
    resizeTable.cols = [
        {
            'key': 'a',
            'maxWidth': 200,
            'minWidth': 140,
            'width': 150,
            'resizeEnabled': true,
            'title': 'Column A',
        },
        {
            'key': 'b',
            'minWidth': 140,
            'resizeEnabled': true,
            'title': 'Column B',
        },
        {
            'key': 'c',
            'minWidth': 140,
            'resizeEnabled': false,
            'title': 'Column C',
        },
    ];
    resizeTable.rows = [
        {
            'a': 'Row 1 Column A',
            'b': 'Row 1 Column B',
            'c': 'Row 1 Column C',
        },
        {
            'a': 'Row 2 Column A',
            'b': 'Row 2 Column B',
            'c': 'Row 2 Column C',
        },
        {
            'a': 'Row 3 Column A',
            'b': 'Row 3 Column B',
            'c': 'Row 3 Column C',
        },
    ];

    const resizeTableOptions = document.querySelectorAll('#resizeTableOptions lynk-radio');
    resizeTableOptions.forEach(function (option) {
        option.addEventListener('on:change', event => {
            if (event.target.checked) {
                resizeTable.setAttribute(event.target.name, event.target.value);
            }
        });
    });
</script>
```

### Sort Enabled

```html preview
<lynk-table id="exampleSortEnabled"></lynk-table>
<script>
    // note: this script would usually be replaced with data bindings provided by your web framework
    const table = document.getElementById('exampleSortEnabled');
    table.cols = [
        {
            'key': 'a',
            'sortEnabled': true,
            'title': 'Column A',
        },
        {
            'key': 'b',
            'sortEnabled': true,
            'title': 'Column B',
        }
    ];
    table.rows = [
        {
            'a': 'Row 1 Column A',
            'b': 'Row 1 Column B'
        },
        {
            'a': 'Row 2 Column A',
            'b': 'Row 2 Column B'
        },
        {
            'a': 'Row 3 Column A',
            'b': 'Row 3 Column B'
        }
    ];
</script>
```

[component-metadata:lynk-th]
