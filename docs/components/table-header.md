# Table Header

[component-header:lynk-th]

These elements are intended to behave like `<th>` HTML elements.

```html preview
<lynk-table>
    <lynk-thead>
        <lynk-tr>
            <lynk-th key="colA" sortable>Column A</lynk-th>
            <lynk-th key="colB" sortable>Column B</lynk-th>
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

### Sorting

```html preview
<lynk-table id="exampleSorting"></lynk-table>
<script>
    // note: this script would usually be replaced with data bindings provided by your web framework
    const table = document.getElementById('exampleSorting');
    table.cols = [
        {
            'key': 'a',
            'sortable': true,
            'title': 'Column A',
        },
        {
            'key': 'b',
            'sortable': true,
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
