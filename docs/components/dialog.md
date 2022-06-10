<!-- cspell:dictionaries lorem-ipsum -->

# Dialog

[component-header:l-dialog]

Dialogs or "modals" are elevated workflows above the page and require the user's immediate attention.

```html preview
<l-dialog label="Dialog" class="dialog-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <l-button slot="footer" variant="primary">Close</l-button>
</l-dialog>

<l-button>Open Dialog</l-button>

<script>
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('l-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

## UX Tips

- Use a dialog when you immediately require the user's attention, e.g. confirming a destructive action.
- Always provide an obvious way for the user to dismiss the dialog.
- Don't nest dialogs. It almost always leads to a poor experience for the user.

## Examples

### Custom Width

Use the `--width` custom property to set the dialog's width.

```html preview
<l-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <l-button slot="footer" variant="primary">Close</l-button>
</l-dialog>

<l-button>Open Dialog</l-button>

<script>
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('l-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

### Scrolling

By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html preview
<l-dialog label="Dialog" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--l-color-neutral-200); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <l-button slot="footer" variant="primary">Close</l-button>
</l-dialog>

<l-button>Open Dialog</l-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('l-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

### Preventing the Dialog from Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the <kbd>Escape</kbd> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the `l-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.

You can use `event.detail.source` to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or <kbd>Escape</kbd> to dismiss it.

```html preview
<l-dialog label="Dialog" class="dialog-deny-close">
  This dialog will not close when you click on the overlay.
  <l-button slot="footer" variant="primary">Close</l-button>
</l-dialog>

<l-button>Open Dialog</l-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('l-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  // Prevent the dialog from closing when the user clicks on the overlay
  dialog.addEventListener('l-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });
</script>
```

### Customizing Initial Focus

By default, the dialog's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.

```html preview
<l-dialog label="Dialog" class="dialog-focus">
  <l-input autofocus placeholder="I will have focus when the dialog is opened"></l-input>
  <l-button slot="footer" variant="primary">Close</l-button>
</l-dialog>

<l-button>Open Dialog</l-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('l-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('l-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

<l-alert open>You can further customize initial focus behavior by canceling the `l-initial-focus` event and setting focus yourself inside the event handler.</l-alert>

[component-metadata:l-dialog]
