# Table Column

[component-header:lynk-col]

The `<lynk-col>` tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, or for each row.

<lynk-alert type="warning" open>The `<lynk-col>` tag must be a child of a `<lynk-colgroup>` element.</lynk-alert>

```html preview
<lynk-table>
  <lynk-colgroup>
    <lynk-col style="width: 64px;"></lynk-col>
    <lynk-col></lynk-col>
    <lynk-col style="visibility: collapse;"></lynk-col>
    <lynk-col></lynk-col>
  </lynk-colgroup>
  <lynk-thead>
    <lynk-tr>
      <lynk-th></lynk-th>
      <lynk-th>Header B</lynk-th>
      <lynk-th>Header C</lynk-th>
      <lynk-th>Header D</lynk-th>
    </lynk-tr>
  </lynk-thead>
  <lynk-tbody>
    <lynk-tr>
      <lynk-td><lynk-checkbox></lynk-checkbox></lynk-td>
      <lynk-td>B1</lynk-td>
      <lynk-td>C1</lynk-td>
      <lynk-td>D1</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td><lynk-checkbox></lynk-checkbox></lynk-td>
      <lynk-td>B2</lynk-td>
      <lynk-td>C2</lynk-td>
      <lynk-td>D2</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td><lynk-checkbox></lynk-checkbox></lynk-td>
      <lynk-td>B3</lynk-td>
      <lynk-td>C3</lynk-td>
      <lynk-td>D3</lynk-td>
    </lynk-tr>
  </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-col]
