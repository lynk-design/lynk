# Format Date

[component-header:lynk-format-date]

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html preview
<lynk-format-date date="2020-07-15T09:17:00-04:00"></lynk-format-date>
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html preview
<!-- Human-readable date -->
<lynk-format-date month="long" day="numeric" year="numeric"></lynk-format-date><br />

<!-- Time -->
<lynk-format-date hour="numeric" minute="numeric"></lynk-format-date><br />

<!-- Weekday -->
<lynk-format-date weekday="long"></lynk-format-date><br />

<!-- Month -->
<lynk-format-date month="long"></lynk-format-date><br />

<!-- Year -->
<lynk-format-date year="numeric"></lynk-format-date><br />

<!-- No formatting options -->
<lynk-format-date></lynk-format-date>
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html preview
<lynk-format-date hour="numeric" minute="numeric" hour-format="12"></lynk-format-date><br />
<lynk-format-date hour="numeric" minute="numeric" hour-format="24"></lynk-format-date>
```


### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html preview
English: <lynk-format-date lang="en"></lynk-format-date><br />
French: <lynk-format-date lang="fr"></lynk-format-date><br />
Russian: <lynk-format-date lang="ru"></lynk-format-date>
```

[component-metadata:lynk-format-date]
