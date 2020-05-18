var config = require('../config');
var gulp = require('gulp');
var lec = require('gulp-line-ending-corrector');
var isBinary = require('gulp-is-binary');
var through = require("through2");


gulp.task('repairCRLF_CS', function(cb) {
  gulp.src(config.reparirCRLF.src_cs, {
      base: './'
    })
    .pipe(lec({ verbose:true, eolc: 'CRLF', encoding:'utf8' }))
    .pipe(gulp.dest('./'));
});

/*gulp.task('repairCRLF_ALL', function(cb) {
  gulp.src(config.reparirCRLF.src_all, {
      base: './'
    })
    .pipe(isBinary())
    .pipe(through.obj(function(file, enc, next) {
      if (file.isBinary()) {
        next();
        return;
      }
      next(null, file);
    }))
    .pipe(lec({ verbose:true, eolc: 'CRLF', encoding:'utf8' }))
    .pipe(gulp.dest('./'));
});*/