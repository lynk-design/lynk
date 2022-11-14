# Table Header Group

[component-header:lynk-thead]

These elements are intended to behave like `<thead>` HTML elements.

## Examples

### Sticky

```html preview
<lynk-table>
    <lynk-thead sticky>
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
        <lynk-tr>
            <lynk-td>A4</lynk-td>
            <lynk-td>B4</lynk-td>
            <lynk-td>C4</lynk-td>
        </lynk-tr>
        <lynk-tr>
            <lynk-td>A5</lynk-td>
            <lynk-td>B5</lynk-td>
            <lynk-td>C5</lynk-td>
        </lynk-tr>
    </lynk-tbody>
</lynk-table>
````

[component-metadata:lynk-thead]

## Slots

Similar to the `<thead>` HTML element, `<lynk-thead>` elements are designed to contain zero or more `<lynk-tr>` elements.