---
description: Padding in NextGenCSS
---

# Padding



## Syntax

To give margin , there are 7 ways to give margin



* **`.pd-{num}` :**`padding:{num};`
* **`.pd-top-{num}`** :  `padding-top:{num};`
* **`.pd-bottom-{num}`**  : `padding-bottom:{num};`
* **`.pd-right-{num}`**  : `padding-right:{num};`
* **`.pd-left-{num}`**  : `padding-left:{num};`
* .**`pd-x-{num}`**  : `padding-right:{num}; margin-left:{num}`
* **`.pd-y-{num}`**  : `padding-top:{num}; margin-bottom:{num}`



## Rules of {num}

possible values :&#x20;



* 0
* 1
* 2
* 3
* 4

```scss

$base-unit-padding : 1;


// Compiled as :- padding : {some number};

@mixin padding-utility($num) {
    .pd-#{$num} {
      padding: #{$num*$base-unit-padding}px;
    }
  }
  
  @include padding-utility(0);
  @include padding-utility(1);
  @include padding-utility(2);
  @include padding-utility(3);
  @include padding-utility(4);






// Syntax :- pd-{direction}-{some number}
// Compiled as :- padding-{direction} : {some number};


// padding top
@mixin padding-top-utility($num) {
  .pd-top-#{$num} {
    padding-top: #{$num*$base-unit-padding}px;
  }
}
@include padding-top-utility(0);
@include padding-top-utility(1);
@include padding-top-utility(2);
@include padding-top-utility(3);
@include padding-top-utility(4);




//padding bottom
@mixin padding-bottom-utility($num) {
  .pd-bottom-#{$num} {
    padding-bottom: #{$num*$base-unit-padding}px;
  }
}
@include padding-bottom-utility(0);
@include padding-bottom-utility(1);
@include padding-bottom-utility(2);
@include padding-bottom-utility(3);
@include padding-bottom-utility(4);




//padding right
@mixin padding-right-utility($num) {
  .pd-right-#{$num} {
    padding-right: #{$num*$base-unit-padding}px;
  }
}
@include padding-right-utility(0);
@include padding-right-utility(1);
@include padding-right-utility(2);
@include padding-right-utility(3);
@include padding-right-utility(4);



//padding left
@mixin padding-left-utility($num) {
  .pd-left-#{$num} {
    padding-left: #{$num*$base-unit-padding}px;
  }
}
@include padding-left-utility(0);
@include padding-left-utility(1);
@include padding-left-utility(2);
@include padding-left-utility(3);
@include padding-left-utility(4);






//padding horizontal
@mixin padding-horizontal-utility($num) {
  .pd-x-#{$num} {
    padding-right: #{$num*$base-unit-padding}rem;
    padding-left: #{$num*$base-unit-padding}rem;
  }
}
@include padding-horizontal-utility(0);
@include padding-horizontal-utility(1);
@include padding-horizontal-utility(2);
@include padding-horizontal-utility(3);
@include padding-horizontal-utility(4);

//padding vertical
@mixin padding-vertical-utility($num) {
  .pd-y-#{$num} {
    padding-top: #{$num*$base-unit-padding}rem;
    padding-bottom: #{$num*$base-unit-padding}rem;
  }
}
@include padding-vertical-utility(0);
@include padding-vertical-utility(1);
@include padding-vertical-utility(2);
@include padding-vertical-utility(3);
@include padding-vertical-utility(4);

```

