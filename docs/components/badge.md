# Badge

[component-header:l-badge]

Badges are used to draw attention and display statuses or counts.

```html preview
<l-badge>Badge</l-badge>
```

```jsx react
import { LynkBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => <LynkBadge>Badge</LynkBadge>;
```

## Examples

### Types

Set the `type` attribute to change the badge's type.

```html preview
<l-badge type="primary">Primary</l-badge>
<l-badge type="success">Success</l-badge>
<l-badge type="neutral">Neutral</l-badge>
<l-badge type="warning">Warning</l-badge>
<l-badge type="danger">Danger</l-badge>
```

```jsx react
import { LynkBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <LynkBadge type="primary">Primary</LynkBadge>
    <LynkBadge type="success">Success</LynkBadge>
    <LynkBadge type="neutral">Neutral</LynkBadge>
    <LynkBadge type="warning">Warning</LynkBadge>
    <LynkBadge type="danger">Danger</LynkBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<l-badge type="primary" pill>Primary</l-badge>
<l-badge type="success" pill>Success</l-badge>
<l-badge type="neutral" pill>Neutral</l-badge>
<l-badge type="warning" pill>Warning</l-badge>
<l-badge type="danger" pill>Danger</l-badge>
```

```jsx react
import { LynkBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <LynkBadge type="primary" pill>
      Primary
    </LynkBadge>
    <LynkBadge type="success" pill>
      Success
    </LynkBadge>
    <LynkBadge type="neutral" pill>
      Neutral
    </LynkBadge>
    <LynkBadge type="warning" pill>
      Warning
    </LynkBadge>
    <LynkBadge type="danger" pill>
      Danger
    </LynkBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <l-badge type="primary" pill pulse>1</l-badge>
  <l-badge type="success" pill pulse>1</l-badge>
  <l-badge type="neutral" pill pulse>1</l-badge>
  <l-badge type="warning" pill pulse>1</l-badge>
  <l-badge type="danger" pill pulse>1</l-badge>
</div>

<style>
  .badge-pulse l-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { LynkBadge } from '@shoelace-style/shoelace/dist/react';

const css = `
  .badge-pulse l-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <LynkBadge type="primary" pill pulse>
        1
      </LynkBadge>
      <LynkBadge type="success" pill pulse>
        1
      </LynkBadge>
      <LynkBadge type="neutral" pill pulse>
        1
      </LynkBadge>
      <LynkBadge type="warning" pill pulse>
        1
      </LynkBadge>
      <LynkBadge type="danger" pill pulse>
        1
      </LynkBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<l-button>
  Requests
  <l-badge pill>30</l-badge>
</l-button>

<l-button style="margin-inline-start: 1rem;">
  Warnings
  <l-badge type="warning" pill>8</l-badge>
</l-button>

<l-button style="margin-inline-start: 1rem;">
  Errors
  <l-badge type="danger" pill>6</l-badge>
</l-button>
```

```jsx react
import { LynkBadge, LynkButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <LynkButton>
      Requests
      <LynkBadge pill>30</LynkBadge>
    </LynkButton>

    <LynkButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <LynkBadge type="warning" pill>
        8
      </LynkBadge>
    </LynkButton>

    <LynkButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <LynkBadge type="danger" pill>
        6
      </LynkBadge>
    </LynkButton>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<l-menu style="max-width: 240px;">
  <l-menu-label>Messages</l-menu-label>
  <l-menu-item>Comments <l-badge slot="suffix" type="neutral" pill>4</l-badge></l-menu-item>
  <l-menu-item>Replies <l-badge slot="suffix" type="neutral" pill>12</l-badge></l-menu-item>
</l-menu>
```

```jsx react
import { LynkBadge, LynkButton, LynkMenu, LynkMenuItem, LynkMenuLabel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <LynkMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--l-panel-border-color)',
      borderRadius: 'var(--l-border-radius-medium)'
    }}
  >
    <LynkMenuLabel>Messages</LynkMenuLabel>
    <LynkMenuItem>
      Comments
      <LynkBadge slot="suffix" type="neutral" pill>
        4
      </LynkBadge>
    </LynkMenuItem>
    <LynkMenuItem>
      Replies
      <LynkBadge slot="suffix" type="neutral" pill>
        12
      </LynkBadge>
    </LynkMenuItem>
  </LynkMenu>
);
```

[component-metadata:l-badge]
