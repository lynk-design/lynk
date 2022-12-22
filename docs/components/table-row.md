# Table Row

[component-header:lynk-tr]


```html preview
<lynk-table>
    <lynk-tbody>
        <lynk-tr><lynk-td>Row 1</lynk-td></lynk-tr>
        <lynk-tr><lynk-td>Row 2</lynk-td></lynk-tr>
        <lynk-tr><lynk-td>Row 3</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

## Examples

### Row States

Use the `state` attribute and value to style a row with corresponding status color tokens.

```html preview
<lynk-table>
    <lynk-tbody>
        <lynk-tr><lynk-td>Default</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>Primary</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>Danger</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>Success</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>Warning</lynk-td></lynk-tr>
        <lynk-tr state="neutral"><lynk-td>Neutral</lynk-td></lynk-tr>
        <lynk-tr state="custom" style="--color: fuchsia;"><lynk-td>Custom</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

### Hover States

Add the `hoverable` attribute to add hover pseudo styles on the entire table row.

```html preview
<lynk-table>
    <lynk-thead>
        <lynk-tr>
            <lynk-th>Item</lynk-th>
            <lynk-th>Status</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody>
        <lynk-tr  hoverable><lynk-td>1</lynk-td><lynk-td>-</lynk-td></lynk-tr>
        <lynk-tr state="primary" hoverable><lynk-td>2</lynk-td><lynk-td>primary</lynk-td></lynk-tr>
        <lynk-tr state="danger" hoverable><lynk-td>3</lynk-td><lynk-td>danger</lynk-td></lynk-tr>
        <lynk-tr state="success" hoverable><lynk-td>4</lynk-td><lynk-td>success</lynk-td></lynk-tr>
        <lynk-tr state="warning" hoverable><lynk-td>5</lynk-td><lynk-td>warning</lynk-td></lynk-tr>
        <lynk-tr state="neutral" hoverable><lynk-td>6</lynk-td><lynk-td>neutral</lynk-td></lynk-tr>
        <lynk-tr state="custom" style="--color: var(--lynk-color-pink-500);" hoverable><lynk-td>7</lynk-td><lynk-td>custom</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

### Selected States

Add the `selected` attribute to draw a row in an active state. Can be used to indicate one or more selected rows when checkbox columns are not being used.

```html preview
<lynk-table>
    <lynk-thead>
        <lynk-tr>
            <lynk-th>Item</lynk-th>
            <lynk-th>Status</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody>
        <lynk-tr selected><lynk-td>1</lynk-td><lynk-td>-</lynk-td></lynk-tr>
        <lynk-tr selected state="primary"><lynk-td>2</lynk-td><lynk-td>primary</lynk-td></lynk-tr>
        <lynk-tr selected state="danger"><lynk-td>3</lynk-td><lynk-td>danger</lynk-td></lynk-tr>
        <lynk-tr selected state="success"><lynk-td>4</lynk-td><lynk-td>success</lynk-td></lynk-tr>
        <lynk-tr selected state="warning"><lynk-td>5</lynk-td><lynk-td>warning</lynk-td></lynk-tr>
        <lynk-tr selected state="neutral"><lynk-td>6</lynk-td><lynk-td>neutral</lynk-td></lynk-tr>
        <lynk-tr selected state="custom" style="--color: var(--lynk-color-pink-500);"><lynk-td>7</lynk-td><lynk-td>custom</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

### Pulse

Add the `pulse` attribute to flash the status color when a specific row needs immediate attention. Use the `pulse` attribute sparingly.

```html preview
<lynk-table>
    <lynk-thead>
        <lynk-tr>
            <lynk-th>Item</lynk-th>
            <lynk-th>Status</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody>
        <lynk-tr><lynk-td>1</lynk-td><lynk-td>Nominal</lynk-td></lynk-tr>
        <lynk-tr><lynk-td>2</lynk-td><lynk-td>Nominal</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>3</lynk-td><lynk-td>Danger</lynk-td></lynk-tr>
        <lynk-tr state="danger" pulse hoverable><lynk-td>3</lynk-td><lynk-td>Critical</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-tr]
