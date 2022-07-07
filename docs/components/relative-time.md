# Relative Time

[component-header:lynk-relative-time]

Outputs a localized time phrase relative to the current date and time.

Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

```html preview
<!-- Shoelace 2 release date 🎉 -->
<lynk-relative-time date="2020-07-15T09:17:00-04:00"></lynk-relative-time>
```

The `date` attribute determines when the date/time is calculated from. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

<lynk-alert open>When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.</lynk-alert>

<lynk-alert type="warning" open>The `Intl.RelativeTimeFormat` API is available [in all major browsers](https://caniuse.com/mdn-javascript_builtins_intl_relativetimeformat), but it only became available to Safari in version 14. If you need to support Safari 13, you'll need to [use a polyfill](https://github.com/catamphetamine/relative-time-format).</lynk-alert>

## Examples

### Keeping Time in Sync

Use the `sync` attribute to update the displayed value automatically as time passes.

```html preview
<div class="relative-time-sync">
  <lynk-relative-time sync></lynk-relative-time>
</div>

<script>
  const container = document.querySelector('.relative-time-sync');
  const relativeTime = container.querySelector('lynk-relative-time');

  relativeTime.date = new Date(new Date().getTime() - 60000);
</script>
```

### Formatting Styles

You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.

```html preview
<lynk-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></lynk-relative-time><br />
<lynk-relative-time date="2020-07-15T09:17:00-04:00" format="short"></lynk-relative-time><br />
<lynk-relative-time date="2020-07-15T09:17:00-04:00" format="long"></lynk-relative-time>
```

### Localization

Use the `lang` attribute to set the desired locale.

```html preview
English: <lynk-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></lynk-relative-time><br />
Chinese: <lynk-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></lynk-relative-time><br />
German: <lynk-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></lynk-relative-time><br />
Greek: <lynk-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></lynk-relative-time><br />
Russian: <lynk-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></lynk-relative-time>
```

[component-metadata:lynk-relative-time]
