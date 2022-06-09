# QR Code

[component-header:l-qr-code]

Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html preview
<div class="qr-overview">
  <l-qr-code value="https://shoelace.style/" label="Scan this code to visit Shoelace on the web!"></l-qr-code>
  <br />

  <l-input maxlength="255" clearable label="Value"></l-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('l-qr-code');
  const input = container.querySelector('l-input');

  input.value = qrCode.value;
  input.addEventListener('l-input', () => (qrCode.value = input.value));
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview l-input {
    margin-top: 1rem;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { SlQrCode, SlInput } from '@shoelace-style/shoelace/dist/react';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview l-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://shoelace.style/');

  return (
    <>
      <div className="qr-overview">
        <SlQrCode value={value} label="Scan this code to visit Shoelace on the web!" />
        <br />

        <SlInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html preview
<l-qr-code value="https://shoelace.style/" fill="deeppink" background="white"></l-qr-code>
```

```jsx react
import { SlQrCode } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlQrCode value="https://shoelace.style/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html preview
<l-qr-code value="https://shoelace.style/" size="64"></l-qr-code>
```

```jsx react
import { SlQrCode } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlQrCode value="https://shoelace.style/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html preview
<l-qr-code value="https://shoelace.style/" radius="0.5"></l-qr-code>
```

```jsx react
import { SlQrCode } from '@shoelace-style/shoelace/dist/react';

const App = () => <SlQrCode value="https://shoelace.style/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html preview
<div class="qr-error-correction">
  <l-qr-code value="https://shoelace.style/" error-correction="L"></l-qr-code>
  <l-qr-code value="https://shoelace.style/" error-correction="M"></l-qr-code>
  <l-qr-code value="https://shoelace.style/" error-correction="Q"></l-qr-code>
  <l-qr-code value="https://shoelace.style/" error-correction="H"></l-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx react
import { SlQrCode } from '@shoelace-style/shoelace/dist/react';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <SlQrCode value="https://shoelace.style/" error-correction="L" />
        <SlQrCode value="https://shoelace.style/" error-correction="M" />
        <SlQrCode value="https://shoelace.style/" error-correction="Q" />
        <SlQrCode value="https://shoelace.style/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:l-qr-code]
