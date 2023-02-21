# Table Cell

[component-header:lynk-td]

```html preview
<lynk-table>
  <lynk-thead>
    <lynk-tr>
      <lynk-th>Column A Title</lynk-th>
      <lynk-th>Column B Title</lynk-th>
    </lynk-tr>
  </lynk-thead>
  <lynk-tbody>
    <lynk-tr>
      <lynk-td>Row 1 Cell A</lynk-td>
      <lynk-td>Row 1 Cell B</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 2 Cell A</lynk-td>
      <lynk-td>Row 2 Cell B</lynk-td>
    </lynk-tr>
  </lynk-tbody>
</lynk-table>
```

## Examples

### State

Use the `state` attribute to color individual cell backgrounds with status color tokens.

```html preview
<lynk-table>
  <lynk-thead>
    <lynk-tr>
      <lynk-th>Name</lynk-th>
      <lynk-th>Status</lynk-th>
    </lynk-tr>
  </lynk-thead>
  <lynk-tbody>
    <lynk-tr>
      <lynk-td>Row 1</lynk-td>
      <lynk-td state="primary">Primary</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 2</lynk-td>
      <lynk-td state="danger">Danger</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 3</lynk-td>
      <lynk-td state="warning">Warning</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 4</lynk-td>
      <lynk-td state="success">Succcess</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 5</lynk-td>
      <lynk-td state="neutral">Neutral</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 6</lynk-td>
      <lynk-td state="custom" style="--state-color: var(--lynk-color-fuchsia-50);"> Custom </lynk-td>
    </lynk-tr>
  </lynk-tbody>
</lynk-table>
```

### Barberpole Animation

Add the `barberpole` attribute to animate the `state` background color. For custom states, you need to define both the `state-color` and `state-color-b` style properties.

```html preview
<lynk-table>
  <lynk-thead>
    <lynk-tr>
      <lynk-th>Name</lynk-th>
      <lynk-th>Status</lynk-th>
    </lynk-tr>
  </lynk-thead>
  <lynk-tbody>
    <lynk-tr>
      <lynk-td>Row 1</lynk-td>
      <lynk-td state="primary" barberpole>Primary</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 2</lynk-td>
      <lynk-td state="danger" barberpole>Danger</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 3</lynk-td>
      <lynk-td state="warning" barberpole>Warning</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 4</lynk-td>
      <lynk-td state="success" barberpole>Succcess</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 5</lynk-td>
      <lynk-td state="neutral" barberpole>Neutral</lynk-td>
    </lynk-tr>
    <lynk-tr>
      <lynk-td>Row 6</lynk-td>
      <lynk-td
        state="custom"
        style="--state-color: var(--lynk-color-fuchsia-50); --state-color-b: var(--lynk-color-fuchsia-100);"
        barberpole
      >
        Custom
      </lynk-td>
    </lynk-tr>
  </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-td]
