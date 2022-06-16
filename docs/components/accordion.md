<!-- cspell:dictionaries lorem-ipsum -->

# Accordion

[component-header:lynk-accordion]

The Accordion single shows a brief summary and expands on click to show additional content.

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

### Grouping Accordions

Accordions are designed to function independently, but you can group multiple Accordion components where only one is shown at a time by listening for the `lynk-show` event.

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
  container.addEventListener('lynk-show', event => {
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
