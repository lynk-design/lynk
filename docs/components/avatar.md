# Avatar

[component-header:l-avatar]

Avatars are used to represent a person or object.

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html preview
<l-avatar label="User avatar"></l-avatar>
```

```jsx react
import { LynkAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <LynkAvatar label="User avatar" />;
```

## Examples

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.

```html preview
<l-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></l-avatar>
```

```jsx react
import { LynkAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <LynkAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html preview
<l-avatar initials="SL" label="Avatar with initials: SL"></l-avatar>
```

```jsx react
import { LynkAvatar } from '@shoelace-style/shoelace/dist/react';

const App = () => <LynkAvatar initials="SL" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html preview
<l-avatar label="Avatar with an image icon">
  <l-icon slot="icon" name="image"></l-icon>
</l-avatar>

<l-avatar label="Avatar with an archive icon">
  <l-icon slot="icon" name="archive"></l-icon>
</l-avatar>

<l-avatar label="Avatar with a briefcase icon">
  <l-icon slot="icon" name="briefcase"></l-icon>
</l-avatar>
```

```jsx react
import { LynkAvatar, LynkIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <LynkAvatar label="Avatar with an image icon">
      <LynkIcon slot="icon" name="image" />
    </LynkAvatar>

    <LynkAvatar label="Avatar with an archive icon">
      <LynkIcon slot="icon" name="archive" />
    </LynkAvatar>

    <LynkAvatar label="Avatar with a briefcase icon">
      <LynkIcon slot="icon" name="briefcase" />
    </LynkAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html preview
<l-avatar shape="square" label="Square avatar"></l-avatar>
<l-avatar shape="rounded" label="Rounded avatar"></l-avatar>
<l-avatar shape="circle" label="Circle avatar"></l-avatar>
```

```jsx react
import { LynkAvatar, LynkIcon } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <LynkAvatar shape="square" label="Square avatar" />
    <LynkAvatar shape="rounded" label="Rounded avatar" />
    <LynkAvatar shape="circle" label="Circle avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html preview
<div class="avatar-group">
  <l-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></l-avatar>

  <l-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></l-avatar>

  <l-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></l-avatar>

  <l-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></l-avatar>
</div>

<style>
  .avatar-group l-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group l-avatar::part(base) {
    border: solid 2px var(--l-color-neutral-0);
  }
</style>
```

```jsx react
import { LynkAvatar, LynkIcon } from '@shoelace-style/shoelace/dist/react';

const css = `
  .avatar-group l-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group l-avatar::part(base) {
    border: solid 2px var(--l-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <LynkAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <LynkAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <LynkAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <LynkAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:l-avatar]
