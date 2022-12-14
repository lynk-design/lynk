# Format Number

[component-header:lynk-format-number]

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <lynk-format-number value="1000"></lynk-format-number>
  <br /><br />
  <lynk-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></lynk-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('lynk-format-number');
  const input = container.querySelector('lynk-input');

  input.addEventListener('on:input', () => (formatter.value = input.value || 0));
</script>
```

## Examples

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<lynk-format-number type="percent" value="0"></lynk-format-number><br />
<lynk-format-number type="percent" value="0.25"></lynk-format-number><br />
<lynk-format-number type="percent" value="0.50"></lynk-format-number><br />
<lynk-format-number type="percent" value="0.75"></lynk-format-number><br />
<lynk-format-number type="percent" value="1"></lynk-format-number>
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
English: <lynk-format-number value="2000" lang="en" minimum-fraction-digits="2"></lynk-format-number><br />
German: <lynk-format-number value="2000" lang="de" minimum-fraction-digits="2"></lynk-format-number><br />
Russian: <lynk-format-number value="2000" lang="ru" minimum-fraction-digits="2"></lynk-format-number>
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html preview
<lynk-format-number type="currency" currency="USD" value="2000" lang="en-US"></lynk-format-number><br />
<lynk-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></lynk-format-number><br />
<lynk-format-number type="currency" currency="EUR" value="2000" lang="de"></lynk-format-number><br />
<lynk-format-number type="currency" currency="RUB" value="2000" lang="ru"></lynk-format-number><br />
<lynk-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></lynk-format-number>
```

[component-metadata:lynk-format-number]
