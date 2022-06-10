# Badge

[component-header:l-badge]

Badges are used to draw attention and display statuses or counts.

```html preview
<l-badge>Badge</l-badge>
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

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<l-badge type="primary" pill>Primary</l-badge>
<l-badge type="success" pill>Success</l-badge>
<l-badge type="neutral" pill>Neutral</l-badge>
<l-badge type="warning" pill>Warning</l-badge>
<l-badge type="danger" pill>Danger</l-badge>
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

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<l-menu style="max-width: 240px;">
  <l-menu-label>Messages</l-menu-label>
  <l-menu-item>Comments <l-badge slot="suffix" type="primary" pill>4</l-badge></l-menu-item>
  <l-menu-item>Replies <l-badge slot="suffix" type="primary" pill>12</l-badge></l-menu-item>
</l-menu>
```

[component-metadata:l-badge]
