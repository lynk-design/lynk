# Tooltip

[component-header:l-tooltip]

Tooltips display additional information based on a specific action.

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html preview
<l-tooltip content="This is a tooltip">
  <l-button>Hover Me</l-button>
</l-tooltip>
```

```jsx react
import { SlButton, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlTooltip content="This is a tooltip">
    <SlButton>Hover Me</SlButton>
  </SlTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <l-tooltip content="top-start" placement="top-start">
      <l-button></l-button>
    </l-tooltip>

    <l-tooltip content="top" placement="top">
      <l-button></l-button>
    </l-tooltip>

    <l-tooltip content="top-end" placement="top-end">
      <l-button></l-button>
    </l-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <l-tooltip content="left-start" placement="left-start">
      <l-button></l-button>
    </l-tooltip>

    <l-tooltip content="right-start" placement="right-start">
      <l-button></l-button>
    </l-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <l-tooltip content="left" placement="left">
      <l-button></l-button>
    </l-tooltip>

    <l-tooltip content="right" placement="right">
      <l-button></l-button>
    </l-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <l-tooltip content="left-end" placement="left-end">
      <l-button></l-button>
    </l-tooltip>

    <l-tooltip content="right-end" placement="right-end">
      <l-button></l-button>
    </l-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <l-tooltip content="bottom-start" placement="bottom-start">
      <l-button></l-button>
    </l-tooltip>

    <l-tooltip content="bottom" placement="bottom">
      <l-button></l-button>
    </l-tooltip>

    <l-tooltip content="bottom-end" placement="bottom-end">
      <l-button></l-button>
    </l-tooltip>
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

  .tooltip-placement-example l-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) l-tooltip:first-child l-button,
  .tooltip-placement-example-row:nth-child(5) l-tooltip:first-child l-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) l-tooltip:nth-child(2) l-button,
  .tooltip-placement-example-row:nth-child(3) l-tooltip:nth-child(2) l-button,
  .tooltip-placement-example-row:nth-child(4) l-tooltip:nth-child(2) l-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx react
import { SlButton, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example l-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) l-tooltip:first-child l-button,
  .tooltip-placement-example-row:nth-child(5) l-tooltip:first-child l-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) l-tooltip:nth-child(2) l-button,
  .tooltip-placement-example-row:nth-child(3) l-tooltip:nth-child(2) l-button,
  .tooltip-placement-example-row:nth-child(4) l-tooltip:nth-child(2) l-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <SlTooltip content="top-start" placement="top-start">
          <SlButton />
        </SlTooltip>

        <SlTooltip content="top" placement="top">
          <SlButton />
        </SlTooltip>

        <SlTooltip content="top-end" placement="top-end">
          <SlButton />
        </SlTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <SlTooltip content="left-start" placement="left-start">
          <SlButton />
        </SlTooltip>

        <SlTooltip content="right-start" placement="right-start">
          <SlButton />
        </SlTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <SlTooltip content="left" placement="left">
          <SlButton />
        </SlTooltip>

        <SlTooltip content="right" placement="right">
          <SlButton />
        </SlTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <SlTooltip content="left-end" placement="left-end">
          <SlButton />
        </SlTooltip>

        <SlTooltip content="right-end" placement="right-end">
          <SlButton />
        </SlTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <SlTooltip content="bottom-start" placement="bottom-start">
          <SlButton />
        </SlTooltip>

        <SlTooltip content="bottom" placement="bottom">
          <SlButton />
        </SlTooltip>

        <SlTooltip content="bottom-end" placement="bottom-end">
          <SlButton />
        </SlTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html preview
<l-tooltip content="Click again to dismiss" trigger="click">
  <l-button>Click to Toggle</l-button>
</l-tooltip>
```

```jsx react
import { SlButton, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlTooltip content="Click again to dismiss" trigger="click">
    <SlButton>Click to Toggle</SlButton>
  </SlTooltip>
);
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html preview
<l-button style="margin-right: 4rem;">Toggle Manually</l-button>

<l-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <l-avatar label="User"></l-avatar>
</l-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

```jsx react
import { useState } from 'react';
import { SlAvatar, SlButton, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </SlButton>

      <SlTooltip open={open} content="This is an avatar" trigger="manual">
        <SlAvatar />
      </SlTooltip>
    </>
  );
};
```

### Remove Arrows

You can control the size of tooltip arrows by overriding the `--l-tooltip-arrow-size` design token.

```html preview
<div style="--l-tooltip-arrow-size: 0;">
  <l-tooltip content="This is a tooltip">
    <l-button>Above</l-button>
  </l-tooltip>

  <l-tooltip content="This is a tooltip" placement="bottom">
    <l-button>Below</l-button>
  </l-tooltip>
</div>
```

```jsx react
import { SlButton, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <div style={{ '--l-tooltip-arrow-size': '0' }}>
    <SlTooltip content="This is a tooltip">
      <SlButton>Above</SlButton>
    </SlTooltip>

    <SlTooltip content="This is a tooltip" placement="bottom">
      <SlButton>Below</SlButton>
    </SlTooltip>
  </div>
);
```

To override it globally, set it in a root block in your stylesheet after the Shoelace stylesheet is loaded.

```css
:root {
  --l-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html preview
<l-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <l-button>Hover me</l-button>
</l-tooltip>
```

```jsx react
import { SlButton, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlTooltip content="This is a tooltip">
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <SlButton>Hover Me</SlButton>
  </SlTooltip>
);
```

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="tooltip-hoist">
  <l-tooltip content="This is a tooltip">
    <l-button>No Hoist</l-button>
  </l-tooltip>

  <l-tooltip content="This is a tooltip" hoist>
    <l-button>Hoist</l-button>
  </l-tooltip>
</div>

<style>
  .tooltip-hoist {
    border: solid 2px var(--l-panel-border-color);
    overflow: hidden;
    padding: var(--l-spacing-medium);
    position: relative;
  }
</style>
```

```jsx react
import { SlButton, SlTooltip } from '@shoelace-style/shoelace/dist/react';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--l-panel-border-color);
    overflow: hidden;
    padding: var(--l-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <SlTooltip content="This is a tooltip">
        <SlButton>No Hoist</SlButton>
      </SlTooltip>

      <SlTooltip content="This is a tooltip" hoist>
        <SlButton>Hoist</SlButton>
      </SlTooltip>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:l-tooltip]
