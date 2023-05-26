# Stack

[component-header:lynk-stack]

Stack's use [CSS's Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.

```html preview
<lynk-stack>
  <div>First Item</div>
  <div>Second Item</div>
  <div>Third Item</div>
</lynk-stack>
```

## Examples

### Vertical Stacks

```html preview
<lynk-stack>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">First Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Second Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Third Item</lynk-box>
</lynk-stack>
```

Adjust spacing between using `gap` property.

```html preview
<lynk-stack gap="var(--lynk-spacing-base)">
  <lynk-box style="--background: var(--lynk-color-neutral-100);">First Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Second Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Third Item</lynk-box>
</lynk-stack>
<lynk-divider style="--spacing: var(--lynk-spacing-large);"></lynk-divider>
<lynk-stack gap="16px">
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Fourth Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Fifth Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Sixth Item</lynk-box>
</lynk-stack>
```

Reverse stack order using `reverse` attribute

```html preview
<lynk-stack reverse>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">First Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Second Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Third Item</lynk-box>
</lynk-stack>
```

Use the `justify`, and `align` properties to arrange your vertical stack.

```html preview
<lynk-stack class="test-v-stack" style="--height: 200px;">
  <lynk-box style="--background: var(--lynk-color-neutral-100);">First Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Second Item</lynk-box>
  <lynk-box style="--background: var(--lynk-color-neutral-100);">Third Item</lynk-box>
</lynk-stack>

<lynk-grid container class="v-stack-options">
  <lynk-grid item>
    <lynk-radio-group label="Justify" name="justify">
      <lynk-radio value="start">Start</lynk-radio>
      <lynk-radio value="center">Center</lynk-radio>
      <lynk-radio value="end">End</lynk-radio>
      <lynk-radio value="between">Between</lynk-radio>
      <lynk-radio value="around">Around</lynk-radio>
      <lynk-radio value="evenly">Evenly</lynk-radio>
    </lynk-radio-group>
  </lynk-grid>
  <lynk-grid item>
    <lynk-radio-group label="Align" name="align">
      <lynk-radio value="start">Start</lynk-radio>
      <lynk-radio value="center">Center</lynk-radio>
      <lynk-radio value="end">End</lynk-radio>
      <lynk-radio value="stretch">Stretch</lynk-radio>
      <lynk-radio value="baseline">Baseline</lynk-radio>
    </lynk-radio-group>
  </lynk-grid>
</lynk-grid>

<script>
  const stack = document.querySelector('.test-v-stack');
  const options = document.querySelectorAll('.v-stack-options lynk-radio-group');

  options.forEach(function (option) {
    option.addEventListener('on:change', event => {
      stack.setAttribute(event.target.name, event.target.value);
    });
  });
</script>
```

### Horizontal Stacks

```html preview
<lynk-stack horizontal>
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-small);"
    >First Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-medium);"
    >Second Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-large);"
    >Third Item</lynk-box
  >
</lynk-stack>
```

Wrap the stack using the `wrap` attribute

```html preview
<lynk-stack horizontal wrap>
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-small);"
    >First Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-medium);"
    >Second Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-large);"
    >Fourth Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-medium);"
    >Fifth Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-large);"
    >Sixth Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-medium);"
    >Seventh Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-large);"
    >Eighth Item</lynk-box
  >
</lynk-stack>
```


Reverse stack order using `reverse` attribute

```html preview
<lynk-stack horizontal reverse>
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-small);"
    >First Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-medium);"
    >Second Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-large);"
    >Third Item</lynk-box
  >
</lynk-stack>
```

Use the `justify`, and `align` properties to arrange your horizontal stack.

```html preview
<lynk-stack horizontal class="test-h-stack">
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-small);"
    >First Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-medium);"
    >Second Item</lynk-box
  >
  <lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-large);"
    >Third Item</lynk-box
  >
</lynk-stack>

<lynk-grid container class="h-stack-options">
  <lynk-grid item>
    <lynk-radio-group label="Justify" name="justify">
      <lynk-radio value="start">Start</lynk-radio>
      <lynk-radio value="center">Center</lynk-radio>
      <lynk-radio value="end">End</lynk-radio>
      <lynk-radio value="between">Between</lynk-radio>
      <lynk-radio value="around">Around</lynk-radio>
      <lynk-radio value="evenly">Evenly</lynk-radio>
    </lynk-radio-group>
  </lynk-grid>
  <lynk-grid item>
    <lynk-radio-group label="Align" name="align">
      <lynk-radio value="start">Start</lynk-radio>
      <lynk-radio value="center">Center</lynk-radio>
      <lynk-radio value="end">End</lynk-radio>
      <lynk-radio value="stretch">Stretch</lynk-radio>
      <lynk-radio value="baseline">Baseline</lynk-radio>
    </lynk-radio-group>
  </lynk-grid>
</lynk-grid>

<script>
  const stack = document.querySelector('.test-h-stack');
  const options = document.querySelectorAll('.h-stack-options lynk-radio-group');

  options.forEach(function (option) {
    option.addEventListener('on:change', event => {
      stack.setAttribute(event.target.name, event.target.value);
    });
  });
</script>
```

[component-metadata:lynk-stack]
