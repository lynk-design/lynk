# Format Number

[component-header:l-format-number]

Formats a number using the specified locale and options.

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <l-format-number value="1000"></l-format-number>
  <br /><br />
  <l-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></l-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('l-format-number');
  const input = container.querySelector('l-input');

  input.addEventListener('l-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { SlFormatNumber, SlInput } from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <SlFormatNumber value={value} />
      <br />
      <br />
      <SlInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onSlInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<l-format-number type="percent" value="0"></l-format-number><br />
<l-format-number type="percent" value="0.25"></l-format-number><br />
<l-format-number type="percent" value="0.50"></l-format-number><br />
<l-format-number type="percent" value="0.75"></l-format-number><br />
<l-format-number type="percent" value="1"></l-format-number>
```

```jsx react
import { SlFormatNumber } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatNumber type="percent" value={0} />
    <br />
    <SlFormatNumber type="percent" value={0.25} />
    <br />
    <SlFormatNumber type="percent" value={0.5} />
    <br />
    <SlFormatNumber type="percent" value={0.75} />
    <br />
    <SlFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
English: <l-format-number value="2000" lang="en" minimum-fraction-digits="2"></l-format-number><br />
German: <l-format-number value="2000" lang="de" minimum-fraction-digits="2"></l-format-number><br />
Russian: <l-format-number value="2000" lang="ru" minimum-fraction-digits="2"></l-format-number>
```

```jsx react
import { SlFormatNumber } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    English: <SlFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <SlFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <SlFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html preview
<l-format-number type="currency" currency="USD" value="2000" lang="en-US"></l-format-number><br />
<l-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></l-format-number><br />
<l-format-number type="currency" currency="EUR" value="2000" lang="de"></l-format-number><br />
<l-format-number type="currency" currency="RUB" value="2000" lang="ru"></l-format-number><br />
<l-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></l-format-number>
```

```jsx react
import { SlFormatNumber } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <SlFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <SlFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <SlFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <SlFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```

[component-metadata:l-format-number]
