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

Add the `hover` attribute to add hover pseudo styles on the entire table row.

```html preview
<lynk-table>
    <lynk-thead>
        <lynk-tr>
            <lynk-th>Item</lynk-th>
            <lynk-th>Status</lynk-th>
        </lynk-tr>
    </lynk-thead>
    <lynk-tbody>
        <lynk-tr  hover><lynk-td>1</lynk-td><lynk-td>-</lynk-td></lynk-tr>
        <lynk-tr state="primary" hover><lynk-td>2</lynk-td><lynk-td>primary</lynk-td></lynk-tr>
        <lynk-tr state="danger" hover><lynk-td>3</lynk-td><lynk-td>danger</lynk-td></lynk-tr>
        <lynk-tr state="success" hover><lynk-td>4</lynk-td><lynk-td>success</lynk-td></lynk-tr>
        <lynk-tr state="warning" hover><lynk-td>5</lynk-td><lynk-td>warning</lynk-td></lynk-tr>
        <lynk-tr state="neutral" hover><lynk-td>6</lynk-td><lynk-td>neutral</lynk-td></lynk-tr>
        <lynk-tr state="custom" style="--color: var(--lynk-color-pink-500);" hover><lynk-td>7</lynk-td><lynk-td>custom</lynk-td></lynk-tr>
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
        <lynk-tr state="danger" pulse hover><lynk-td>3</lynk-td><lynk-td>Critical</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-tr]

## Slots

Similar to the `<tr>` HTML element, `<lynk-tr>` elements are designed to contain zero or more `<lynk-td>` and/or `<lynk-th>` elements.