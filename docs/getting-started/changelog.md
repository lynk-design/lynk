# Changelog

Lynk follows [Semantic Versioning](https://semver.org/). Breaking changes in components with the <lynk-badge type="primary" pill>Stable</lynk-badge> badge will not be accepted until the next major version. As such, all contributions must consider the project's roadmap and take this into consideration. Features that are deemed no longer necessary will be deprecated but not removed.

Components with the <lynk-badge type="warning" pill>Experimental</lynk-badge> badge should only be used in production with extreme caution. They are made available as release candidates for development and testing purposes and may not be fully tested and reliable. As such, changes to experimental components will not be subject to semantic versioning.

<lynk-alert type="info" open>During the beta period, these restrictions may be relaxed in the event of a mission-critical bug. 🐛</lynk-alert>

## 0.5.0

- Changed default styles for `<lynk-nav>` and `<lynk-nav-item>` components
- Added color options to `<lynk-switch>` component
- Added the `<lynk-page-layout>`, `<lynk-page-header>`, `<lynk-page-sidebar>`, `<lynk-page-footer>`, and `<lynk-page-container>` components

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
