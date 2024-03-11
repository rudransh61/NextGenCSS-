---
description: How to use it ?
---

# Install and Use

## Clone our git repo first

Run this command to clone&#x20;

<pre class="language-sh"><code class="lang-sh"><strong>$ git clone https://github.com/rudransh61/NextGenCSS-.git
</strong></code></pre>

&#x20;Install all packages <mark style="background-color:red;">NOTE : - Node.js must be installed before all</mark>&#x20;

```sh
$ npm install
```

## To change the name of utility

Open the file in <mark style="color:red;">`/src/syntax`</mark> directory named as `_syntax.scss`

Change the key with your syntax for example :-

```scss
$syntax : (
  ...other code
  padding : "my-padding", // Your syntax
  ..other code
); 
```

And at last

## Build your css file&#x20;

Run the `./build.sh` file to build minified CSS&#x20;

```sh
$ ./build.sh
```



If you want to use the existing CSS syntax click [here](set-up.md)
