# Tooltip

[component-header:lynk-tooltip]

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html preview
<lynk-tooltip content="This is a tooltip">
  <lynk-button>Hover Me</lynk-button>
</lynk-tooltip>
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <lynk-tooltip content="top-start" placement="top-start">
      <lynk-button></lynk-button>
    </lynk-tooltip>

    <lynk-tooltip content="top" placement="top">
      <lynk-button></lynk-button>
    </lynk-tooltip>

    <lynk-tooltip content="top-end" placement="top-end">
      <lynk-button></lynk-button>
    </lynk-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <lynk-tooltip content="left-start" placement="left-start">
      <lynk-button></lynk-button>
    </lynk-tooltip>

    <lynk-tooltip content="right-start" placement="right-start">
      <lynk-button></lynk-button>
    </lynk-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <lynk-tooltip content="left" placement="left">
      <lynk-button></lynk-button>
    </lynk-tooltip>

    <lynk-tooltip content="right" placement="right">
      <lynk-button></lynk-button>
    </lynk-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <lynk-tooltip content="left-end" placement="left-end">
      <lynk-button></lynk-button>
    </lynk-tooltip>

    <lynk-tooltip content="right-end" placement="right-end">
      <lynk-button></lynk-button>
    </lynk-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <lynk-tooltip content="bottom-start" placement="bottom-start">
      <lynk-button></lynk-button>
    </lynk-tooltip>

    <lynk-tooltip content="bottom" placement="bottom">
      <lynk-button></lynk-button>
    </lynk-tooltip>

    <lynk-tooltip content="bottom-end" placement="bottom-end">
      <lynk-button></lynk-button>
    </lynk-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example lynk-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) lynk-tooltip:first-child lynk-button,
  .tooltip-placement-example-row:nth-child(5) lynk-tooltip:first-child lynk-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) lynk-tooltip:nth-child(2) lynk-button,
  .tooltip-placement-example-row:nth-child(3) lynk-tooltip:nth-child(2) lynk-button,
  .tooltip-placement-example-row:nth-child(4) lynk-tooltip:nth-child(2) lynk-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html preview
<lynk-tooltip content="Click again to dismiss" trigger="click">
  <lynk-button>Click to Toggle</lynk-button>
</lynk-tooltip>
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html preview
<lynk-button style="margin-right: 4rem;">Toggle Manually</lynk-button>

<lynk-tooltip content="This is an icon!" trigger="manual" class="manual-tooltip">
  <lynk-icon name="person-circle"></lynk-icon>
</lynk-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

### Remove Arrows

You can control the size of tooltip arrows by overriding the `--lynk-tooltip-arrow-size` design token or remove them entirely by adding the 'no-arrow' attribute.

```html preview
  <lynk-tooltip style="--lynk-tooltip-arrow-size: 24px;" content="This is a tooltip with a large arrow.">
    <lynk-button>Above</lynk-button>
  </lynk-tooltip>

  <lynk-tooltip no-arrow content="This is a tooltip with no arrow." placement="bottom">
    <lynk-button>Below</lynk-button>
  </lynk-tooltip>
```

To override it globally, set it in a root block in your stylesheet after the Lynk stylesheet is loaded.

```css
:root {
  --lynk-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html preview
<lynk-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <lynk-button>Hover me</lynk-button>
</lynk-tooltip>
```

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="tooltip-hoist">
  <lynk-tooltip content="This is a tooltip">
    <lynk-button>No Hoist</lynk-button>
  </lynk-tooltip>

  <lynk-tooltip content="This is a tooltip" hoist>
    <lynk-button>Hoist</lynk-button>
  </lynk-tooltip>
</div>

<style>
  .tooltip-hoist {
    border: solid 2px var(--lynk-panel-border-color);
    overflow: hidden;
    padding: var(--lynk-spacing-medium);
    position: relative;
  }
</style>
```

[component-metadata:lynk-tooltip]
