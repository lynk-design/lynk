# Table Header Group

[component-header:lynk-thead]

```html preview
<lynk-table>
  <lynk-thead>
    <lynk-tr>
      <lynk-th>Header A</lynk-th>
      <lynk-th>Header B</lynk-th>
      <lynk-th>Header C</lynk-th>
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
```

## Examples

### Sticky

Add the `sticky` attribute to apply the native [`position: sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property on the table header group.

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
```

[component-metadata:lynk-thead]
