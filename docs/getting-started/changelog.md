# Changelog

Lynk follows [Semantic Versioning](https://semver.org/). Breaking changes in components with the <lynk-badge type="primary" pill>Stable</lynk-badge> badge will not be accepted until the next major version. As such, all contributions must consider the project's roadmap and take this into consideration. Features that are deemed no longer necessary will be deprecated but not removed.

Components with the <lynk-badge type="warning" pill>Experimental</lynk-badge> badge should only be used in production with extreme caution. They are made available as release candidates for development and testing purposes and may not be fully tested and reliable. As such, changes to experimental components will not be subject to semantic versioning.

<lynk-alert type="info" open>During the beta period, these restrictions may be relaxed in the event of a mission-critical bug. 🐛</lynk-alert>


## 0.6.2

- Updated the `state="warning"` styles for `lynk-td` component
- Added a public `scrollTop` method to the `page-content` component
- Fixing bug in `page-header` that allowed the main area width to stretch beyond its desired limits
- Tied the contraint validation `data-user-invalid` attribute to also autmatically effect toggle the `state="error"` of form controls
- Removing the default top and bottom margin on `<lynk-grid container>` element

## 0.6.0

- Added the `form` attribute to all form controls to allow placing them outside of a `<form>` element
- Added the `getFormControls()` function as an alternative to `HTMLFormElement.elements`
- Added the `on:invalid` event to all form controls to enable custom validation logic
- Added `validity` and `validationMessage` properties to all form controls
- Added the `rel` attribute to `<lynk-button>` to allow users to create button links that point to specific targets
- Added the `tag` part to `<lynk-select>`
- Fixed a bug in `<lynk-select>` that caused the display label to render incorrectly in Chrome after form validation
- Fixed a bug that prevented `web-types.json` from being generated
- Fixed a bug in `<lynk-dropdown>` that prevented keyboard users from selecting menu items when using the keyboard
- Fixed a bug in the template for `<lynk-select>` that caused the `form-control-help-text` part to not be in the same location as other form controls
- Fixed a bug in `<lynk-checkbox>` and `<lynk-switch>` that caused the browser to scroll incorrectly when focusing on a control in a container with overflow
- Fixed a bug in `<lynk-menu-item>` that caused the `click` event to be emitted when the item was disabled
- Fixed a bug in `<lynk-select>` that prevented placeholders from showing when `multiple` was used
- Fixed a bug in `<lynk-select>` that caused tags to not be rounded when using the `pill` attribute
- Fixed a bug in `<lynk-select>` where the `on:change` and `on:input` events didn't weren't emitted when removing tags
- Fixed a bug in `<lynk-select>` that caused the listbox to scroll to the first selected item when selecting multiple items
- Improved the behavior of `<lynk-dropdown>` in Safari so keyboard interaction works the same as in other browsers
- Fixed a bug in `<lynk-icon>` that caused icons to sometimes be clipped in Safari
- Fixed a bug in `<lynk-spinner>` that caused the animation to stop working correctly in Safari
- Fixed tests so they now only run once in half the time
- Improved user interaction heuristics for all form controls
- Improved styles on Page Layout and Nav components
- Refactored the `LynkFormControl` interface to remove the `invalid` property, allowing a more intuitive API for controlling validation internally
- Renamed the internal `FormSubmitController` to `FormControlController` to better reflect what it's used for
- Updated Lit to 2.6.1
- Updated Floating UI to 1.2.1
- Updated Bootstrap Icons to 1.10.3
- Updated all other dependencies to latest versions

## 0.5.0

- 🚨 BREAKING: changed `<lynk-table-row>` to use `interactive` and `active` properties instead of `hoverable` and `selected` for cleaner semantics
- Changed default styles for `<lynk-nav>` and `<lynk-nav-item>` components
- Added color options to `<lynk-switch>` component
- Added a `no-bubble` attribute to `<lynk-button>` and `<lynk-checkbox>` components for easier use in `<lynk-tr interactive>` components.
- Added the `<lynk-page-layout>`, `<lynk-page-header>`, `<lynk-page-sidebar>`, `<lynk-page-footer>`, and `<lynk-page-content>` components

## 0.4.4

- Fixes a bug where popovers used in table-rows were inheriting transparent text color

## 0.4.3

- Fixed the `<lynk-tab-group>` event names back to `on:tab-show` and `on:tab-hide`
- Added test coverage for `<lynk-tab-group>` components

## 0.4.2

- Fixed a bug in `<lynk-nav>` that caused z-index issues stack issues
- Fixed a bug in `<lynk-nav>` with the `squashed` style that cause text-align issues in Safari
- Fixed a bug in `<lynk-popover>` where the arrow was briefly visible after the popover had closed.

## 0.4.1

- Fixed a bug in `<lynk-stack>` that caused inconsistent width fill issues.
- Updated some bad info in the `<lynk-popover>` docs

## 0.4.0

Initial changelog creation. This release includes a complete rewrite of `<lynk-select>` to improve accessibility and simplify its internals as well as the new experimental `<lynk-nav>`, `<lynk-nav-group>`, and `<lynk-nav-item>` components.

- 🚨 BREAKING: rewrote `<lynk-select>`
  - Accessibility has been significantly improved, especially in screen readers
  - You must use `<lynk-option>` instead of `<lynk-menu-item>` for options now
  - The `suffix` slot was removed because it was confusing and its position made the clear button inaccessible
  - Many parts have been removed or renamed (please see the docs for more details)
- 🚨 BREAKING: removed the `lynk-label-change` event from `<lynk-menu-item>` (listen for `slotchange` instead)
- 🚨 BREAKING: removed type to select logic from `<lynk-menu>` (this was added specifically for `<lynk-select>` which no longer uses `<lynk-menu>`)
- 🚨 BREAKING: improved the accessibility of `<lynk-menu-item>` so checked items are announced as such
  - Checkbox menu items must now have `type="checkbox"` before applying the `checked` attribute
  - Checkbox menu items will now toggle their `checked` state on their own when selected
  - Disabled menu items will now receive focus, but are still not selectable
- Added the `<lynk-option>` component
- Added the `<lynk-nav>` component and documentation
- Added the `<lynk-nav-group>` component and documentation
- Added the `<lynk-nav-item>` component and documentation
- Fixed a bug that prevented `<lynk-switch>` from submitting a default value of `on` when no value was provided
- Fixed a bug in `<lynk-textarea>` that caused the scrollbar to show sometimes when using `resize="auto"`
- Fixed a bug in `<lynk-input>` and `<lynk-textarea>` that caused its validation states to be out of sync in some cases
- Reorganized some components to make class structures more consistent
- Updated non-public fields to use the `private` keyword (these were previously private only by convention, but now TypeScript will warn you)
- Updated the hover style of `<lynk-menu-item>` to be consistent with `<lynk-option>`
- Updated Bootstrap Icons to 1.10.3

## 0.0.0 through 0.3.0

And Lynk was without form, and void; and darkness was on the interface of the deep.
