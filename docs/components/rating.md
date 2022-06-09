# Rating

[component-header:l-rating]

Ratings give users a way to quickly view and provide feedback.

```html preview
<l-rating></l-rating>
```

```jsx react
import { SlRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRating />;
```

## Examples

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html preview
<l-rating max="3"></l-rating>
```

```jsx react
import { SlRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRating max={3} />;
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html preview
<l-rating precision="0.5" value="2.5"></l-rating>
```

```jsx react
import { SlRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRating precision={0.5} value={2.5} />;
```

## Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html preview
<l-rating style="--symbol-size: 2rem;"></l-rating>
```

```jsx react
import { SlRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRating style={{ '--symbol-size': '2rem' }} />;
```

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html preview
<l-rating readonly value="3"></l-rating>
```

```jsx react
import { SlRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRating readonly value={3} />;
```

### Disabled

Use the `disable` attribute to disable the rating.

```html preview
<l-rating disabled value="3"></l-rating>
```

```jsx react
import { SlRating } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlRating disabled value={3} />;
```

### Custom Icons

You can provide custom icons by passing a function to the `getSymbol` property.

```html preview
<l-rating class="rating-hearts" style="--symbol-color-active: #ff4136;"></l-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<l-icon name="heart-fill"></l-icon>';
</script>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon';
import { SlRating } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlRating getSymbol={() => '<l-icon name="heart-fill"></l-icon>'} style={{ '--symbol-color-active': '#ff4136' }} />
);
```

### Value-based Icons

You can also use the `getSymbol` property to render different icons based on value.

```html preview
<l-rating class="rating-emojis"></l-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = value => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<l-icon name="${icons[value - 1]}"></l-icon>`;
  };
</script>
```

```jsx react
import '@shoelace-style/shoelace/dist/components/icon/icon';
import { SlRating } from '@shoelace-style/shoelace/dist/react';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<l-icon name="${icons[value - 1]}"></l-icon>`;
}

const App = () => <SlRating getSymbol={getSymbol} />;
```

[component-metadata:l-rating]
