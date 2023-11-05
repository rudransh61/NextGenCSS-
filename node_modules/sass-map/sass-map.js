'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var glob = require('glob');

var util = require('util');

function parseData(content) {
  //strip comment
  content = new String(content).replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, '');

  var mixin = [];
  var imports = [];
  var property = [];
  var extended = [];
  var extend = [];
  // find sass var;
  var position = 0;

  var regVar = /^\$([a-zA-Z0-9-\.]+):/;
  var regMix = /^\@mixin ([a-zA-Z0-9-\.]+)( ?)([(|{])/;
  var regExtend = /^\@extend ( ?)%([a-zA-Z0-9-\.]+)( ?);/;
  var regImport = /\@import [\'|\"]([a-zA-Z0-9-\._\/]+)[\'|\"]/;

  content.split('\n').forEach(function(line) {
    line = line.trim();
    if (position == 0) {
      var matchVar = regVar.exec(line);
      var matchMix = regMix.exec(line);

      if (matchVar) {
        var variable = matchVar[1].trim();
        property.push('$' + variable);
      }

      if (matchMix) {
        var mix = matchMix[1].trim();
        property.push(mix + '(');
      }
    } else {

      var matchExtend = regExtend.exec(line);
      if (matchExtend) {

        var mix = matchExtend[2].trim();
        extended.push('%' + mix);
      }
    }

    var matchImport = regImport.exec(line);

    if (matchImport) {
        var importFile = matchImport[1].trim();

        imports.push(importFile);
      }

    var openFunction = line.match(/\{/g) || [];
    var closeFunction = line.match(/\}/g) || [];
    position += openFunction.length;
    position -= closeFunction.length;

  });

  var varUsed = content.match(/\$([a-zA-Z0-9-\.]+)/g) || [];
  var mixUsed = content.match(/([a-zA-Z0-9-\.]+)\(/g) || [];
  var extendedUsed = content.match(/\%([a-zA-Z0-9-\.]+)( ?)([{])/g) || [];

  if (extendedUsed.length > 0) {
    var regExtend = /\%([a-zA-Z0-9-\.]+)( ?)([{])/;
    extendedUsed.forEach(function(line, index) {
      var matchExtend = regExtend.exec(line);
      if (matchExtend) {
        extend.push('%' + matchExtend[1]);
      }
    });
  }

  var data = varUsed.concat(mixUsed);

  return {
    data: _.uniq(data),
    imports: _.uniq(imports),
    extended: _.uniq(extended),
    extensions: _.uniq(extended),
    extend: _.uniq(extend),
    property: _.uniq(property)
  };
}


function processOptions(options) {
  return _.assign({
    loadPaths: [process.cwd()],
    extensions: ['scss', 'css'],
  }, options);
}

// resolve a sass module to a path

function resolveSassPath(sassPath, loadPaths, extensions) {
  // trim sass file extensions
  var re = new RegExp('(\.(' + extensions.join('|') + '))$', 'i');
  var sassPathName = sassPath.replace(re, '');


  // check all load paths
  var i, j, length = loadPaths.length,
    scssPath, partialPath;
  for (i = 0; i < length; i++) {

    for (j = 0; j < extensions.length; j++) {
      scssPath = path.normalize(loadPaths[i] + '/' + sassPathName + '.' + extensions[j]);
      if (fs.existsSync(scssPath)) {
        return scssPath;
      }
    }

    // special case for _partials
    for (j = 0; j < extensions.length; j++) {
      scssPath = path.normalize(loadPaths[i] + '/' + sassPathName + '.' + extensions[j]);
      partialPath = path.join(path.dirname(scssPath), '_' + path.basename(scssPath));
      if (fs.existsSync(partialPath)) {
        return partialPath;
      }
    }
  }

  // File to import not found or unreadable so we assume this is a custom import
  return false;
}

function SassMap(filepath,options) {

  filepath = path.resolve(filepath);
  if (fs.lstatSync(filepath).isFile()) {
    this.filepath =filepath;
    options = processOptions(options);
    this.loadPaths = options.loadPaths || [];
    this.extensions = options.extensions || [];
    this.index = [];
    this.dependencie = [];
    this.extend = [];
    this.addFile(filepath);
    this.createMap();
  }
};

SassMap.prototype.getExtends = function (filepath) {

      var importsExtends = [];
      var file = this.index[filepath];

      importsExtends = importsExtends.concat(file.extended);
      for (var i in file.imports) {
        var extend = file.imports[i];
        if(extend !== filepath){
          importsExtends = this.getExtends(extend).concat(importsExtends);
        }
      }

      return importsExtends;
}

SassMap.prototype.getDependencies = function (filepath) {

      var importsDependencies = [];
      var file = this.index[filepath];

      importsDependencies = importsDependencies.concat(file.dependencies);

      for (var i in file.dependencies) {
        var dependencie = file.dependencies[i];
          importsDependencies = this.getDependencies(dependencie).concat(importsDependencies);
      }

      for (var i in file.imports) {
        var imports = file.imports[i];
          importsDependencies = this.getDependencies(imports).concat(importsDependencies);
      }


      return importsDependencies;
}

SassMap.prototype.inheritsDependencies = function (filepath) {

  return _.uniq(this.getDependencies(filepath,false));

};

SassMap.prototype.inheritsExtends = function (filepath) {

  return _.uniq(this.getExtends(filepath));

};


SassMap.prototype.createMap = function () {

    // format dependencie
    for (var property in this.dependencie) {
      this.dependencie[property] = _.uniq(this.dependencie[property]);
    }

    for (var filepath in this.index) {


      this.index[filepath].dependencies = [];
      var dependencies = this.index[filepath].data.map(function(property){

       /* if(debug) {

          console.log('------');
          console.log(property);
          console.log(this.dependencie[property]);
          console.log(filepath);
          console.log('------');
        }*/
       if( this.dependencie[property] !== undefined ){
          if(this.dependencie[property].indexOf(filepath) === -1){
              return this.dependencie[property];
          }
       }
      return [];
      }.bind(this));

      if(dependencies.length>0){

       this.index[filepath].dependencies = _.uniq(dependencies.reduce(function(a, b) {
          if(a && b)
            return a.concat(b);
        })
       );

     }

      this.index[filepath].extend.forEach(function(property){
        if( this.extend[property] === undefined){
          this.extend[property] = []
        }
        this.extend[property].push(filepath);
      }.bind(this));

    }

    for (var extend in this.extend) {
      this.extend[extend] = _.uniq(this.extend[extend]);
    }
//util.inspect(mapSass, { showHidden: true, depth: null })
  var util = require('util');
    for (var filepath in this.index) {
      var extended = this.index[filepath].extended.map(function(extended){
          if( this.extend[extended] !== undefined ){
            if(this.extend[extended].indexOf(filepath) === -1){
              return this.extend[extended];
            }
         }
        return [];
      }.bind(this));

      if(extended.length>0){
         this.index[filepath].extended = _.uniq(extended.reduce(function(a, b) {
            if(a && b)
              return a.concat(b);
          }));

       }
    }

    for (var filepath in this.index) {
     this.index[filepath].dependencies = this.inheritsDependencies(filepath);
     this.index[filepath].extended = this.inheritsExtends(filepath);
    }

  };


SassMap.prototype.registerDependencie = function (filepath, properties){
  _.each(properties, function(property){
    if(this.dependencie[property] === undefined){
      this.dependencie[property] = [];
    }
    this.dependencie[property].push(filepath);
  }.bind(this));
};

// add a sass file to the SassMap
SassMap.prototype.addFile = function(filepath) {

  var entry = parseData(fs.readFileSync(filepath, 'utf-8'));
  var cwd = path.dirname(filepath);

  var i, length = entry.imports.length,
    loadPaths, resolved;
  for (i = 0; i < length; i++) {
    loadPaths = _([cwd, this.dir]).concat(this.loadPaths).filter().uniq().value();

    resolved = resolveSassPath(entry.imports[i], loadPaths, this.extensions);

    if (!resolved) continue;

    // recurse into dependencies if not already enumerated
    if (!_.contains(entry.imports, resolved)) {
      entry.imports[i]= resolved;
      this.addFile(fs.realpathSync(resolved), filepath);
    }

  }

  this.index[filepath] = entry;

  this.registerDependencie(filepath,entry.property);



};



module.exports = SassMap;

