<!-- cspell:dictionaries lorem-ipsum -->

# Box

[component-header:lynk-box]

A simple box. The most basic of layout components.

```html preview
<lynk-box style="--background: var(--lynk-color-neutral-100); --padding: var(--lynk-spacing-large)">I'm just a box, yes I'm only a box. And i'm sitting here inside of these docs.</lynk-box>
```

## Examples

A box with (almost) all the fixins'

```html preview
<lynk-box style="
  --background: var(--lynk-color-neutral-900);
  --color: var(--lynk-color-neutral-200);
  --text-align: center;
  --padding: var(--lynk-spacing-huge);
  --margin: var(--lynk-spacing-base);
  --border: 1px solid var(--lynk-color-neutral-800);
  --border-radius: var(--lynk-border-radius-x-large);
  --shadow: var(--lynk-shadow-large);"
>
  I'm just a box, yes I'm only a box. And i'm sitting here inside of these docs.
</lynk-box>
```

You can also set a custom height and width on the box. Content that overflows the y-axis will scroll.

```html preview
<lynk-box style="
  --background: var(--lynk-color-neutral-50);
  --width: 50%;
  --height: 128px;
  --padding: var(--lynk-spacing-large);
  --border-radius: var(--lynk-border-radius-medium);
">
  <h3>Lorem Ipsum</h3>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</lynk-box>
```

[component-metadata:lynk-box]
