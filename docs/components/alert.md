# Alert

[component-header:lynk-alert]

Alerts are used to display important messages inline or as toast notifications.

```html preview
<lynk-alert type="info" open>
  This is a standard alert. Add the <code>open</code> attribute to make it visible.
</lynk-alert>

```

## Examples

### Types

Set the `type` attribute to change the alert's color and default icon.

```html preview
<lynk-alert type="info" open>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</lynk-alert>

<br />

<lynk-alert type="success" open>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</lynk-alert>

<br />

<lynk-alert type="neutral" open>
  <strong>Not sure what this alert means?</strong><br />
  You can learn more about alerts <a>here</a>.
</lynk-alert>

<br />

<lynk-alert type="warning" open>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</lynk-alert>

<br />

<lynk-alert type="danger" open>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</lynk-alert>
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<lynk-alert type="primary" open closable class="alert-closable">
  <lynk-icon slot="icon" name="bell"></lynk-icon>
  You can close this alert any time!
</lynk-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('after:hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

### Custom Alert Actions

Use the `actions` slot to append custom actions to an alert.

```html preview
<lynk-alert type="danger" open>
  <lynk-button size="small" color="danger" stealth slot="action">Revert</lynk-button>
  You just deleted everything!
</lynk-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('after:hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

### Customizing Icons

Icons can be customized using the `icon` slot, or removed by omitting the `type` property.

```html preview
<lynk-alert open>
  <lynk-icon slot="icon" name="app-indicator"></lynk-icon>
  This alert is using a different icon!
</lynk-alert>
<br>
<lynk-alert open>
  This alert doesn't have any icon at all!
</lynk-alert>
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <lynk-button type="primary">Show Alert</lynk-button>

  <lynk-alert type="primary" duration="3000" closable>
    <lynk-icon slot="icon" name="info-circle"></lynk-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </lynk-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('lynk-button');
  const alert = container.querySelector('lynk-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration lynk-alert {
    margin-top: var(--lynk-spacing-medium);
  }
</style>
```

## Toast Alerts

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <lynk-button type="primary">Primary</lynk-button>
  <lynk-button type="success">Success</lynk-button>
  <lynk-button type="neutral">Neutral</lynk-button>
  <lynk-button type="warning">Warning</lynk-button>
  <lynk-button type="danger">Danger</lynk-button>

  <lynk-alert type="primary" duration="3000" closable>
    <lynk-icon slot="icon" name="info-circle"></lynk-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </lynk-alert>

  <lynk-alert type="success" duration="3000" closable>
    <lynk-icon slot="icon" name="check2-circle"></lynk-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </lynk-alert>

  <lynk-alert type="neutral" duration="3000" closable>
    <lynk-icon slot="icon" name="gear"></lynk-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </lynk-alert>

  <lynk-alert type="warning" duration="3000" closable>
    <lynk-icon slot="icon" name="exclamation-triangle"></lynk-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </lynk-alert>

  <lynk-alert type="danger" duration="3000" closable>
    <lynk-icon slot="icon" name="exclamation-octagon"></lynk-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </lynk-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(type => {
    const button = container.querySelector(`lynk-button[type="${type}"]`);
    const alert = container.querySelector(`lynk-alert[type="${type}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <lynk-button type="primary">Create Toast</lynk-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('lynk-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, type = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('lynk-alert'), {
      type,
      closable: true,
      duration: duration,
      innerHTML: `
        <lynk-icon name="${icon}" slot="icon"></lynk-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.lynk-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.lynk-toast-stack {
  left: 0;
  right: auto;
}
```

<lynk-alert type="warning" open>By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.</lynk-alert>

[component-metadata:lynk-alert]
