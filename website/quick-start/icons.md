---
description: Icons in NextGenCSS
---

# Icons

## **ICONS**

1. **%icon**:
   * `%icon` is a placeholder selector defined in SCSS.
   * It is used to define common styles for icons.
   * The purpose of `%icon` is to provide a standardized set of styles for displaying icons across the project.
   * Inside `%icon`, the `icon` mixin is included. This mixin generates styles for displaying icons, such as setting the font family, font size, and color.
   * By extending `%icon` in other selectors, you can easily apply these common icon styles to different elements throughout your project.

In summary, `%icon` serves as a convenient way to define and reuse styles for displaying icons in your project. It encapsulates common icon styles, making it easier to maintain consistency and make global changes to icon appearances.

## **Example**

```html
<div class="icon square pd-2">
    <i class="fas fa-heart"></i>
  </div>
  
  <div class="icon circle pd-2">
    <i class="fas fa-star"></i>
  </div>
```

<figure><img src="../.gitbook/assets/imm.png" alt=""><figcaption><p>Output</p></figcaption></figure>
