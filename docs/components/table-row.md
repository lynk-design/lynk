# Table Row

[component-header:lynk-tr]

These elements are intended to behave like `<tr>` HTML elements.

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

### State

```html preview
<lynk-table>
    <lynk-tbody>
        <lynk-tr state="danger"><lynk-td>danger</lynk-td><lynk-td>danger</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>danger</lynk-td><lynk-td>danger</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>danger</lynk-td><lynk-td>danger</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>danger</lynk-td><lynk-td>danger</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>primary</lynk-td><lynk-td>primary</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>primary</lynk-td><lynk-td>primary</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>primary</lynk-td><lynk-td>primary</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>primary</lynk-td><lynk-td>primary</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>success</lynk-td><lynk-td>success</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>success</lynk-td><lynk-td>success</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>success</lynk-td><lynk-td>success</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>success</lynk-td><lynk-td>success</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>warning</lynk-td><lynk-td>warning</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>warning</lynk-td><lynk-td>warning</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>warning</lynk-td><lynk-td>warning</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>warning</lynk-td><lynk-td>warning</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-tr]

## Slots

Similar to the `<tr>` HTML element, `<lynk-tr>` elements are designed to contain zero or more `<lynk-td>` and/or `<lynk-th>` elements.