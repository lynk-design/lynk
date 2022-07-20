# Aurelia 1

LYNK works great with all modern app frameworks, including Aurelia, with full integration into the binding engine and component model.

## Installation

To add LYNK to your Aurelia app, install the package using npm or yarn.

```bash
npm install --save git+ssh://git@gitlab.edgecastcdn.net:uplynk/ucc-team/lynk-design.git
yarn add git+ssh://git@gitlab.edgecastcdn.net:uplynk/ucc-team/lynk-design.git
```

Next, open your `srr/main.ts` file and add the following code to import the [default theme](/getting-started/themes) set the default [icon library](/components/icon#icon-libraries) and register the component library.

```jsx
import '@lynk-design/lynk/dist/themes/dark.css';
import {registerIconLibrary} from '@lynk-design/lynk/dist/utilities/icon-library';

registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/icons/${name}.svg`,
});

aurelia.use
    .standardConfiguration()
    ...
    .plugin(PLATFORM.moduleName('@lynk-design/lynk'))
```

That's it! Now you can start using LYNK components in your app!

## Usage

### Binding Events with Aurelia

When binding to standard Aurelia events like `click`, the `trigger` binding command seems to be more reliable than `delegate`.

```html
<lynk-button click.trigger="myListener()">
```

To bind listeners to custom events emitted by LYNK components, use the same trigger binding command on the event emitted from the component.

```html
<lynk-menu on:select.trigger="myListener($event)">
```

### Two-way Data Binding

Because Aurelia doesn't recognize form controls within LYNK components, the `bind` command will only ever resolve to simple `to-view` / `one-way` binding. To enable two-way binding on LYNK components, you must use the `two-way` binding attribute.

```html
<!-- This doesn't work for form controls -->
<lynk-input value.bind="myValue">

<!-- This works as expected -->
<lynk-input value.two-way="myValue">
```
