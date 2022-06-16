# Progress Ring

[component-header:lynk-progress-ring]

Progress rings are used to show the progress of a determinate operation in a circular fashion.

```html preview
<lynk-progress-ring value="25"></lynk-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html preview
<lynk-progress-ring value="50" style="--size: 200px;"></lynk-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressRing value="50" style={{ '--size': '200px' }} />;
```

### Track Width

Use the `--track-width` custom property to set the width of the progress ring's track.

```html preview
<lynk-progress-ring value="50" style="--track-width: 10px;"></lynk-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressRing value="50" style={{ '--track-width': '10px' }} />;
```

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html preview
<lynk-progress-ring
  value="50"
  style="
    --track-color: pink; 
    --indicator-color: deeppink;
  "
></lynk-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html preview
<lynk-progress-ring value="50" label="Upload progress"></lynk-progress-ring>
```

```jsx react
import { SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html preview
<lynk-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</lynk-progress-ring>

<br />

<lynk-button circle><lynk-icon name="dash" label="Decrease"></lynk-icon></lynk-button>
<lynk-button circle><lynk-icon name="plus" label="Increase"></lynk-icon></lynk-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlIcon, SlProgressRing } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <SlProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </SlProgressRing>

      <br />

      <SlButton circle onClick={() => adjustValue(-10)}>
        <SlIcon name="dash" label="Decrease" />
      </SlButton>

      <SlButton circle onClick={() => adjustValue(10)}>
        <SlIcon name="plus" label="Increase" />
      </SlButton>
    </>
  );
};
```

[component-metadata:lynk-progress-ring]
