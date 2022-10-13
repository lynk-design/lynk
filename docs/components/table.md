# Table

[component-header:lynk-table]

These elements are intended to behave like HTML `<table>` elements.

```html preview
<lynk-table id="exampleAutomatic"></lynk-table>
<script>
    // note: this script would usually be replaced with data bindings provided by your web framework
    const table = document.getElementById('exampleAutomatic');
    table.caption = 'Table Caption';
    table.cols = [
        {
            'footer': 'Footer A',
            'key': 'a',
            'title': 'Header A',
        },
        {
            'footer': 'Footer B',
            'key': 'b',
            'title': 'Header B',
        },
        {
            'footer': 'Footer C',
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

## Examples

### Custom

While the `custom` property is truthy, the LynkTable element will assume its children will be constructed manually, instead of constructing its children from the tabular data properties `cols` and `rows`.

<lynk-alert type="warning" open>Column sorting for custom tables probably won't have any effect unless you are using a repeater to render the table rows, such as provided by most web frameworks.</lynk-alert>

```html preview
<lynk-table custom>
    <lynk-caption>
        Table Caption
    </lynk-caption>
    <lynk-colgroup>
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
    <lynk-tfoot>
        <lynk-tr>
            <lynk-td>Footer A</lynk-td>
            <lynk-td>Footer B</lynk-td>
            <lynk-td>Footer C</lynk-td>
        </lynk-tr>
    </lynk-tfoot>
</lynk-table>
````

[component-metadata:lynk-table]

## Slots

Similar to the `<table>` HTML element, `<lynk-table>` elements are designed to contain only the following types of elements:

- zero or one `<lynk-caption>` element
- zero or more `<lynk-colgroup>` elements
- zero or one `<lynk-thead>` element
- either one of the following:
  <br>zero or more `<lynk-tbody>` elements
  <br>one or more `<lynk-tr>` elements
- zero or one `<lynk-tfoot>` element