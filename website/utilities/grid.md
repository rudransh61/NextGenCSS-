---
description: Grid in NextGenCSS🔥
---

# Grid

This responsive grid system is designed to help you create flexible and responsive layouts in your web project.

## `.grid` Container

Use .grid class to make a `.grid` Container

Use column classes `.col-{..number}` to define the width of your grid items. Columns are based on a 12-column layout.

Classes for column

* `.col-1`
* `.col-2`
* `.col-3`
* `.col-4`
* `.col-5`
* `.col-6`
* `.col-7`
* `.col-8`
* `.col-9`
* `.col-10`
* `.col-11`
* `.col-12`

## Example

```html
<div class="grid">
  <div class="grid-item">
    <div class="col-4">
      <div class="box">
        <p>Column 1</p>
      </div>
    </div>

    <div class="col-4">
      <div class="box">
        <p>Column 2</p>
      </div>
    </div>

    <div class="col-4">
      <div class="box">
        <p>Column 3</p>
      </div>
    </div>
  </div>

  <div class="grid-item">
    <div class="col-12 col-md-6">
      <div class="box">
        <p>Full width on small screens, 6 columns on medium screens</p>
      </div>
    </div>

    <div class="col-12 col-md-6">
      <div class="box">
        <p>Full width on small screens, 6 columns on medium screens</p>
      </div>
    </div>
  </div>
```



Also with inbuild clearfix&#x20;

```scss
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
```

