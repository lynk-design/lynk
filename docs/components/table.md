# Table

[component-header:lynk-table]

These elements are intended to behave like HTML `<table>` elements.

```html preview
<lynk-table id="exampleAutomatic"></lynk-table>
<script>
    // note: this script would usually be replaced with data bindings provided by your web framework
    const table = document.getElementById('exampleAutomatic');
    table.cols = [
        {
            'key': 'a',
            'title': 'Header A',
        },
        {
            'key': 'b',
            'title': 'Header B',
        },
        {
            'key': 'c',
            'title': 'Header C',
        }
    ];
    table.rows = [
        {
            'a': 'A1',
            'b': 'B1',
            'c': 'C1'
        },
        {
            'a': 'A2',
            'b': 'B2',
            'c': 'C2'
        },
        {
            'a': 'A3',
            'b': 'B3',
            'c': 'C3'
        }
    ];
</script>
```

[component-metadata:lynk-table]

## Slots

Similar to the `<table>` HTML element, `<lynk-table>` elements are designed to contain only the following types of elements:

- zero or more `<lynk-colgroup>` elements
- zero or one `<lynk-thead>` element
- either one of the following:
  <br>zero or more `<lynk-tbody>` elements
  <br>one or more `<lynk-tr>` elements

```html preview
<lynk-table>
    <lynk-colgroup>
        <lynk-col></lynk-col>
        <lynk-col></lynk-col>
        <lynk-col></lynk-col>
    </lynk-colgroup>
    <lynk-thead>
        <lynk-tr>
            <lynk-th key="a">Header A</lynk-th>
            <lynk-th key="b">Header B</lynk-th>
            <lynk-th key="c">Header C</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody>
        <lynk-tr>
            <lynk-td>A1</lynk-td>
            <lynk-td>B1</lynk-td>
            <lynk-td>C1</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>A2</lynk-td>
            <lynk-td>B2</lynk-td>
            <lynk-td>C2</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>A3</lynk-td>
            <lynk-td>B3</lynk-td>
            <lynk-td>C3</lynk-td>
        </lynk-tr>
    </lynk-tbody>
</lynk-table>
````