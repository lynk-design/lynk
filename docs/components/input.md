# Input

[component-header:lynk-input]

Inputs collect data from the user.

```html preview
<lynk-input></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInput />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<lynk-input label="What is your name?"></lynk-input>
```

```jsx react
import { SlIcon, SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<lynk-input label="Nickname" help-text="What would you like people to call you?"></lynk-input>
```

```jsx react
import { SlIcon, SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<lynk-input placeholder="Type something"></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<lynk-input placeholder="Clearable" clearable></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `toggle-password` attribute to add a toggle button that will show the password when activated.

```html preview
<lynk-input type="password" placeholder="Password Toggle" size="small" toggle-password></lynk-input>
<br />
<lynk-input type="password" placeholder="Password Toggle" size="medium" toggle-password></lynk-input>
<br />
<lynk-input type="password" placeholder="Password Toggle" size="large" toggle-password></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlInput type="password" placeholder="Password Toggle" size="small" toggle-password />
    <br />
    <SlInput type="password" placeholder="Password Toggle" size="medium" toggle-password />
    <br />
    <SlInput type="password" placeholder="Password Toggle" size="large" toggle-password />
  </>
);
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<lynk-input placeholder="Type something" filled></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlInput placeholder="Type something" filled />;
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<lynk-input placeholder="Small" size="small" pill></lynk-input>
<br />
<lynk-input placeholder="Medium" size="medium" pill></lynk-input>
<br />
<lynk-input placeholder="Large" size="large" pill></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small" pill />
    <br />
    <SlInput placeholder="Medium" size="medium" pill />
    <br />
    <SlInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<lynk-input type="email" placeholder="Email"></lynk-input>
<br />
<lynk-input type="number" placeholder="Number"></lynk-input>
<br />
<lynk-input type="date" placeholder="Date"></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlInput type="email" placeholder="Email" />
    <br />
    <SlInput type="number" placeholder="Number" />
    <br />
    <SlInput type="date" placeholder="Date" />
  </>
);
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<lynk-input placeholder="Disabled" size="small" disabled></lynk-input>
<br />
<lynk-input placeholder="Disabled" size="medium" disabled></lynk-input>
<br />
<lynk-input placeholder="Disabled" size="large" disabled></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Disabled" size="small" disabled />
    <br />
    <SlInput placeholder="Disabled" size="medium" disabled />
    <br />
    <SlInput placeholder="Disabled" size="large" disabled />
  </>
);
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<lynk-input placeholder="Small" size="small"></lynk-input>
<br />
<lynk-input placeholder="Medium" size="medium"></lynk-input>
<br />
<lynk-input placeholder="Large" size="large"></lynk-input>
```

```jsx react
import { SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small" />
    <br />
    <SlInput placeholder="Medium" size="medium" />
    <br />
    <SlInput placeholder="Large" size="large" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<lynk-input placeholder="Small" size="small">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-input>
<br />
<lynk-input placeholder="Medium" size="medium">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-input>
<br />
<lynk-input placeholder="Large" size="large">
  <lynk-icon name="house" slot="prefix"></lynk-icon>
  <lynk-icon name="chat" slot="suffix"></lynk-icon>
</lynk-input>
```

```jsx react
import { SlIcon, SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlIcon name="chat" slot="suffix"></SlIcon>
    </SlInput>
    <br />
    <SlInput placeholder="Medium" size="medium">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlIcon name="chat" slot="suffix"></SlIcon>
    </SlInput>
    <br />
    <SlInput placeholder="Large" size="large">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlIcon name="chat" slot="suffix"></SlIcon>
    </SlInput>
  </>
);
```

### Customizing Label Position

Use parts to customize the label's position.

```html preview
<lynk-input class="label-on-left" label="Name"></lynk-input><br />
<lynk-input class="label-on-left" label="Email" type="email"></lynk-input>

<style>
  .label-on-left::part(form-control) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .label-on-left::part(form-control-label) {
    flex: 0 0 auto;
    width: 60px;
    text-align: right;
  }

  .label-on-left::part(form-control-input) {
    flex: 1 1 auto;
  }
</style>
```

[component-metadata:lynk-input]
