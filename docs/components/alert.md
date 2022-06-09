# Alert

[component-header:l-alert]

Alerts are used to display important messages inline or as toast notifications.

```html preview
<l-alert open>
  <l-icon slot="icon" name="info-circle"></l-icon>
  This is a standard alert. Add the <code>open</code> attribute to make it visible.
</l-alert>
```

```jsx react
import { SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlAlert open>
    <SlIcon slot="icon" name="info-circle" />
    This is a standard alert. Add the `open` attribute to make it visible.
  </SlAlert>
);
```
## Examples

### Types

Set the `type` attribute to change the alert's color.

```html preview
<l-alert type="primary" open>
  <l-icon slot="icon" name="info-circle"></l-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</l-alert>

<br />

<l-alert type="success" open>
  <l-icon slot="icon" name="check2-circle"></l-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</l-alert>

<br />

<l-alert type="neutral" open>
  <l-icon slot="icon" name="gear"></l-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</l-alert>

<br />

<l-alert type="warning" open>
  <l-icon slot="icon" name="exclamation-triangle"></l-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</l-alert>

<br />

<l-alert type="danger" open>
  <l-icon slot="icon" name="exclamation-octagon"></l-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</l-alert>
```

```jsx react
import { SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlAlert type="primary" open>
      <SlIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </SlAlert>

    <br />

    <SlAlert type="success" open>
      <SlIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </SlAlert>

    <br />

    <SlAlert type="neutral" open>
      <SlIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </SlAlert>

    <br />

    <SlAlert type="warning" open>
      <SlIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </SlAlert>

    <br />

    <SlAlert type="danger" open>
      <SlIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </SlAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<l-alert type="primary" open closable class="alert-closable">
  <l-icon slot="icon" name="info-circle"></l-icon>
  You can close this alert any time!
</l-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('l-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <SlAlert open={open} closable onSlAfterHide={handleHide}>
      <SlIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </SlAlert>
  );
};
```

### Sans Icon

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html preview
<l-alert type="primary" open> Nothing fancy here, just a simple alert. </l-alert>
```

```jsx react
import { SlAlert } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlAlert type="primary" open>
    Nothing fancy here, just a simple alert.
  </SlAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <l-button type="primary">Show Alert</l-button>

  <l-alert type="primary" duration="3000" closable>
    <l-icon slot="icon" name="info-circle"></l-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </l-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('l-button');
  const alert = container.querySelector('l-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration l-alert {
    margin-top: var(--l-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import { SlAlert, SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

const css = `
  .alert-duration l-alert {
    margin-top: var(--l-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <SlButton type="primary" onClick={() => setOpen(true)}>
          Show Alert
        </SlButton>

        <SlAlert type="primary" duration="3000" open={open} closable onSlAfterHide={() => setOpen(false)}>
          <SlIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </SlAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Toast Alerts


To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <l-button type="primary">Primary</l-button>
  <l-button type="success">Success</l-button>
  <l-button type="neutral">Neutral</l-button>
  <l-button type="warning">Warning</l-button>
  <l-button type="danger">Danger</l-button>

  <l-alert type="primary" duration="3000" closable>
    <l-icon slot="icon" name="info-circle"></l-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </l-alert>

  <l-alert type="success" duration="3000" closable>
    <l-icon slot="icon" name="check2-circle"></l-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </l-alert>

  <l-alert type="neutral" duration="3000" closable>
    <l-icon slot="icon" name="gear"></l-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </l-alert>

  <l-alert type="warning" duration="3000" closable>
    <l-icon slot="icon" name="exclamation-triangle"></l-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </l-alert>

  <l-alert type="danger" duration="3000" closable>
    <l-icon slot="icon" name="exclamation-octagon"></l-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </l-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(type => {
    const button = container.querySelector(`l-button[type="${type}"]`);
    const alert = container.querySelector(`l-alert[type="${type}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import { SlAlert, SlButton, SlIcon } from '@shoelace-style/shoelace/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <SlButton type="primary" onClick={() => primary.current.toast()}>
        Primary
      </SlButton>

      <SlButton type="success" onClick={() => success.current.toast()}>
        Success
      </SlButton>

      <SlButton type="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </SlButton>

      <SlButton type="warning" onClick={() => warning.current.toast()}>
        Warning
      </SlButton>

      <SlButton type="danger" onClick={() => danger.current.toast()}>
        Danger
      </SlButton>

      <SlAlert ref={primary} type="primary" duration="3000" closable>
        <SlIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </SlAlert>

      <SlAlert ref={success} type="success" duration="3000" closable>
        <SlIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </SlAlert>

      <SlAlert ref={neutral} type="neutral" duration="3000" closable>
        <SlIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </SlAlert>

      <SlAlert ref={warning} type="warning" duration="3000" closable>
        <SlIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </SlAlert>

      <SlAlert ref={danger} type="danger" duration="3000" closable>
        <SlIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </SlAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <l-button type="primary">Create Toast</l-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('l-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, type = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('l-alert'), {
      type,
      closable: true,
      duration: duration,
      innerHTML: `
        <l-icon name="${icon}" slot="icon"></l-icon>
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

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.l-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.l-toast-stack {
  left: 0;
  right: auto;
}
```

<l-alert open>By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.</l-alert>

[component-metadata:l-alert]
