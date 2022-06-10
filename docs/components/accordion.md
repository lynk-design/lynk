<!-- cspell:dictionaries lorem-ipsum -->

# Accordion

[component-header:l-accordion]

The Accordion single shows a brief summary and expands on click to show additional content.

```html preview
<l-accordion summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</l-accordion>
```

## Examples

### Disabled

Use the `disable` attribute to prevent the Accordion from expanding.

```html preview
<l-accordion summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</l-accordion>
```

### Grouping Accordions

Accordions are designed to function independently, but you can group multiple Accordion components where only one is shown at a time by listening for the `le-show` event.

```html preview
<div class="accordion-group-example">
  <l-accordion summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </l-accordion>

  <l-accordion summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </l-accordion>

  <l-accordion summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </l-accordion>
</div>

<script>
  const container = document.querySelector('.accordion-group-example');

  // Close all other details when one is shown
  container.addEventListener('le-show', event => {
    [...container.querySelectorAll('l-accordion')].map(accordion => (accordion.open = event.target === accordion));
  });
</script>

<style>
  .accordion-group-example l-accordion:not(:last-of-type) {
    margin-bottom: var(--l-spacing-2x-small);
  }
</style>
```

[component-metadata:l-accordion]
