# Combobox

[component-header:lynk-combobox]

A combobox consist of a text input trigger and a popup containing a listbox. By default, interacting with the combobox via focus or input will expose the popup and interacting outside of the combobox will close it.

```html preview
<lynk-combobox label="Combobox Select" placeholder="Search" trigger="focus" clearable listbox-help>
    <lynk-icon slot="prefix" name="search" library="default"></lynk-icon>
    <lynk-option value="al">Alabama</lynk-option>
    <lynk-option value="ak">Alaska</lynk-option>
    <lynk-option value="az">Arizona</lynk-option>
    <lynk-option value="ar">Arkansas</lynk-option>
    <lynk-option value="ca">California</lynk-option>
    <lynk-option value="co">Colorado</lynk-option>
    <lynk-option value="ct">Connecticut</lynk-option>
    <lynk-option value="de">Delaware</lynk-option>
    <lynk-option value="dc">District of Columbia</lynk-option>
    <lynk-option value="fl">Florida</lynk-option>
    <lynk-option value="ga">Georgia</lynk-option>
    <lynk-option value="hi">Hawaii</lynk-option>
    <lynk-option value="id">Idaho</lynk-option>
    <lynk-option value="il">Illinois</lynk-option>
    <lynk-option value="in">Indiana</lynk-option>
    <lynk-option value="ia">Iowa</lynk-option>
    <lynk-option value="ks">Kansas</lynk-option>
    <lynk-option value="ky">Kentucky</lynk-option>
    <lynk-option value="la">Louisiana</lynk-option>
    <lynk-option value="me">Maine</lynk-option>
    <lynk-option value="mt">Montana</lynk-option>
    <lynk-option value="ne">Nebraska</lynk-option>
    <lynk-option value="nv">Nevada</lynk-option>
    <lynk-option value="nh">New Hampshire</lynk-option>
    <lynk-option value="nj">New Jersey</lynk-option>
    <lynk-option value="nm">New Mexico</lynk-option>
    <lynk-option value="ny">New York</lynk-option>
    <lynk-option value="nc">North Carolina</lynk-option>
    <lynk-option value="nd">North Dakota</lynk-option>
    <lynk-option value="oh">Ohio</lynk-option>
    <lynk-option value="ok">Oklahoma</lynk-option>
    <lynk-option value="or">Oregon</lynk-option>
    <lynk-option value="md">Maryland</lynk-option>
    <lynk-option value="ma">Massachusetts</lynk-option>
    <lynk-option value="mi">Michigan</lynk-option>
    <lynk-option value="mn">Minnesota</lynk-option>
    <lynk-option value="ms">Missippi</lynk-option>
    <lynk-option value="mo">Missouri</lynk-option>
    <lynk-option value="pa">Pennsylvania</lynk-option>
    <lynk-option value="ri">Rhode Island</lynk-option>
    <lynk-option value="sc">South Carolina</lynk-option>
    <lynk-option value="sd">South Dakota</lynk-option>
    <lynk-option value="tn">Tennessee</lynk-option>
    <lynk-option value="tx">Texas</lynk-option>
    <lynk-option value="ut">Utah</lynk-option>
    <lynk-option value="vt">Vermont</lynk-option>
    <lynk-option value="va">Virginia</lynk-option>
    <lynk-option value="wa">Washington</lynk-option>
    <lynk-option value="wv">West Viginia</lynk-option>
    <lynk-option value="wi">Wisconsin</lynk-option>
    <lynk-option value="wy">Wyoming</lynk-option>
</lynk-combobox>
```

## Trigger

By default, the ComboBox's popup is opened when the user types into the input field `trigger="input"`. There are two other supported modes: one where the menu opens when the ComboBox is focused `trigger="focus"` and the other `trigger="manual"` where the listbox can be opened by clicking on the expand icon, using the `open` attribute or by calling the `show()` method.

```html preview
<lynk-combobox label="Input Trigger Combobox" trigger="input">
    <lynk-option value="one">Item One</lynk-option>
    <lynk-option value="two">Item Two</lynk-option>
    <lynk-option value="three">Item Three</lynk-option>
</lynk-combobox>

<br />

<lynk-combobox label="Focus Trigger Combobox" trigger="focus">
    <lynk-option value="one">Item One</lynk-option>
    <lynk-option value="two">Item Two</lynk-option>
    <lynk-option value="three">Item Three</lynk-option>
</lynk-combobox>

<br />

<lynk-combobox label="Manual Trigger Combobox" trigger="manual">
    <lynk-option value="one">Item One</lynk-option>
    <lynk-option value="two">Item Two</lynk-option>
    <lynk-option value="three">Item Three</lynk-option>
</lynk-combobox>
```


