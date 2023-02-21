# Table Column Group

[component-header:lynk-colgroup]

The `<lynk-colgroup>` tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, or for each row.

To define different properties to a column within a `<lynk-colgroup>`, use the `<lynk-col>` tag within the `<lynk-colgroup>` tag.

<lynk-alert type="warning" open>The `<lynk-colgroup>` tag must be a child of a `<lynk-table>` element, after any `<lynk-caption>` elements and before any `<lynk-thead>`, `<lynk-tbody>`, `<lynk-tfoot>`, and `<lynk-tr>` elements.</lynk-alert>

```html preview
<lynk-table>
  <lynk-colgroup>
    <lynk-col style="width: 64px;"></lynk-col>
    <lynk-col></lynk-col>
    <lynk-col></lynk-col>
  </lynk-colgroup>
  <lynk-thead>
    <lynk-tr>
      <lynk-th></lynk-th>
      <lynk-th>Header B</lynk-th>
      <lynk-th>Header C</lynk-th>
    </lynk-tr>
  </lynk-thead>
  <lynk-tbody>
    <lynk-tr>
      <lynk-td><lynk-checkbox></lynk-checkbox></lynk-td>
      <lynk-td>B1</lynk-td>
      <lynk-td>C1</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td><lynk-checkbox></lynk-checkbox></lynk-td>
      <lynk-td>B2</lynk-td>
      <lynk-td>C2</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td><lynk-checkbox></lynk-checkbox></lynk-td>
      <lynk-td>B3</lynk-td>
      <lynk-td>C3</lynk-td>
    </lynk-tr>
  </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-colgroup]
