# Changelog

Lynk follows [Semantic Versioning](https://semver.org/). Breaking changes in components with the <lynk-badge type="primary" pill>Stable</lynk-badge> badge will not be accepted until the next major version. As such, all contributions must consider the project's roadmap and take this into consideration. Features that are deemed no longer necessary will be deprecated but not removed.

Components with the <lynk-badge type="warning" pill>Experimental</lynk-badge> badge should only be used in production with extreme caution. They are made available as release candidates for development and testing purposes and may not be fully tested and reliable. As such, changes to experimental components will not be subject to semantic versioning.

<lynk-alert type="info" open>During the beta period, these restrictions may be relaxed in the event of a mission-critical bug. 🐛</lynk-alert>

## 0.9.14

- Fixed a bug in `<lynk-input>` where it would sometimes throw an error on trying to validate a field without a host.validate key.
- Fixed a bug in `<lynk-input>` to better support native datepicker indicators
- Adjusted size of `<lynk-table>` cells/rows to be slightly more compact
- Updated Lit to 3.0.0
- Updated Prettier to 3.0.3
- Updating Typescript
- Updating Plop & Sinon
- Updating deps (all but majors)
- Updating nvm and cicd node version

## 0.9.13

- Fixed a bug in `<lynk-radio-group>` where clicking outside of a label would throw an "cannot find disabled of null" error.
- Experimenting with waiting for updateComplete before setting the validity of an `<lynk-input>` that has been disabled

## 0.9.12

- Adjusting styles of `<lynk-button>` outline styles and making disabled slightly more obvious.
- 🎉 NEW: Added a `<lynk-dot-loader>` component for another loader style.

## 0.9.11

- Added some additional style options to `<lynk-tag>`.

## 0.9.10

- Fixed a bug in `<lynk-radio-group>` and `<lynk-dialog>` that caused an error due to an undefined tabIndex.

## 0.9.9

- Fixed a bug in `<lynk-select>` that prevented it from closing when tabbing to another select inside a shadow root
- Improved styling of `<lynk-form-field>` and `<lynk-radio-group>` to display `<lynk-radio>` or `<lynk-checkbox>` components similarly.

## 0.9.8

- Fixes documentation for intersection observer utility
- Fixed `<lynk-dialog>` not accounting for elements with hidden dialog controls like `<video>`
- Fixed an issue with focus trapping elements like `<lynk-dialog>` when wrapped by other elements not checking the assigned elements of `<slot>`s.
- Fixed a bug in the focus trapping utility used by modals that caused unexpected focus behavior.
- 🎉 NEW: Added a `<lynk-form-field>` component for wrapping adding labels and help-text to non standard fields.

## 0.9.7

- Improved `<lynk-card>` with customizable pulse speed and state colors.

## 0.9.6

- Improved `<lynk-badge>` with customizable pulse speed.
- Fixed documentation for animation utility.
- Fixed missing parts in `<lynk-page-layout>`.

## 0.9.5

- Improved `<lynk-page-sidebar>` with added slot for collapsed nav content.

## 0.9.4

- Improved the margin handling for `<page-layout>`, `<page-header>`, `<page-content>`, `<page-sidebar>`, and `<page-footer>` components.

## 0.9.3

- 🎉 NEW: Added experimental `<lynk-copy-button>` component that will copy text values to the clipboard.
- Improved transitions for `<lynk-dialog>` sizes
- Improved the behavior of the clear button in `<lynk-input>` to prevent the component’s width from shifting when toggled
- Added the spinner part to `<lynk-button>`
- Updated Bootstrap Icons to 1.11.0

## 0.9.2

- Improved `<lynk-range>` tick styles

## 0.9.1

- Improved `<lynk-range>` so that the handle and slider has a larger tap area
- Improved `<lynk-range>` with custom marker/tick support

## 0.9.0

- 🎉 NEW: Added a `<lynk-auto-grid>` layout component that utilizes the CSS Grid spec for simple grid layouts.
- 🎉 NEW: Added a `<lynk-card>` layout component for simple card based related content.

## 0.8.0

- 🎉 NEW: Added a `<lynk-panel>` layout component to replace the functionality of the previous `<lynk-accordion>` component.
- 🚨 BREAKING: changed `<lynk-accordion>` to function more like a typical accordion that can contain multiple `<lynk-panel>` components

## 0.7.1

- Improved `<lynk-nav>` so that squished styles are applied by class rather than attribute
- Improved `<lynk-input>` by turning autocomplete to "off" by default
- Added `striped` option to `<lynk-tr>`

## 0.7.0

- 🎉 NEW: Added experimental `<lynk-split-panel>` layout component

## 0.6.6

- Improved keyboard handling for `<lynk-menu>` or `<lynk-select>` that contain a slotted `<lynk-input>` for search.
- Improved `<lynk-button>` so it can accept slotted content of variable heights
- Fixed a bug in `<lynk-input>` that caused date pickers to look filled in even when empty in Safari
- Updated Lit to 2.7.5
- Updated Floating UI to 1.4.2
- Updated Bootstrap Icons to 1.10.5

## 0.6.5

- 🎉 NEW: Added experimental `<lynk-intersection-observer>` component
- Added option to customize colors of `<lynk-badge>`
- Added prefix, suffix, and footer slots to `<lynk-accordion>` and prevent `prefix` and `suffix` slots from triggering default summary event behavior.
- Improved `lynk-stack` styles and added `wrap` option
- Improved `<lynk-option>` so it converts non-string values to strings for convenience
- Improved styles for `<lynk-input>` and `<lynk-spinner>` slotted into a `<lynk-menu>`
- Fixed a bug where `lynk-select` or `lynk-input` with undefined values would throw an error when using the `clearable` property
- Fixed a bug where an observe error would be thrown on `lynk-nav-group`

## 0.6.4

- Added `href` property to `<lynk-tab>` to support router navigation
- Improved default styles of `<lynk-page-footer>` and `<lynk-page-header>`
- Fixed a bug in `<lynk-truncate>` where the min width was too big and caused issues in breadcrumbs
- Fixed `<lynk-breadcrumb>` to utilize `<lynk-truncate>` to control overflows

## 0.6.3

- 🎉 NEW: Added experimental `<lynk-truncate>` component
- Added documentation for `<lynk-progress-bar>`
- Added `custom-elements.json` to package exports
- Improved responsive styles for `<lynk-page-header>`
- Fixed a bug in all form elements that prevented manually setting the state property on fields that were using browser constraint validation
- Fixed a bug in `<lynk-menu-item>` that caused the focus color to show when selecting menu items with a mouse or touch device
- Added `tag__base`, `tag__content`, `tag__remove-button`, `tag__remove-button__base` parts to `<lynk-select>`
- Fixed a bug in `<lynk-select>` that caused the display label to render incorrectly in Chrome after form validation
- Fixed a bug in `<lynk-select>` that caused `on:change` and `on:input` to be emitted too early

## 0.6.2

- Updated the `state="warning"` styles for `lynk-td` component
- Added a public `scrollTop` method to the `page-content` component
- Fixing bug in `page-header` that allowed the main area width to stretch beyond its desired limits
- Tied the constraint validation `data-user-invalid` attribute to also automatically effect toggle the `state="error"` of form controls
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
