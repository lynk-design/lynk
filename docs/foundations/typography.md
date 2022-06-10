# Typography Tokens

Typography tokens are used to maintain a consistent set of font styles throughout your app.

## Font Family

The default font stack is designed to be simple and highly available on as many devices as possible.

| Token             | Value                                                                                                                                         | Example                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `--l-font-sans`  | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' | <span style="font-family: var(--l-font-sans)">The quick brown fox jumped over the lazy dog.</span>  |
| `--l-font-serif` | Georgia, 'Times New Roman', serif                                                                                                             | <span style="font-family: var(--l-font-serif)">The quick brown fox jumped over the lazy dog.</span> |
| `--l-font-mono`  | Menlo, Monaco, 'Courier New', monospace                                                                                                       | <span style="font-family: var(--l-font-mono)">The quick brown fox jumped over the lazy dog.</span>  |

## Font Size

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font size.

| Token                     | Value           | Example                                                         |
| ------------------------- | --------------- | --------------------------------------------------------------- |
| `--l-font-size-2x-small` | 0.625rem (10px) | <span style="font-size: var(--l-font-size-2x-small)">Aa</span> |
| `--l-font-size-x-small`  | 0.75rem (12px)  | <span style="font-size: var(--l-font-size-x-small)">Aa</span>  |
| `--l-font-size-small`    | 0.875rem (14px) | <span style="font-size: var(--l-font-size-small)">Aa</span>    |
| `--l-font-size-medium`   | 1rem (16px)     | <span style="font-size: var(--l-font-size-medium)">Aa</span>   |
| `--l-font-size-large`    | 1.25rem (20px)  | <span style="font-size: var(--l-font-size-large)">Aa</span>    |
| `--l-font-size-x-large`  | 1.5rem (24px)   | <span style="font-size: var(--l-font-size-x-large)">Aa</span>  |
| `--l-font-size-2x-large` | 2.25rem (36px)  | <span style="font-size: var(--l-font-size-2x-large)">Aa</span> |
| `--l-font-size-3x-large` | 3rem (48px)     | <span style="font-size: var(--l-font-size-3x-large)">Aa</span> |
| `--l-font-size-4x-large` | 4.5rem (72px)   | <span style="font-size: var(--l-font-size-4x-large)">Aa</span> |

## Font Weight

| Token                       | Value | Example                                                                                                         |
| --------------------------- | ----- | --------------------------------------------------------------------------------------------------------------- |
| `--l-font-weight-light`    | 300   | <span style="font-weight: var(--l-font-weight-light);">The quick brown fox jumped over the lazy dog.</span>    |
| `--l-font-weight-normal`   | 400   | <span style="font-weight: var(--l-font-weight-normal);">The quick brown fox jumped over the lazy dog.</span>   |
| `--l-font-weight-semibold` | 500   | <span style="font-weight: var(--l-font-weight-semibold);">The quick brown fox jumped over the lazy dog.</span> |
| `--l-font-weight-bold`     | 700   | <span style="font-weight: var(--l-font-weight-bold);">The quick brown fox jumped over the lazy dog.</span>     |

## Letter Spacing

| Token                        | Value    | Example                                                                                                             |
| ---------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `--l-letter-spacing-denser` | ?        | <span style="letter-spacing: var(--l-letter-spacing-denser);">The quick brown fox jumped over the lazy dog.</span> |
| `--l-letter-spacing-dense`  | -0.015em | <span style="letter-spacing: var(--l-letter-spacing-dense);">The quick brown fox jumped over the lazy dog.</span>  |
| `--l-letter-spacing-normal` | normal   | <span style="letter-spacing: var(--l-letter-spacing-normal);">The quick brown fox jumped over the lazy dog.</span> |
| `--l-letter-spacing-loose`  | 0.075em  | <span style="letter-spacing: var(--l-letter-spacing-loose);">The quick brown fox jumped over the lazy dog.</span>  |
| `--l-letter-spacing-looser` | ?        | <span style="letter-spacing: var(--l-letter-spacing-looser);">The quick brown fox jumped over the lazy dog.</span> |

## Line Height

| Token                     | Value | Example                                                                                                                                                                                                       |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--l-line-height-denser` | ?     | <div style="line-height: var(--l-line-height-denser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--l-line-height-dense`  | 1.4   | <div style="line-height: var(--l-line-height-dense);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--l-line-height-normal` | 1.8   | <div style="line-height: var(--l-line-height-normal);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--l-line-height-loose`  | 2.2   | <div style="line-height: var(--l-line-height-loose);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--l-line-height-looser` | ?     | <div style="line-height: var(--l-line-height-looser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
