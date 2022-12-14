# Radio Button

[component-header:lynk-radio-button]

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button value="1">Option 1</lynk-radio-button>
  <lynk-radio-button value="2">Option 2</lynk-radio-button>
  <lynk-radio-button value="3">Option 3</lynk-radio-button>
</lynk-radio-group>
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button value="1">Option 1</lynk-radio-button>
  <lynk-radio-button value="2">Option 2</lynk-radio-button>
  <lynk-radio-button value="3">Option 3</lynk-radio-button>
</lynk-radio-group>
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button value="1">Option 1</lynk-radio-button>
  <lynk-radio-button value="2" disabled>Option 2</lynk-radio-button>
  <lynk-radio-button value="3">Option 3</lynk-radio-button>
</lynk-radio-group>
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button size="tiny" value="1">Option 1</lynk-radio-button>
  <lynk-radio-button size="tiny" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button size="tiny" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>

<br />

<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button size="small" value="1">Option 1</lynk-radio-button>
  <lynk-radio-button size="small" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button size="small" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>

<br />

<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button size="medium" value="1">Option 1</lynk-radio-button>
  <lynk-radio-button size="medium" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button size="medium" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>

<br />

<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button size="large" value="1">Option 1</lynk-radio-button>
  <lynk-radio-button size="large" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button size="large" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button pill size="small" value="1">Option 1</lynk-radio-button>
  <lynk-radio-button pill size="small" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button pill size="small" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>

<br />

<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button pill size="medium" value="1">Option 1</lynk-radio-button>
  <lynk-radio-button pill size="medium" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button pill size="medium" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>

<br />

<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button pill size="large" value="1">Option 1</lynk-radio-button>
  <lynk-radio-button pill size="large" value="2">Option 2</lynk-radio-button>
  <lynk-radio-button pill size="large" value="3">Option 3</lynk-radio-button>
</lynk-radio-group>
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<lynk-radio-group label="Select an option" name="a" value="1">
  <lynk-radio-button value="1">
    <lynk-icon slot="prefix" name="archive"></lynk-icon>
    Option 1
  </lynk-radio-button>

  <lynk-radio-button value="2">
    <lynk-icon slot="suffix" name="bag"></lynk-icon>
    Option 2
  </lynk-radio-button>

  <lynk-radio-button value="3">
    <lynk-icon slot="prefix" name="gift"></lynk-icon>
    <lynk-icon slot="suffix" name="cart"></lynk-icon>
    Option 3
  </lynk-radio-button>
</lynk-radio-group>
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html preview
<lynk-radio-group label="Select an option" name="a" value="neutral">
  <lynk-radio-button value="angry">
    <lynk-icon name="emoji-angry" label="Angry"></lynk-icon>
  </lynk-radio-button>

  <lynk-radio-button value="sad">
    <lynk-icon name="emoji-frown" label="Sad"></lynk-icon>
  </lynk-radio-button>

  <lynk-radio-button value="neutral">
    <lynk-icon name="emoji-neutral" label="Neutral"></lynk-icon>
  </lynk-radio-button>

  <lynk-radio-button value="happy">
    <lynk-icon name="emoji-smile" label="Happy"></lynk-icon>
  </lynk-radio-button>

  <lynk-radio-button value="laughing">
    <lynk-icon name="emoji-laughing" label="Laughing"></lynk-icon>
  </lynk-radio-button>
</lynk-radio-group>
```

[component-metadata:lynk-radio-button]
