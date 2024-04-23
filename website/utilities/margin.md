---
description: Margin
---

# Margin

## Syntax (custom)

````sass
```other code
    //Utilities
    margin: ("mg",4), 
    // First Element is name of utility : "mg"
    // Second Element is maximum number of margin units : 4
```
````

## Syntax

To give margin , there are 7 ways to give margin

* **`.mg-{num}` :**`margin:{num};`
* **`.mg-top-{num}`** : `margin-top:{num};`
* **`.mg-bottom-{num}`** : `margin-bottom:{num};`
* **`.mg-right-{num}`** : `margin-right:{num};`
* **`.mg-left-{num}`** : `margin-left:{num};`
* .**`mg-x-{num}`** : `margin-right:{num}; margin-left:{num}`
* **`.mg-y-{num}`** : `margin-top:{num}; margin-bottom:{num}`

## Rules of {num}

possible values :

* 0
* 1
* 2
* 3
* 4

```scss

$base-unit-margin : 1;


// Compiled as :- margin : {some number};

@mixin margin-utility($num) {
    .mg-#{$num} {
      margin: #{$num*$base-unit-margin}px;
    }
  }
  
  @include margin-utility(0);
  @include margin-utility(1);
  @include margin-utility(2);
  @include margin-utility(3);
  @include margin-utility(4);






// Syntax :- pd-{direction}-{some number}
// Compiled as :- margin-{direction} : {some number};


// margin top
@mixin margin-top-utility($num) {
  .mg-top-#{$num} {
    margin-top: #{$num*$base-unit-margin}px;
  }
}
@include margin-top-utility(0);
@include margin-top-utility(1);
@include margin-top-utility(2);
@include margin-top-utility(3);
@include margin-top-utility(4);




//margin bottom
@mixin margin-bottom-utility($num) {
  .mg-bottom-#{$num} {
    margin-bottom: #{$num*$base-unit-margin}px;
  }
}
@include margin-bottom-utility(0);
@include margin-bottom-utility(1);
@include margin-bottom-utility(2);
@include margin-bottom-utility(3);
@include margin-bottom-utility(4);




//margin right
@mixin margin-right-utility($num) {
  .mg-right-#{$num} {
    margin-right: #{$num*$base-unit-margin}px;
  }
}
@include margin-right-utility(0);
@include margin-right-utility(1);
@include margin-right-utility(2);
@include margin-right-utility(3);
@include margin-right-utility(4);



//margin left
@mixin margin-left-utility($num) {
  .mg-left-#{$num} {
    margin-left: #{$num*$base-unit-margin}px;
  }
}
@include margin-left-utility(0);
@include margin-left-utility(1);
@include margin-left-utility(2);
@include margin-left-utility(3);
@include margin-left-utility(4);






//margin horizontal
@mixin margin-horizontal-utility($num) {
  .mg-x-#{$num} {
    margin-right: #{$num*$base-unit-padding}rem;
    margin-left: #{$num*$base-unit-padding}rem;
  }
}
@include margin-horizontal-utility(0);
@include margin-horizontal-utility(1);
@include margin-horizontal-utility(2);
@include margin-horizontal-utility(3);
@include margin-horizontal-utility(4);

//margin vertical
@mixin margin-vertical-utility($num) {
  .mg-y-#{$num} {
    margin-top: #{$num*$base-unit-padding}rem;
    margin-bottom: #{$num*$base-unit-padding}rem;
  }
}
@include margin-vertical-utility(0);
@include margin-vertical-utility(1);
@include margin-vertical-utility(2);
@include margin-vertical-utility(3);
@include margin-vertical-utility(4);

```
