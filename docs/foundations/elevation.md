# Elevation & Z-Index Tokens

Elevation tokens are used to give elements the appearance of being raised off the page. Use them with the `box-shadow` property. These are especially useful for menus, popovers, and dialogs.

| Token                 | Example                                                                          |
| --------------------- | -------------------------------------------------------------------------------- |
| `--l-shadow-x-small` | <div class="elevation-demo" style="box-shadow: var(--l-shadow-x-small);"></div> |
| `--l-shadow-small`   | <div class="elevation-demo" style="box-shadow: var(--l-shadow-small);"></div>   |
| `--l-shadow-medium`  | <div class="elevation-demo" style="box-shadow: var(--l-shadow-medium);"></div>  |
| `--l-shadow-large`   | <div class="elevation-demo" style="box-shadow: var(--l-shadow-large);"></div>   |
| `--l-shadow-x-large` | <div class="elevation-demo" style="box-shadow: var(--l-shadow-x-large);"></div> |

Z-index tokens are used to stack components in a logical manner. In most instances higher z-index components should also use a higher elevation token.

| Token                      | Value |
| -------------------------- | ----- |
| `--l-z-index-drawer`      | 700   |
| `--l-z-index-dialog`      | 800   |
| `--l-z-index-dropdown`    | 900   |
| `--l-z-index-alert-group` | 950   |
| `--l-z-index-tooltip`     | 1000  |
