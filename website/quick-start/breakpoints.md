---
description: Responsiveness
---

# Breakpoints

## Responsive size

_Responsive design size are categorized into 3 different categories_

**`Mobile`, `Tablet`, `Desktop`**

* **`Mobile` : between `0px` and `767px`**
* **`Tablet` : between `768px` and `991px`**
* **`Desktop` : between  `992px` and ...**

## Custom Breakpoints

```scss
// ./src/syntax/_syntax.scss

//breakpoints
    font-sizes: (
        default: 16px,
        mobile: 16px,
        tablet: 18px,
        desktop: 20px
    ),
    breakpoints: (
        mobile: 767px,
        tablet: 992px,
        desktop: 1200px
    ),

```
