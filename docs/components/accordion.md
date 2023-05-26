<!-- cspell:dictionaries lorem-ipsum -->

# Accordion

[component-header:lynk-accordion]

```html preview
<lynk-accordion summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-accordion>
```

## Examples

### Disabled

Use the `disable` attribute to prevent the Accordion from expanding.

```html preview
<lynk-accordion summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-accordion>
```

### Prefix & Suffix

Use the `prefix` and `suffix` slots to add additional controls to the accordion header.

```html preview
<lynk-accordion summary="Encoding Profile">
  <lynk-checkbox slot="prefix" checked></lynk-checkbox>
  <lynk-button slot="suffix" square size="small"><lynk-icon name="three-dots-vertical"></lynk-icon></lynk-button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-accordion>
```

### Footer

Use the `footer` slots to add additional controls to the accordion body that are only visible when the accordion is open.

```html preview
<lynk-accordion summary="Encoding Profile">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <lynk-button color="primary" slot="footer">Save</lynk-button>
</lynk-accordion>
```

### Grouping Accordions

Accordions are designed to function independently, but you can group multiple Accordion components where only one is shown at a time by listening for the `on:show` event.

```html preview
<div class="accordion-group-example">
  <lynk-accordion summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </lynk-accordion>

  <lynk-accordion summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </lynk-accordion>

  <lynk-accordion summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </lynk-accordion>
</div>

<script>
  const container = document.querySelector('.accordion-group-example');

  // Close all other details when one is shown
  container.addEventListener('on:show', event => {
    [...container.querySelectorAll('lynk-accordion')].map(accordion => (accordion.open = event.target === accordion));
  });
</script>

<style>
  .accordion-group-example lynk-accordion:not(:last-of-type) {
    margin-bottom: var(--lynk-spacing-2x-small);
  }
</style>
```

[component-metadata:lynk-accordion]
