var config = require('../config');
var gulp = require('gulp');
var del = require('del');
var tap = require('gulp-tap');
var zip = require('gulp-zip');
var runSequence = require('run-sequence');


gulp.task('cordovaClean', function() {
  return del([config.cordovaZip.tmpFolder], {force: true});
});

gulp.task('cordovaCopyApp', function() {
  return gulp.src(config.cordovaZip.srcApp)
    .pipe(gulp.dest(config.cordovaZip.tmpFolder));
});

gulp.task('cordovaCopyConf', function() {
  return gulp.src(config.cordovaZip.srcConf, {
      base: './'
    })
    .pipe(gulp.dest(config.cordovaZip.tmpFolder));
});

gulp.task('cordovaZipFolder', function() {
  return gulp.src(config.cordovaZip.tmpFolder + '/**/*')
    .pipe(tap(function(file) {
        if (file.isDirectory()) {
          file.stat.mode = parseInt('40777', 8);
        }
    }))
    .pipe(zip('www.zip'))
    .pipe(gulp.dest(config.cordovaZip.dest));
});

gulp.task('cordovaZip', function() {
  runSequence('cordovaClean', 'cordovaCopyApp', 'cordovaCopyConf', 'cordovaZipFolder', 'cordovaClean');
});
