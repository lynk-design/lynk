# Grid

[component-header:lynk-grid]

The `Grid` creates visual consistency between layouts while allowing flexibility across a wide variety of designs. It uses [CSS's Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.

```html preview
<lynk-grid>
  <lynk-grid-item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">"Welcome to, the grid!"</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">- Jeff Bridges</lynk-box>
  </lynk-grid-item>
</lynk-grid>
```

Lynk's grid is based on a typical 12-column grid layout. Passing in a `span` value between 1 and 12 determines the width of the Grid Item.

```html preview
<lynk-grid>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="1">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="3">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">3</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="3">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">3</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="3">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">3</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="3">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">3</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="8">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">8</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="4">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">4</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="6">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">6</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="6">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">6</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item span="12">
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small);">12</lynk-box>
  </lynk-grid-item>
</lynk-grid>
```

Use the direction, justify, and align properties to arrange your grid.

```html preview
<lynk-grid class="test-grid">
  <lynk-grid-item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-small); ">Cell 1</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-medium); ">Cell 2</lynk-box>
  </lynk-grid-item>
  <lynk-grid-item>
    <lynk-box style="--background: var(--lynk-color-neutral-100); --text-align: center; --padding: var(--lynk-spacing-large); ">Cell 3</lynk-box>
  </lynk-grid-item>
</lynk-grid>


<lynk-grid>
  <lynk-grid-item>
    <lynk-radio-group label="Direction" fieldset>
      <lynk-radio name="direction" value="row">Row (Default)</lynk-radio>
      <lynk-radio name="direction" value="row-reverse">Row-Reverse</lynk-radio>
      <lynk-radio name="direction" value="column">Column</lynk-radio>
      <lynk-radio name="direction" value="column-reverse">Column-Reverse</lynk-radio>
    </lynk-radio-group>
  </lynk-grid-item>
  <lynk-grid-item>
    <lynk-radio-group label="Justify" fieldset>
      <lynk-radio name="justify" value="start">Start</lynk-radio>
      <lynk-radio name="justify" value="center">Center</lynk-radio>
      <lynk-radio name="justify" value="end">End</lynk-radio>
      <lynk-radio name="justify" value="between">Between</lynk-radio>
      <lynk-radio name="justify" value="around">Around</lynk-radio>
      <lynk-radio name="justify" value="evenly">Evenly</lynk-radio>
    </lynk-radio-group>
  </lynk-grid-item>
  <lynk-grid-item>
    <lynk-radio-group label="Align" fieldset>
      <lynk-radio name="align" value="start">Start</lynk-radio>
      <lynk-radio name="align" value="center">Center</lynk-radio>
      <lynk-radio name="align" value="end">End</lynk-radio>
      <lynk-radio name="align" value="stretch">Stretch</lynk-radio>
      <lynk-radio name="align" value="baseline">Baseline</lynk-radio>
    </lynk-radio-group>
  </lynk-grid-item>
</lynk-grid>


<script>
  const grid = document.querySelector('.test-grid');
  const options = document.querySelectorAll('lynk-radio');

  options.forEach(function(option) {
    option.addEventListener('lynk-change', event => {
      if(event.target.checked){
        grid.setAttribute(event.target.name, event.target.value);
      }
    });
  });
</script>
```

[component-metadata:lynk-grid]
