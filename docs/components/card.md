# Card

[component-header:lynk-card]

```html preview
<lynk-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />
  <lynk-stack gap="8px">
    <strong>Mittens</strong>
    This kitten is as cute as he is playful. Bring him home today!
    <small>6 weeks old</small>
  </lynk-stack>

  <div slot="footer">
    <lynk-button color="primary" pill>More Info</lynk-button>
  </div>
</lynk-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--sl-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

## Examples

## Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html preview
<lynk-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your content.
</lynk-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

## Card with Header

Headers can be used to display titles and more.

```html preview
<lynk-card class="card-header">
  <div slot="header">
    Header Title
    <lynk-icon-button name="gear" label="Settings"></lynk-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</lynk-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header sl-icon-button {
    font-size: var(--sl-font-size-medium);
  }
</style>
```

## Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html preview
<lynk-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <lynk-button color="primary">Preview</lynk-button>
  </div>
</lynk-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

## Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html preview
<lynk-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</lynk-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

## Interactive Card

Cards can react to hover and click events by adding the `interactive` attribute.

```html preview
<lynk-card class="card-interactive" interactive>
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</lynk-card>

<style>
  .card-interactive {
    max-width: 300px;
  }
</style>

<script>
  const card = document.querySelector('.card-interactive');

  card.addEventListener('click', async event => {
    card.active = !card.active;
  });
</script>
```

## Card States

Cards can be styled with status colors using the `state` property. Accepted values are `primary, danger, warning, success, neutral`.

```html preview
<lynk-stack horizontal>
  <lynk-card state="primary" active>
    This is a primary state card.
  </lynk-card>

  <lynk-card state="danger" active>
    This is a danger state card.
  </lynk-card>

  <lynk-card state="warning" active>
    This is a warning state card.
  </lynk-card>

  <lynk-card state="success" active>
    This is a success state card.
  </lynk-card>

  <lynk-card state="neutral" active>
    This is a neutral state card.
  </lynk-card>

  <lynk-card style="--state-color: fuchsia;" active>
    This is a custom state card.
  </lynk-card>
</lynk-stack>

```


## Card Pulse State

Draw extra visual attention to an active card by adding the `pulse` attribute.

```html preview

<lynk-card state="danger" interactive pulse>
  This is a pulsing danger state card.
</lynk-card>

```

[component-metadata:lynk-card]
