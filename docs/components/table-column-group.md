# Table Column Group

[component-header:lynk-colgroup]

These elements are intended to behave like `<colgroup>` HTML elements.

```html preview
<lynk-table layout="fixed">
    <lynk-colgroup>
        <lynk-col key="a" style="background: red; width: 100px;"></lynk-col>
        <lynk-col key="b"></lynk-col>
        <lynk-col key="c"></lynk-col>
    </lynk-colgroup>
    <lynk-thead>
        <lynk-tr>
            <lynk-th key="a">Header A</lynk-th>
            <lynk-th key="b">Header B</lynk-th>
            <lynk-th key="c">Header C</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody transparent>
        <lynk-tr state="">
            <lynk-td>Table Row 1 Column A</lynk-td>
            <lynk-td>Row 1 Column B</lynk-td>
            <lynk-td>Row 1 Column C</lynk-td>
        </lynk-tr>
        <lynk-tr state="">
            <lynk-td>Table Row 2 Column A</lynk-td>
            <lynk-td>Row 2 Column B</lynk-td>
            <lynk-td>Row 2 Column C</lynk-td>
        </lynk-tr>
        <lynk-tr state="">
            <lynk-td>Table Row 3 Column A</lynk-td>
            <lynk-td>Row 3 Column B</lynk-td>
            <lynk-td>Row 3 Column C</lynk-td>
        </lynk-tr>
    </lynk-tbody>
</lynk-table>
````

[component-metadata:lynk-colgroup]

## Slots

Similar to the `<colgroup>` HTML element, `<lynk-colgroup>` elements are designed to contain zero or more `<col>` elements.