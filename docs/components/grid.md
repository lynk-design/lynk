# Grid

[component-header:lynk-grid]

The Grid component helps create visual consistency and structure between layouts while allowing flexibility across a wide variety of designs. It uses [CSS's Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.

There are two required parts to a grid layout: `<lynk-grid container>` and `<lynk-grid item>`.

```html preview
<lynk-grid container>
  <lynk-grid item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">"Welcome to, the grid!"</lynk-box>
  </lynk-grid>
  <lynk-grid item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">- Jeff Bridges</lynk-box>
  </lynk-grid>
</lynk-grid>
```

Lynk's grid uses a breakpoint based 4, 8, and 12-column layout. Passing in a `span='1|2|3|4|5|6|7|8|9|10|11|12'` value determines the width of the Grid Item based on the maximum number of columns for that breakpoint.

- The 4 column breakpoint is any viewport smaller than `768px`.
- The 8 column viewport breakpoint starts at `768px` and ends at `1024px`.
- The 12 column breakpoint is any viewport larger than `1024px`.


```html preview
<lynk-grid container>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid>
  <lynk-grid item span="2">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">2</lynk-box>
  </lynk-grid>
  <lynk-grid item span="2">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">2</lynk-box>
  </lynk-grid>
  <lynk-grid item span="3">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">3</lynk-box>
  </lynk-grid>
  <lynk-grid item span="3">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">3</lynk-box>
  </lynk-grid>
  <lynk-grid item span="6">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">6</lynk-box>
  </lynk-grid>
  <lynk-grid item span="4">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">4</lynk-box>
  </lynk-grid>
  <lynk-grid item span="8">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">8</lynk-box>
  </lynk-grid>
  <lynk-grid item span="100">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">12</lynk-box>
  </lynk-grid>
</lynk-grid>
```

Use the direction, justify, and align properties to arrange your grid.

```html preview
<lynk-grid container class="test-grid" style="--height: 320px;">
  <lynk-grid item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small); ">Cell 1</lynk-box>
  </lynk-grid>
  <lynk-grid item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-medium); ">Cell 2</lynk-box>
  </lynk-grid>
  <lynk-grid item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-large); ">Cell 3</lynk-box>
  </lynk-grid>
</lynk-grid>

<lynk-grid container>
  <lynk-grid item>
    <lynk-radio-group label="Direction" name="direction" value="row">
      <lynk-radio value="row">Row</lynk-radio>
      <lynk-radio value="row-reverse">Row-Reverse</lynk-radio>
      <lynk-radio value="column">Column</lynk-radio>
      <lynk-radio value="column-reverse">Column-Reverse</lynk-radio>
    </lynk-radio-group>
  </lynk-grid>
  <lynk-grid item>
    <lynk-radio-group label="Justify" name="justify" value="start">
      <lynk-radio value="start">Start</lynk-radio>
      <lynk-radio value="center">Center</lynk-radio>
      <lynk-radio value="end">End</lynk-radio>
      <lynk-radio value="between">Between</lynk-radio>
      <lynk-radio value="around">Around</lynk-radio>
      <lynk-radio value="evenly">Evenly</lynk-radio>
    </lynk-radio-group>
  </lynk-grid>
  <lynk-grid item>
    <lynk-radio-group label="Align" name="align" value="start">
      <lynk-radio value="start">Start</lynk-radio>
      <lynk-radio value="center">Center</lynk-radio>
      <lynk-radio value="end">End</lynk-radio>
      <lynk-radio value="stretch">Stretch</lynk-radio>
      <lynk-radio value="baseline">Baseline</lynk-radio>
    </lynk-radio-group>
  </lynk-grid>
</lynk-grid>

<script>
  const grid = document.querySelector('.test-grid');
  const options = document.querySelectorAll('lynk-radio-group');

  options.forEach(function (option) {
    option.addEventListener('on:change', event => {
      grid.setAttribute(event.target.name, event.target.value);
    });
  });
</script>
```

[component-metadata:lynk-grid]
