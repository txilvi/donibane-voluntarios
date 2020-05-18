const { task, src, dest } = require('gulp');
var replace = require('gulp-replace');
var extend = require('extend');
var path = require('path');
var fs = require('fs');
var gutil = require('gulp-util');
var through = require('through2');


function templates() {
  return new Promise(function(resolve, reject) {
      src('src/pages/**/templates/**/*.html')
        .pipe(templatesWrap({
          baseDir: 'src/app',
          templatesModulePath: 'templates.ts',
          templateIdDelimiter: '/'
        }))
        .on('error', reject)
        .pipe(dest('./'))
        .on('end', resolve)
    })
    .then(function() {
      src(['src/app/templates.ts'])
        .pipe(replace(/\'[^\']*(src\/pages[^\']*)\'/ig, '\'./$1\''))
        .pipe(dest('src/app'));
    });
};

task('templates', templates);

module.exports = { templates };


/* Nos apropiamos de la libreria gulp-ng2-template-wrap porque con node>7 hay que capturar los errores en las promesas */
function templatesWrap(options) {

  var defaults = {
    baseDir: 'app',
    templatesModulePath: 'templates.js',
    templateIdDelimiter: '.'
  };

  var opts = extend({}, defaults, (options || {}));
  var templatesFile = path.resolve(opts.baseDir, opts.templatesModulePath);

  return processScripts().on('finish', templatesModulePostProcessing)

  function processScripts() {
    templatesModulePreProcessing();

    return through.obj(function(file, encoding, callback) {
      if (file.isNull()) {
        cb(null, file);
        return;
      }

      if (file.isStream()) {
        cb(new gutil.PluginError('template', 'Streaming not supported'));
        return;
      }

      callback(null, processFile(file));
    });
  }

  function templatesModulePreProcessing() {
    fs.writeFileSync(templatesFile, '');
    fs.appendFile(templatesFile, getModuleConfigStart(), function() {});
  }

  function templatesModulePostProcessing() {
    fs.appendFile(templatesFile, getModuleConfigEnd(), function() {});
  }

  function processFile(file) {
    var template = file.contents;
    var filePath = file.path;
    var baseDir = opts.baseDir;

    var rawPath = filePath.substring(filePath.indexOf(baseDir) + baseDir.length + 1, filePath.indexOf(path.extname(filePath)));
    var pathWithoutDelimiters = rawPath.split(path.sep).join(opts.templateIdDelimiter);
    fs.appendFile(templatesFile, getModuleExportString(pathWithoutDelimiters, '\`' + template + '\`'), function() {});
  }

  function getModuleConfigStart() {
    return "var templates = { \n";
  }

  function getModuleConfigEnd() {
    return "}" +
      "\n" +
      "export function getTemplate(id){return templates[id];}";
  }

  function getModuleExportString(filePath, content) {
    return "\'" + filePath + "\' : " + content + ',\n';
  }

}