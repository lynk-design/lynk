# Elevation & Z-Index Tokens

Elevation tokens are used to give elements the appearance of being raised off the page. Use them with the `box-shadow` property. These are especially useful for menus, popovers, and dialogs.

| Token                   | Example                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| `--lynk-shadow-x-small` | <div class="elevation-demo"><span style="box-shadow: var(--lynk-shadow-x-small);"></span></div> |
| `--lynk-shadow-small`   | <div class="elevation-demo"><span style="box-shadow: var(--lynk-shadow-small);"></span></div>   |
| `--lynk-shadow-medium`  | <div class="elevation-demo"><span style="box-shadow: var(--lynk-shadow-medium);"></span></div>  |
| `--lynk-shadow-large`   | <div class="elevation-demo"><span style="box-shadow: var(--lynk-shadow-large);"></span></div>   |
| `--lynk-shadow-x-large` | <div class="elevation-demo"><span style="box-shadow: var(--lynk-shadow-x-large);"></span></div> |

Z-index tokens are used to stack components in a logical manner. In most instances higher z-index components should also use a higher elevation token.

| Token                        | Value |
| ---------------------------- | ----- |
| `--lynk-z-index-drawer`      | 700   |
| `--lynk-z-index-dialog`      | 800   |
| `--lynk-z-index-dropdown`    | 900   |
| `--lynk-z-index-alert-group` | 950   |
| `--lynk-z-index-tooltip`     | 1000  |
