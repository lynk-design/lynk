# Table Cell

[component-header:lynk-td]

These elements are intended to behave like `<td>` HTML elements.

```html preview
<lynk-table>
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

```html preview
<lynk-table>
    <lynk-tbody>
        <lynk-tr>
            <lynk-td state="danger">Danger</lynk-td>
            <lynk-td state="primary">Primary</lynk-td>
            <lynk-td state="success">Success</lynk-td>
            <lynk-td state="warning">Warning</lynk-td>
        </lynk-tr>
    </lynk-tbody>
</lynk-table>
```

[component-metadata:lynk-td]
