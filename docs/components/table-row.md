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
        <lynk-tr state="danger"><lynk-td>Danger 1</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>Danger 2</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>Danger 3</lynk-td></lynk-tr>
        <lynk-tr state="danger"><lynk-td>Danger 4</lynk-td></lynk-tr>
        <lynk-tr state="neutral"><lynk-td>Neutral 1</lynk-td></lynk-tr>
        <lynk-tr state="neutral"><lynk-td>Neutral 2</lynk-td></lynk-tr>
        <lynk-tr state="neutral"><lynk-td>Neutral 3</lynk-td></lynk-tr>
        <lynk-tr state="neutral"><lynk-td>Neutral 4</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>Primary 1</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>Primary 2</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>Primary 3</lynk-td></lynk-tr>
        <lynk-tr state="primary"><lynk-td>Primary 4</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>Success 1</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>Success 2</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>Success 3</lynk-td></lynk-tr>
        <lynk-tr state="success"><lynk-td>Success 4</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>Warning 1</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>Warning 2</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>Warning 3</lynk-td></lynk-tr>
        <lynk-tr state="warning"><lynk-td>Warning 4</lynk-td></lynk-tr>
    </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-tr]

## Slots

Similar to the `<tr>` HTML element, `<lynk-tr>` elements are designed to contain zero or more `<lynk-td>` and/or `<lynk-th>` elements.