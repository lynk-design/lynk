# Badge

[component-header:lynk-badge]

```html preview
<lynk-badge>Badge</lynk-badge>
```

## Examples

### Types

Set the `type` attribute to change the badge's type.

```html preview
<lynk-badge type="primary">Primary</lynk-badge>
<lynk-badge type="success">Success</lynk-badge>
<lynk-badge type="neutral">Neutral</lynk-badge>
<lynk-badge type="warning">Warning</lynk-badge>
<lynk-badge type="danger">Danger</lynk-badge>
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<lynk-badge type="primary" pill>Primary</lynk-badge>
<lynk-badge type="success" pill>Success</lynk-badge>
<lynk-badge type="neutral" pill>Neutral</lynk-badge>
<lynk-badge type="warning" pill>Warning</lynk-badge>
<lynk-badge type="danger" pill>Danger</lynk-badge>
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <lynk-badge type="primary" pill pulse>1</lynk-badge>
  <lynk-badge type="success" pill pulse>1</lynk-badge>
  <lynk-badge type="neutral" pill pulse>1</lynk-badge>
  <lynk-badge type="warning" pill pulse>1</lynk-badge>
  <lynk-badge type="danger" pill pulse>1</lynk-badge>
</div>

<style>
  .badge-pulse lynk-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<lynk-button>
  Requests
  <lynk-badge pill>30</lynk-badge>
</lynk-button>

<lynk-button style="margin-inline-start: 1rem;">
  Warnings
  <lynk-badge type="warning" pill>8</lynk-badge>
</lynk-button>

<lynk-button style="margin-inline-start: 1rem;">
  Errors
  <lynk-badge type="danger" pill>6</lynk-badge>
</lynk-button>
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<lynk-menu style="max-width: 240px;">
  <lynk-menu-label>Messages</lynk-menu-label>
  <lynk-menu-item>Comments <lynk-badge slot="suffix" type="primary" pill>4</lynk-badge></lynk-menu-item>
  <lynk-menu-item>Replies <lynk-badge slot="suffix" type="primary" pill>12</lynk-badge></lynk-menu-item>
</lynk-menu>
```

[component-metadata:lynk-badge]
