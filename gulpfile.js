var uglifycss = require('uglifycss');
 
var uglified = uglifycss.processFiles(
    ['./src/final/index.css/index.css' ],
    {expandVars: true }
);
 
console.log(uglified);