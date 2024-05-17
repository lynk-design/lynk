# Truncate

[component-header:lynk-truncate]

The truncate component contains two child shadow elements and their corresponding slots: the default slot within the `truncate__start` element and `slot="end"` within the `truncate__end` element. If both start and end are present trucation will occur in the middle of the string. If only the default slot is used, truncation will occur at the end of the string. If only `slot="end"` is present, truncation will occur at the beginning of the string.

```html preview
<h1>
  <lynk-truncate
    >This is a really long string that will truncate when it's contents extend beyond the parent elements
    width.</lynk-truncate
  >
</h1>
```

## Examples

### Default

```html preview
<p><lynk-truncate>Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.</lynk-truncate></p>
```

### Truncate Middle

```html preview
<p>
  <lynk-truncate
    >Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan<span slot="end"
      >.mp4</span
    ></lynk-truncate
  >
</p>
```

### Truncate Start

When truncating at the start of a string, you must include the hidden `&lrm;` or Left-to-right charachter to prevent punctuation from moving to the start of the string.

```html preview
<p>
  <lynk-truncate
    ><span slot="end"
      >Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.&lrm;</span
    ></lynk-truncate
  >
</p>
```

### Truncate Line Clamp

Use the `clamp` property to truncate multiple lines of text. Line clamp does not support the truncate middle or truncate start options.

```html preview
<p>
  <lynk-truncate clamp="2"
    >Line clamp @2. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum
    risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet
    molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.</lynk-truncate
  >
</p>

<p>
  <lynk-truncate clamp="3"
    >Line clamp @3. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum
    risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet
    molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.</lynk-truncate
  >
</p>

<p>
  <lynk-truncate clamp="4"
    >Line clamp @4. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum
    risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet
    molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.</lynk-truncate
  >
</p>

<p>
  <lynk-truncate clamp="5"
    >Line clamp @5. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum
    risus et enim faucibus, sit amet molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet
    molestie est accumsan. Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.</lynk-truncate
  >
</p>
```

[component-metadata:lynk-truncate]
