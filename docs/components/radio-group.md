# Radio Group

[component-header:l-radio-group]

Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.

```html preview
<l-radio-group label="Select an option">
  <l-radio name="option" value="1" checked>Option 1</l-radio>
  <l-radio name="option" value="2">Option 2</l-radio>
  <l-radio name="option" value="3">Option 3</l-radio>
</l-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadio name="option" value="1" checked>
      Option 1
    </SlRadio>
    <SlRadio name="option" value="2">
      Option 2
    </SlRadio>
    <SlRadio name="option" value="3">
      Option 3
    </SlRadio>
  </SlRadioGroup>
);
```

## Examples

### Showing the Label

You can show the fieldset and legend that wraps the radio group using the `fieldset` attribute. If you don't use this option, you should still provide a label so screen readers announce the control correctly.

```html preview
<l-radio-group label="Select an option" fieldset>
  <l-radio name="option" value="1" checked>Option 1</l-radio>
  <l-radio name="option" value="2">Option 2</l-radio>
  <l-radio name="option" value="3">Option 3</l-radio>
</l-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option" fieldset>
    <SlRadio name="option" value="1" checked>
      Option 1
    </SlRadio>
    <SlRadio name="option" value="2">
      Option 2
    </SlRadio>
    <SlRadio name="option" value="3">
      Option 3
    </SlRadio>
  </SlRadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html preview
<l-radio-group label="Select an option">
  <l-radio-button name="option" value="1" checked>Option 1</l-radio-button>
  <l-radio-button name="option" value="2">Option 2</l-radio-button>
  <l-radio-button name="option" value="3">Option 3</l-radio-button>
</l-radio-group>
```

```jsx react
import { SlRadioButton, SlRadioGroup } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadioButton name="option" value="1" checked>
      Option 1
    </SlRadioButton>
    <SlRadioButton name="option" value="2">
      Option 2
    </SlRadioButton>
    <SlRadioButton name="option" value="3">
      Option 3
    </SlRadioButton>
  </SlRadioGroup>
);
```

[component-metadata:l-radio-group]
