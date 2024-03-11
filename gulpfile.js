// uglify css include

var uglifycss = require('uglifycss');

// generate uglify code for minification of css files

var uglified = uglifycss.processFiles(
    ['./src/final/index.css/index.css' ], // this is the path of file
    {expandVars: false }  // expand variables
);

console.log(uglified);