# Switch

[component-header:l-switch]

Switches allow the user to toggle an option on or off.

```html preview
<l-switch>Switch</l-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlSwitch>Switch</SlSwitch>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<l-switch checked>Checked</l-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlSwitch checked>Checked</SlSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<l-switch disabled>Disabled</l-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlSwitch disabled>Disabled</SlSwitch>;
```

### Custom Size

Use the available custom properties to make the switch a different size.

```html preview
<l-switch style="--width: 80px; --height: 32px; --thumb-size: 26px;">Really big</l-switch>
```

```jsx react
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

[component-metadata:l-switch]
