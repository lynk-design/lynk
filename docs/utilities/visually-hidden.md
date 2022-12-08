# Visually Hidden

[component-header:lynk-visually-hidden]

According to [The A11Y Project](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/), "there are real world situations where visually hiding content may be appropriate, while the content should remain available to assistive technologies, such as screen readers. For instance, hiding a search field's label as a common magnifying glass icon is used in its stead."

Since visually hidden content can receive focus when tabbing, the element will become visible when something inside receives focus. This behavior is intentional, as sighted keyboards user won't be able to determine where the focus indicator is without it.

```html preview
<div style="min-height: 100px;">
  <lynk-visually-hidden>
    <a href="#">Skip to main content</a>
  </lynk-visually-hidden>
</div>
```

## Examples

### Links That Open in New Windows

In this example, the link will open a new window. Screen readers will announce "opens in a new window" even though the text content isn't visible to sighted users.

```html preview
<a href="https://example.com/" target="_blank">
  Visit External Page
  <lynk-icon name="box-arrow-up-right"></lynk-icon>
  <lynk-visually-hidden>opens in a new window</lynk-visually-hidden>
</a>
```

### Content Conveyed By Context

Adding a title or label may seem redundant at times, but they're very helpful for unsighted users. Rather than omit them, you can provide context to unsighted users with visually hidden content.

```html preview
<lynk-card style="width: 100%; max-width: 360px;">
  <header>
    <lynk-visually-hidden>Personal Info</lynk-visually-hidden>
  </header>
  <lynk-input label="Name" style="margin-bottom: .5rem;"></lynk-input>
  <lynk-input label="Email" type="email"></lynk-input>
</lynk-card>
```

[component-metadata:lynk-visually-hidden]
