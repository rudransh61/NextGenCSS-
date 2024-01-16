---
description: >-
  In NextGenCSS we are adding many different optimizations to make your app
  faster than before ...
---

# Optimizations



## Lazy Load

```scss
// Lazy Loading Optimization
// Define lazy load content visibility
.lazy-load {
  content-visibility: auto; // 'content-visibility' is not supported by Firefox, Firefox for Android.
}

// Define no lazy load content visibility
.no-lazy-load {
  content-visibility: visible; // 'content-visibility' is not supported by Firefox, Firefox for Android.
}
```

With **`.lazy-load`** class you can add lazy loading to your content&#x20;

But if you don't want it then do not worry , just add **`.no-lazy-load`** class and remove this optimization ........
