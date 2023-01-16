# Option

[component-header:lynk-option]

```html preview
<lynk-select label="Select one">
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2">Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html preview
<lynk-select label="Select one">
  <lynk-option value="option-1">Option 1</lynk-option>
  <lynk-option value="option-2" disabled>Option 2</lynk-option>
  <lynk-option value="option-3">Option 3</lynk-option>
</lynk-select>
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<lynk-select label="Select one">
  <lynk-option value="option-1">
    <lynk-icon slot="prefix" name="envelope"></lynk-icon>
    Email
    <lynk-icon slot="suffix" name="patch-check"></lynk-icon>
  </lynk-option>

  <lynk-option value="option-2">
    <lynk-icon slot="prefix" name="telephone"></lynk-icon>
    Phone
    <lynk-icon slot="suffix" name="patch-check"></lynk-icon>
  </lynk-option>

  <lynk-option value="option-3">
    <lynk-icon slot="prefix" name="chat-dots"></lynk-icon>
    Chat
    <lynk-icon slot="suffix" name="patch-check"></lynk-icon>
  </lynk-option>
</lynk-select>
```

[component-metadata:lynk-option]
