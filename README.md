# EAAA-Mobile-First

## Components list

This shoud be removed before last upload

### Button Component

- Real button, does not use links

```html
<!-- default -->
<button class="btn">example text</button>
<!-- large version -->
<button class="btn btn-lg">example text</button>
```

- Fake button, used for link. Has a role attribute to identify it as a button.

```html
<a href="#" role="button" class="btn">example text</a>
```

## Something about fonts

```css
/* Fonts definitioner
<uniquifier>: Use a unique and descriptive class name
<weight>: Use a value from 200 to 700 */
.oswald-<uniquifier > {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
/* <uniquifier>: Use a unique and descriptive class name
<weight>: Use a value from 300 to 800 */
.open-sans-<uniquifier > {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
```
