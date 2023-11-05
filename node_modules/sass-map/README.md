# Browserify Unpack

Bowserify unpack cut a browserify bundle in multiple files

## Install

Install with [npm](https://npmjs.org/package/browserify-unpack)

```
npm install --save-dev sass-unpack
```

## Usage

Usage as a Node library:

```js
var fs = require('fs');
var path = require('path');

var SassUnpack = require('sass-unpack');

var Package = new SassUnpack({ src: paths.build.sass.screen });

var map = Package.unpackTo({ dest: paths.build.dest });

var dir = path.resolve(paths.build.dest);

fs.writeFileSync(dir + '/href.json', JSON.stringify(map.href));

return fs.writeFileSync(dir + '/sass.json', JSON.stringify(map.sass));
```

## Authors

[Steed Monteiro](http://twitter.com/SteedMonteiro).

## License

BSD




# Sass Map

Parses Sass files in a directory and exposes a map of dependencies

## Install

Install with [npm](https://npmjs.org/package/sass-map)

```
npm install --save-dev sass-map
```

## Usage

Usage as a Node library:

```js
var sassMap = require('sass-map');
```

Usage as a command line tool:

The command line tool will parse a graph and then either display ancestors, descendents or both.

```
$ ./bin/sassmap --help
Usage: sassunpack -f <file> [options]

Options:
	-d, --destination  Path to save the output ( map.json + href.json + files)
					[défaut: "/Volumes/WORKSPACE/Dropbox/www/dev/project/photobox/studio"]
	-f, --file         File to unpack                                     [requis]
	-n, --name         Output directory name                       [défaut: "dev"]
	-v, --verbose      Debug                                       [défaut: false]
	--version          Affiche le numéro de version                      [booléen]
	-h, --help         Affiche de l'aide                                 [booléen]

Exemples:
	sassunpack -f foo.scss  Cut a sass project in multiple css files

```

## API

#### parseDir

Parses a directory and builds a dependency map of all requested file extensions.

#### parseFile

Parses a file and builds its dependency map.

## Options



File types to be parsed.

## Example

```js
var sassMap = require('sass-map');
console.log(sassMap.parseDir('test/fixtures'));

//{ index: {,
//    '/path/to/test/fixtures/a.scss': {
//        imports: ['b.scss']
//    },
//    '/path/to/test/fixtures/b.scss': {
//        imports: ['_c.scss']
//    },
//    '/path/to/test/fixtures/_c.scss': {
//        imports: []
//    },
//}}
```

## Running Mocha tests

You can run the tests by executing the following commands:

```
npm install
npm test
```

## Authors

[Steed Monteiro](http://twitter.com/SteedMonteiro).

## License

BSD