## Autocomplete

Determines if the value in the input changes or not as the user navigates with the keyboard. If true, the value changes automatically, if false the value will only change when a selection is made.

Set this to false when you don't really need the value from the input but want to populate some other state (like the recipient selector in Gmail). But if your input is more like a normal text input, then leave the true default.

### List Autocomplete

This example illustrates the autocomplete behavior known as list autocomplete with manual selection. If the user types one or more characters in the combobox and the typed characters match the beginning of the name of one or more options, a listbox popup appears containing the matching names or values. When the listbox appears, a suggested option is not automatically selected. Thus, after typing, if the user tabs or clicks out of the combobox without choosing a value from the listbox, the typed string becomes the value of the combobox. Note that this implementation enables users to input the name or value of an option, but it does not prevent input of any other arbitrary value.

```html preview
<lynk-combobox label="Autocomplete List Combobox" autocomplete="list" placeholder="Search" clearable trigger="focus" listbox-help>
    <lynk-icon slot="prefix" name="search" library="default"></lynk-icon>
    <lynk-option value="al">Alabama</lynk-option>
    <lynk-option value="ak">Alaska</lynk-option>
    <lynk-option value="az">Arizona</lynk-option>
    <lynk-option value="ar">Arkansas</lynk-option>
    <lynk-option value="ca">California</lynk-option>
    <lynk-option value="co">Colorado</lynk-option>
    <lynk-option value="ct">Connecticut</lynk-option>
    <lynk-option value="de">Delaware</lynk-option>
    <lynk-option disabled value="dc">District of Columbia</lynk-option>
    <lynk-option value="fl">Florida</lynk-option>
    <lynk-option value="ga">Georgia</lynk-option>
    <lynk-option value="hi">Hawaii</lynk-option>
    <lynk-option value="id">Idaho</lynk-option>
    <lynk-option value="il">Illinois</lynk-option>
    <lynk-option value="in">Indiana</lynk-option>
    <lynk-option value="ia">Iowa</lynk-option>
    <lynk-option value="ks">Kansas</lynk-option>
    <lynk-option value="ky">Kentucky</lynk-option>
    <lynk-option value="la">Louisiana</lynk-option>
    <lynk-option value="me">Maine</lynk-option>
    <lynk-option value="mt">Montana</lynk-option>
    <lynk-option value="ne">Nebraska</lynk-option>
    <lynk-option value="nv">Nevada</lynk-option>
    <lynk-option value="nh">New Hampshire</lynk-option>
    <lynk-option value="nj">New Jersey</lynk-option>
    <lynk-option value="nm">New Mexico</lynk-option>
    <lynk-option value="ny">New York</lynk-option>
    <lynk-option value="nc">North Carolina</lynk-option>
    <lynk-option value="nd">North Dakota</lynk-option>
    <lynk-option value="oh">Ohio</lynk-option>
    <lynk-option value="ok">Oklahoma</lynk-option>
    <lynk-option value="or">Oregon</lynk-option>
    <lynk-option value="md">Maryland</lynk-option>
    <lynk-option value="ma">Massachusetts</lynk-option>
    <lynk-option value="mi">Michigan</lynk-option>
    <lynk-option value="mn">Minnesota</lynk-option>
    <lynk-option value="ms">Missippi</lynk-option>
    <lynk-option value="mo">Missouri</lynk-option>
    <lynk-option value="pa">Pennsylvania</lynk-option>
    <lynk-option value="ri">Rhode Island</lynk-option>
    <lynk-option value="sc">South Carolina</lynk-option>
    <lynk-option value="sd">South Dakota</lynk-option>
    <lynk-option value="tn">Tennessee</lynk-option>
    <lynk-option value="tx">Texas</lynk-option>
    <lynk-option value="ut">Utah</lynk-option>
    <lynk-option value="vt">Vermont</lynk-option>
    <lynk-option value="va">Virginia</lynk-option>
    <lynk-option value="wa">Washington</lynk-option>
    <lynk-option value="wv">West Viginia</lynk-option>
    <lynk-option value="wi">Wisconsin</lynk-option>
    <lynk-option value="wy">Wyoming</lynk-option>
</lynk-combobox>
```

## Allow Custom Values

By default on blur, a ComboBox will either reset its input value to match the selected option's text or clear its input value if an option has not been selected. If you would like to allow the end user to provide a custom input value to the ComboBox, the `allow-custom` property can be used to override the default behavior.

## Multiple Selections

Allow more than one option to be selected by adding the `multiple` attribute. By default, each additional option will be appended to the text input as a `lynk-tag` element. You can change this default behavior and append the options as a csv by using the `separator` attribute set to an string value like 'separator=", "'.


[component-metadata:lynk-combobox]
